
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { LearningApi } from '@/api/learningApi';
import { ICourseTrack } from '@/types/learningApi';

const FeaturedCourses: React.FC = () => {
  // Fetch course tracks from the API
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ['featuredCourses'],
    queryFn: LearningApi.getAllTracks,
  });

  // Function to get appropriate color gradient based on index
  const getGradient = (index: number) => {
    switch (index % 5) {
      case 0: return 'from-neon-blue to-neon-green';
      case 1: return 'from-neon-purple to-neon-blue';
      case 2: return 'from-neon-blue to-neon-yellow';
      case 3: return 'from-neon-green to-neon-yellow';
      default: return 'from-neon-yellow to-neon-purple';
    }
  };

  // Function to get badge color based on level
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-900/20 text-green-400';
      case 'intermediate': return 'bg-yellow-900/20 text-yellow-400';
      case 'advanced': return 'bg-red-900/20 text-red-400';
      default: return 'bg-blue-900/20 text-blue-400';
    }
  };

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
        
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-neon-blue">Loading courses...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400">Error loading courses. Please try again.</p>
          </div>
        )}
        
        {courses && courses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course: ICourseTrack, index: number) => (
              <NavLink 
                to={`/learn/path/${course.id}`} 
                key={course.id}
                className="cosmic-card flex flex-col h-full hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <div className={`h-36 bg-gradient-to-r ${getGradient(index)} opacity-20 group-hover:opacity-30 transition-opacity`}>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="tech-pill bg-neon-blue/20 text-neon-blue">
                      {course.id.split('-')[0].charAt(0).toUpperCase() + course.id.split('-')[0].slice(1)}
                    </span>
                    <span className={`tech-pill ${getLevelBadgeColor(course.level)}`}>
                      {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="font-orbitron text-lg font-medium mb-2 group-hover:text-neon-blue transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto">
                    {/* We'll show technology stack based on the first few items */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.items.slice(0, 5).map((itemId: number, i: number) => (
                        <span key={i} className="tech-pill bg-muted/50 text-gray-300 text-[10px]">
                          {`Item ${itemId}`}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>Duration: {course.estimatedDuration}</span>
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
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;
