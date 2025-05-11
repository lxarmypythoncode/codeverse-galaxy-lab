
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: string;
  twinkle: boolean;
  delay: number;
}

interface Meteor {
  id: number;
  x: number;
  y: number;
  delay: number;
}

const StarryBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // Create stars
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const numStars = Math.floor((windowWidth * windowHeight) / 10000); // Adjust density
    
    const newStars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: ['star-small', 'star-medium', 'star-large'][Math.floor(Math.random() * 3)],
        twinkle: Math.random() > 0.5,
        delay: Math.random() * 4, // Random delay for twinkling animation
      });
    }
    setStars(newStars);
    
    // Create meteors periodically
    const meteorInterval = setInterval(() => {
      const newMeteor = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 20 - 10,
        delay: Math.random() * 2,
      };
      
      setMeteors(prev => [...prev.slice(-5), newMeteor]); // Keep max 5 meteors
    }, 8000);
    
    return () => {
      clearInterval(meteorInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.size} ${star.twinkle ? 'star-twinkle' : ''}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
