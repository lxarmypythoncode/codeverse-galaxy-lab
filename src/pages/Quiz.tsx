
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Brain, Shield, Trophy, Clock, Search, CheckCircle, X, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { quizzes, questions, leaderboard } from "@/data/quizzes";
import { useToast } from "@/components/ui/use-toast";

// Quiz categories with icons
const quizCategories = [
  { id: "frontend", name: "Frontend", icon: <BookOpen className="h-5 w-5 text-neon-blue" /> },
  { id: "backend", name: "Backend", icon: <Brain className="h-5 w-5 text-neon-purple" /> },
  { id: "fullstack", name: "Fullstack", icon: <Shield className="h-5 w-5 text-neon-yellow" /> },
  { id: "mobile", name: "Mobile App", icon: <Trophy className="h-5 w-5 text-neon-green" /> },
  { id: "cyber", name: "Cyber Security", icon: <Shield className="h-5 w-5 text-neon-blue" /> },
];

// Difficulty levels
const difficultyLevels = [
  { id: "beginner", name: "Dasar", color: "bg-green-500" },
  { id: "intermediate", name: "Menengah", color: "bg-yellow-500" },
  { id: "advanced", name: "Mahir", color: "bg-red-500" },
];

const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // If a quizId is provided in the URL, find and set that quiz
  useEffect(() => {
    if (quizId && quizId !== "leaderboard") {
      const quiz = quizzes.find(q => q.slug === quizId);
      if (quiz) {
        setActiveQuiz(quiz.id);
      }
    }
  }, [quizId]);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const currentQuestions = questions.filter(q => q.quizId === activeQuiz);
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleStartQuiz = (quizId: number) => {
    setActiveQuiz(quizId);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setAnswerSubmitted(false);
    setSelectedAnswer(null);
    
    // Get the quiz slug to update the URL
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
      navigate(`/quiz/${quiz.slug}`);
    }
  };

  const handleSelectAnswer = (index: number) => {
    if (!answerSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setAnswerSubmitted(true);
    
    if (selectedAnswer === currentQuestion.correctOption) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: currentQuestion.explanation,
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: currentQuestion.explanation,
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      toast({
        title: "Quiz Completed!",
        description: `Your score: ${score + (selectedAnswer === currentQuestion.correctOption ? 1 : 0)}/${currentQuestions.length}`,
        variant: "default",
      });
    }
  };

  const handleExitQuiz = () => {
    setActiveQuiz(null);
    setQuizCompleted(false);
    navigate('/quiz');
  };

  if (quizId === "leaderboard") {
    return (
      <div className="min-h-screen cosmic-bg">
        <StarryBackground />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-blue/20 border border-neon-blue/40">
                <Trophy className="h-6 w-6 text-neon-blue" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              Quiz <span className="gradient-text">Leaderboard</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See top performers and challenge yourself to reach the top!
            </p>
          </div>

          <Card className="cosmic-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-orbitron text-center">Weekly Leaderboard</CardTitle>
              <CardDescription className="text-center">Top performers this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((position, index) => (
                  <div 
                    key={position.id} 
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      index === 0 ? 'bg-yellow-900/20 border border-yellow-500/30' :
                      index === 1 ? 'bg-gray-800/50 border border-gray-500/30' :
                      index === 2 ? 'bg-orange-900/20 border border-orange-500/30' :
                      'bg-muted/20 border border-muted/30'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="font-orbitron text-xl font-bold mr-4 w-6 text-center">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{position.username}</div>
                        <div className="text-sm text-gray-400">
                          {position.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-orbitron text-neon-blue">{position.points} pts</div>
                      <div className="text-xs text-gray-400">
                        {position.quizzes} quizzes
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" onClick={() => navigate('/quiz')}>
                Back to Quizzes
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  if (activeQuiz !== null) {
    const quiz = quizzes.find(q => q.id === activeQuiz);
    
    if (quizCompleted) {
      const finalScore = score + (selectedAnswer === currentQuestion?.correctOption ? 1 : 0);
      const totalQuestions = currentQuestions.length;
      const percentage = (finalScore / totalQuestions) * 100;
      
      return (
        <div className="min-h-screen cosmic-bg">
          <StarryBackground />
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 py-12">
            <div className="cosmic-card max-w-3xl mx-auto p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-neon-blue/20 mb-4">
                  <Trophy className="h-8 w-8 text-neon-blue" />
                </div>
                <h2 className="font-orbitron text-3xl font-bold mb-2">Quiz Completed!</h2>
                <p className="text-gray-300">{quiz?.title}</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-6xl font-orbitron mb-2">
                  {percentage >= 80 ? (
                    <span className="text-green-500">{percentage}%</span>
                  ) : percentage >= 60 ? (
                    <span className="text-yellow-500">{percentage}%</span>
                  ) : (
                    <span className="text-red-500">{percentage}%</span>
                  )}
                </div>
                <p className="text-xl">
                  Your score: <span className="font-orbitron">{finalScore}/{totalQuestions}</span>
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="p-4 rounded-lg bg-muted/20 border border-muted/30">
                  <h3 className="font-orbitron mb-2">Performance Summary</h3>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Correct Answers: {finalScore}</span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span>Incorrect Answers: {totalQuestions - finalScore}</span>
                  </div>
                </div>
                
                {percentage >= 70 && (
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/30">
                    <h3 className="font-orbitron text-green-400 mb-2">Congratulations!</h3>
                    <p>You've mastered this quiz. Try a more challenging one next!</p>
                  </div>
                )}
                
                {percentage < 70 && percentage >= 40 && (
                  <div className="p-4 rounded-lg bg-yellow-900/20 border border-yellow-500/30">
                    <h3 className="font-orbitron text-yellow-400 mb-2">Good effort!</h3>
                    <p>Review the topics and try again to improve your score.</p>
                  </div>
                )}
                
                {percentage < 40 && (
                  <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30">
                    <h3 className="font-orbitron text-red-400 mb-2">Keep practicing!</h3>
                    <p>This topic needs more study. Review the material and try again.</p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="cyber-button" onClick={handleExitQuiz}>
                  Return to Quizzes
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20"
                  onClick={() => handleStartQuiz(activeQuiz)}
                >
                  Retry Quiz
                </Button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
    
    return (
      <div className="min-h-screen cosmic-bg">
        <StarryBackground />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="cosmic-card max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-orbitron text-2xl mb-1">{quiz?.title}</h2>
                <p className="text-gray-400">
                  {quizCategories.find(c => c.id === quiz?.category)?.name} • 
                  {difficultyLevels.find(d => d.id === quiz?.level)?.name}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{quiz?.timeMinutes} min</span>
                </div>
                <div className="text-sm mt-1">
                  Question {currentQuestionIndex + 1}/{currentQuestions.length}
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="w-full bg-muted/20 h-2 rounded-full">
                <div 
                  className="bg-neon-blue h-2 rounded-full" 
                  style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {currentQuestion && (
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-muted/20 border border-muted/30">
                  <h3 className="font-medium text-lg mb-2">{currentQuestion.question}</h3>
                  <div className="space-y-3 mt-4">
                    {currentQuestion.options.map((option, index) => (
                      <div 
                        key={index}
                        onClick={() => handleSelectAnswer(index)}
                        className={`
                          flex items-center p-3 rounded-md cursor-pointer transition-all
                          ${answerSubmitted && index === currentQuestion.correctOption
                            ? 'bg-green-900/20 border border-green-500/30'
                            : answerSubmitted && index === selectedAnswer && index !== currentQuestion.correctOption
                            ? 'bg-red-900/20 border border-red-500/30'
                            : selectedAnswer === index
                            ? 'bg-muted/50 border border-neon-blue/30'
                            : 'bg-muted/20 border border-muted/30 hover:border-muted/50'
                          }
                        `}
                      >
                        <div className="mr-3">
                          {answerSubmitted && index === currentQuestion.correctOption ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : answerSubmitted && index === selectedAnswer && index !== currentQuestion.correctOption ? (
                            <X className="h-5 w-5 text-red-500" />
                          ) : selectedAnswer === index ? (
                            <div className="h-5 w-5 rounded-full border-2 border-neon-blue flex items-center justify-center">
                              <div className="h-2.5 w-2.5 rounded-full bg-neon-blue"></div>
                            </div>
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-500"></div>
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {answerSubmitted && (
                  <div className={`p-4 rounded-lg ${
                    selectedAnswer === currentQuestion.correctOption 
                      ? 'bg-green-900/20 border border-green-500/30' 
                      : 'bg-red-900/20 border border-red-500/30'
                  }`}>
                    <h3 className="font-medium mb-2">
                      {selectedAnswer === currentQuestion.correctOption ? 'Correct!' : 'Incorrect'}
                    </h3>
                    <p>{currentQuestion.explanation}</p>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    className="border-muted/50"
                    onClick={handleExitQuiz}
                  >
                    Exit Quiz
                  </Button>
                  
                  {!answerSubmitted ? (
                    <Button 
                      className="cyber-button"
                      disabled={selectedAnswer === null}
                      onClick={handleSubmitAnswer}
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button 
                      className="cyber-button"
                      onClick={handleNextQuestion}
                    >
                      {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-blue/20 border border-neon-blue/40">
              <Shield className="h-6 w-6 text-neon-blue" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Knowledge <span className="gradient-text">Quizzes</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Test your programming skills with our adaptive quizzes. Select from various categories and difficulty levels to challenge yourself.
          </p>
        </div>

        <Tabs defaultValue="featured" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="cosmic-card p-1">
              <TabsTrigger value="featured" className="px-4 py-2">Featured</TabsTrigger>
              <TabsTrigger value="categories" className="px-4 py-2">Categories</TabsTrigger>
              <TabsTrigger value="leaderboard" className="px-4 py-2">Leaderboard</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="featured">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search quizzes..."
                    className="pl-10 w-full md:w-[300px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"} 
                className="border-neon-blue/30 text-sm"
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Button>
              
              {quizCategories.map(category => (
                <Button 
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"} 
                  className="border-neon-blue/30 text-sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.length === 0 ? (
                <div className="col-span-full cosmic-card p-8 text-center">
                  <p className="text-lg text-gray-300">
                    No quizzes match your current search. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                filteredQuizzes.map(quiz => (
                  <Card key={quiz.id} className="cosmic-card hover:border-neon-blue/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          quiz.level === "beginner" ? "bg-green-900/30 text-green-400 border border-green-500/30" :
                          quiz.level === "intermediate" ? "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30" :
                          "bg-red-900/30 text-red-400 border border-red-500/30"
                        }`}>
                          {difficultyLevels.find(d => d.id === quiz.level)?.name}
                        </span>
                        
                        <span className="text-xs text-gray-400 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {quiz.timeMinutes} min
                        </span>
                      </div>
                      <CardTitle className="font-orbitron">{quiz.title}</CardTitle>
                      <CardDescription className="text-gray-400">{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-300">
                        <span>
                          {quizCategories.find(c => c.id === quiz.category)?.icon}
                          <span className="ml-2">{quizCategories.find(c => c.id === quiz.category)?.name}</span>
                        </span>
                        <span>{quiz.questions} questions</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="cyber-button w-full" onClick={() => handleStartQuiz(quiz.id)}>
                        Start Quiz
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="categories">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizCategories.map(category => (
                <Card key={category.id} className="cosmic-card hover:border-neon-blue/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-3 rounded-full bg-galactic-dark border border-neon-blue/20 mr-4">
                        {category.icon}
                      </div>
                      <CardTitle className="font-orbitron">{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {difficultyLevels.map(level => (
                        <Button 
                          key={level.id} 
                          variant="outline" 
                          className="w-full justify-between border-muted/50 hover:border-neon-blue/50"
                          onClick={() => {
                            setSelectedCategory(category.id);
                            navigate("/quiz");
                          }}
                        >
                          <span>{level.name}</span>
                          <span className={`h-2 w-2 rounded-full ${level.color}`}></span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="cosmic-card hover:border-neon-blue/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="p-3 rounded-full bg-galactic-dark border border-neon-blue/20 mr-4">
                      <Code className="h-5 w-5 text-neon-green" />
                    </div>
                    <CardTitle className="font-orbitron">Web Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {difficultyLevels.map(level => (
                      <Button 
                        key={level.id} 
                        variant="outline" 
                        className="w-full justify-between border-muted/50 hover:border-neon-blue/50"
                      >
                        <span>{level.name}</span>
                        <span className={`h-2 w-2 rounded-full ${level.color}`}></span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="font-orbitron text-center">Weekly Leaderboard</CardTitle>
                <CardDescription className="text-center">Top performers this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((position, index) => (
                    <div 
                      key={position.id} 
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        index === 0 ? 'bg-yellow-900/20 border border-yellow-500/30' :
                        index === 1 ? 'bg-gray-800/50 border border-gray-500/30' :
                        index === 2 ? 'bg-orange-900/20 border border-orange-500/30' :
                        'bg-muted/20 border border-muted/30'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="font-orbitron text-xl font-bold mr-4 w-6 text-center">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{position.username}</div>
                          <div className="text-sm text-gray-400">
                            {position.title}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-orbitron text-neon-blue">{position.points} pts</div>
                        <div className="text-xs text-gray-400">
                          {position.quizzes} quizzes
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
