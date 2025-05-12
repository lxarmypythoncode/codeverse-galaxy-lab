
import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { modules } from "@/data/learning";
import { frontendModules, backendModules } from "@/data/learningModules";
import { allLearningPaths } from "@/data/learningPaths";

const LearningPath = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const navigate = useNavigate();
  
  // Find the learning path
  const path = allLearningPaths.find(p => p.id === pathId);
  
  // Combine all modules to find the ones in this path
  const allModules = [...modules, ...frontendModules, ...backendModules];
  
  // Mock user progress (in a real app, this would come from a database)
  const completedModules = [101, 102]; // Example: User has completed modules 101 and 102
  
  if (!path) {
    return (
      <div className="min-h-screen cosmic-bg">
        <StarryBackground />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="font-orbitron text-3xl mb-6">Learning Path Not Found</h1>
          <p className="mb-6">The learning path you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/learn')}>Back to Learning</Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get path modules
  const pathModules = path.modules
    .map(moduleId => allModules.find(m => m.id === moduleId))
    .filter(Boolean);
  
  // Calculate progress
  const progress = path.modules.length > 0 
    ? (completedModules.filter(id => path.modules.includes(id)).length / path.modules.length) * 100 
    : 0;
  
  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-6 hover:bg-muted/50" 
          onClick={() => navigate('/learn')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Learning
        </Button>
        
        <div className="cosmic-card p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-2">{path.title}</h1>
              <p className="text-gray-300">{path.description}</p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="text-sm text-gray-400">Your Progress</div>
              <div className="flex items-center gap-4">
                <div className="text-xl font-orbitron text-neon-purple">
                  {Math.round(progress)}%
                </div>
                <div className="w-32">
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-md">
              <Clock className="h-5 w-5 text-neon-blue" />
              <div>
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-gray-200">{path.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-md">
              <BookOpen className="h-5 w-5 text-neon-purple" />
              <div>
                <p className="text-sm text-gray-400">Modules</p>
                <p className="text-gray-200">{path.modules.length} learning modules</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-md">
              <div className={`h-2 w-2 rounded-full ${
                path.level === 'beginner' ? 'bg-green-500' : 
                path.level === 'intermediate' ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
              <div>
                <p className="text-sm text-gray-400">Level</p>
                <p className="text-gray-200 capitalize">{path.level}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="font-orbitron text-xl mb-4">About This Learning Path</h2>
            <p className="text-gray-300">
              This comprehensive learning path will guide you through all the essential concepts,
              skills, and tools needed to become proficient in {path.title.toLowerCase()}. 
              Follow the modules in sequence for the best learning experience.
            </p>
          </div>
          
          <div>
            <h2 className="font-orbitron text-xl mb-4">Instructor</h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-blue/30 flex items-center justify-center">
                <User className="h-6 w-6 text-neon-blue" />
              </div>
              <div>
                <p className="font-medium">{path.author}</p>
                <p className="text-sm text-gray-400">Expert Instructor</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="font-orbitron text-2xl mb-6">Learning Path Modules</h2>
        
        {pathModules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id);
          const isAvailable = index === 0 || completedModules.includes(pathModules[index-1]?.id);
          
          return (
            <Card 
              key={module.id} 
              className={`cosmic-card mb-4 transition-all ${
                isCompleted ? 'border-neon-purple/50' : 
                isAvailable ? 'hover:border-neon-blue/50' : 'opacity-60'
              }`}
            >
              <div className="flex items-center">
                <div className="p-4 flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted ? 'bg-neon-purple/20 text-neon-purple' : 'bg-muted/20 text-gray-400'
                  }`}>
                    {isCompleted ? <Check className="h-5 w-5" /> : <span>{index + 1}</span>}
                  </div>
                </div>
                
                <CardHeader className="py-4 flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        module.level === 'beginner' ? 'bg-green-900/20 text-green-400' : 
                        module.level === 'intermediate' ? 'bg-yellow-900/20 text-yellow-400' : 
                        'bg-red-900/20 text-red-400'
                      }`}>
                        {module.level === 'beginner' ? 'Dasar' : 
                         module.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                      </span>
                      <span className="ml-2 text-xs text-gray-400">{module.duration} min</span>
                    </div>
                    {isCompleted && (
                      <span className="text-xs text-neon-purple flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Completed
                      </span>
                    )}
                  </div>
                  <CardTitle className="font-orbitron">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                
                <CardFooter className="py-4 pr-4">
                  <Button 
                    className={isCompleted ? 'bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30' : 'cyber-button'}
                    disabled={!isAvailable}
                    onClick={() => navigate(`/learn/module/${module.slug}`)}
                  >
                    {isCompleted ? 'Review' : 'Start'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          );
        })}
        
        {pathModules.length === 0 && (
          <Card className="cosmic-card p-6 text-center">
            <p className="text-gray-300">No modules found for this learning path.</p>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default LearningPath;

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
