
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import { AlertTriangle, Home, Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen cosmic-bg flex flex-col">
      <StarryBackground />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="cosmic-card p-8 max-w-md text-center">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-yellow/20 border border-neon-yellow/40">
              <AlertTriangle className="h-6 w-6 text-neon-yellow" />
            </div>
          </div>
          
          <div className="mb-3">
            <span className="font-orbitron text-8xl font-bold gradient-text">404</span>
          </div>
          
          <h1 className="text-xl md:text-2xl font-orbitron mb-4">Signal Lost in the Cosmos</h1>
          
          <p className="text-gray-400 mb-8">
            The cosmic coordinates you're looking for don't exist in this universe. The path <span className="text-neon-blue">{location.pathname}</span> leads to an empty void.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <NavLink to="/">
              <Button className="cyber-button w-full md:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Return to Base
              </Button>
            </NavLink>
            
            <NavLink to="/learn">
              <Button variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 w-full md:w-auto">
                <Rocket className="mr-2 h-4 w-4" />
                Explore Courses
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
