
// src/pages/Quiz/QuizDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { quizzes } from '@/data/quizzes';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const QuizDetails = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  
  // Find the quiz with the matching slug instead of ID
  const quiz = quizzes.find(q => q.slug === quizId);

  if (!quiz) {
    return (
      <div className="min-h-screen cosmic-bg">
        <StarryBackground />
        <Navbar />
        <div className="container mx-auto py-8">
          <Button 
            variant="outline" 
            className="mb-4" 
            onClick={() => navigate('/quiz')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Quizzes
          </Button>
          <Card>
            <CardContent className="pt-6">
              <p className="text-center py-8">Quiz not found</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <div className="container mx-auto py-8">
        <Button 
          variant="outline" 
          className="mb-4" 
          onClick={() => navigate('/quiz')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Quizzes
        </Button>
        
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="font-orbitron">{quiz.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{quiz.description}</p>
            <p className="text-sm text-muted-foreground mb-6">
              {quiz.questions} questions • {quiz.level}
            </p>
            
            <Button 
              className="cyber-button"
              onClick={() => navigate(`/quiz/${quiz.slug}`)}
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default QuizDetails;
