
export interface IQuiz {
  id: number;
  title: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  level: 'beginner' | 'intermediate' | 'advanced';
  questions: number;
  timeMinutes: number;
  description: string;
  slug: string;
}

export interface IQuestion {
  id: number;
  quizId: number;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export const quizzes: IQuiz[] = [
  { 
    id: 1, 
    title: "React Fundamentals", 
    category: "frontend", 
    level: "beginner", 
    questions: 15, 
    timeMinutes: 20,
    description: "Test your understanding of React basics, components, and hooks.",
    slug: "react-fundamentals"
  },
  { 
    id: 2, 
    title: "Node.js Advanced", 
    category: "backend", 
    level: "advanced", 
    questions: 25, 
    timeMinutes: 30,
    description: "Challenge yourself with advanced Node.js concepts and patterns.",
    slug: "nodejs-advanced"
  },
  { 
    id: 3, 
    title: "Fullstack Development", 
    category: "fullstack", 
    level: "intermediate", 
    questions: 20, 
    timeMinutes: 25,
    description: "Test your skills in both frontend and backend development.",
    slug: "fullstack-development"
  },
  { 
    id: 4, 
    title: "Cyber Security Basics", 
    category: "cyber", 
    level: "beginner", 
    questions: 18, 
    timeMinutes: 22,
    description: "Learn about common security vulnerabilities and best practices.",
    slug: "cyber-security-basics"
  },
  { 
    id: 5, 
    title: "Flutter App Development", 
    category: "mobile", 
    level: "intermediate", 
    questions: 22, 
    timeMinutes: 28,
    description: "Test your knowledge of Flutter widgets and state management.",
    slug: "flutter-app-development"
  },
  { 
    id: 6, 
    title: "TypeScript Mastery", 
    category: "frontend", 
    level: "advanced", 
    questions: 20, 
    timeMinutes: 25,
    description: "Advanced TypeScript types, patterns and best practices.",
    slug: "typescript-mastery"
  },
  { 
    id: 7, 
    title: "CSS Grid & Flexbox", 
    category: "frontend", 
    level: "intermediate", 
    questions: 15, 
    timeMinutes: 18,
    description: "Master modern CSS layout techniques with Grid and Flexbox.",
    slug: "css-grid-flexbox"
  },
  { 
    id: 8, 
    title: "MongoDB Essentials", 
    category: "backend", 
    level: "beginner", 
    questions: 20, 
    timeMinutes: 25,
    description: "Learn the fundamentals of MongoDB database and operations.",
    slug: "mongodb-essentials"
  },
  { 
    id: 9, 
    title: "API Design Best Practices", 
    category: "backend", 
    level: "intermediate", 
    questions: 18, 
    timeMinutes: 22,
    description: "Design robust and scalable APIs with best practices.",
    slug: "api-design-practices"
  },
  { 
    id: 10, 
    title: "Kotlin for Android", 
    category: "mobile", 
    level: "beginner", 
    questions: 20, 
    timeMinutes: 24,
    description: "Start your Android development journey with Kotlin.",
    slug: "kotlin-android"
  }
];

export const questions: IQuestion[] = [
  {
    id: 1,
    quizId: 1, // React Fundamentals
    question: "What is the purpose of the useEffect Hook in React?",
    options: [
      "To perform side effects in function components",
      "To create new state variables in components",
      "To optimize rendering performance",
      "To communicate between parent and child components"
    ],
    correctOption: 0,
    explanation: "useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM."
  },
  {
    id: 2,
    quizId: 1, // React Fundamentals
    question: "Which function is used to update state in class components?",
    options: [
      "this.changeState()",
      "this.updateState()",
      "this.setState()",
      "this.modifyState()"
    ],
    correctOption: 2,
    explanation: "this.setState() is the correct method used to update state in React class components."
  },
  {
    id: 3,
    quizId: 1, // React Fundamentals
    question: "What is the correct way to pass a prop called 'name' to a component?",
    options: [
      "<Component name=\"John\" />",
      "<Component name={John} />",
      "<Component {name=\"John\"} />",
      "<Component [name]=\"John\" />"
    ],
    correctOption: 0,
    explanation: "Props are passed as attributes in JSX. String literals are passed with quotes, while expressions use curly braces."
  },
  // Add more questions as needed
];

export const leaderboard = [
  {
    id: 1,
    username: "User10010",
    title: "Frontend Master",
    points: 950,
    quizzes: 14
  },
  {
    id: 2,
    username: "User20020",
    title: "Backend Guru",
    points: 900,
    quizzes: 13
  },
  {
    id: 3,
    username: "User30030",
    title: "Fullstack Developer",
    points: 850,
    quizzes: 12
  },
  {
    id: 4,
    username: "User40040",
    title: "Mobile Developer",
    points: 800,
    quizzes: 11
  },
  {
    id: 5,
    username: "User50050",
    title: "Security Specialist",
    points: 750,
    quizzes: 10
  }
];
