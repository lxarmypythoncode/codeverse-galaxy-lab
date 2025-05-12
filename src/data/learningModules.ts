
import { IModule } from "./learningTypes";

export const frontendModules: IModule[] = [
  {
    id: 101,
    title: "HTML5 Fundamentals",
    category: "frontend",
    level: "beginner",
    description: "Learn the foundation of web pages with modern HTML5 elements and structure",
    content: `# HTML5 Fundamentals

HTML5 is the foundation of any web page. In this module, we'll explore the key elements and structure of modern HTML documents.

## Document Structure

Every HTML5 document follows this basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <h1>Hello World!</h1>
  <!-- Content goes here -->
</body>
</html>
\`\`\`

## Semantic Elements

HTML5 introduced semantic elements that give meaning to your structure:

\`\`\`html
<header>Site or section header</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Independent, self-contained content</article>
<section>Thematic grouping of content</section>
<aside>Related but separate content</aside>
<footer>Site or section footer</footer>
\`\`\`

## Forms

Forms in HTML5 have improved validation and new input types:

\`\`\`html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  
  <label for="url">Website:</label>
  <input type="url" id="url">
  
  <label for="date">Date:</label>
  <input type="date" id="date">
  
  <button type="submit">Submit</button>
</form>
\`\`\`

## Tables

Tables should be used for tabular data only:

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>
\`\`\`

Practice creating semantic, accessible HTML pages to build a solid foundation!`,
    imageUrl: "/placeholder.svg",
    authorName: "HTML Expert",
    duration: 35,
    tags: ["html", "html5", "semantic", "forms", "frontend"],
    slug: "html5-fundamentals"
  },
  {
    id: 102,
    title: "CSS3 Layout Mastery",
    category: "frontend",
    level: "beginner",
    description: "Master CSS layout techniques with flexbox, grid, and responsive design principles",
    content: `# CSS3 Layout Mastery

Modern CSS provides powerful layout systems that make complex designs easier than ever.

## Flexbox Layout

Flexbox is perfect for one-dimensional layouts:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin: 10px;
}
\`\`\`

## CSS Grid

CSS Grid is ideal for two-dimensional layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.header {
  grid-column: 1 / -1; /* Spans all columns */
}
\`\`\`

## Media Queries

Make your designs responsive with media queries:

\`\`\`css
/* Base styles for mobile */
.container {
  flex-direction: column;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
\`\`\`

## CSS Animations

Add motion to your elements with animations:

\`\`\`css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated {
  animation: fade-in 1s ease-out;
}
\`\`\`

Apply these techniques to build flexible, responsive layouts for your web projects!`,
    imageUrl: "/placeholder.svg",
    authorName: "CSS Layout Expert",
    duration: 45,
    tags: ["css", "css3", "flexbox", "grid", "responsive", "frontend"],
    slug: "css3-layout-mastery"
  },
  {
    id: 103,
    title: "JavaScript Fundamentals",
    category: "frontend",
    level: "beginner",
    description: "Learn core JavaScript concepts and DOM manipulation for interactive websites",
    content: `# JavaScript Fundamentals

JavaScript brings interactivity to your web pages. Let's explore the core concepts.

## Variables and Data Types

JavaScript has several ways to declare variables:

\`\`\`javascript
// Modern variable declarations
let count = 0;          // Block-scoped, can be reassigned
const API_KEY = '123';  // Block-scoped, cannot be reassigned

// Data types
const string = 'Hello';
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { name: 'John', age: 30 };
\`\`\`

## Control Flow

Control the flow of your program with conditionals and loops:

\`\`\`javascript
// Conditionals
if (count > 10) {
  console.log('Count is greater than 10');
} else if (count > 5) {
  console.log('Count is greater than 5');
} else {
  console.log('Count is 5 or less');
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let items = ['apple', 'banana', 'orange'];
for (let item of items) {
  console.log(item);
}
\`\`\`

## Functions

Functions are reusable blocks of code:

\`\`\`javascript
// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
function createUser(name, role = 'user') {
  return { name, role };
}
\`\`\`

## DOM Manipulation

Interact with HTML elements:

\`\`\`javascript
// Select elements
const button = document.querySelector('#myButton');
const items = document.querySelectorAll('.item');

// Add event listener
button.addEventListener('click', () => {
  console.log('Button clicked!');
  document.getElementById('result').textContent = 'Clicked!';
});

// Create element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New paragraph added!';
document.body.appendChild(newParagraph);
\`\`\`

Practice these concepts to build interactive web interfaces!`,
    imageUrl: "/placeholder.svg",
    authorName: "JavaScript Developer",
    duration: 50,
    tags: ["javascript", "dom", "variables", "functions", "frontend"],
    slug: "javascript-fundamentals"
  },
  {
    id: 104,
    title: "Responsive Web Design",
    category: "frontend",
    level: "beginner",
    description: "Create websites that look great on any device with responsive design principles",
    content: `# Responsive Web Design

Responsive design ensures your website works well on all devices and screen sizes.

## Mobile-First Approach

Start with mobile layouts, then enhance for larger screens:

\`\`\`css
/* Base styles for mobile */
.container {
  padding: 10px;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    padding: 30px;
    max-width: 1000px;
  }
}
\`\`\`

## Flexible Images

Make images responsive:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

## CSS Units

Use relative units for flexibility:

\`\`\`css
body {
  font-size: 16px; /* Base font size */
}

h1 {
  font-size: 2rem; /* 2x the root font size */
}

.container {
  width: 90%; /* Percentage of parent */
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  padding: 1em; /* Relative to font size */
}
\`\`\`

## Viewport Meta Tag

Always include the viewport meta tag:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Apply these techniques to create websites that provide an optimal viewing experience across a wide range of devices!`,
    imageUrl: "/placeholder.svg",
    authorName: "Responsive Design Expert",
    duration: 40,
    tags: ["responsive", "mobile-first", "media-queries", "frontend"],
    slug: "responsive-web-design"
  },
  {
    id: 105,
    title: "Modern JavaScript (ES6+)",
    category: "frontend",
    level: "intermediate",
    description: "Upgrade your JavaScript skills with modern ES6+ features and patterns",
    content: `# Modern JavaScript (ES6+)

ES6 (ECMAScript 2015) and later versions introduced powerful features that make JavaScript more expressive and concise.

## Arrow Functions

Shorter syntax for function expressions:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Multiline arrow function
const calculateArea = (radius) => {
  const pi = Math.PI;
  return pi * radius * radius;
};
\`\`\`

## Destructuring

Extract values from objects and arrays:

\`\`\`javascript
// Object destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;

// With default values
const { role = 'user' } = user;

// Nested destructuring
const person = {
  name: 'Alice',
  address: { city: 'New York', country: 'USA' }
};
const { address: { city } } = person;
\`\`\`

## Spread and Rest Operators

Spread elements or collect them:

\`\`\`javascript
// Spread operator with arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Spread operator with objects
const baseConfig = { theme: 'dark', animated: true };
const extendedConfig = { 
  ...baseConfig, 
  debugMode: true 
};

// Rest parameter in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

## Template Literals

Create strings with embedded expressions:

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;

const multiline = \`
  This is a
  multiline string
  with easy formatting
\`;
\`\`\`

## Modules

Organize code with import/export:

\`\`\`javascript
// math.js
export const PI = 3.14159;
export function square(x) {
  return x * x;
}
export default function cube(x) {
  return x * x * x;
}

// app.js
import cube, { PI, square } from './math.js';
\`\`\`

These modern JavaScript features will make your code more readable and maintainable!`,
    imageUrl: "/placeholder.svg",
    authorName: "Modern JS Developer",
    duration: 50,
    tags: ["javascript", "es6", "arrow functions", "destructuring", "frontend"],
    slug: "modern-javascript-es6"
  },
  {
    id: 106,
    title: "Working with APIs in JavaScript",
    category: "frontend",
    level: "intermediate",
    description: "Learn to fetch, process, and display data from APIs in your web applications",
    content: `# Working with APIs in JavaScript

Modern web applications frequently interact with APIs to fetch and send data. Let's explore how to work with APIs using JavaScript.

## Fetch API

The Fetch API provides a modern way to make HTTP requests:

\`\`\`javascript
// Basic GET request
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// POST request with JSON data
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data));
\`\`\`

## Async/Await

A cleaner way to work with promises:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Using the async function
async function init() {
  const userData = await fetchData();
  displayUserData(userData);
}
\`\`\`

## Working with JSON

JSON (JavaScript Object Notation) is the standard data format for API communication:

\`\`\`javascript
// Parse JSON string to JavaScript object
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const user = JSON.parse(jsonString);

// Convert JavaScript object to JSON string
const product = {
  id: 1,
  name: "Laptop",
  price: 999.99
};
const productJSON = JSON.stringify(product);
\`\`\`

## Error Handling

Proper error handling is crucial when working with APIs:

\`\`\`javascript
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    
    if (response.status === 404) {
      throw new Error('Resource not found');
    } else if (response.status === 401) {
      throw new Error('Authentication required');
    } else if (!response.ok) {
      throw new Error('API error: ' + response.status);
    }
    
    return response.json();
  } catch (error) {
    console.error('API Error:', error.message);
    // Handle error appropriately (show user message, etc)
    return null;
  }
}
\`\`\`

Master these techniques to effectively integrate APIs into your frontend applications!`,
    imageUrl: "/placeholder.svg",
    authorName: "API Integration Expert",
    duration: 55,
    tags: ["api", "fetch", "async/await", "json", "frontend"],
    slug: "working-with-apis-javascript"
  },
  {
    id: 107,
    title: "Tailwind CSS Fundamentals",
    category: "frontend",
    level: "intermediate",
    description: "Build modern interfaces quickly with utility-first CSS using Tailwind",
    content: `# Tailwind CSS Fundamentals

Tailwind CSS is a utility-first CSS framework that enables rapid UI development with composable classes.

## The Utility-First Approach

Instead of pre-designed components, Tailwind provides utility classes that you combine to build custom designs:

\`\`\`html
<!-- Traditional CSS approach -->
<div class="card">
  <h2 class="card-title">Title</h2>
  <p class="card-text">Content</p>
</div>

<!-- Tailwind CSS approach -->
<div class="bg-white rounded-lg shadow p-6">
  <h2 class="text-xl font-bold text-gray-900 mb-2">Title</h2>
  <p class="text-gray-700">Content</p>
</div>
\`\`\`

## Core Utility Classes

### Layout & Spacing

\`\`\`html
<!-- Display -->
<div class="block"></div>
<div class="flex"></div>
<div class="grid"></div>
<div class="hidden"></div>

<!-- Margin (m) and Padding (p) -->
<div class="m-4">4 units of margin on all sides</div>
<div class="mx-4">4 units of margin on left and right</div>
<div class="my-4">4 units of margin on top and bottom</div>
<div class="mt-4">4 units of margin on top</div>
<div class="p-6">6 units of padding on all sides</div>
\`\`\`

### Typography

\`\`\`html
<h1 class="text-2xl font-bold text-blue-600">Heading</h1>
<p class="text-base text-gray-700 font-normal">Regular paragraph</p>
<p class="text-sm text-gray-500 italic">Smaller italic text</p>
\`\`\`

### Flexbox & Grid

\`\`\`html
<!-- Flexbox container -->
<div class="flex justify-between items-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid container -->
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design easy with built-in breakpoints:

\`\`\`html
<div class="text-center md:text-left lg:text-right">
  <!-- 
    - Center text on mobile
    - Left-align text on medium screens (md:)
    - Right-align text on large screens (lg:)
  -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 
    - 1 column on mobile
    - 2 columns on medium screens
    - 3 columns on large screens
  -->
</div>
\`\`\`

## Customization

Tailwind is highly customizable through the \`tailwind.config.js\` file:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  }
}
\`\`\`

Use Tailwind CSS to build custom interfaces quickly without writing custom CSS!`,
    imageUrl: "/placeholder.svg",
    authorName: "Tailwind CSS Expert",
    duration: 50,
    tags: ["css", "tailwind", "utility-first", "styling", "frontend"],
    slug: "tailwind-css-fundamentals"
  },
  {
    id: 108,
    title: "React.js Fundamentals",
    category: "frontend",
    level: "intermediate",
    description: "Learn the core concepts of React.js for building interactive user interfaces",
    content: `# React.js Fundamentals

React is a JavaScript library for building user interfaces with components, virtual DOM, and unidirectional data flow.

## Components

Components are the building blocks of React applications:

\`\`\`jsx
// Function component (recommended)
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Using the component
<Welcome name="Sara" />
\`\`\`

## JSX

JSX is a syntax extension that looks like HTML but is transformed into JavaScript:

\`\`\`jsx
// Simple JSX element
const element = <h1>Hello, world!</h1>;

// JSX with expressions
const user = { firstName: 'John', lastName: 'Doe' };
const greeting = <h1>Hello, {user.firstName} {user.lastName}!</h1>;

// JSX with attributes
const image = <img src={user.avatarUrl} alt={user.name} />;

// JSX with children
const container = (
  <div className="container">
    <h1>Title</h1>
    <p>Content</p>
  </div>
);
\`\`\`

## Props

Props are inputs to components that allow you to pass data:

\`\`\`jsx
function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

// Using the component with props
<UserCard 
  name="Alice Johnson" 
  role="Developer" 
  avatar="/images/alice.png" 
/>
\`\`\`

## State

State allows components to manage and track data changes:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  // useState returns current state and a function to update it
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

## Handling Events

React events are named using camelCase and pass functions as event handlers:

\`\`\`jsx
function Form() {
  const [name, setName] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted with name: ' + name);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## Conditional Rendering

Render components conditionally based on state:

\`\`\`jsx
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      
      {isLoggedIn && <WelcomeMessage />}
    </div>
  );
}
\`\`\`

Start building your own React components to create interactive UIs!`,
    imageUrl: "/placeholder.svg",
    authorName: "React Developer",
    duration: 60,
    tags: ["react", "javascript", "components", "state", "frontend"],
    slug: "react-js-fundamentals"
  },
  {
    id: 109,
    title: "Frontend Testing Fundamentals",
    category: "frontend",
    level: "advanced",
    description: "Learn essential testing techniques to ensure quality in your frontend applications",
    content: `# Frontend Testing Fundamentals

Testing is crucial for building reliable web applications. Let's explore the main types of tests for frontend code.

## Unit Testing with Jest

Jest is a popular JavaScript testing framework:

\`\`\`javascript
// math.js
export function sum(a, b) {
  return a + b;
}

// math.test.js
import { sum } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds negative numbers correctly', () => {
  expect(sum(-1, -2)).toBe(-3);
});
\`\`\`

## Component Testing with React Testing Library

Test React components focusing on user behavior:

\`\`\`javascript
// Button.js
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  
  fireEvent.click(screen.getByText('Click Me'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

## Integration Testing

Test interactions between components:

\`\`\`javascript
// LoginForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits username and password on form submit', () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  
  // Fill out the form
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'testuser' }
  });
  
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' }
  });
  
  // Submit form
  fireEvent.click(screen.getByText(/submit/i));
  
  // Check if submission worked with correct data
  expect(mockSubmit).toHaveBeenCalledWith({
    username: 'testuser',
    password: 'password123'
  });
});
\`\`\`

## End-to-End Testing with Cypress

Test complete user flows in a browser environment:

\`\`\`javascript
// cypress/integration/login.spec.js
describe('Login Flow', () => {
  it('successfully logs in with correct credentials', () => {
    // Visit the login page
    cy.visit('/login');
    
    // Enter credentials
    cy.get('input[name=username]').type('testuser');
    cy.get('input[name=password]').type('correctpassword');
    
    // Click login button
    cy.get('button[type=submit]').click();
    
    // Verify successful login
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, testuser');
  });
});
\`\`\`

## Test-Driven Development (TDD)

Follow the TDD workflow:

1. Write a failing test for the functionality you want to add
2. Implement the code to make the test pass
3. Refactor the code while keeping the test passing

\`\`\`javascript
// Step 1: Write a failing test
test('toggles visibility when button is clicked', () => {
  render(<Collapsible title="Section Title" />);
  
  // Content should be hidden initially
  expect(screen.queryByText('Content')).not.toBeVisible();
  
  // Click to expand
  fireEvent.click(screen.getByText('Section Title'));
  
  // Content should now be visible
  expect(screen.getByText('Content')).toBeVisible();
});

// Step 2: Implement the component to make the test pass
// Step 3: Refactor as needed
\`\`\`

Implement these testing strategies to build more reliable frontend applications!`,
    imageUrl: "/placeholder.svg",
    authorName: "Testing Specialist",
    duration: 65,
    tags: ["testing", "jest", "react testing", "cypress", "frontend"],
    slug: "frontend-testing-fundamentals"
  },
  {
    id: 110,
    title: "Web Performance Optimization",
    category: "frontend",
    level: "advanced",
    description: "Learn techniques to make your web applications faster and more efficient",
    content: `# Web Performance Optimization

Performance is a critical aspect of user experience. Let's explore strategies to optimize your web applications.

## Core Web Vitals

Focus on these key metrics:

1. **Largest Contentful Paint (LCP)**: Time for largest content element to render
2. **First Input Delay (FID)**: Time until page responds to user interactions
3. **Cumulative Layout Shift (CLS)**: Unexpected layout shifts during page load

## Image Optimization

Images often account for most of a page's weight:

\`\`\`html
<!-- Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" width="800" height="600" loading="lazy">
</picture>
\`\`\`

\`\`\`css
/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* Blur-up technique for improved perceived performance */
.image-container {
  background-size: cover;
  background-image: url('tiny-placeholder.jpg');
}
\`\`\`

## JavaScript Performance

Optimize your JavaScript for better execution:

\`\`\`javascript
// Use requestAnimationFrame for animations
function animate() {
  // Update animation
  requestAnimationFrame(animate);
}

// Use Web Workers for heavy computations
const worker = new Worker('compute.js');
worker.postMessage({ data: complexData });
worker.onmessage = function(e) {
  console.log('Result:', e.data);
};

// Code-splitting in modern frameworks
import { lazy, Suspense } from 'react';

// Lazy-load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## CSS Optimization

Optimize your CSS for faster rendering:

\`\`\`css
/* Use CSS containment for layout isolation */
.card {
  contain: content;
}

/* Prioritize critical CSS */
/* In HTML head */
<style>
  /* Critical styles for above-the-fold content */
  .header { ... }
  .hero { ... }
</style>

/* Preload important resources */
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.jpg" as="image">
\`\`\`

## Caching and Service Workers

Leverage browser caching and offline capabilities:

\`\`\`javascript
// Register a service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered');
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// In sw.js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
\`\`\`

## Performance Testing Tools

Regularly test with these tools:
- Lighthouse
- WebPageTest
- Chrome DevTools Performance panel
- Core Web Vitals report in Google Search Console

Implement these optimizations iteratively to significantly improve your web application's performance!`,
    imageUrl: "/placeholder.svg",
    authorName: "Performance Optimization Expert",
    duration: 55,
    tags: ["performance", "optimization", "web vitals", "frontend"],
    slug: "web-performance-optimization"
  }
];

export const backendModules: IModule[] = [
  // These would be backend learning modules
  {
    id: 201,
    title: "Node.js Fundamentals",
    category: "backend",
    level: "beginner",
    description: "Learn the basics of server-side JavaScript with Node.js",
    content: `# Node.js Fundamentals`,
    imageUrl: "/placeholder.svg",
    authorName: "Backend Developer",
    duration: 45,
    tags: ["nodejs", "javascript", "backend"],
    slug: "nodejs-fundamentals"
  }
];

// Add other categories as needed: fullstack, mobile, cyber
