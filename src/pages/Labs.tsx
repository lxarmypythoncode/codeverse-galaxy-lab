
import React, { useState } from "react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Beaker, ChevronDown, ChevronRight, Search, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { labs } from "@/data/labs";

const Labs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredLabs = labs.filter((lab) => {
    const matchesCategory = selectedCategory === "all" || lab.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || lab.level === selectedLevel;
    const matchesSearch = 
      lab.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lab.description.toLowerCase().includes(searchTerm.toLowerCase());
    
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
    frontend: <Beaker className="h-5 w-5 text-neon-blue" />,
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
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-purple/20 border border-neon-purple/40">
              <Beaker className="h-6 w-6 text-neon-purple" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Labs</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Put your skills to the test with our interactive coding labs. Solve real-world problems and build your portfolio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/4 space-y-6">
            <div className="cosmic-card p-4">
              <h2 className="font-orbitron text-xl mb-4">Search</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search labs..."
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
            <div className="mb-6 flex justify-between items-center">
              <h2 className="font-orbitron text-2xl">
                {filteredLabs.length} {filteredLabs.length === 1 ? "Lab" : "Labs"} Found
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

            {filteredLabs.length === 0 ? (
              <div className="cosmic-card p-8 text-center">
                <p className="text-lg text-gray-300">
                  No coding labs match your current filters. Try adjusting your search criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredLabs.map((lab) => (
                  <Card key={lab.id} className="cosmic-card hover:border-neon-purple/50 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          {categoryIcons[lab.category]}
                          <span className="ml-2 text-sm text-gray-400">{categoryLabels[lab.category]}</span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${levelColors[lab.level]}`}>
                          {levelLabels[lab.level]}
                        </span>
                      </div>
                      <CardTitle className="font-orbitron mt-2">{lab.title}</CardTitle>
                      <CardDescription className="text-gray-400">{lab.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {lab.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-galactic-dark border border-neon-purple/20 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-300">
                        <span>
                          <span className="mr-1">Tasks:</span>
                          <span className="text-neon-purple">{lab.tasks.length}</span>
                        </span>
                        <span>
                          <span className="mr-1">Time:</span>
                          <span className="text-neon-purple">{lab.duration} min</span>
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="cyber-button w-full">
                        Start Lab
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Labs;
