
import React from "react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import EditorPreview from "@/components/EditorPreview";
import LearningPathsSection from "@/components/LearningPathsSection";
import QuizSection from "@/components/QuizSection";
import LabsPreview from "@/components/LabsPreview";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <EditorPreview />
        <LearningPathsSection />
        <QuizSection />
        <LabsPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
