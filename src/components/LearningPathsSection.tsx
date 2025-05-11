
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Monitor, Server, Code, Smartphone, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pathItems = [
  {
    icon: <Monitor className="h-6 w-6 text-neon-blue" />,
    title: "Frontend Development",
    description: "Master modern UI/UX with HTML, CSS, JavaScript and popular frameworks like React, Vue, and Angular.",
    path: "/roadmap/frontend",
    color: "blue",
    techs: ["HTML", "CSS", "JavaScript", "React", "Vue", "Tailwind"]
  },
  {
    icon: <Server className="h-6 w-6 text-neon-purple" />,
    title: "Backend Development",
    description: "Build robust server-side applications, APIs, and databases with Node.js, Python, Java, and more.",
    path: "/roadmap/backend",
    color: "purple",
    techs: ["Node.js", "Python", "PHP", "MySQL", "MongoDB", "API"]
  },
  {
    icon: <Code className="h-6 w-6 text-neon-green" />,
    title: "Fullstack Development",
    description: "Combine frontend and backend skills to create complete web applications from start to finish.",
    path: "/roadmap/fullstack",
    color: "green",
    techs: ["MERN", "MEAN", "Laravel", "Django", "GraphQL", "AWS"]
  },
  {
    icon: <Smartphone className="h-6 w-6 text-neon-yellow" />,
    title: "Mobile App Development",
    description: "Develop cross-platform and native mobile applications for iOS and Android.",
    path: "/roadmap/mobile",
    color: "yellow",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"]
  },
  {
    icon: <Shield className="h-6 w-6 text-red-400" />,
    title: "Cyber Security",
    description: "Learn about network security, ethical hacking, penetration testing, and security best practices.",
    path: "/roadmap/security",
    color: "red",
    techs: ["Networking", "Linux", "OWASP", "Ethical Hacking", "Cryptography"]
  }
];

const LearningPathsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-galactic-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Interactive <span className="gradient-text">Learning Paths</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow structured roadmaps tailored to your career goals. Track your progress and build real-world projects along the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathItems.map((item, index) => (
            <div key={index} className="cosmic-card overflow-hidden group relative">
              <div className={`h-1.5 w-full ${
                item.color === 'blue' ? 'bg-neon-blue' : 
                item.color === 'purple' ? 'bg-neon-purple' : 
                item.color === 'green' ? 'bg-neon-green' : 
                item.color === 'yellow' ? 'bg-neon-yellow' : 
                'bg-red-400'
              }`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                    {item.icon}
                  </div>
                  <div className="progress-track w-32">
                    <div className="progress-bar w-0 group-hover:w-3/4"></div>
                  </div>
                </div>
                
                <h3 className="font-orbitron text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.techs.map((tech, i) => (
                    <span key={i} className="tech-pill bg-muted/40 text-gray-300 text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <NavLink to={item.path}>
                  <Button variant="link" className={`p-0 flex items-center text-sm font-medium ${
                    item.color === 'blue' ? 'text-neon-blue hover:text-neon-blue/70' : 
                    item.color === 'purple' ? 'text-neon-purple hover:text-neon-purple/70' : 
                    item.color === 'green' ? 'text-neon-green hover:text-neon-green/70' : 
                    item.color === 'yellow' ? 'text-neon-yellow hover:text-neon-yellow/70' : 
                    'text-red-400 hover:text-red-400/70'
                  }`}>
                    View Roadmap
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </NavLink>
              </div>
            </div>
          ))}
          
          <div className="cosmic-card flex flex-col items-center justify-center p-6 border-dashed">
            <div className="rounded-full bg-muted/30 p-3 mb-4">
              <Code className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="font-orbitron text-xl font-semibold mb-2 text-center">Custom Path</h3>
            <p className="text-sm text-gray-400 mb-4 text-center">
              Create your own personalized learning journey by selecting topics and skills you want to master.
            </p>
            <Button variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20">
              Build Custom Path
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;
