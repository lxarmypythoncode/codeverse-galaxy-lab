
import { ILearningPath } from "./learningTypes";

export const frontendPaths: ILearningPath[] = [
  {
    id: "frontend-fundamentals",
    title: "Frontend Web Development Fundamentals",
    description: "Master the core technologies of the web: HTML, CSS, and JavaScript",
    category: "frontend",
    level: "beginner",
    duration: "4 weeks",
    modules: [101, 102, 103, 104],
    coverImage: "/placeholder.svg",
    author: "Frontend Team"
  },
  {
    id: "modern-javascript",
    title: "Modern JavaScript Development",
    description: "Learn advanced ES6+ features and how to interact with APIs",
    category: "frontend",
    level: "intermediate",
    duration: "3 weeks",
    modules: [105, 106],
    coverImage: "/placeholder.svg",
    author: "JavaScript Expert"
  },
  {
    id: "react-development",
    title: "React.js Development",
    description: "Build modern interfaces with React and improve performance",
    category: "frontend",
    level: "intermediate",
    duration: "5 weeks",
    modules: [108, 107, 110],
    coverImage: "/placeholder.svg",
    author: "React Team"
  }
];

export const backendPaths: ILearningPath[] = [
  {
    id: "backend-fundamentals",
    title: "Backend Web Development Fundamentals",
    description: "Learn server-side programming with Node.js",
    category: "backend",
    level: "beginner",
    duration: "4 weeks",
    modules: [201],
    coverImage: "/placeholder.svg",
    author: "Backend Team"
  }
];

export const allLearningPaths: ILearningPath[] = [
  ...frontendPaths,
  ...backendPaths
];
