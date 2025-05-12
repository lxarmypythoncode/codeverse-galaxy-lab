
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, BookOpen, Clock, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { modules } from "@/data/learning";
import { frontendModules, backendModules } from "@/data/learningModules";

// Import a markdown renderer
import ReactMarkdown from 'react-markdown';
import { Separator } from "@/components/ui/separator";

const LearnModule = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);

  useEffect(() => {
    // Combine all modules to search through
    const allModules = [...modules, ...frontendModules, ...backendModules];
    const foundModule = allModules.find(m => m.slug === slug);
    
    if (foundModule) {
      setModule(foundModule);
    } else {
      // Module not found, redirect to learn page
      navigate('/learn');
    }
  }, [slug, navigate]);

  if (!module) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <StarryBackground />
        <div className="text-center">
          <h2 className="font-orbitron text-2xl">Loading module...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-6 hover:bg-muted/50" 
          onClick={() => navigate('/learn')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Learning Modules
        </Button>

        <div className="mb-8">
          <div className="flex gap-2 mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full border
              ${module.level === 'beginner' ? 'border-green-500/30 bg-green-900/20 text-green-400' : 
              module.level === 'intermediate' ? 'border-yellow-500/30 bg-yellow-900/20 text-yellow-400' : 
              'border-red-500/30 bg-red-900/20 text-red-400'}`}
            >
              {module.level === 'beginner' ? 'Dasar' : 
               module.level === 'intermediate' ? 'Menengah' : 'Mahir'}
            </span>
            <span className="text-xs font-medium px-2 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/20 text-neon-blue">
              {module.category === 'frontend' ? 'Frontend' : 
               module.category === 'backend' ? 'Backend' : 
               module.category === 'fullstack' ? 'Fullstack' :
               module.category === 'mobile' ? 'Mobile' : 'Cyber Security'}
            </span>
          </div>
          
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">{module.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>By {module.authorName}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{module.duration} min read</span>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg mb-6">{module.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {module.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs bg-galactic-dark border border-neon-blue/20 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <Card className="cosmic-card p-6 mb-8">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>
              {module.content}
            </ReactMarkdown>
          </div>
        </Card>
        
        <div className="flex justify-between mt-12">
          <Button 
            variant="outline" 
            className="hover:bg-muted/50"
            onClick={() => navigate('/learn')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Modules
          </Button>
          
          <Button className="cyber-button">
            <BookOpen className="mr-2 h-4 w-4" />
            Continue Learning
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnModule;
