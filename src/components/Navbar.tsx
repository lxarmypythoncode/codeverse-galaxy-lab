
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket, BookOpen, Code, Terminal, Shield, Settings, LogIn, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { to: "/learn", label: "Learn", icon: <BookOpen className="w-4 h-4 mr-1" /> },
    { to: "/labs", label: "Labs", icon: <Terminal className="w-4 h-4 mr-1" /> },
    { to: "/editor", label: "Code Editor", icon: <Code className="w-4 h-4 mr-1" /> },
    { to: "/roadmap", label: "Roadmap", icon: <Rocket className="w-4 h-4 mr-1" /> },
    { to: "/quiz", label: "Quiz", icon: <Shield className="w-4 h-4 mr-1" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-galactic-dark border-b border-neon-blue/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Rocket className="h-7 w-7 text-neon-blue animate-pulse-glow" />
              <span className="font-orbitron text-xl font-bold tracking-wider gradient-text">
                CodeVerse<span className="text-neon-yellow">Lab</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md font-medium flex items-center transition-all duration-300
                   ${isActive 
                    ? 'text-white bg-neon-blue/20 cosmic-glow' 
                    : 'text-gray-300 hover:text-white hover:bg-neon-blue/10'
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="py-2 pl-9 pr-4 rounded-md bg-muted/50 border border-muted hover:border-neon-blue/50 focus:border-neon-blue/70 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue/50 w-[180px]"
              />
            </div>
            <Button variant="outline" size="sm" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 hover:text-white">
              <LogIn className="mr-1 h-4 w-4" />
              Sign In
            </Button>
            <Button variant="outline" size="sm" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 hover:text-white">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-neon-blue">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden cosmic-bg border-b border-neon-blue/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium flex items-center
                   ${isActive 
                    ? 'text-white bg-neon-blue/20' 
                    : 'text-gray-300 hover:text-white hover:bg-neon-blue/10'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-3 border-t border-neon-blue/20">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="ml-3 py-2 px-3 rounded-md bg-muted/50 border border-muted focus:border-neon-blue/50 text-sm focus:outline-none focus:ring-1 focus:ring-neon-blue/50 flex-grow"
                />
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Button variant="outline" size="sm" className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 hover:text-white">
                  <LogIn className="mr-1 h-4 w-4" />
                  Sign In
                </Button>
                <Button variant="outline" size="sm" className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 hover:text-white">
                  <Settings className="mr-1 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
