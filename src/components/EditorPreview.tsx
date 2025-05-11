
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Monitor, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EditorPreview: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-neon-yellow/10 border border-neon-yellow/30 mb-4">
              <Code className="h-5 w-5 text-neon-yellow" />
            </div>
            
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              All-in-One <span className="gradient-text">Code Editor</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Write, test, and deploy code in multiple programming languages with our powerful integrated development environment. Experience real-time preview and execution for any language.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Support for 15+ programming languages",
                "Real-time preview and execution",
                "Theme customization and code completion",
                "Share and export your code easily",
                "Pre-built templates and frameworks"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-neon-yellow"></div>
                  </div>
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <NavLink to="/editor">
                <Button className="cyber-button cyber-button-yellow">
                  Try Editor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </NavLink>
              <NavLink to="/playground">
                <Button variant="outline" className="border-neon-yellow/50 text-neon-yellow hover:bg-neon-yellow/10">
                  Pre-built Templates
                </Button>
              </NavLink>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <div className="relative">
              {/* Mock code editor */}
              <div className="bg-galactic-dark border border-neon-blue/30 rounded-lg overflow-hidden">
                <div className="bg-galactic px-4 py-2 flex items-center border-b border-neon-blue/30">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 px-3 py-1 bg-neon-blue/20 rounded text-xs text-neon-blue">script.js</div>
                  <div className="ml-2 px-3 py-1 bg-muted/30 rounded text-xs text-gray-400">index.html</div>
                  <div className="ml-2 px-3 py-1 bg-muted/30 rounded text-xs text-gray-400">style.css</div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="p-4 border-r border-neon-blue/30 col-span-3">
                    <pre className="font-jetbrains text-sm">
                      <code>
                        <span className="text-neon-purple">function</span> <span className="text-neon-blue">generateUniverse</span><span className="text-gray-400">()</span> <span className="text-gray-400">{'{'}</span>
                        {'\n'}  <span className="text-neon-purple">const</span> <span className="text-neon-yellow">stars</span> <span className="text-gray-400">=</span> <span className="text-gray-400">[];</span>
                        {'\n'}  <span className="text-neon-purple">const</span> <span className="text-neon-yellow">galaxies</span> <span className="text-gray-400">=</span> <span className="text-gray-400">[];</span>
                        {'\n'}
                        {'\n'}  <span className="text-gray-500">// Create cosmic objects</span>
                        {'\n'}  <span className="text-neon-purple">for</span> <span className="text-gray-400">(</span><span className="text-neon-purple">let</span> <span className="text-neon-yellow">i</span> <span className="text-gray-400">=</span> <span className="text-neon-green">0</span><span className="text-gray-400">;</span> <span className="text-neon-yellow">i</span> <span className="text-gray-400">&lt;</span> <span className="text-neon-green">1000</span><span className="text-gray-400">;</span> <span className="text-neon-yellow">i</span><span className="text-gray-400">++)</span> <span className="text-gray-400">{'{'}</span>
                        {'\n'}    <span className="text-neon-yellow">stars</span><span className="text-gray-400">.</span><span className="text-neon-blue">push</span><span className="text-gray-400">(</span><span className="text-neon-blue">createStar</span><span className="text-gray-400">(</span><span className="text-neon-yellow">i</span><span className="text-gray-400">));</span>
                        {'\n'}    
                        {'\n'}    <span className="text-neon-purple">if</span> <span className="text-gray-400">(</span><span className="text-neon-yellow">i</span> <span className="text-gray-400">%</span> <span className="text-neon-green">100</span> <span className="text-gray-400">===</span> <span className="text-neon-green">0</span><span className="text-gray-400">)</span> <span className="text-gray-400">{'{'}</span>
                        {'\n'}      <span className="text-neon-yellow">galaxies</span><span className="text-gray-400">.</span><span className="text-neon-blue">push</span><span className="text-gray-400">(</span><span className="text-neon-blue">createGalaxy</span><span className="text-gray-400">(</span><span className="text-neon-yellow">stars</span><span className="text-gray-400">.</span><span className="text-neon-blue">slice</span><span className="text-gray-400">(</span><span className="text-neon-yellow">i</span> <span className="text-gray-400">-</span> <span className="text-neon-green">100</span><span className="text-gray-400">,</span> <span className="text-neon-yellow">i</span><span className="text-gray-400">)));</span>
                        {'\n'}    <span className="text-gray-400">{'}'}</span>
                        {'\n'}  <span className="text-gray-400">{'}'}</span>
                        {'\n'}
                        {'\n'}  <span className="text-neon-purple">return</span> <span className="text-gray-400">{'{'}</span>
                        {'\n'}    <span className="text-neon-yellow">stars</span><span className="text-gray-400">,</span>
                        {'\n'}    <span className="text-neon-yellow">galaxies</span><span className="text-gray-400">,</span>
                        {'\n'}    <span className="text-neon-yellow">render</span><span className="text-gray-400">:</span> <span className="text-gray-400">()</span> <span className="text-gray-400">{'=>'}</span> <span className="text-neon-blue">renderUniverse</span><span className="text-gray-400">(</span><span className="text-neon-yellow">galaxies</span><span className="text-gray-400">)</span>
                        {'\n'}  <span className="text-gray-400">{'}'}</span>
                        {'\n'}<span className="text-gray-400">{'}'}</span>
                        {'\n\n'}<span className="text-neon-purple">const</span> <span className="text-neon-yellow">universe</span> <span className="text-gray-400">=</span> <span className="text-neon-blue">generateUniverse</span><span className="text-gray-400">();</span>
                        {'\n'}<span className="text-neon-yellow">universe</span><span className="text-gray-400">.</span><span className="text-neon-blue">render</span><span className="text-gray-400">();</span>
                        {'\n'}<span className="cursor-blink"></span>
                      </code>
                    </pre>
                  </div>
                  
                  <div className="border-l border-neon-blue/30 col-span-2">
                    <div className="p-2 border-b border-neon-blue/30 flex items-center">
                      <Monitor className="h-4 w-4 text-neon-blue mr-2" />
                      <span className="text-xs">Preview</span>
                    </div>
                    
                    <div className="p-4">
                      <div className="bg-galactic-dark w-full h-48 rounded border border-neon-blue/20 flex items-center justify-center">
                        <div className="animate-float">
                          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-80 blur-sm"></div>
                          <div className="h-5 w-5 rounded-full bg-neon-yellow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
                          <div className="h-24 w-24 rounded-full border border-neon-blue/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '10s'}}></div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="p-2 terminal-panel">
                          <div className="flex items-center mb-1">
                            <Terminal className="h-3 w-3 text-neon-yellow mr-2" />
                            <span className="text-xs text-neon-yellow">Console</span>
                          </div>
                          <div className="text-xs text-gray-400">
                            <p>{"> Universe initialized"}</p>
                            <p>{"> Created 1000 stars"}</p>
                            <p>{"> Created 10 galaxies"}</p>
                            <p>{"> Rendering universe..."}</p>
                            <p className="text-neon-green">{"> Render complete ✓"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 h-6 w-6 border-t-2 border-l-2 border-neon-blue/70"></div>
              <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-neon-blue/70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPreview;
