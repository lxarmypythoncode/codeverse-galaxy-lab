
import { ILearningItem, ICourseTrack } from "../types/learningApi";

// HTML Learning Items
export const htmlItems: ILearningItem[] = [
  {
    id: 101,
    title: "HTML5 Document Structure",
    category: "HTML",
    level: "basic",
    description: "Learn the foundation of web pages with modern HTML5 document structure",
    content: `# HTML5 Document Structure

Every HTML document follows a standard structure that defines how browsers interpret and display content.

## Basic Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
\`\`\`

## Head Section

The \`<head>\` contains metadata about the document:

- \`<title>\`: Sets the page title in browser tabs
- \`<meta>\`: Provides metadata like character encoding and viewport settings
- \`<link>\`: Links to external resources like CSS files
- \`<script>\`: Embeds or links to JavaScript files

## Body Section

The \`<body>\` contains all visible content including:

- Text content
- Images and media
- Links
- Form elements
- Interactive components

Understanding this basic structure is essential for building any web page!`,
    quiz: [
      {
        id: 1,
        question: "Which HTML tag contains metadata about the document?",
        options: ["<body>", "<head>", "<html>", "<meta>"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is the purpose of the <!DOCTYPE html> declaration?",
        options: [
          "It's optional and has no real purpose",
          "It tells the browser what version of HTML the document is written in",
          "It's only required for HTML5 documents",
          "It specifies the document language"
        ],
        correctAnswer: 1
      }
    ],
    codeExamples: [
      {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
        description: "Basic HTML5 document structure"
      }
    ],
    dependencies: [],
    tags: ["html", "structure", "doctype", "metadata"],
    labCompatible: true,
    estimatedTime: 20,
    author: "HTML Expert",
    coverImage: "/placeholder.svg"
  },
  {
    id: 102,
    title: "HTML5 Semantic Elements",
    category: "HTML",
    level: "basic",
    description: "Learn to structure your content with meaningful HTML5 semantic elements",
    content: `# HTML5 Semantic Elements

Semantic HTML elements clearly describe their meaning both to the browser and to the developer. Using semantic elements improves accessibility, SEO, and code readability.

## Key Semantic Elements

\`\`\`html
<header>Site or section header</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Independent, self-contained content</article>
<section>Thematic grouping of content</section>
<aside>Related but separate content</aside>
<footer>Site or section footer</footer>
\`\`\`

## When to Use Semantic Elements

- Use \`<header>\` for introductory content at the beginning of a page or section
- Use \`<nav>\` for major navigation links
- Use \`<article>\` for content that could stand independently (blog post, comment, product card)
- Use \`<section>\` to group related content
- Use \`<aside>\` for content related to the main content but not essential to understanding it
- Use \`<footer>\` for closing content at the end of a page or section

## Benefits of Semantic HTML

1. **Accessibility**: Screen readers can better interpret your content
2. **SEO**: Search engines understand page content more effectively
3. **Maintainability**: Code is more readable and easier to maintain
4. **Styling**: Semantic structure makes styling with CSS more logical

Always choose semantic elements over generic \`<div>\` elements when possible.`,
    quiz: [
      {
        id: 1,
        question: "Which semantic element is best for representing a self-contained piece of content that could exist independently?",
        options: ["<section>", "<div>", "<article>", "<aside>"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is a key benefit of using semantic HTML elements?",
        options: [
          "They load faster than non-semantic elements",
          "They improve accessibility for users with disabilities",
          "They require less code than non-semantic elements",
          "They are required for modern browsers to work properly"
        ],
        correctAnswer: 1
      }
    ],
    codeExamples: [
      {
        language: "html",
        code: `<body>
  <header>
    <h1>My News Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content goes here...</p>
      <section>
        <h3>Article Section</h3>
        <p>Additional details about the article...</p>
      </section>
    </article>
    
    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Related Article 1</a></li>
        <li><a href="#">Related Article 2</a></li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 My News Website</p>
  </footer>
</body>`,
        description: "Example of semantic HTML structure for a news website"
      }
    ],
    dependencies: [],
    tags: ["html", "semantic", "accessibility", "structure"],
    labCompatible: true,
    estimatedTime: 30,
    author: "HTML Expert",
    coverImage: "/placeholder.svg"
  },
  {
    id: 103,
    title: "HTML5 Forms and Validation",
    category: "HTML",
    level: "intermediate",
    description: "Master form creation and built-in validation features in HTML5",
    content: `# HTML5 Forms and Validation

HTML5 introduced powerful form features that simplify data collection and validation.

## Form Structure

\`\`\`html
<form action="/submit-form" method="post">
  <!-- Form elements go here -->
  <button type="submit">Submit</button>
</form>
\`\`\`

## Input Types

HTML5 introduced several specialized input types:

\`\`\`html
<input type="email">
<input type="url">
<input type="tel">
<input type="number">
<input type="range">
<input type="date">
<input type="time">
<input type="color">
<input type="search">
\`\`\`

## Form Validation Attributes

HTML5 includes built-in validation attributes:

\`\`\`html
<!-- Required field -->
<input type="text" required>

<!-- Min/max for numbers -->
<input type="number" min="1" max="100">

<!-- Pattern matching with regex -->
<input type="text" pattern="[A-Za-z0-9]{3,}" title="At least 3 alphanumeric characters">

<!-- Length constraints -->
<input type="text" minlength="8" maxlength="20">
\`\`\`

## Accessible Form Structure

Always use labels properly connected to inputs:

\`\`\`html
<label for="username">Username:</label>
<input id="username" type="text">

<!-- Or wrap the input -->
<label>
  Email:
  <input type="email">
</label>
\`\`\`

Browser-based validation provides immediate feedback to users while reducing the need for custom JavaScript validation code.`,
    quiz: [
      {
        id: 1,
        question: "Which HTML5 input type should be used for email addresses?",
        options: ["text", "email", "string", "mail"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How do you mark a form field as mandatory in HTML5?",
        options: [
          "Add the attribute mandatory='true'",
          "Add the attribute required",
          "Add the attribute validation='required'",
          "Set minlength='1'"
        ],
        correctAnswer: 1
      }
    ],
    codeExamples: [
      {
        language: "html",
        code: `<form>
  <div>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="website">Website:</label>
    <input type="url" id="website" name="website" placeholder="https://example.com">
  </div>
  
  <div>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="120">
  </div>
  
  <div>
    <label for="birthdate">Birth Date:</label>
    <input type="date" id="birthdate" name="birthdate">
  </div>
  
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" 
           minlength="8" required
           pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
           title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters">
  </div>
  
  <button type="submit">Register</button>
</form>`,
        description: "Complete registration form with HTML5 validation"
      }
    ],
    dependencies: [],
    tags: ["html", "forms", "validation", "inputs"],
    labCompatible: true,
    estimatedTime: 45,
    author: "Form Specialist",
    coverImage: "/placeholder.svg"
  }
];

// CSS Learning Items
export const cssItems: ILearningItem[] = [
  {
    id: 201,
    title: "CSS Fundamentals",
    category: "CSS",
    level: "basic",
    description: "Learn core CSS concepts including selectors, properties, and the box model",
    content: `# CSS Fundamentals

CSS (Cascading Style Sheets) is used to style and layout web pages. Let's explore the essential concepts.

## CSS Syntax

\`\`\`css
selector {
  property: value;
  another-property: value;
}
\`\`\`

## Selectors

CSS offers various ways to select HTML elements:

\`\`\`css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 24px;
}

/* Attribute selector */
input[type="text"] {
  border-radius: 4px;
}

/* Descendant selector */
article p {
  line-height: 1.6;
}
\`\`\`

## Box Model

Every element in CSS is represented as a rectangular box:

- Content: The actual content (text, images)
- Padding: Space between content and border
- Border: Line around the padding
- Margin: Space outside the border

\`\`\`css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
}
\`\`\`

## Colors and Typography

\`\`\`css
body {
  color: #333; /* Text color */
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1 {
  color: rgb(30, 144, 255); /* RGB color */
}

.highlight {
  background-color: rgba(255, 255, 0, 0.5); /* RGBA with alpha */
}
\`\`\`

Understanding these fundamentals is essential before moving to more advanced CSS concepts.`,
    quiz: [
      {
        id: 1,
        question: "Which of the following correctly targets elements with the class 'highlight'?",
        options: [".highlight", "#highlight", "highlight", "*highlight"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "In the CSS box model, what is the outermost layer?",
        options: ["Content", "Padding", "Border", "Margin"],
        correctAnswer: 3
      }
    ],
    codeExamples: [
      {
        language: "css",
        code: `/* Basic CSS styling example */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3 {
  color: #0066cc;
  margin-bottom: 15px;
}

p {
  margin-bottom: 20px;
}

.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

#main-header {
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
}`,
        description: "Basic CSS styling for a webpage"
      }
    ],
    dependencies: [],
    tags: ["css", "selectors", "box model", "typography"],
    labCompatible: true,
    estimatedTime: 40,
    author: "CSS Specialist",
    coverImage: "/placeholder.svg"
  },
  {
    id: 202,
    title: "CSS Flexbox Layout",
    category: "CSS",
    level: "intermediate",
    description: "Master the flexible box layout for building dynamic layouts",
    content: `# CSS Flexbox Layout

Flexbox is a one-dimensional layout model that provides space distribution and powerful alignment capabilities.

## Flex Container Properties

To create a flex container, set \`display: flex\` on the parent element:

\`\`\`css
.container {
  display: flex;
  
  /* Direction of items */
  flex-direction: row | row-reverse | column | column-reverse;
  
  /* Wrapping behavior */
  flex-wrap: nowrap | wrap | wrap-reverse;
  
  /* Shorthand for direction and wrap */
  flex-flow: row wrap;
  
  /* Horizontal alignment */
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  
  /* Vertical alignment */
  align-items: stretch | flex-start | flex-end | center | baseline;
  
  /* Multi-line alignment */
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
\`\`\`

## Flex Item Properties

Control individual flex items with these properties:

\`\`\`css
.item {
  /* Order of the item */
  order: 0; /* default is 0 */
  
  /* Growth factor */
  flex-grow: 0; /* default is 0 */
  
  /* Shrink factor */
  flex-shrink: 1; /* default is 1 */
  
  /* Initial size */
  flex-basis: auto; /* default is auto */
  
  /* Shorthand for grow, shrink, and basis */
  flex: 0 1 auto;
  
  /* Self alignment (overrides container's align-items) */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
\`\`\`

## Common Use Cases

Flexbox excels at:

1. Navigation bars and menus
2. Card layouts
3. Centering elements
4. Form layouts
5. Equal-height columns

Flexbox provides a more efficient way to layout, align, and distribute space among items, even when their size is unknown or dynamic.`,
    quiz: [
      {
        id: 1,
        question: "Which property is used to define the direction of flex items?",
        options: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What does 'justify-content: space-between' do in a flex container?",
        options: [
          "Adds equal space between all items and at the ends",
          "Adds equal space between all items but not at the ends",
          "Centers all items with equal space on both sides",
          "Places items at the start of the container with space"
        ],
        correctAnswer: 1
      }
    ],
    codeExamples: [
      {
        language: "html",
        code: `<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
        description: "Basic HTML structure for flexbox"
      },
      {
        language: "css",
        code: `/* Flexbox navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

/* Responsive card layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, basis */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
}

/* Perfectly centered element */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
        description: "Common flexbox layout patterns"
      }
    ],
    dependencies: [],
    tags: ["css", "flexbox", "layout", "responsive"],
    labCompatible: true,
    estimatedTime: 60,
    author: "Layout Expert",
    coverImage: "/placeholder.svg"
  },
  {
    id: 203,
    title: "CSS Grid Layout",
    category: "CSS",
    level: "intermediate",
    description: "Master the CSS Grid system for creating complex, two-dimensional layouts",
    content: `# CSS Grid Layout

CSS Grid is a two-dimensional layout system designed for complex layouts that can be divided into rows and columns.

## Grid Container Properties

Create a grid container with \`display: grid\`:

\`\`\`css
.container {
  display: grid;
  
  /* Define columns */
  grid-template-columns: 1fr 2fr 1fr;
  
  /* Define rows */
  grid-template-rows: auto 300px auto;
  
  /* Gap between items */
  gap: 20px;
  column-gap: 20px;
  row-gap: 10px;
  
  /* Alignment of all items horizontally */
  justify-items: start | end | center | stretch;
  
  /* Alignment of all items vertically */
  align-items: start | end | center | stretch;
  
  /* Alignment of the entire grid horizontally */
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  
  /* Alignment of the entire grid vertically */
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
\`\`\`

## Grid Item Properties

Position and size grid items with these properties:

\`\`\`css
.item {
  /* Column start/end lines */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-column: 1 / 3; /* Shorthand */
  
  /* Row start/end lines */
  grid-row-start: 1;
  grid-row-end: 3;
  grid-row: 1 / 3; /* Shorthand */
  
  /* Area shorthand */
  grid-area: 1 / 1 / 3 / 3; /* row-start / column-start / row-end / column-end */
  
  /* Self alignment (overrides container's settings) */
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
\`\`\`

## Advanced Grid Features

### Named Grid Lines

\`\`\`css
.container {
  grid-template-columns: [sidebar-start] 1fr [sidebar-end content-start] 3fr [content-end];
  grid-template-rows: [header-start] auto [header-end content-start] 1fr [content-end footer-start] auto [footer-end];
}

.header {
  grid-column: sidebar-start / content-end;
  grid-row: header-start / header-end;
}
\`\`\`

### Grid Template Areas

\`\`\`css
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`

Grid layout is perfect for creating complex page layouts, dashboard interfaces, and photo galleries.`,
    quiz: [
      {
        id: 1,
        question: "What is the primary difference between Flexbox and Grid?",
        options: [
          "Flexbox works with rows, Grid works with columns",
          "Flexbox is one-dimensional, Grid is two-dimensional",
          "Flexbox is older and less supported",
          "Grid is simpler to use for basic layouts"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which CSS Grid property defines the size and number of columns?",
        options: ["grid-columns", "grid-template-columns", "grid-column-template", "column-grid-template"],
        correctAnswer: 1
      }
    ],
    codeExamples: [
      {
        language: "html",
        code: `<div class="grid-container">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="content">Main Content</main>
  <footer class="footer">Footer</footer>
</div>`,
        description: "HTML for a basic page layout using grid"
      },
      {
        language: "css",
        code: `/* Basic page layout with CSS Grid */
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Sidebar fixed, content flexible */
  grid-template-rows: auto 1fr auto; /* Header/footer auto, content flexible */
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  min-height: 100vh;
  gap: 10px;
}

.header {
  grid-area: header;
  background-color: #f5f5f5;
  padding: 1rem;
}

.sidebar {
  grid-area: sidebar;
  background-color: #e0e0e0;
  padding: 1rem;
}

.content {
  grid-area: content;
  background-color: #f0f0f0;
  padding: 1rem;
}

.footer {
  grid-area: footer;
  background-color: #f5f5f5;
  padding: 1rem;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    grid-template-areas: 
      "header"
      "sidebar"
      "content"
      "footer";
  }
}`,
        description: "Complete responsive grid layout"
      }
    ],
    dependencies: [],
    tags: ["css", "grid", "layout", "responsive"],
    labCompatible: true,
    estimatedTime: 70,
    author: "Grid Layout Expert",
    coverImage: "/placeholder.svg"
  }
];

// JavaScript Learning Items (simplified, you'd add more)
export const javascriptItems: ILearningItem[] = [
  {
    id: 301,
    title: "JavaScript Fundamentals",
    category: "JavaScript",
    level: "basic",
    description: "Learn core JavaScript concepts including variables, functions, and control flow",
    content: `# JavaScript Fundamentals

JavaScript is the programming language of the web. Let's explore the essential concepts to get started.

## Variables and Data Types

JavaScript has several ways to declare variables:

\`\`\`javascript
// Modern variable declarations
let count = 0;          // Block-scoped, can be reassigned
const PI = 3.14159;     // Block-scoped, cannot be reassigned
var oldWay = "text";    // Function-scoped (avoid when possible)

// Basic data types
const string = 'Hello';
const number = 42;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;
\`\`\`

## Complex Data Structures

\`\`\`javascript
// Arrays
const fruits = ['apple', 'banana', 'orange'];
fruits.push('mango');           // Add to end
fruits.unshift('strawberry');   // Add to beginning
const lastFruit = fruits.pop(); // Remove from end

// Objects
const person = {
  name: 'John',
  age: 30,
  isEmployed: true,
  skills: ['JavaScript', 'HTML', 'CSS'],
  address: {
    city: 'New York',
    zipCode: '10001'
  }
};

// Accessing object properties
console.log(person.name);            // Dot notation
console.log(person['age']);          // Bracket notation
console.log(person.address.city);    // Nested properties
\`\`\`

## Control Flow

\`\`\`javascript
// If statements
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}

// Switch statement
switch (fruit) {
  case 'apple':
    console.log('Selected apple');
    break;
  case 'banana':
    console.log('Selected banana');
    break;
  default:
    console.log('Unknown fruit');
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Iterate over arrays
const numbers = [1, 2, 3, 4];

// Modern ways to iterate
numbers.forEach(num => console.log(num));

// for...of loop (for arrays)
for (const num of numbers) {
  console.log(num);
}

// for...in loop (for objects)
for (const key in person) {
  console.log(key + ': ' + person[key]);
}
\`\`\`

## Functions

\`\`\`javascript
// Function declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (ES6+)
const add = (a, b) => a + b;

// Default parameters
function createUser(name, role = 'user') {
  return { name, role };
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

These fundamentals form the building blocks for more advanced JavaScript concepts and applications.`,
    quiz: [
      {
        id: 1,
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["var", "let", "const", "def"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What does the following code return: typeof []",
        options: ["'array'", "'object'", "'list'", "'undefined'"],
        correctAnswer: 1
      }
    ],
    codeExamples: [
      {
        language: "javascript",
        code: `// Working with arrays and objects
const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 24 }
];

// Filter users over 25
const olderUsers = users.filter(user => user.age > 25);

// Map to get just names
const names = users.map(user => user.name);

// Find a specific user
const bob = users.find(user => user.name === "Bob");

// Check if all users are adults
const allAdults = users.every(user => user.age >= 18);

// Calculate sum of ages
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;

console.log({ olderUsers, names, bob, allAdults, averageAge });`,
        description: "Working with arrays of objects using array methods"
      }
    ],
    dependencies: [],
    tags: ["javascript", "variables", "functions", "arrays", "objects"],
    labCompatible: true,
    estimatedTime: 60,
    author: "JavaScript Developer",
    coverImage: "/placeholder.svg"
  }
];

// Combine all items
export const frontendLearningItems: ILearningItem[] = [
  ...htmlItems,
  ...cssItems,
  ...javascriptItems,
  // Add more categories as needed
];

// Define learning tracks/paths
export const frontendLearningTracks: ICourseTrack[] = [
  {
    id: "html-fundamentals",
    title: "HTML5 Fundamentals",
    description: "Master the foundation of web pages with modern HTML5 elements and structure",
    items: [101, 102, 103],
    level: "beginner",
    estimatedDuration: "2 weeks"
  },
  {
    id: "css-fundamentals",
    title: "CSS Mastery",
    description: "Learn essential CSS styling, layouts, and responsive design techniques",
    items: [201, 202, 203],
    level: "beginner",
    estimatedDuration: "3 weeks"
  },
  {
    id: "js-fundamentals",
    title: "JavaScript Foundations",
    description: "Build a strong foundation in JavaScript programming",
    items: [301],
    level: "beginner",
    estimatedDuration: "4 weeks"
  }
];

// Export everything for API access
export default {
  items: frontendLearningItems,
  tracks: frontendLearningTracks
};
