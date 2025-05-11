
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Check, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const labCategories = [
  { name: "Frontend", challenges: 24, completedPercent: 35, icon: "💻" },
  { name: "Backend", challenges: 18, completedPercent: 15, icon: "🖥️" },
  { name: "Fullstack", challenges: 12, completedPercent: 0, icon: "⚙️" },
  { name: "Mobile", challenges: 16, completedPercent: 0, icon: "📱" },
  { name: "Cyber Security", challenges: 20, completedPercent: 5, icon: "🔒" },
];

const LabsPreview: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-galactic-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Practical <span className="gradient-text">Coding Labs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Put your skills to the test with hands-on coding challenges and real-world projects. 
            Build your portfolio while learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="cosmic-card p-6">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-neon-yellow/20">
                  <Terminal className="h-5 w-5 text-neon-yellow" />
                </div>
                <h3 className="ml-3 text-xl font-orbitron">Lab Categories</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              {labCategories.map((category, index) => (
                <NavLink key={index} to={`/labs/${category.name.toLowerCase()}`} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors border border-muted/30">
                  <div className="flex items-center">
                    <div className="h-8 w-8 flex items-center justify-center text-xl">
                      {category.icon}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-orbitron font-medium">{category.name}</h4>
                      <p className="text-xs text-gray-400">{category.challenges} challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {category.completedPercent > 0 ? (
                      <div className="mr-3 text-right">
                        <span className="text-xs text-gray-400">Completed</span>
                        <p className="text-sm font-medium">
                          {category.completedPercent}%
                        </p>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">Not started</span>
                    )}
                    
                    <ArrowRight className="h-4 w-4 ml-2 text-neon-blue" />
                  </div>
                </NavLink>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <NavLink to="/labs">
                <Button className="cyber-button">
                  View All Labs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </NavLink>
            </div>
          </div>
          
          <div className="cosmic-card p-6">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-neon-blue/20">
                  <BookOpen className="h-5 w-5 text-neon-blue" />
                </div>
                <h3 className="ml-3 text-xl font-orbitron">Featured Lab</h3>
              </div>
              <div className="tech-pill bg-neon-blue/20 text-neon-blue">
                Intermediate
              </div>
            </div>
            
            <h4 className="font-orbitron font-medium text-lg mb-3">
              Build a Responsive Dashboard with React & Tailwind
            </h4>
            
            <p className="text-sm text-gray-400 mb-6">
              Create a fully functional dashboard with charts, data tables, and interactive components. 
              Learn best practices for responsive design and component architecture.
            </p>
            
            <div className="mb-6">
              <h5 className="text-sm font-medium mb-2">Requirements</h5>
              <ul className="space-y-2">
                {[
                  "Implement responsive layout for all device sizes",
                  "Create interactive charts with recharts library",
                  "Build data tables with sorting and filtering",
                  "Add dark/light theme toggle functionality",
                  "Implement user settings modal and notifications"
                ].map((req, index) => (
                  <li key={index} className="flex text-sm">
                    <Check className="h-4 w-4 text-neon-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["React", "Tailwind CSS", "Chart.js", "Responsive Design", "State Management"].map((tech, index) => (
                <span key={index} className="tech-pill bg-muted/40 text-gray-300 text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-400">Estimated time</span>
                <p className="text-sm">3-5 hours</p>
              </div>
              
              <NavLink to="/labs/frontend/dashboard">
                <Button className="cyber-button">
                  Start This Lab
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsPreview;
