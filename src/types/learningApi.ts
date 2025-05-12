
// Types for our learning API

export interface IQuiz {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface ICodeExample {
  language: string;
  code: string;
  description?: string;
}

export interface ILearningItem {
  id: number;
  title: string;
  category: string;
  level: "basic" | "intermediate" | "advanced";
  description: string;
  content: string; // markdown content
  quiz?: IQuiz[];
  codeExamples?: ICodeExample[];
  dependencies?: string[];
  tags: string[];
  labCompatible: boolean;
  estimatedTime?: number; // in minutes
  author?: string;
  coverImage?: string;
}

export interface ICourseTrack {
  id: string;
  title: string;
  description: string;
  items: number[]; // IDs of learning items in sequence
  level: "beginner" | "intermediate" | "advanced";
  estimatedDuration: string; // e.g. "4 weeks"
}
