
import React from "react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket } from "lucide-react";

const Learn = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-blue/20 border border-neon-blue/40">
              <Rocket className="h-6 w-6 text-neon-blue" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="gradient-text">Modules</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This page will contain all learning materials organized by category and difficulty level.
          </p>
        </div>

        <div className="cosmic-card p-8 text-center">
          <p className="text-lg text-gray-300">
            The Learning Modules section is under development. Check back soon!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
