
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-galactic-dark border-t border-neon-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-neon-blue" />
              <span className="font-orbitron text-lg font-bold tracking-wider gradient-text">
                CodeVerse<span className="text-neon-yellow">Lab</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Interactive programming education platform with a cosmic cyberpunk theme, offering courses in frontend, backend, fullstack, mobile app development, and cybersecurity.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron font-medium text-white">Learning Paths</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/learn/frontend" className="text-gray-400 hover:text-neon-blue text-sm">Frontend Development</NavLink></li>
              <li><NavLink to="/learn/backend" className="text-gray-400 hover:text-neon-blue text-sm">Backend Development</NavLink></li>
              <li><NavLink to="/learn/fullstack" className="text-gray-400 hover:text-neon-blue text-sm">Fullstack Development</NavLink></li>
              <li><NavLink to="/learn/mobile" className="text-gray-400 hover:text-neon-blue text-sm">Mobile App Development</NavLink></li>
              <li><NavLink to="/learn/cybersecurity" className="text-gray-400 hover:text-neon-blue text-sm">Cyber Security</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-medium text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/roadmap" className="text-gray-400 hover:text-neon-blue text-sm">Interactive Roadmaps</NavLink></li>
              <li><NavLink to="/editor" className="text-gray-400 hover:text-neon-blue text-sm">Code Editor</NavLink></li>
              <li><NavLink to="/labs" className="text-gray-400 hover:text-neon-blue text-sm">Practice Labs</NavLink></li>
              <li><NavLink to="/quiz" className="text-gray-400 hover:text-neon-blue text-sm">Daily Quizzes</NavLink></li>
              <li><NavLink to="/playground" className="text-gray-400 hover:text-neon-blue text-sm">Code Playground</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-medium text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-gray-400 hover:text-neon-blue text-sm">About Us</NavLink></li>
              <li><NavLink to="/faq" className="text-gray-400 hover:text-neon-blue text-sm">FAQ</NavLink></li>
              <li><NavLink to="/privacy" className="text-gray-400 hover:text-neon-blue text-sm">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-gray-400 hover:text-neon-blue text-sm">Terms of Service</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-neon-blue text-sm">Contact</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neon-blue/10">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} CodeVerseLab. All rights reserved. Made with <Heart className="inline h-3 w-3 text-neon-blue" /> in the Universe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
