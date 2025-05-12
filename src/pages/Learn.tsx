
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Search, Shield, ArrowRight, BookText, Route, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { modules } from "@/data/learning";
import { frontendModules, backendModules } from "@/data/learningModules";
import { allLearningPaths } from "@/data/learningPaths";

const Learn = () => {
  // Combine all modules
  const allModules = [...modules, ...frontendModules, ...backendModules];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("modules"); // "modules" or "paths"
  const navigate = useNavigate();

  const filteredModules = allModules.filter((module) => {
    const matchesCategory = selectedCategory === "all" || module.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || module.level === selectedLevel;
    const matchesSearch = 
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      module.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const filteredPaths = allLearningPaths.filter((path) => {
    const matchesCategory = selectedCategory === "all" || path.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || path.level === selectedLevel;
    const matchesSearch = 
      path.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      path.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const levelColors = {
    beginner: "border-green-500/30 bg-green-900/20 text-green-400",
    intermediate: "border-yellow-500/30 bg-yellow-900/20 text-yellow-400",
    advanced: "border-red-500/30 bg-red-900/20 text-red-400",
  };

  const levelLabels = {
    beginner: "Dasar",
    intermediate: "Menengah",
    advanced: "Mahir",
  };

  const categoryIcons = {
    frontend: <BookOpen className="h-5 w-5 text-neon-blue" />,
    backend: <Shield className="h-5 w-5 text-neon-purple" />,
    fullstack: <Shield className="h-5 w-5 text-neon-yellow" />,
    mobile: <Shield className="h-5 w-5 text-neon-green" />,
    cyber: <Shield className="h-5 w-5 text-neon-red" />,
  };

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Fullstack",
    mobile: "Mobile App",
    cyber: "Cyber Security",
  };

  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-blue/20 border border-neon-blue/40">
              <BookOpen className="h-6 w-6 text-neon-blue" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="gradient-text">Modules</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our learning materials organized by category and difficulty level. Master programming concepts at your own pace.
          </p>
        </div>

        <Tabs defaultValue="modules" className="mb-12" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="modules" className="flex-1">
              <BookText className="h-4 w-4 mr-2" />
              Learning Modules
            </TabsTrigger>
            <TabsTrigger value="paths" className="flex-1">
              <Route className="h-4 w-4 mr-2" />
              Learning Paths
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4 space-y-6">
              <div className="cosmic-card p-4">
                <h2 className="font-orbitron text-xl mb-4">Search</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search modules..."
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
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <Button
                      key={key}
                      variant={selectedCategory === key ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(key)}
                    >
                      {categoryIcons[key as keyof typeof categoryIcons]}
                      <span className="ml-2">{label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="cosmic-card p-4">
                <h2 className="font-orbitron text-xl mb-4">Difficulty Level</h2>
                <div className="space-y-2">
                  <Button
                    variant={selectedLevel === "all" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedLevel("all")}
                  >
                    All Levels
                  </Button>
                  {Object.entries(levelLabels).map(([key, label]) => (
                    <Button
                      key={key}
                      variant={selectedLevel === key ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedLevel(key)}
                    >
                      <span className={`h-2 w-2 rounded-full ${key === 'beginner' ? 'bg-green-500' : key === 'intermediate' ? 'bg-yellow-500' : 'bg-red-500'} mr-2`}></span>
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <TabsContent value="modules" className="mt-0">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="font-orbitron text-2xl">
                    {filteredModules.length} {filteredModules.length === 1 ? "Module" : "Modules"} Found
                  </h2>
                  <div className="text-sm text-gray-400">
                    Sort by: 
                    <select className="ml-2 bg-transparent border border-gray-600 rounded px-2 py-1">
                      <option value="newest">Newest</option>
                      <option value="popular">Most Popular</option>
                      <option value="difficulty">Difficulty</option>
                    </select>
                  </div>
                </div>

                {filteredModules.length === 0 ? (
                  <div className="cosmic-card p-8 text-center">
                    <p className="text-lg text-gray-300">
                      No learning modules match your current filters. Try adjusting your search criteria.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredModules.map((module) => (
                      <Card key={module.id} className="cosmic-card hover:border-neon-blue/50 transition-all duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              {categoryIcons[module.category as keyof typeof categoryIcons]}
                              <span className="ml-2 text-sm text-gray-400">{categoryLabels[module.category as keyof typeof categoryLabels]}</span>
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full border ${levelColors[module.level as keyof typeof levelColors]}`}>
                              {levelLabels[module.level as keyof typeof levelLabels]}
                            </span>
                          </div>
                          <CardTitle className="font-orbitron mt-2">{module.title}</CardTitle>
                          <CardDescription className="text-gray-400">{module.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-300">
                            <span className="flex items-center">
                              <span className="mr-1">By</span>
                              <span className="text-neon-blue">{module.authorName}</span>
                            </span>
                            <span>{module.duration} min</span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {module.tags.slice(0, 3).map((tag, index) => (
                              <span 
                                key={index} 
                                className="text-xs bg-galactic-dark border border-neon-blue/20 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            className="cyber-button w-full"
                            onClick={() => navigate(`/learn/module/${module.slug}`)}
                          >
                            Start Learning
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="paths" className="mt-0">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="font-orbitron text-2xl">
                    {filteredPaths.length} Learning {filteredPaths.length === 1 ? "Path" : "Paths"} Found
                  </h2>
                </div>

                {filteredPaths.length === 0 ? (
                  <div className="cosmic-card p-8 text-center">
                    <p className="text-lg text-gray-300">
                      No learning paths match your current filters. Try adjusting your search criteria.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredPaths.map((path) => {
                      // Get the modules for this path
                      const pathModules = path.modules
                        .map(id => allModules.find(m => m.id === id))
                        .filter(Boolean);
                      
                      return (
                        <Card key={path.id} className="cosmic-card hover:border-neon-blue/50 transition-all duration-300">
                          <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="p-6 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                              <div className="h-16 w-16 rounded-full bg-neon-blue/30 flex items-center justify-center">
                                <Route className="h-8 w-8 text-neon-blue" />
                              </div>
                            </div>
                            
                            <div className="col-span-3 p-6">
                              <div className="flex justify-between items-start">
                                <div className="flex gap-2">
                                  <span className={`text-xs font-medium px-2 py-1 rounded-full border ${
                                    path.level === 'beginner' ? 'border-green-500/30 bg-green-900/20 text-green-400' : 
                                    path.level === 'intermediate' ? 'border-yellow-500/30 bg-yellow-900/20 text-yellow-400' : 
                                    'border-red-500/30 bg-red-900/20 text-red-400'
                                  }`}>
                                    {path.level === 'beginner' ? 'Dasar' : 
                                     path.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                                  </span>
                                  <span className="text-xs font-medium px-2 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/20 text-neon-blue">
                                    {path.category === 'frontend' ? 'Frontend' : 
                                     path.category === 'backend' ? 'Backend' : 
                                     path.category === 'fullstack' ? 'Fullstack' :
                                     path.category === 'mobile' ? 'Mobile' : 'Cyber Security'}
                                  </span>
                                </div>
                              </div>
                              
                              <h3 className="font-orbitron text-xl mt-2 mb-2">{path.title}</h3>
                              <p className="text-gray-400 mb-4">{path.description}</p>
                              
                              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                                <div className="flex items-center">
                                  <Gauge className="h-4 w-4 mr-1 text-neon-blue" />
                                  <span>{path.duration}</span>
                                </div>
                                <div className="flex items-center">
                                  <BookText className="h-4 w-4 mr-1 text-neon-purple" />
                                  <span>{pathModules.length} modules</span>
                                </div>
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1 text-neon-yellow" />
                                  <span>{path.author}</span>
                                </div>
                              </div>
                              
                              <Button 
                                className="cyber-button" 
                                onClick={() => navigate(`/learn/path/${path.id}`)}
                              >
                                View Learning Path
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

// User icon component
function User(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default Learn;
