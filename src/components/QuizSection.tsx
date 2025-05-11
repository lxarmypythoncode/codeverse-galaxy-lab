
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuizSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="cosmic-card p-6 relative">
              <div className="absolute -top-3 -right-3 py-1 px-3 bg-neon-blue text-xs font-semibold text-black font-orbitron rounded">
                Daily Quiz
              </div>
              
              <h3 className="text-xl font-orbitron mb-6">React Fundamentals</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-3 font-medium">What is the purpose of the useEffect Hook in React?</p>
                  
                  <div className="space-y-3 mb-3">
                    <div className="flex items-center p-3 rounded-md bg-green-900/20 border border-green-500/30">
                      <div className="mr-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span>To perform side effects in function components</span>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/20 border border-muted/30 opacity-60">
                      <div className="mr-3 h-5 w-5"></div>
                      <span>To create new state variables in components</span>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/20 border border-muted/30 opacity-60">
                      <div className="mr-3 h-5 w-5"></div>
                      <span>To optimize rendering performance</span>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/20 border border-muted/30 opacity-60">
                      <div className="mr-3 h-5 w-5"></div>
                      <span>To communicate between parent and child components</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="mb-3 font-medium">Which function is used to update state in React?</p>
                  
                  <div className="space-y-3 mb-3">
                    <div className="flex items-center p-3 rounded-md bg-muted/20 border border-muted/30 opacity-60">
                      <div className="mr-3 h-5 w-5"></div>
                      <span>this.changeState()</span>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-red-900/20 border border-red-500/30">
                      <div className="mr-3">
                        <XCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <span>this.updateState()</span>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-green-900/20 border border-green-500/30">
                      <div className="mr-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span>this.setState()</span>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/20 border border-muted/30 opacity-60">
                      <div className="mr-3 h-5 w-5"></div>
                      <span>this.modifyState()</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <span className="text-neon-blue font-orbitron">1/5 Completed</span>
                  <div className="progress-track mt-2 w-32">
                    <div className="progress-bar w-1/5"></div>
                  </div>
                </div>
                
                <Button className="cyber-button">
                  Continue Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 mb-4">
              <Shield className="h-5 w-5 text-neon-purple" />
            </div>
            
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Test Your <span className="gradient-text">Knowledge</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Challenge yourself with our adaptive quizzes that automatically adjust to your skill level. 
              Track your progress and identify areas for improvement.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Adaptive difficulty based on your skill level",
                "Comprehensive quizzes for all programming categories",
                "Detailed explanations for each answer",
                "Track your progress and knowledge gaps",
                "Earn badges and certificates for achievements"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-neon-purple"></div>
                  </div>
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <NavLink to="/quiz">
                <Button className="cyber-button">
                  Take Daily Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </NavLink>
              <NavLink to="/quiz/leaderboard">
                <Button variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20">
                  View Leaderboard
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
