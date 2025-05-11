
export interface IModule {
  id: number;
  title: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  content: string;
  imageUrl: string;
  authorName: string;
  duration: number; // in minutes
  tags: string[];
  slug: string;
}

export const modules: IModule[] = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    category: "frontend",
    level: "intermediate",
    description: "Master the power of React Hooks to build efficient function components",
    content: `# React Hooks Deep Dive

React Hooks have revolutionized how we write React components. In this module, we'll explore each hook in detail and look at common patterns.

## useState Hook

The useState hook allows you to add state to function components:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in function components:

\`\`\`jsx
function Example() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(result => setData(result));
    
    return () => {
      // Cleanup code
    };
  }, []);
  
  // Component code
}
\`\`\`

## Custom Hooks

You can create your own hooks to reuse stateful logic between components:

\`\`\`jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}
\`\`\`

Practice building your own custom hooks to encapsulate complex logic!`,
    imageUrl: "/placeholder.svg",
    authorName: "React Expert",
    duration: 45,
    tags: ["react", "hooks", "frontend", "javascript"],
    slug: "react-hooks-deep-dive"
  },
  {
    id: 2,
    title: "Node.js Performance Optimization",
    category: "backend",
    level: "advanced",
    description: "Learn techniques to optimize your Node.js applications for maximum performance",
    content: `# Node.js Performance Optimization

Performance optimization is crucial for building scalable Node.js applications. In this module, we'll explore various techniques to make your Node.js apps faster and more efficient.

## Memory Profiling

Node.js provides tools for monitoring memory usage:

\`\`\`javascript
const memoryUsage = process.memoryUsage();
console.log(memoryUsage);
\`\`\`

## Worker Threads

For CPU-intensive tasks, use Worker Threads to avoid blocking the main event loop:

\`\`\`javascript
const { Worker } = require('worker_threads');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./service.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(\`Worker stopped with exit code \${code}\`));
    });
  });
}
\`\`\`

## Caching Strategies

Implement caching to reduce database and API calls:

\`\`\`javascript
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

function getUser(userId) {
  const cachedUser = myCache.get(userId);
  if (cachedUser) return Promise.resolve(cachedUser);
  
  return db.findUser(userId)
    .then(user => {
      myCache.set(userId, user);
      return user;
    });
}
\`\`\`

Practice implementing these techniques in your own Node.js applications!`,
    imageUrl: "/placeholder.svg",
    authorName: "Node.js Specialist",
    duration: 60,
    tags: ["node.js", "backend", "performance", "optimization"],
    slug: "nodejs-performance-optimization"
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    category: "frontend",
    level: "beginner",
    description: "Get started with TypeScript and strongly typed JavaScript programming",
    content: `# Introduction to TypeScript

TypeScript adds static typing to JavaScript, helping you catch errors early and improve code quality. This module covers the basics to get you started.

## Basic Types

TypeScript provides several types for variables:

\`\`\`typescript
// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Special types
let notSure: any = 4;
let u: undefined = undefined;
let n: null = null;
\`\`\`

## Interfaces

Interfaces define contracts for objects:

\`\`\`typescript
interface User {
  name: string;
  id: number;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}

function createUser(user: User): User {
  return user;
}

const newUser = createUser({
  name: "Alice",
  id: 1,
  createdAt: new Date()
});
\`\`\`

## Functions

TypeScript allows you to type function parameters and return values:

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

// Optional and default parameters
function buildName(firstName: string, lastName?: string): string {
  return lastName ? firstName + " " + lastName : firstName;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

Start using TypeScript in your projects today to improve code quality!`,
    imageUrl: "/placeholder.svg",
    authorName: "TypeScript Developer",
    duration: 30,
    tags: ["typescript", "javascript", "frontend", "beginner"],
    slug: "introduction-to-typescript"
  },
  {
    id: 4,
    title: "API Security Best Practices",
    category: "cyber",
    level: "intermediate",
    description: "Learn how to secure your APIs against common threats and vulnerabilities",
    content: `# API Security Best Practices

Securing your APIs is crucial in the modern web. This module covers essential security measures for protecting your API endpoints.

## Authentication & Authorization

Implement proper authentication and authorization:

\`\`\`javascript
// Using JWT for authentication
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
\`\`\`

## Rate Limiting

Implement rate limiting to prevent abuse:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

app.use('/api/', apiLimiter);
\`\`\`

## Input Validation

Always validate incoming data:

\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/user',
  body('username').isAlphanumeric().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Process the request
  }
);
\`\`\`

Apply these practices to secure your APIs and protect your users' data!`,
    imageUrl: "/placeholder.svg",
    authorName: "Security Expert",
    duration: 55,
    tags: ["security", "api", "cyber", "authentication"],
    slug: "api-security-best-practices"
  },
  {
    id: 5,
    title: "Flutter State Management",
    category: "mobile",
    level: "intermediate",
    description: "Explore different state management solutions in Flutter applications",
    content: `# Flutter State Management

Effective state management is crucial for building robust Flutter apps. This module covers various approaches to managing state in Flutter.

## setState

The simplest form of state management:

\`\`\`dart
class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}
\`\`\`

## Provider

A recommended approach for many Flutter apps:

\`\`\`dart
// Create a data model
class CounterModel with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// Use it in your app
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

// Consume the model
class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: \${context.watch<CounterModel>().count}'),
        ElevatedButton(
          onPressed: () => context.read<CounterModel>().increment(),
          child: Text('Increment'),
        ),
      ],
    );
  }
}
\`\`\`

## Bloc/Cubit

For more complex applications:

\`\`\`dart
// Define states
abstract class CounterState {
  final int count;
  CounterState(this.count);
}

class CounterInitial extends CounterState {
  CounterInitial() : super(0);
}

class CounterUpdated extends CounterState {
  CounterUpdated(int count) : super(count);
}

// Define events
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}

// Create the bloc
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterInitial()) {
    on<IncrementEvent>((event, emit) {
      emit(CounterUpdated(state.count + 1));
    });
  }
}
\`\`\`

Choose the right state management solution based on your app's complexity!`,
    imageUrl: "/placeholder.svg",
    authorName: "Flutter Developer",
    duration: 40,
    tags: ["flutter", "mobile", "state management", "dart"],
    slug: "flutter-state-management"
  },
  {
    id: 6,
    title: "MongoDB Aggregation Pipeline",
    category: "backend",
    level: "advanced",
    description: "Master the powerful MongoDB aggregation framework for complex data processing",
    content: `# MongoDB Aggregation Pipeline

MongoDB's aggregation framework provides powerful tools for processing and analyzing data. This module explores advanced aggregation techniques.

## Basic Aggregation

\`\`\`javascript
db.orders.aggregate([
  { $match: { status: "active" } },
  { $group: {
      _id: "$customerId",
      totalAmount: { $sum: "$amount" },
      count: { $sum: 1 }
    }
  },
  { $sort: { totalAmount: -1 } }
]);
\`\`\`

## Complex Aggregations

Add lookups and projections:

\`\`\`javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerInfo"
    }
  },
  { $unwind: "$customerInfo" },
  { $project: {
      _id: 0,
      orderId: "$_id",
      customerName: "$customerInfo.name",
      amount: 1,
      date: 1
    }
  },
  { $sort: { date: -1 } },
  { $limit: 10 }
]);
\`\`\`

## Aggregation with Arrays

Working with arrays and array operators:

\`\`\`javascript
db.products.aggregate([
  { $unwind: "$categories" },
  { $group: {
      _id: "$categories",
      count: { $sum: 1 },
      averagePrice: { $avg: "$price" }
    }
  },
  { $sort: { count: -1 } }
]);
\`\`\`

Use these techniques to transform and analyze your MongoDB data efficiently!`,
    imageUrl: "/placeholder.svg",
    authorName: "Database Engineer",
    duration: 50,
    tags: ["mongodb", "backend", "database", "aggregation"],
    slug: "mongodb-aggregation-pipeline"
  }
];
