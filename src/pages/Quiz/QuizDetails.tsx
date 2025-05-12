
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizzes, questions, leaderboard } from "@/data/quizzes";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface QuizResults {
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  score: number;
  answers: { questionId: number; selected: number; correct: boolean }[];
}

const QuizDetails = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  
  // Quiz state
  const [quiz, setQuiz] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);
  
  // Timer
  const [startTime, setStartTime] = useState(null);
  
  useEffect(() => {
    // Find the quiz by slug
    const foundQuiz = quizzes.find(q => q.slug === quizId);
    if (foundQuiz) {
      setQuiz(foundQuiz);
      // Get questions for this quiz
      const foundQuestions = questions.filter(q => q.quizId === foundQuiz.id);
      setQuizQuestions(foundQuestions);
      setRemainingTime(foundQuiz.timeMinutes * 60); // Convert minutes to seconds
    } else {
      navigate('/quiz');
    }
  }, [quizId, navigate]);
  
  // Timer effect
  useEffect(() => {
    let interval;
    if (quizStarted && !quizCompleted && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(interval);
            handleQuizSubmit(); // Auto-submit when time runs out
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [quizStarted, quizCompleted, remainingTime]);
  
  const startQuiz = () => {
    setQuizStarted(true);
    setStartTime(Date.now());
    toast.info("Quiz started! Good luck!");
  };
  
  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const handleQuizSubmit = () => {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds
    
    // Calculate results
    let correctCount = 0;
    const answerDetails = quizQuestions.map(question => {
      const selectedOption = selectedOptions[question.id];
      const isCorrect = selectedOption === question.correctOption;
      if (isCorrect) correctCount++;
      
      return {
        questionId: question.id,
        selected: selectedOption !== undefined ? selectedOption : -1,
        correct: isCorrect
      };
    });
    
    // Calculate score (percentage correct)
    const score = Math.round((correctCount / quizQuestions.length) * 100);
    
    const quizResults = {
      correctAnswers: correctCount,
      totalQuestions: quizQuestions.length,
      timeSpent,
      score,
      answers: answerDetails
    };
    
    setResults(quizResults);
    setQuizCompleted(true);
    
    // Show toast based on score
    if (score >= 80) {
      toast.success("Great job! You passed the quiz with flying colors!");
    } else if (score >= 60) {
      toast.success("Well done! You passed the quiz!");
    } else {
      toast.error("You didn't pass this time. Keep learning and try again!");
    }
  };
  
  // Format remaining time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate progress
  const progressPercentage = quizStarted 
    ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100
    : 0;
  
  if (!quiz) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <StarryBackground />
        <div className="text-center">
          <h2 className="font-orbitron text-2xl">Loading quiz...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        {!quizStarted && !quizCompleted ? (
          <div>
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-muted/50" 
              onClick={() => navigate('/quiz')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Quizzes
            </Button>
            
            <Card className="cosmic-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-orbitron text-2xl">{quiz.title}</CardTitle>
                    <CardDescription className="mt-2">{quiz.description}</CardDescription>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    quiz.level === 'beginner' 
                      ? 'bg-green-900/20 text-green-400 border border-green-500/30' 
                      : quiz.level === 'intermediate'
                        ? 'bg-yellow-900/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-red-900/20 text-red-400 border border-red-500/30'
                  }`}>
                    {quiz.level === 'beginner' ? 'Dasar' : 
                     quiz.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-md">
                    <Clock className="h-5 w-5 text-neon-blue" />
                    <div>
                      <p className="text-sm text-gray-400">Time Limit</p>
                      <p className="text-gray-200">{quiz.timeMinutes} minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-md">
                    <DocumentIcon className="h-5 w-5 text-neon-purple" />
                    <div>
                      <p className="text-sm text-gray-400">Questions</p>
                      <p className="text-gray-200">{quiz.questions} questions</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-yellow-500/20 bg-yellow-900/10 rounded-md">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-400">Quiz Instructions</p>
                      <ul className="text-sm text-gray-300 mt-2 list-disc pl-5 space-y-1">
                        <li>You have {quiz.timeMinutes} minutes to complete this quiz.</li>
                        <li>There are {quiz.questions} multiple-choice questions.</li>
                        <li>You can navigate between questions before submitting.</li>
                        <li>The quiz will be automatically submitted when the time runs out.</li>
                        <li>You cannot retake the quiz immediately after completion.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="cyber-button w-full" onClick={startQuiz}>
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>
          </div>
        ) : quizCompleted ? (
          <div>
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-muted/50" 
              onClick={() => navigate('/quiz')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Quizzes
            </Button>
            
            <Card className="cosmic-card mb-8">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-center">Quiz Results</CardTitle>
                <div className="flex justify-center mt-4">
                  <div className="w-32 h-32 rounded-full bg-muted/20 flex items-center justify-center relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${results.score * 2.83} 283`}
                        strokeDashoffset="0"
                        transform="rotate(-90, 50, 50)"
                        className={`${
                          results.score >= 80 ? 'text-green-500' : 
                          results.score >= 60 ? 'text-yellow-500' : 
                          'text-red-500'
                        }`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">{results.score}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-xl mb-2">
                    {results.correctAnswers} out of {results.totalQuestions} correct
                  </p>
                  <p className="text-gray-400">
                    Time taken: {Math.floor(results.timeSpent / 60)}m {results.timeSpent % 60}s
                  </p>
                </div>
                
                <div className="p-4 border rounded-md mb-4 text-center">
                  <p className={`text-lg font-medium ${
                    results.score >= 80 ? 'text-green-400' : 
                    results.score >= 60 ? 'text-yellow-400' : 
                    'text-red-400'
                  }`}>
                    {results.score >= 80 
                      ? 'Excellent! You've mastered this topic!' 
                      : results.score >= 60 
                        ? 'Good job! You've passed the quiz.' 
                        : 'Keep learning! You'll do better next time.'}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-orbitron text-xl mb-4">Question Results</h3>
                  
                  {results.answers.map((answer, index) => {
                    const question = quizQuestions.find(q => q.id === answer.questionId);
                    return (
                      <div key={question.id} className={`p-4 border rounded-md ${
                        answer.correct ? 'border-green-500/30 bg-green-900/10' : 'border-red-500/30 bg-red-900/10'
                      }`}>
                        <div className="flex items-start gap-2">
                          {answer.correct 
                            ? <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                            : <XCircle className="h-5 w-5 text-red-500 mt-1" />}
                          <div>
                            <p className="font-medium">Question {index + 1}: {question.question}</p>
                            <p className="text-sm mt-1">
                              {answer.selected === -1 
                                ? 'No answer selected' 
                                : `Your answer: ${question.options[answer.selected]}`}
                            </p>
                            {!answer.correct && (
                              <p className="text-sm text-green-400 mt-1">
                                Correct answer: {question.options[question.correctOption]}
                              </p>
                            )}
                            <p className="text-sm text-gray-400 mt-2">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                <Button className="w-1/2" variant="outline" onClick={() => navigate('/quiz')}>
                  Back to Quizzes
                </Button>
                <Button className="cyber-button w-1/2" onClick={() => {
                  setQuizStarted(false);
                  setQuizCompleted(false);
                  setSelectedOptions({});
                  setCurrentQuestionIndex(0);
                }}>
                  View Quiz Details
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="font-orbitron">Leaderboard</CardTitle>
                <CardDescription>Top performers on this quiz</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {leaderboard.slice(0, 5).map((entry, index) => (
                    <div 
                      key={entry.id} 
                      className={`flex items-center justify-between p-3 rounded-md ${
                        index === 0 ? 'bg-neon-yellow/10 border border-neon-yellow/30' :
                        index === 1 ? 'bg-muted/30 border border-gray-600/30' :
                        index === 2 ? 'bg-amber-900/10 border border-amber-500/30' :
                        'bg-muted/10 border border-gray-700/30'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          index === 0 ? 'bg-neon-yellow/20 text-neon-yellow' :
                          index === 1 ? 'bg-muted/20 text-gray-300' :
                          index === 2 ? 'bg-amber-900/20 text-amber-500' :
                          'bg-muted/10 text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{entry.username}</p>
                          <p className="text-xs text-gray-400">{entry.title}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{entry.points} pts</p>
                        <p className="text-xs text-gray-400">{entry.quizzes} quizzes</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Quiz in progress
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-orbitron text-2xl">{quiz.title}</h2>
                <p className="text-gray-400">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-neon-blue" />
                <span className={`font-mono text-lg ${remainingTime < 60 ? 'text-red-400 animate-pulse' : ''}`}>
                  {formatTime(remainingTime)}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <Progress value={progressPercentage} className="h-2" />
            </div>
            
            <Card className="cosmic-card mb-8">
              {quizQuestions.length > 0 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {quizQuestions[currentQuestionIndex].question}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                        <div
                          key={index}
                          className={`p-4 border rounded-md cursor-pointer transition-colors ${
                            selectedOptions[quizQuestions[currentQuestionIndex].id] === index
                              ? 'border-neon-blue bg-neon-blue/10'
                              : 'border-gray-700 hover:border-gray-600 hover:bg-muted/10'
                          }`}
                          onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex].id, index)}
                        >
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center ${
                              selectedOptions[quizQuestions[currentQuestionIndex].id] === index
                                ? 'border-neon-blue bg-neon-blue text-black'
                                : 'border-gray-600'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span>{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                    >
                      Previous
                    </Button>
                    
                    <div className="flex gap-3">
                      {currentQuestionIndex === quizQuestions.length - 1 ? (
                        <Button className="cyber-button" onClick={handleQuizSubmit}>
                          Submit Quiz
                        </Button>
                      ) : (
                        <Button 
                          className="cyber-button" 
                          onClick={handleNextQuestion}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </>
              )}
            </Card>
            
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 justify-center max-w-md">
                {quizQuestions.map((_, index) => (
                  <button
                    key={index}
                    className={`w-9 h-9 rounded-md flex items-center justify-center ${
                      currentQuestionIndex === index
                        ? 'bg-neon-blue text-black'
                        : selectedOptions[quizQuestions[index].id] !== undefined
                          ? 'bg-muted/30 border border-neon-blue/50'
                          : 'bg-muted/20 border border-gray-700'
                    }`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// Document icon component
function DocumentIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

// X-Circle icon component
function XCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

export default QuizDetails;
