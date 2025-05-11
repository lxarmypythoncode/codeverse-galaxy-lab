
import React, { useState } from "react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Book, Check, ExternalLink, ChevronRight, Circle, Square, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { roadmaps } from "@/data/roadmap";

const Roadmap = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(roadmaps[0]);
  const [completedNodes, setCompletedNodes] = useState<string[]>([]);

  const handleNodeClick = (nodeId: string) => {
    if (completedNodes.includes(nodeId)) {
      setCompletedNodes(completedNodes.filter(id => id !== nodeId));
    } else {
      setCompletedNodes([...completedNodes, nodeId]);
    }
  };

  const getProgress = (roadmapId: string) => {
    const roadmap = roadmaps.find(r => r.id === roadmapId);
    if (!roadmap) return 0;
    
    const totalNodes = roadmap.nodes.length;
    const completed = completedNodes.filter(nodeId => 
      roadmap.nodes.some(node => node.id === nodeId)
    ).length;
    
    return (completed / totalNodes) * 100;
  };

  // Get node icon based on type and level
  const getNodeIcon = (type: string, level: string) => {
    switch (type) {
      case 'concept':
        return <Circle className={`h-4 w-4 ${level === 'beginner' ? 'text-green-500' : level === 'intermediate' ? 'text-yellow-500' : 'text-red-500'}`} />;
      case 'skill':
        return <Square className={`h-4 w-4 ${level === 'beginner' ? 'text-green-500' : level === 'intermediate' ? 'text-yellow-500' : 'text-red-500'}`} />;
      case 'tool':
        return <Hexagon className={`h-4 w-4 ${level === 'beginner' ? 'text-green-500' : level === 'intermediate' ? 'text-yellow-500' : 'text-red-500'}`} />;
      default:
        return <Circle className="h-4 w-4" />;
    }
  };

  // Check if a node is unlocked (all dependencies are completed)
  const isNodeUnlocked = (nodeId: string) => {
    const node = selectedRoadmap.nodes.find(n => n.id === nodeId);
    if (!node) return false;
    if (node.dependencies.length === 0) return true;
    
    return node.dependencies.every(depId => completedNodes.includes(depId));
  };

  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-purple/20 border border-neon-purple/40">
              <Rocket className="h-6 w-6 text-neon-purple" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="gradient-text">Roadmap</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow structured learning paths to master different programming disciplines. Track your progress and unlock new skills.
          </p>
        </div>

        <div className="mb-12">
          <Tabs defaultValue={roadmaps[0].id}>
            <TabsList className="w-full max-w-2xl mx-auto flex mb-6">
              {roadmaps.map((roadmap) => (
                <TabsTrigger
                  key={roadmap.id}
                  value={roadmap.id}
                  className="flex-1"
                  onClick={() => setSelectedRoadmap(roadmap)}
                >
                  {roadmap.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {roadmaps.map((roadmap) => (
              <TabsContent key={roadmap.id} value={roadmap.id}>
                <div className="cosmic-card p-6 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <h2 className="font-orbitron text-2xl mb-1">{roadmap.title}</h2>
                      <p className="text-gray-400">{roadmap.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <div className="mr-4">
                        <div className="text-sm text-gray-400">Your Progress</div>
                        <div className="text-xl font-orbitron text-neon-purple">
                          {Math.round(getProgress(roadmap.id))}%
                        </div>
                      </div>
                      <div className="w-32">
                        <div className="progress-track">
                          <div 
                            className="progress-bar" 
                            style={{ width: `${getProgress(roadmap.id)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                      <h3 className="font-orbitron text-lg mb-4">Legend</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Circle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-300">Beginner Concept</span>
                        </div>
                        <div className="flex items-center">
                          <Circle className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="text-gray-300">Intermediate Concept</span>
                        </div>
                        <div className="flex items-center">
                          <Circle className="h-4 w-4 text-red-500 mr-2" />
                          <span className="text-gray-300">Advanced Concept</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-300">Beginner Skill</span>
                        </div>
                        <div className="flex items-center">
                          <Hexagon className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-300">Beginner Tool</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <Check className="h-4 w-4 text-neon-purple mr-2" />
                          <span className="text-gray-300">Completed</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-3/4 roadmap-container relative">
                      <div className="space-y-8">
                        {roadmap.nodes.map((node) => {
                          const isCompleted = completedNodes.includes(node.id);
                          const isUnlocked = isNodeUnlocked(node.id);
                          
                          return (
                            <Card 
                              key={node.id}
                              className={`
                                cosmic-card transition-all duration-300
                                ${isCompleted ? 'border-neon-purple/50' : isUnlocked ? 'hover:border-neon-blue/50' : 'opacity-60'}
                                ${node.dependencies.length > 0 ? 'ml-8 md:ml-12' : ''}
                              `}
                            >
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center">
                                    {getNodeIcon(node.type, node.level)}
                                    <span className="ml-2 text-sm text-gray-400">
                                      {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
                                    </span>
                                  </div>
                                  <div>
                                    {isCompleted ? (
                                      <span className="flex items-center text-neon-purple text-sm">
                                        <Check className="h-4 w-4 mr-1" />
                                        Completed
                                      </span>
                                    ) : isUnlocked ? (
                                      <span className="text-neon-blue text-sm">Unlocked</span>
                                    ) : (
                                      <span className="text-gray-500 text-sm">Locked</span>
                                    )}
                                  </div>
                                </div>
                                <CardTitle className="font-orbitron mt-2">{node.title}</CardTitle>
                                <CardDescription className="text-gray-400">{node.description}</CardDescription>
                              </CardHeader>
                              {node.resources && node.resources.length > 0 && (
                                <CardContent>
                                  <h4 className="text-sm font-medium mb-2">Learning Resources:</h4>
                                  <ul className="space-y-1">
                                    {node.resources.map((resource, idx) => (
                                      <li key={idx} className="text-sm">
                                        <a 
                                          href={resource.url} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-neon-blue hover:underline flex items-center"
                                        >
                                          {resource.title}
                                          <ExternalLink className="h-3 w-3 ml-1" />
                                          <span className="ml-2 text-gray-500">({resource.type})</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </CardContent>
                              )}
                              <CardFooter>
                                <Button 
                                  className={`w-full ${isCompleted ? 'bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30' : 'cyber-button'}`}
                                  disabled={!isUnlocked}
                                  onClick={() => handleNodeClick(node.id)}
                                >
                                  {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
                                  {!isCompleted && <ChevronRight className="ml-2 h-4 w-4" />}
                                </Button>
                              </CardFooter>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center">
          <h2 className="font-orbitron text-2xl mb-6">Suggested Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roadmaps.filter(r => r.id !== selectedRoadmap.id).slice(0, 3).map((roadmap) => (
              <Card key={roadmap.id} className="cosmic-card hover:border-neon-blue/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-orbitron">{roadmap.title}</CardTitle>
                  <CardDescription>{roadmap.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">Progress</div>
                    <div className="text-sm">{Math.round(getProgress(roadmap.id))}%</div>
                  </div>
                  <div className="progress-track mt-2">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${getProgress(roadmap.id)}%` }}
                    ></div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="cyber-button w-full"
                    onClick={() => setSelectedRoadmap(roadmap)}
                  >
                    View Roadmap
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
