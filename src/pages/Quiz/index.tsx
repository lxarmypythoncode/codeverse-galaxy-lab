
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizzes } from "@/data/quizzes";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, Check, ChevronRight, Book, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { leaderboard } from "@/data/quizzes";

import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const navigate = useNavigate();
  
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "all" || quiz.category === selectedCategory;
    
    const matchesLevel =
      selectedLevel === "all" || quiz.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  const categoryColors = {
    frontend: "bg-neon-blue/20 text-neon-blue",
    backend: "bg-neon-purple/20 text-neon-purple",
    fullstack: "bg-neon-yellow/20 text-neon-yellow",
    mobile: "bg-neon-green/20 text-neon-green",
    cyber: "bg-neon-red/20 text-neon-red",
  };
  
  const levelColors = {
    beginner: "border-green-500/30 bg-green-900/20 text-green-400",
    intermediate: "border-yellow-500/30 bg-yellow-900/20 text-yellow-400",
    advanced: "border-red-500/30 bg-red-900/20 text-red-400",
  };
  
  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-purple/20 border border-neon-purple/40">
              <Book className="h-6 w-6 text-neon-purple" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Knowledge <span className="gradient-text">Quiz</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Test your understanding of programming concepts with interactive quizzes. 
            Challenge yourself and track your progress across different topics.
          </p>
        </div>

        <Tabs defaultValue="quizzes" className="mb-12">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="quizzes" className="flex-1">
              <Book className="h-4 w-4 mr-2" />
              Available Quizzes
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex-1">
              <Award className="h-4 w-4 mr-2" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quizzes" className="mt-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4 space-y-6">
                <div className="cosmic-card p-4">
                  <h2 className="font-orbitron text-xl mb-4">Search</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search quizzes..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="cosmic-card p-4">
                  <h2 className="font-orbitron text-xl mb-4">Categories</h2>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </Button>
                    {Array.from(new Set(quizzes.map((quiz) => quiz.category))).map(
                      (category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          <span
                            className={`h-2 w-2 rounded-full mr-2 ${
                              categoryColors[category].split(" ")[1]
                            }`}
                          ></span>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Button>
                      )
                    )}
                  </div>
                </div>

                <div className="cosmic-card p-4">
                  <h2 className="font-orbitron text-xl mb-4">Difficulty</h2>
                  <div className="space-y-2">
                    <Button
                      variant={selectedLevel === "all" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedLevel("all")}
                    >
                      All Levels
                    </Button>
                    <Button
                      variant={selectedLevel === "beginner" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedLevel("beginner")}
                    >
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Dasar
                    </Button>
                    <Button
                      variant={selectedLevel === "intermediate" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedLevel("intermediate")}
                    >
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                      Menengah
                    </Button>
                    <Button
                      variant={selectedLevel === "advanced" ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedLevel("advanced")}
                    >
                      <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                      Mahir
                    </Button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/4">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="font-orbitron text-2xl">
                    {filteredQuizzes.length} {filteredQuizzes.length === 1 ? "Quiz" : "Quizzes"} Found
                  </h2>
                  <div className="text-sm text-gray-400">
                    Sort by:
                    <select className="ml-2 bg-transparent border border-gray-600 rounded px-2 py-1">
                      <option value="popular">Popularity</option>
                      <option value="newest">Newest</option>
                      <option value="difficulty">Difficulty</option>
                    </select>
                  </div>
                </div>

                {filteredQuizzes.length === 0 ? (
                  <div className="cosmic-card p-8 text-center">
                    <p className="text-lg text-gray-300">
                      No quizzes match your current filters. Try adjusting your search criteria.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredQuizzes.map((quiz) => (
                      <Card
                        key={quiz.id}
                        className="cosmic-card hover:border-neon-purple/50 transition-all duration-300"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${
                                categoryColors[quiz.category]
                              }`}
                            >
                              {quiz.category.charAt(0).toUpperCase() + quiz.category.slice(1)}
                            </span>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full border ${
                                levelColors[quiz.level]
                              }`}
                            >
                              {quiz.level === 'beginner' ? 'Dasar' : 
                              quiz.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                            </span>
                          </div>
                          <CardTitle className="font-orbitron mt-2">{quiz.title}</CardTitle>
                          <CardDescription className="text-gray-400">
                            {quiz.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-300">
                            <span className="flex items-center">
                              <QuestionMarkIcon className="h-4 w-4 mr-1 text-neon-purple" />
                              <span>{quiz.questions} questions</span>
                            </span>
                            <span className="flex items-center">
                              <ClockIcon className="h-4 w-4 mr-1 text-neon-blue" />
                              <span>{quiz.timeMinutes} minutes</span>
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="cyber-button w-full"
                            onClick={() => navigate(`/quiz/${quiz.slug}`)}
                          >
                            Start Quiz
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-0">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl flex items-center">
                  <Award className="mr-2 h-6 w-6 text-neon-yellow" />
                  Global Leaderboard
                </CardTitle>
                <CardDescription>
                  The top performers across all quizzes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-3 text-left">Rank</th>
                        <th className="px-4 py-3 text-left">User</th>
                        <th className="px-4 py-3 text-left">Title</th>
                        <th className="px-4 py-3 text-right">Points</th>
                        <th className="px-4 py-3 text-right">Quizzes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry, index) => (
                        <tr
                          key={entry.id}
                          className={`border-b border-gray-800 hover:bg-muted/10 ${
                            index === 0
                              ? "bg-neon-yellow/5"
                              : index === 1
                              ? "bg-muted/5"
                              : index === 2
                              ? "bg-amber-900/5"
                              : ""
                          }`}
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  index === 0
                                    ? "bg-neon-yellow/20 text-neon-yellow"
                                    : index === 1
                                    ? "bg-muted/20 text-gray-300"
                                    : index === 2
                                    ? "bg-amber-900/20 text-amber-500"
                                    : "bg-muted/10 text-gray-400"
                                }`}
                              >
                                {index + 1}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 font-medium">
                            {entry.username}
                          </td>
                          <td className="px-4 py-4 text-gray-400">
                            {entry.title}
                          </td>
                          <td className="px-4 py-4 text-right font-orbitron">
                            {entry.points}
                          </td>
                          <td className="px-4 py-4 text-right text-gray-400">
                            {entry.quizzes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

// Icon components
function QuestionMarkIcon(props) {
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
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default Quiz;
