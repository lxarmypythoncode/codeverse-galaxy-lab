
// src/pages/Quiz/QuizDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { quizzes } from '@/data/quizzes';

const QuizDetails = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  
  // Find the quiz with the matching ID
  const quiz = quizzes.find(q => q.id.toString() === quizId);

  if (!quiz) {
    return (
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
            <p>Quiz not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
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
        <CardHeader>
          <CardTitle>{quiz.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{quiz.description}</p>
          <p className="text-sm text-muted-foreground mb-6">
            {quiz.questions} questions • {quiz.level}
          </p>
          
          <Button onClick={() => alert('Starting quiz...')}>
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizDetails;
