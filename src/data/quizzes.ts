
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
    title: "HTML & CSS Basics", 
    category: "frontend", 
    level: "beginner", 
    questions: 15, 
    timeMinutes: 20,
    description: "Test your understanding of HTML structure and CSS styling basics.",
    slug: "html-css-basics"
  },
  { 
    id: 2, 
    title: "JavaScript Fundamentals", 
    category: "frontend", 
    level: "beginner", 
    questions: 15, 
    timeMinutes: 20,
    description: "Test your knowledge of JavaScript basics including variables, functions, and DOM manipulation.",
    slug: "javascript-fundamentals"
  },
  { 
    id: 3, 
    title: "React Fundamentals", 
    category: "frontend", 
    level: "intermediate", 
    questions: 15, 
    timeMinutes: 20,
    description: "Test your understanding of React basics, components, and hooks.",
    slug: "react-fundamentals"
  },
  { 
    id: 4, 
    title: "Node.js Advanced", 
    category: "backend", 
    level: "advanced", 
    questions: 25, 
    timeMinutes: 30,
    description: "Challenge yourself with advanced Node.js concepts and patterns.",
    slug: "nodejs-advanced"
  },
  { 
    id: 5, 
    title: "Python Basics", 
    category: "backend", 
    level: "beginner", 
    questions: 15, 
    timeMinutes: 20,
    description: "Learn the fundamentals of Python programming language.",
    slug: "python-basics"
  },
  { 
    id: 6, 
    title: "Java Programming", 
    category: "backend", 
    level: "intermediate", 
    questions: 20, 
    timeMinutes: 25,
    description: "Test your knowledge of Java programming language and OOP concepts.",
    slug: "java-programming"
  },
  { 
    id: 7, 
    title: "Fullstack Development", 
    category: "fullstack", 
    level: "intermediate", 
    questions: 20, 
    timeMinutes: 25,
    description: "Test your skills in both frontend and backend development.",
    slug: "fullstack-development"
  },
  { 
    id: 8, 
    title: "Cyber Security Basics", 
    category: "cyber", 
    level: "beginner", 
    questions: 18, 
    timeMinutes: 22,
    description: "Learn about common security vulnerabilities and best practices.",
    slug: "cyber-security-basics"
  },
  { 
    id: 9, 
    title: "Flutter App Development", 
    category: "mobile", 
    level: "intermediate", 
    questions: 22, 
    timeMinutes: 28,
    description: "Test your knowledge of Flutter widgets and state management.",
    slug: "flutter-app-development"
  },
  { 
    id: 10, 
    title: "TypeScript Mastery", 
    category: "frontend", 
    level: "advanced", 
    questions: 20, 
    timeMinutes: 25,
    description: "Advanced TypeScript types, patterns and best practices.",
    slug: "typescript-mastery"
  },
  { 
    id: 11, 
    title: "CSS Grid & Flexbox", 
    category: "frontend", 
    level: "intermediate", 
    questions: 15, 
    timeMinutes: 18,
    description: "Master modern CSS layout techniques with Grid and Flexbox.",
    slug: "css-grid-flexbox"
  },
  { 
    id: 12, 
    title: "MongoDB Essentials", 
    category: "backend", 
    level: "beginner", 
    questions: 20, 
    timeMinutes: 25,
    description: "Learn the fundamentals of MongoDB database and operations.",
    slug: "mongodb-essentials"
  },
  { 
    id: 13, 
    title: "API Design Best Practices", 
    category: "backend", 
    level: "intermediate", 
    questions: 18, 
    timeMinutes: 22,
    description: "Design robust and scalable APIs with best practices.",
    slug: "api-design-practices"
  },
  { 
    id: 14, 
    title: "Kotlin for Android", 
    category: "mobile", 
    level: "beginner", 
    questions: 20, 
    timeMinutes: 24,
    description: "Start your Android development journey with Kotlin.",
    slug: "kotlin-android"
  },
  {
    id: 15,
    title: "PHP & MySQL",
    category: "backend",
    level: "beginner",
    questions: 18,
    timeMinutes: 22,
    description: "Learn the basics of PHP programming and MySQL database integration.",
    slug: "php-mysql"
  }
];

export const questions: IQuestion[] = [
  // HTML & CSS Basics
  {
    id: 1,
    quizId: 1,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<url>"
    ],
    correctOption: 0,
    explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML, with the href attribute specifying the link's destination."
  },
  {
    id: 2,
    quizId: 1,
    question: "In CSS, how do you select an element with the class 'header'?",
    options: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    correctOption: 1,
    explanation: "In CSS, classes are selected using a period/dot (.) followed by the class name. So .header selects all elements with class='header'."
  },
  {
    id: 3,
    quizId: 1,
    question: "Which CSS property is used to change the text color?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctOption: 2,
    explanation: "The 'color' property is used to set the color of text in CSS."
  },
  
  // JavaScript Fundamentals
  {
    id: 4,
    quizId: 2,
    question: "What is the correct way to declare a JavaScript variable?",
    options: [
      "var myVar;",
      "variable myVar;",
      "v myVar;",
      "$myVar = 10;"
    ],
    correctOption: 0,
    explanation: "In JavaScript, variables are declared using the var, let, or const keywords. The example 'var myVar;' is the correct syntax for declaring a variable named myVar."
  },
  {
    id: 5,
    quizId: 2,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');"
    ],
    correctOption: 3,
    explanation: "The alert() function is used to display an alert box with a specified message and an OK button."
  },
  {
    id: 6,
    quizId: 2,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      "onmouseover",
      "onclick",
      "onchange",
      "onmouseclick"
    ],
    correctOption: 1,
    explanation: "The onclick event occurs when the user clicks on an HTML element. It's one of the most common events used in JavaScript for interactivity."
  },
  
  // React Fundamentals
  {
    id: 7,
    quizId: 3,
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
    id: 8,
    quizId: 3,
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
    id: 9,
    quizId: 3,
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

  // Python Basics
  {
    id: 10,
    quizId: 5,
    question: "How do you create a comment in Python?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "<!-- This is a comment -->"
    ],
    correctOption: 2,
    explanation: "In Python, comments start with the # character and extend to the end of the line."
  },
  {
    id: 11,
    quizId: 5,
    question: "Which of the following is the correct way to create a function in Python?",
    options: [
      "function myFunction():",
      "def myFunction():",
      "create myFunction():",
      "func myFunction():"
    ],
    correctOption: 1,
    explanation: "In Python, functions are defined using the 'def' keyword followed by the function name and parentheses."
  },
  {
    id: 12,
    quizId: 5,
    question: "What does the len() function do in Python?",
    options: [
      "Returns the largest item in an iterable",
      "Returns the length of an object",
      "Returns a Boolean value",
      "Returns the smallest item in an iterable"
    ],
    correctOption: 1,
    explanation: "The len() function returns the number of items in an object. For strings, it returns the number of characters."
  },

  // Java Programming
  {
    id: 13,
    quizId: 6,
    question: "Which keyword is used to define a class in Java?",
    options: [
      "struct",
      "define",
      "class",
      "object"
    ],
    correctOption: 2,
    explanation: "In Java, the 'class' keyword is used to define a class, which is a blueprint for creating objects."
  },
  {
    id: 14,
    quizId: 6,
    question: "What is the correct way to declare a main method in Java?",
    options: [
      "public void main(String[] args)",
      "public static void main()",
      "public static void main(String[] args)",
      "static void main(String args[])"
    ],
    correctOption: 2,
    explanation: "The main method in Java must be declared as 'public static void main(String[] args)' to be recognized as the entry point of a Java program."
  },
  {
    id: 15,
    quizId: 6,
    question: "Which access modifier makes a variable accessible only within its own class?",
    options: [
      "public",
      "protected",
      "default (no modifier)",
      "private"
    ],
    correctOption: 3,
    explanation: "The 'private' access modifier restricts access to only within the declared class, providing the highest level of encapsulation."
  },

  // Additional questions for the rest of the quizzes can be added here
  {
    id: 16,
    quizId: 4,
    question: "Which Node.js module is used to create a server?",
    options: [
      "server",
      "http",
      "fs",
      "net"
    ],
    correctOption: 1,
    explanation: "The 'http' module in Node.js provides functionality for creating HTTP servers and making HTTP requests."
  },
  {
    id: 17,
    quizId: 9,
    question: "Which widget is used to create a scrollable list in Flutter?",
    options: [
      "ScrollView",
      "ListView",
      "GridView",
      "Column"
    ],
    correctOption: 1,
    explanation: "ListView is the most commonly used widget in Flutter for creating a scrollable list of children that are lazily built on demand."
  },
  {
    id: 18,
    quizId: 8,
    question: "What does SQL injection attack target?",
    options: [
      "Network hardware",
      "Database queries",
      "Operating system",
      "Web server configuration"
    ],
    correctOption: 1,
    explanation: "SQL injection attacks target database queries by inserting malicious SQL code that can manipulate the database when executed."
  },
  {
    id: 19,
    quizId: 14,
    question: "What makes Kotlin different from Java?",
    options: [
      "Kotlin doesn't support object-oriented programming",
      "Kotlin requires semicolons at the end of statements",
      "Kotlin has built-in null safety features",
      "Kotlin can only be used for Android development"
    ],
    correctOption: 2,
    explanation: "One of Kotlin's key features is its built-in null safety, which helps prevent NullPointerExceptions that are common in Java."
  },
  {
    id: 20,
    quizId: 15,
    question: "Which function is used to connect to a MySQL database in PHP?",
    options: [
      "mysql_create()",
      "mysql_connect()",
      "mysqli_connect()",
      "php_mysql_connect()"
    ],
    correctOption: 2,
    explanation: "The mysqli_connect() function is used in PHP to establish a connection to a MySQL database. The older mysql_connect() function is deprecated."
  }
];

export const leaderboard = [
  {
    id: 1,
    username: "WebDeveloper",
    title: "Frontend Master",
    points: 950,
    quizzes: 14
  },
  {
    id: 2,
    username: "ServerSage",
    title: "Backend Guru",
    points: 900,
    quizzes: 13
  },
  {
    id: 3,
    username: "FullStackNinja",
    title: "Fullstack Developer",
    points: 850,
    quizzes: 12
  },
  {
    id: 4,
    username: "MobileWizard",
    title: "Mobile Developer",
    points: 800,
    quizzes: 11
  },
  {
    id: 5,
    username: "CyberGuard",
    title: "Security Specialist",
    points: 750,
    quizzes: 10
  },
  {
    id: 6,
    username: "CodeMaster",
    title: "Programming Expert",
    points: 720,
    quizzes: 9
  },
  {
    id: 7,
    username: "DevGuru",
    title: "Tech Specialist",
    points: 690,
    quizzes: 9
  },
  {
    id: 8,
    username: "AlgorithmAce",
    title: "Code Challenger",
    points: 650,
    quizzes: 8
  },
  {
    id: 9,
    username: "DataDriven",
    title: "Database Expert",
    points: 620,
    quizzes: 7
  },
  {
    id: 10,
    username: "UXCreator",
    title: "UI Designer",
    points: 580,
    quizzes: 6
  }
];
