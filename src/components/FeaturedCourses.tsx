
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CourseCard {
  title: string;
  category: string;
  description: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  path: string;
  techStack: string[];
}

const courses: CourseCard[] = [
  {
    title: 'Modern Frontend Development',
    category: 'Frontend',
    description: 'Master HTML, CSS, JavaScript and modern frameworks like React.',
    image: 'gradient-1',
    difficulty: 'Beginner',
    duration: '8 weeks',
    path: '/learn/frontend',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind']
  },
  {
    title: 'Backend Engineering with Node.js',
    category: 'Backend',
    description: 'Build scalable APIs and server applications with Node.js and Express.',
    image: 'gradient-2',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    path: '/learn/backend',
    techStack: ['Node.js', 'Express', 'MongoDB', 'REST API', 'GraphQL']
  },
  {
    title: 'MERN Stack Development',
    category: 'Fullstack',
    description: 'End-to-end web development with MongoDB, Express, React, and Node.',
    image: 'gradient-3',
    difficulty: 'Intermediate',
    duration: '12 weeks',
    path: '/learn/fullstack',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT']
  },
  {
    title: 'Mobile App Development with Flutter',
    category: 'Mobile',
    description: 'Create cross-platform mobile apps with Google\'s Flutter framework.',
    image: 'gradient-4',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    path: '/learn/mobile',
    techStack: ['Dart', 'Flutter', 'Firebase', 'State Management', 'UI Design']
  },
  {
    title: 'Ethical Hacking Fundamentals',
    category: 'Cyber Security',
    description: 'Learn ethical hacking, penetration testing and security fundamentals.',
    image: 'gradient-5',
    difficulty: 'Advanced',
    duration: '8 weeks',
    path: '/learn/cybersecurity',
    techStack: ['Kali Linux', 'Networking', 'Web Security', 'OWASP', 'Cryptography']
  }
];

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold gradient-text">
            Featured Learning Paths
          </h2>
          <NavLink to="/learn" className="flex items-center text-sm font-medium text-neon-blue hover:text-neon-yellow transition-colors">
            View All Courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </NavLink>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <NavLink 
              to={course.path} 
              key={index}
              className="cosmic-card flex flex-col h-full hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <div className={`h-36 bg-gradient-to-r 
                ${index === 0 ? 'from-neon-blue to-neon-green' : 
                 index === 1 ? 'from-neon-purple to-neon-blue' : 
                 index === 2 ? 'from-neon-blue to-neon-yellow' : 
                 index === 3 ? 'from-neon-green to-neon-yellow' : 
                 'from-neon-yellow to-neon-purple'} 
                opacity-20 group-hover:opacity-30 transition-opacity`}
              >
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="tech-pill bg-neon-blue/20 text-neon-blue">
                    {course.category}
                  </span>
                  <span className={`tech-pill 
                    ${course.difficulty === 'Beginner' ? 'bg-green-900/20 text-green-400' : 
                      course.difficulty === 'Intermediate' ? 'bg-yellow-900/20 text-yellow-400' : 
                      'bg-red-900/20 text-red-400'}`
                    }
                  >
                    {course.difficulty}
                  </span>
                </div>
                
                <h3 className="font-orbitron text-lg font-medium mb-2 group-hover:text-neon-blue transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  {course.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.techStack.map((tech, i) => (
                      <span key={i} className="tech-pill bg-muted/50 text-gray-300 text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Duration: {course.duration}</span>
                    <span className="flex items-center text-neon-blue group-hover:text-neon-yellow">
                      Start Learning
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
