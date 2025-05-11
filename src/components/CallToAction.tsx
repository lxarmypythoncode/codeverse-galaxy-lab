
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, BookOpen, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-galactic via-galactic-dark to-galactic opacity-60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-yellow"></div>
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-neon-blue opacity-5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-neon-yellow opacity-5 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-blue/20 border border-neon-blue/40">
              <Rocket className="h-6 w-6 text-neon-blue animate-pulse-glow" />
            </div>
          </div>
        </div>
        
        <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Begin Your <span className="gradient-text">Coding Adventure</span> Today
        </h2>
        
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Join thousands of learners mastering programming skills through our interactive platform. 
          Start with any path, track your progress, and build your coding portfolio.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <NavLink to="/learn">
            <Button className="cyber-button flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
          </NavLink>
          
          <NavLink to="/editor">
            <Button className="cyber-button cyber-button-yellow flex items-center">
              <Terminal className="mr-2 h-5 w-5" />
              Try Code Editor
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
