
import React from 'react';
import { Rocket, Code, Terminal, BookOpen, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative py-12 md:py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 mb-4">
              <Rocket className="h-6 w-6 text-neon-blue animate-pulse-glow" />
            </div>
          </div>
        </div>
        
        <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="glitch-text" data-text="Master Coding in the">Master Coding in the</span>
          <br />
          <span className="gradient-text">Cyber Universe</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Explore the vast cosmos of programming with our interactive learning platform.
          From frontend galaxies to backend nebulae, embark on a journey through the digital universe.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button className="cyber-button">
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>
          <Button className="cyber-button cyber-button-yellow">
            <Code className="mr-2 h-5 w-5" />
            Try Editor
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-4xl mx-auto">
          {[
            { icon: <BookOpen className="h-6 w-6 mb-3 text-neon-blue" />, title: "Learn", path: "/learn", desc: "Interactive modules" },
            { icon: <Terminal className="h-6 w-6 mb-3 text-neon-yellow" />, title: "Labs", path: "/labs", desc: "Practice coding" },
            { icon: <Code className="h-6 w-6 mb-3 text-neon-purple" />, title: "Editor", path: "/editor", desc: "Multi-language IDE" },
            { icon: <Rocket className="h-6 w-6 mb-3 text-neon-green" />, title: "Roadmap", path: "/roadmap", desc: "Learning paths" },
            { icon: <Shield className="h-6 w-6 mb-3 text-neon-blue" />, title: "Quiz", path: "/quiz", desc: "Test your skills" },
          ].map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className="cosmic-card px-4 py-6 text-center hover:scale-105 transition-transform duration-300 hover:border-neon-blue/50"
            >
              {item.icon}
              <h3 className="font-orbitron font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
