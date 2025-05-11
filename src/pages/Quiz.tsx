
import React, { useState } from "react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Brain, Shield, Trophy, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { quizzes, leaderboard } from "@/data/quizzes";

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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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
                      <Button className="cyber-button w-full">
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
                        >
                          <span>{level.name}</span>
                          <span className={`h-2 w-2 rounded-full ${level.color}`}></span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
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
