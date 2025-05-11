export interface IEditor {
  id: string;
  title: string;
  language: string;
  mode: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  defaultCode: string;
  documentationUrl: string;
}

export const editors: IEditor[] = [
  {
    id: 'html-css-js',
    title: 'HTML/CSS/JS Editor',
    language: 'Web',
    mode: 'html',
    description: 'Create and preview web pages with HTML, CSS, and JavaScript',
    category: 'frontend',
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeVerseLab</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #0f172a;
      color: #e2e8f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 20px;
      text-align: center;
    }

    .container {
      max-width: 800px;
      background-color: rgba(30, 41, 59, 0.8);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(56, 189, 248, 0.3);
    }

    h1 {
      color: #38bdf8;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      background-color: #38bdf8;
      color: #0f172a;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #0ea5e9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(56, 189, 248, 0.5);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to CodeVerseLab</h1>
    <p>This is a simple HTML, CSS, and JavaScript editor. Start coding and see the results instantly!</p>
    <button class="btn" id="changeBtn">Click Me!</button>
  </div>

  <script>
    // JavaScript goes here
    document.getElementById('changeBtn').addEventListener('click', function() {
      const colors = ['#38bdf8', '#8b5cf6', '#ec4899', '#f97316', '#a3e635'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.querySelector('h1').style.color = randomColor;
      this.textContent = 'Color Changed!';
      
      setTimeout(() => {
        this.textContent = 'Click Me Again!';
      }, 1000);
    });
  </script>
</body>
</html>`,
    documentationUrl: 'https://developer.mozilla.org/en-US/docs/Web'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    language: 'JavaScript',
    mode: 'javascript',
    description: 'Write and run JavaScript code with console output',
    category: 'frontend',
    defaultCode: `// JavaScript Editor
console.log("Welcome to CodeVerseLab JavaScript Editor!");

// Example function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Test our factorial function
for (let i = 1; i <= 10; i++) {
  console.log(\`Factorial of \${i} is: \${factorial(i)}\`);
}

// Example of array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Map numbers to their squares
const squares = numbers.map(num => num * num);
console.log("Squared numbers:", squares);

// Reduce to calculate sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// Working with objects
const person = {
  name: "Coding Explorer",
  age: 25,
  skills: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
  greet() {
    console.log(\`Hello, my name is \${this.name} and I'm \${this.age} years old.\`);
    console.log("My skills are:", this.skills.join(", "));
  }
};

person.greet();

// Try modifying this code and see the results in the console!`,
    documentationUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    id: 'react',
    title: 'React',
    language: 'React',
    mode: 'jsx',
    description: 'Build interactive UIs with React',
    category: 'frontend',
    defaultCode: `import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Simple Counter component
function Counter() {
  const [count, setCount] = useState(0);
  
  // Effect to update document title
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}

// Todo List component
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the app', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo('');
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="app">
      <h1>React Playground</h1>
      <div className="components">
        <Counter />
        <TodoList />
      </div>
    </div>
  );
}

// Render the App
ReactDOM.render(
  <App />,
  document.getElementById('root')
);`,
    documentationUrl: 'https://reactjs.org/docs/getting-started.html'
  },
  {
    id: 'python',
    title: 'Python',
    language: 'Python',
    mode: 'python',
    description: 'Write and run Python code',
    category: 'backend',
    defaultCode: `# Python Editor
print("Welcome to CodeVerseLab Python Editor!")

# Example function to calculate Fibonacci numbers
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Print the first 10 Fibonacci numbers
print("First 10 Fibonacci numbers:")
for i in range(10):
    print(f"fibonacci({i}) = {fibonacci(i)}")

# Example of list comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [x**2 for x in numbers]
print("Squares:", squares)

# Filter even numbers using list comprehension
even_numbers = [x for x in numbers if x % 2 == 0]
print("Even numbers:", even_numbers)

# Working with dictionaries
person = {
    "name": "Python Explorer",
    "age": 25,
    "skills": ["Python", "Django", "Flask", "NumPy", "Pandas"]
}

print(f"Name: {person['name']}")
print(f"Age: {person['age']}")
print(f"Skills: {', '.join(person['skills'])}")

# Example of a class
class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * (self.radius ** 2)
    
    def circumference(self):
        return 2 * 3.14159 * self.radius

# Create a Circle object with radius 5
circle = Circle(5)
print(f"Circle area: {circle.area():.2f}")
print(f"Circle circumference: {circle.circumference():.2f}")

# Try modifying this code and see the results!`,
    documentationUrl: 'https://docs.python.org/3/'
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    language: 'JavaScript',
    mode: 'javascript',
    description: 'Write and run server-side JavaScript with Node.js',
    category: 'backend',
    defaultCode: `// Node.js Editor
console.log("Welcome to CodeVerseLab Node.js Editor!");

// Example of working with modules in Node.js
const path = require('path');
const os = require('os');
const fs = require('fs');

// Path module examples
console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));
console.log("File extension:", path.extname(__filename));
console.log("Path object:", path.parse(__filename));

// OS module examples
console.log("OS platform:", os.platform());
console.log("OS architecture:", os.arch());
console.log("CPUs:", os.cpus().length);
console.log("Free memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Total memory:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Uptime:", (os.uptime() / 60 / 60).toFixed(2), "hours");

// Example of an HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  // This would normally run, but since we're in a sandbox, it's just for demonstration
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello from Node.js!</h1>');
});

// In a real environment, this would start the server
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// Example of working with files (won't actually create files in this sandbox)
const content = 'This is some content that would be written to a file.';

// In a real environment, this would write to a file
// fs.writeFile('example.txt', content, err => {
//   if (err) {
//     console.error('Error writing to file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });

// Example of a Promise-based delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Example of async/await
async function main() {
  console.log("Starting async operation...");
  await delay(1000); // Wait for 1 second
  console.log("One second has passed!");
  await delay(1000); // Wait for another second
  console.log("Two seconds have passed!");
  return "Done!";
}

// Execute the async function
main().then(result => console.log(result));`,
    documentationUrl: 'https://nodejs.org/en/docs/'
  },
  {
    id: 'sql',
    title: 'SQL',
    language: 'SQL',
    mode: 'sql',
    description: 'Write and test SQL queries',
    category: 'backend',
    defaultCode: `-- SQL Editor
-- Create a table for users
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data into the users table
INSERT INTO users (id, username, email) VALUES
    (1, 'johndoe', 'john@example.com'),
    (2, 'janedoe', 'jane@example.com'),
    (3, 'bobsmith', 'bob@example.com'),
    (4, 'alicejones', 'alice@example.com'),
    (5, 'mikebrown', 'mike@example.com');

-- Create a table for posts
CREATE TABLE posts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample data into the posts table
INSERT INTO posts (id, user_id, title, content) VALUES
    (1, 1, 'First Post', 'This is my first post!'),
    (2, 1, 'Second Post', 'This is another post by John.'),
    (3, 2, 'Hello World', 'My first post on this platform.'),
    (4, 3, 'SQL Tutorial', 'Learn SQL with these simple tips.'),
    (5, 3, 'Database Design', 'Best practices for database design.'),
    (6, 4, 'My Journey', 'My journey into programming.'),
    (7, 5, 'Tech News', 'Latest updates from the tech world.');

-- Create a table for comments
CREATE TABLE comments (
    id INTEGER PRIMARY KEY,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample data into the comments table
INSERT INTO comments (id, post_id, user_id, content) VALUES
    (1, 1, 2, 'Great first post!'),
    (2, 1, 3, 'Welcome to the platform!'),
    (3, 3, 1, 'Hello Jane!'),
    (4, 4, 2, 'Thanks for the SQL tips!'),
    (5, 4, 5, 'Very helpful tutorial.'),
    (6, 5, 4, 'I love database design!'),
    (7, 6, 3, 'Inspirational journey!'),
    (8, 7, 1, 'Keep us updated with more news!');

-- Example queries

-- 1. Select all users
SELECT * FROM users;

-- 2. Find all posts by a specific user
SELECT * FROM posts WHERE user_id = 1;

-- 3. Join tables to get posts with user information
SELECT 
    p.id as post_id, 
    p.title, 
    p.content, 
    u.username, 
    u.email 
FROM 
    posts p
JOIN 
    users u ON p.user_id = u.id;

-- 4. Count comments per post
SELECT 
    p.id as post_id, 
    p.title, 
    COUNT(c.id) as comment_count 
FROM 
    posts p
LEFT JOIN 
    comments c ON p.id = c.post_id
GROUP BY 
    p.id, p.title
ORDER BY 
    comment_count DESC;

-- 5. Find users who haven't made any posts
SELECT 
    u.id, 
    u.username 
FROM 
    users u
LEFT JOIN 
    posts p ON u.id = p.user_id
WHERE 
    p.id IS NULL;

-- Try writing your own queries below!`,
    documentationUrl: 'https://www.w3schools.com/sql/'
  },
  {
    id: 'java',
    title: 'Java',
    language: 'Java',
    mode: 'java',
    description: 'Write and run Java programs',
    category: 'backend',
    defaultCode: `// Java Editor
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to CodeVerseLab Java Editor!");
        
        // Example of basic Java syntax
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        
        // Calculate sum using enhanced for loop
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        System.out.println("Sum of numbers: " + sum);
        
        // Find max value
        int max = findMax(numbers);
        System.out.println("Maximum value: " + max);
        
        // Example of classes and objects
        Person person = new Person("Java Explorer", 25);
        person.addSkill("Java");
        person.addSkill("Spring");
        person.addSkill("Hibernate");
        person.addSkill("JUnit");
        
        // Print person information
        System.out.println("\\nPerson Information:");
        System.out.println(person);
        
        // Example of inheritance
        Student student = new Student("Coding Learner", 20, "Computer Science");
        student.addSkill("Java");
        student.addSkill("Data Structures");
        
        // Print student information
        System.out.println("\\nStudent Information:");
        System.out.println(student);
    }
    
    // Method to find maximum value in an array
    public static int findMax(int[] array) {
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array must not be empty");
        }
        
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
}

// Person class
class Person {
    private String name;
    private int age;
    private java.util.List<String> skills;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.skills = new java.util.ArrayList<>();
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void addSkill(String skill) {
        skills.add(skill);
    }
    
    public java.util.List<String> getSkills() {
        return skills;
    }
    
    @Override
    public String toString() {
        return "Name: " + name + "\\nAge: " + age + "\\nSkills: " + String.join(", ", skills);
    }
}

// Student class (inherits from Person)
class Student extends Person {
    private String major;
    
    public Student(String name, int age, String major) {
        super(name, age);
        this.major = major;
    }
    
    public String getMajor() {
        return major;
    }
    
    @Override
    public String toString() {
        return super.toString() + "\\nMajor: " + major;
    }
}`,
    documentationUrl: 'https://docs.oracle.com/en/java/'
  },
  {
    id: 'flutter',
    title: 'Flutter/Dart',
    language: 'Dart',
    mode: 'dart',
    description: 'Build cross-platform apps with Flutter and Dart',
    category: 'mobile',
    defaultCode: `// Flutter/Dart Editor
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CodeVerseLab Flutter',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        brightness: Brightness.dark,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;
  final List<String> _titles = ['Home', 'Search', 'Profile'];
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_titles[_currentIndex]),
        centerTitle: true,
        elevation: 0,
      ),
      body: IndexedStack(
        index: _currentIndex,
        children: [
          HomeTab(),
          SearchTab(),
          ProfileTab(),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (i) {
          setState(() {
            _currentIndex = i;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}

class HomeTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (context, index) {
        return Card(
          margin: EdgeInsets.all(8.0),
          child: ListTile(
            leading: CircleAvatar(
              child: Text('\${index + 1}'),
            ),
            title: Text('Item \${index + 1}'),
            subtitle: Text('Description for item \${index + 1}'),
            trailing: Icon(Icons.arrow_forward_ios),
            onTap: () {
              // Show a simple dialog when an item is tapped
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: Text('Item \${index + 1}'),
                  content: Text('You tapped on item \${index + 1}'),
                  actions: [
                    TextButton(
                      child: Text('Close'),
                      onPressed: () => Navigator.pop(context),
                    ),
                  ],
                ),
              );
            },
          ),
        );
      },
    );
  }
}

class SearchTab extends StatefulWidget {
  @override
  _SearchTabState createState() => _SearchTabState();
}

class _SearchTabState extends State<SearchTab> {
  final TextEditingController _searchController = TextEditingController();
  List<String> _searchResults = [];
  final List<String> _allItems = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
  ];
  
  void _performSearch(String query) {
    if (query.isEmpty) {
      setState(() {
        _searchResults = [];
      });
      return;
    }
    
    final results = _allItems
        .where((item) => item.toLowerCase().contains(query.toLowerCase()))
        .toList();
    
    setState(() {
      _searchResults = results;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: TextField(
            controller: _searchController,
            decoration: InputDecoration(
              hintText: 'Search...',
              prefixIcon: Icon(Icons.search),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10.0),
              ),
            ),
            onChanged: _performSearch,
          ),
        ),
        Expanded(
          child: _searchResults.isEmpty
              ? Center(
                  child: _searchController.text.isEmpty
                      ? Text('Search for items')
                      : Text('No results found'),
                )
              : ListView.builder(
                  itemCount: _searchResults.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(_searchResults[index]),
                      onTap: () {
                        // Clear search and show selected item
                        FocusScope.of(context).unfocus();
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text('Selected: \${_searchResults[index]}'),
                            duration: Duration(seconds: 1),
                          ),
                        );
                      },
                    );
                  },
                ),
        ),
      ],
    );
  }
}

class ProfileTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CircleAvatar(
            radius: 50,
            backgroundColor: Colors.blue,
            child: Icon(Icons.person, size: 50, color: Colors.white),
          ),
          SizedBox(height: 20),
          Text(
            'Flutter Developer',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 10),
          Text(
            'flutter@example.com',
            style: TextStyle(
              color: Colors.grey,
            ),
          ),
          SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              // Show profile edit dialog
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: Text('Edit Profile'),
                  content: Text('Profile editing would be implemented here.'),
                  actions: [
                    TextButton(
                      child: Text('Close'),
                      onPressed: () => Navigator.pop(context),
                    ),
                  ],
                ),
              );
            },
            child: Text('Edit Profile'),
          ),
        ],
      ),
    );
  }
}`,
    documentationUrl: 'https://flutter.dev/docs'
  },
  {
    id: 'swift',
    title: 'Swift',
    language: 'Swift',
    mode: 'swift',
    description: 'Write iOS and macOS applications with Swift',
    category: 'mobile',
    defaultCode: `// Swift Editor
import Foundation

print("Welcome to CodeVerseLab Swift Editor!")

// Example of Swift syntax and features

// Variables and constants
var name = "Swift Explorer"
let age = 28

print("Name: \\(name), Age: \\(age)")

// Arrays
var programmingLanguages = ["Swift", "Objective-C", "Java", "Kotlin", "Python"]
print("Programming languages: \\(programmingLanguages)")

// Add an element to the array
programmingLanguages.append("JavaScript")
print("Updated languages: \\(programmingLanguages)")

// Dictionaries
var skills = [
    "iOS": 5,
    "watchOS": 4,
    "macOS": 3,
    "tvOS": 2
]

print("Skills: \\(skills)")

// Add a new skill
skills["SwiftUI"] = 4
print("Updated skills: \\(skills)")

// Functions
func greet(_ person: String, from hometown: String) -> String {
    return "Hello \\(person)! Welcome to \\(hometown)!"
}

let greeting = greet("John", from: "San Francisco")
print(greeting)

// Control flow
let score = 85

if score >= 90 {
    print("A grade")
} else if score >= 80 {
    print("B grade")
} else if score >= 70 {
    print("C grade")
} else {
    print("Need improvement")
}

// Loops
print("\\nCounting from 1 to 5:")
for i in 1...5 {
    print("Number: \\(i)")
}

// Classes and Structs
struct Point {
    var x: Double
    var y: Double
    
    func distanceFromOrigin() -> Double {
        return sqrt(x*x + y*y)
    }
}

class Shape {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func describe() {
        print("This shape is a \\(name)")
    }
}

class Circle: Shape {
    var radius: Double
    
    init(radius: Double) {
        self.radius = radius
        super.init(name: "Circle")
    }
    
    func area() -> Double {
        return Double.pi * radius * radius
    }
    
    override func describe() {
        print("This circle has a radius of \\(radius) and area of \\(area())")
    }
}

// Create a point
let point = Point(x: 3.0, y: 4.0)
print("Distance from origin: \\(point.distanceFromOrigin())")

// Create a circle
let circle = Circle(radius: 5.0)
circle.describe()

// Optionals
var optionalName: String? = "Optional Example"
if let unwrappedName = optionalName {
    print("Optional name is: \\(unwrappedName)")
} else {
    print("Optional name is nil")
}

// Nil coalescing
let defaultName = "Default"
let userDisplayName = optionalName ?? defaultName
print("User display name: \\(userDisplayName)")

// Try modifying this code and see the results!`,
    documentationUrl: 'https://developer.apple.com/documentation/swift'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Tools',
    language: 'Bash',
    mode: 'bash',
    description: 'Learn and practice cybersecurity commands and tools',
    category: 'cyber',
    defaultCode: `#!/bin/bash
# Cybersecurity Tools Playground

echo "Welcome to CodeVerseLab Cybersecurity Tools!"
echo "This is a simulation of common cybersecurity tools and commands."
echo "-----------------------------------------------------------------"

# Simulated Network Scan
function network_scan() {
    echo "Running network scan on 192.168.1.0/24..."
    echo "Results:"
    
    # Generate simulated scan results
    echo "IP Address       MAC Address        Status    Hostname"
    echo "------------------------------------------------------"
    echo "192.168.1.1     00:11:22:33:44:55   Up       Router"
    echo "192.168.1.10    AA:BB:CC:DD:EE:FF   Up       Desktop-PC"
    echo "192.168.1.15    11:22:33:44:55:66   Up       Laptop"
    echo "192.168.1.20    AA:BB:CC:11:22:33   Up       Mobile-Device"
    echo "192.168.1.25    No response         Down     Unknown"
    echo "192.168.1.30    55:66:77:88:99:AA   Up       IoT-Device"
    echo "------------------------------------------------------"
    echo "Scan completed! 5 active hosts found."
}

# Simulated Port Scan
function port_scan() {
    local target=$1
    echo "Running port scan on $target..."
    echo "Results:"
    
    # Generate simulated scan results
    echo "Port    State    Service"
    echo "-----------------------"
    echo "22      Open     SSH"
    echo "80      Open     HTTP"
    echo "443     Open     HTTPS"
    echo "445     Closed   SMB"
    echo "3306    Open     MySQL"
    echo "3389    Filtered RDP"
    echo "-----------------------"
    echo "Scan completed! 4 open ports found."
}

# Simulated Password Strength Checker
function password_check() {
    local password=$1
    echo "Checking password strength for: $password"
    
    # Calculate basic metrics
    local length=\${#password}
    local has_lower=\$(echo "$password" | grep -c "[a-z]")
    local has_upper=\$(echo "$password" | grep -c "[A-Z]")
    local has_digit=\$(echo "$password" | grep -c "[0-9]")
    local has_special=\$(echo "$password" | grep -c "[^a-zA-Z0-9]")
    
    # Calculate score
    local score=0
    [[ $length -ge 8 ]] && ((score+=1))
    [[ $length -ge 12 ]] && ((score+=1))
    [[ $has_lower -gt 0 ]] && ((score+=1))
    [[ $has_upper -gt 0 ]] && ((score+=1))
    [[ $has_digit -gt 0 ]] && ((score+=1))
    [[ $has_special -gt 0 ]] && ((score+=1))
    
    # Display results
    echo "Results:"
    echo "- Length: $length characters"
    echo "- Contains lowercase: $([[ $has_lower -gt 0 ]] && echo "Yes" || echo "No")"
    echo "- Contains uppercase: $([[ $has_upper -gt 0 ]] && echo "Yes" || echo "No")"
    echo "- Contains digits: $([[ $has_digit -gt 0 ]] && echo "Yes" || echo "No")"
    echo "- Contains special chars: $([[ $has_special -gt 0 ]] && echo "Yes" || echo "No")"
    
    echo -n "Password strength: "
    if [[ $score -le 2 ]]; then
        echo "Weak (Score: $score/6)"
    elif [[ $score -le 4 ]]; then
        echo "Medium (Score: $score/6)"
    else
        echo "Strong (Score: $score/6)"
    fi
    
    # Calculate time to crack (simulated)
    echo "Estimated time to crack:"
    if [[ $score -le 2 ]]; then
        echo "Seconds to minutes"
    elif [[ $score -le 4 ]]; then
        echo "Days to months"
    else
        echo "Years to centuries"
    fi
}

# Simulated Encryption/Decryption
function encrypt_message() {
    local message=$1
    local key=$2
    
    echo "Encrypting message with key: $key"
    
    # Simple XOR encryption (for demonstration only)
    encrypted=""
    for (( i=0; i<\${#message}; i++ )); do
        char="\${message:\$i:1}"
        ascii_val=\$(printf "%d" "'$char")
        key_char="\${key:\$((\$i % \${#key})):1}"
        key_val=\$(printf "%d" "'$key_char")
        
        # XOR operation
        encrypted_val=\$((\$ascii_val ^ \$key_val))
        encrypted+=\$(printf "\\\\x%02x" \$encrypted_val)
    done
    
    echo "Original message: $message"
    echo "Encrypted (hex): $encrypted"
    echo "Note: This is a simple demonstration. Always use proper encryption libraries in real applications!"
}

# Simulated Hash Generator
function generate_hash() {
    local input=$1
    
    echo "Generating hash values for: $input"
    
    # Simulate hash values (not actual hashes)
    echo "MD5:      \$(echo -n "$input" | md5sum | cut -d ' ' -f 1)"
    echo "SHA-1:    \$(echo -n "$input" | sha1sum | cut -d ' ' -f 1)"
    echo "SHA-256:  \$(echo -n "$input" | sha256sum | cut -d ' ' -f 1)"
    echo "SHA-512:  \$(echo -n "$input" | sha512sum | cut -d ' ' -f 1)"
}

# Simulated Log Analysis
function analyze_logs() {
    echo "Analyzing system logs for suspicious activities..."
    
    # Simulated log entries
    echo "Example log entries:"
    echo "[2023-05-10 08:23:15] Failed login attempt from IP: 198.51.100.17"
    echo "[2023-05-10 08:23:20] Failed login attempt from IP: 198.51.100.17"
    echo "[2023-05-10 08:23:25] Failed login attempt from IP: 198.51.100.17"
    echo "[2023-05-10 08:23:30] Failed login attempt from IP: 198.51.100.17"
    echo "[2023-05-10 08:23:35] Failed login attempt from IP: 198.51.100.17"
    echo "[2023-05-10 08:23:40] User account locked: admin"
    echo "[2023-05-10 09:45:22] Successful login from IP: 192.168.1.100"
    echo "[2023-05-10 10:12:17] File accessed: /etc/passwd by user: www-data"
    echo "[2023-05-10 10:15:30] Unusual outbound connection to IP: 203.0.113.42:4444"
    
    echo ""
    echo "Security alerts:"
    echo "⚠️ Multiple failed login attempts detected from IP: 198.51.100.17"
    echo "⚠️ Possible brute force attack"
    echo "⚠️ Suspicious file access: /etc/passwd by user: www-data"
    echo "⚠️ Potential backdoor connection to IP: 203.0.113.42:4444"
}

# Simulated Secure Configuration Checker
function security_check() {
    echo "Running security configuration check..."
    
    # Simulated checks
    echo "Firewall Status: Enabled"
    echo "SSH Root Login: Disabled (Good)"
    echo "Password Authentication: Enabled (Consider using key-based authentication)"
    echo "Default Ports: Some services using default ports (Risk: Medium)"
    echo "Outdated Packages: 3 packages need updates (Risk: High)"
    echo "File Permissions: Some system files with incorrect permissions (Risk: High)"
    echo "User Accounts: 1 inactive account found (Risk: Low)"
    echo "Security Updates: System is 35 days behind on security patches (Risk: Critical)"
    
    echo ""
    echo "Overall Security Score: 65/100"
    echo "Recommendation: Address critical and high-risk findings immediately"
}

# Main menu
echo "Choose a cybersecurity tool to simulate:"
echo "1. Network Scan"
echo "2. Port Scan (target: 192.168.1.10)"
echo "3. Password Strength Check (password: P@ssw0rd123)"
echo "4. Encrypt Message (message: 'Secret message', key: 'key123')"
echo "5. Generate Hash Values (input: 'Cybersecurity')"
echo "6. Log Analysis"
echo "7. Security Configuration Check"

# Automatically run all examples
echo ""
echo "RUNNING ALL EXAMPLES:"
echo "====================="

echo ""
echo "1. NETWORK SCAN:"
echo "----------------"
network_scan
echo ""

echo "2. PORT SCAN:"
echo "------------"
port_scan "192.168.1.10"
echo ""

echo "3. PASSWORD CHECK:"
echo "----------------"
password_check "P@ssw0rd123"
echo ""

echo "4. ENCRYPTION:"
echo "-------------"
encrypt_message "Secret message" "key123"
echo ""

echo "5. HASH GENERATION:"
echo "-----------------"
generate_hash "Cybersecurity"
echo ""

echo "6. LOG ANALYSIS:"
echo "--------------"
analyze_logs
echo ""

echo "7. SECURITY CHECK:"
echo "----------------"
security_check
echo ""

echo "This is a simulated environment. In a real security context,"
echo "you would use actual tools like Nmap, Metasploit, Wireshark, etc."
`,
    documentationUrl: 'https://owasp.org/www-project-top-ten/'
  }
];
