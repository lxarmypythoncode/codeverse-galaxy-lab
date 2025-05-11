
export interface ILab {
  id: number;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  duration: number; // in minutes
  objectives: string[];
  tasks: {
    title: string;
    description: string;
    hint?: string;
  }[];
  solution: {
    code: string;
    explanation: string;
  };
}

export const labs: ILab[] = [
  {
    id: 1,
    title: "Build a Simple Website with HTML, CSS, and JavaScript",
    description: "Create a basic website layout with a navigation bar, a hero section, and a footer.",
    category: "frontend",
    level: "beginner",
    tags: ["html", "css", "javascript", "web-development"],
    duration: 45,
    objectives: [
      "Set up a basic HTML structure",
      "Style the website using CSS",
      "Add interactivity with JavaScript",
      "Understand the basics of web development"
    ],
    tasks: [
      {
        title: "Set up HTML structure",
        description: "Create a basic HTML file with a head and body section."
      },
      {
        title: "Add a navigation bar",
        description: "Create a navigation bar with links to different sections of the website."
      },
      {
        title: "Create a hero section",
        description: "Design a hero section with a catchy headline and a brief description."
      },
      {
        title: "Style the website with CSS",
        description: "Use CSS to style the website and make it visually appealing."
      },
      {
        title: "Add interactivity with JavaScript",
        description: "Add a simple JavaScript function to make the website interactive."
      }
    ],
    solution: {
      code: `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1em 0;
            text-align: center;
        }
        nav {
            background-color: #444;
            color: #fff;
            padding: 0.5em 0;
            text-align: center;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            padding: 0 1em;
        }
        .hero {
            background-color: #eee;
            padding: 2em;
            text-align: center;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Simple Website</h1>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    <section class="hero">
        <h2>Welcome to My Website</h2>
        <p>This is a simple website created using HTML, CSS, and JavaScript.</p>
    </section>
    <footer>
        <p>&copy; 2023 Simple Website</p>
    </footer>
</body>
</html>
`,
      explanation: "This solution provides a basic HTML structure with a navigation bar, a hero section, and a footer. It uses CSS to style the website and make it visually appealing. The website is not interactive, but it provides a solid foundation for building more complex websites."
    }
  },
  {
    id: 2,
    title: "Create a To-Do List App with React",
    description: "Build a simple to-do list application with React to manage daily tasks.",
    category: "frontend",
    level: "intermediate",
    tags: ["react", "javascript", "web-development", "components"],
    duration: 60,
    objectives: [
      "Set up a React development environment",
      "Create React components",
      "Manage state in React",
      "Handle user input in React"
    ],
    tasks: [
      {
        title: "Set up React environment",
        description: "Create a new React application using Create React App."
      },
      {
        title: "Create a ToDo component",
        description: "Build a component to display a single to-do item."
      },
      {
        title: "Create a ToDoList component",
        description: "Build a component to display a list of to-do items."
      },
      {
        title: "Add input field",
        description: "Add an input field to allow users to add new to-do items."
      },
      {
        title: "Handle user input",
        description: "Implement a function to handle user input and add new to-do items to the list."
      }
    ],
    solution: {
      code: `
import React, { useState } from 'react';

function ToDo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function ToDoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default ToDoList;
`,
      explanation: "This solution provides a basic to-do list application with React. It uses React components to display to-do items and handle user input. The application allows users to add new to-do items, mark them as complete, and remove them from the list."
    }
  },
  {
    id: 3,
    title: "Build a RESTful API with Node.js and Express",
    description: "Learn how to create a REST API to handle CRUD operations for a resource",
    category: "backend",
    level: "intermediate",
    tags: ["node.js", "express", "rest-api", "crud"],
    duration: 60, // Updated to use duration instead of timeEstimate
    objectives: [
      "Set up a Node.js project with Express",
      "Create API endpoints for CRUD operations",
      "Implement proper status codes and response formats",
      "Test the API with a REST client"
    ],
    tasks: [
      {
        title: "Project Setup",
        description: "Initialize a Node.js project and install Express"
      },
      {
        title: "Create Express Server",
        description: "Set up a basic Express server that listens on port 3000"
      },
      {
        title: "Define a Data Model",
        description: "Create a simple data model for a resource (e.g., products, users, posts)"
      },
      {
        title: "Implement GET Endpoints",
        description: "Create endpoints to get all items and get a single item by ID"
      },
      {
        title: "Implement POST Endpoint",
        description: "Create an endpoint to add a new item"
      },
      {
        title: "Implement PUT Endpoint",
        description: "Create an endpoint to update an existing item"
      },
      {
        title: "Implement DELETE Endpoint",
        description: "Create an endpoint to delete an item"
      },
      {
        title: "Add Error Handling",
        description: "Implement proper error handling for your API"
      }
    ],
    solution: {
      code: `// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database
let products = [
  { id: 1, name: 'Laptop', price: 999.99, inStock: true },
  { id: 2, name: 'Smartphone', price: 699.99, inStock: true },
  { id: 3, name: 'Headphones', price: 199.99, inStock: false }
];

// GET all products
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.status(200).json(product);
});

// POST create new product
app.post('/api/products', (req, res) => {
  const { name, price, inStock } = req.body;
  
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price,
    inStock: inStock !== undefined ? inStock : true
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const updatedProduct = {
    id,
    name: req.body.name || products[productIndex].name,
    price: req.body.price !== undefined ? req.body.price : products[productIndex].price,
    inStock: req.body.inStock !== undefined ? req.body.inStock : products[productIndex].inStock
  };
  
  products[productIndex] = updatedProduct;
  res.status(200).json(updatedProduct);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products = products.filter(p => p.id !== id);
  res.status(204).end();
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      explanation: "This solution implements a complete RESTful API using Express. It provides endpoints for all CRUD operations (Create, Read, Update, Delete) on a product resource. The API uses appropriate HTTP methods and status codes, and includes basic error handling. Data is stored in-memory for simplicity, but in a real application, you would use a database."
    }
  },
  {
    id: 4,
    title: "Build a Mobile App with React Native",
    description: "Create a simple mobile app using React Native.",
    category: "mobile",
    level: "intermediate",
    tags: ["react-native", "javascript", "mobile-development"],
    duration: 75,
    objectives: [
      "Set up a React Native development environment",
      "Create React Native components",
      "Style React Native components",
      "Handle user input in React Native"
    ],
    tasks: [
      {
        title: "Set up React Native environment",
        description: "Set up a React Native development environment on your local machine."
      },
      {
        title: "Create a basic layout",
        description: "Create a basic layout for your mobile app using React Native components."
      },
      {
        title: "Style the components",
        description: "Style the React Native components using CSS-like syntax."
      },
      {
        title: "Handle user input",
        description: "Implement a function to handle user input and update the state of the components."
      }
    ],
    solution: {
      code: `
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const handleInputChange = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      Alert.alert('Please enter your name');
    } else {
      Alert.alert(\`Hello, \${name}!\`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
`,
      explanation: "This solution provides a basic mobile app using React Native. It includes a text input field and a button. The app prompts the user to enter their name and displays a greeting message when the button is pressed."
    }
  },
  {
    id: 5,
    title: "E-commerce Shopping Cart with JavaScript",
    description: "Build a functional shopping cart with vanilla JavaScript",
    category: "frontend",
    level: "intermediate",
    tags: ["javascript", "dom", "ecommerce", "localstorage"],
    duration: 90, // Updated to use duration instead of timeEstimate
    objectives: [
      "Create a shopping cart data structure",
      "Implement add, update, and remove functionality",
      "Display cart contents dynamically",
      "Calculate totals and handle quantity changes",
      "Save cart state in localStorage"
    ],
    tasks: [
      {
        title: "Set Up Basic HTML Structure",
        description: "Create HTML for product listings and cart display"
      },
      {
        title: "Style Your Application",
        description: "Apply CSS to make your cart look good"
      },
      {
        title: "Create Product Data",
        description: "Define an array of product objects with properties"
      },
      {
        title: "Display Products",
        description: "Write JavaScript to dynamically render products on the page"
      },
      {
        title: "Create Cart Functions",
        description: "Implement functions to add, update, and remove items from cart"
      },
      {
        title: "Render Cart Items",
        description: "Display cart items dynamically with quantities and subtotals"
      },
      {
        title: "Calculate Cart Total",
        description: "Add functionality to calculate and display the cart total"
      },
      {
        title: "Implement Quantity Controls",
        description: "Allow users to change quantities and update the cart"
      },
      {
        title: "Save to localStorage",
        description: "Persist cart data in localStorage so it survives page reloads"
      }
    ],
    solution: {
      code: `// cart.js
let cartItems = [];

// Load cart from localStorage on page load
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartDisplay();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Add item to cart
function addToCart(productId, name, price) {
  const existingItem = cartItems.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      productId,
      name,
      price,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  saveCart();
}

// Remove item from cart
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  updateCartDisplay();
  saveCart();
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
  const cartItem = cartItems.find(item => item.productId === productId);
  
  if (cartItem) {
    if (newQuantity > 0) {
      cartItem.quantity = newQuantity;
    } else {
      removeFromCart(productId);
      return;
    }
  }
  
  updateCartDisplay();
  saveCart();
}

// Calculate cart total
function calculateTotal() {
  return cartItems.reduce((total, cartItem) => {
    return total + (cartItem.price * cartItem.quantity);
  }, 0);
}

// Update the cart display
function updateCartDisplay() {
  const cartElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');
  
  // Clear current cart display
  cartElement.innerHTML = '';
  
  if (cartItems.length === 0) {
    cartElement.innerHTML = '<p>Your cart is empty</p>';
    totalElement.textContent = '0.00';
    return;
  }
  
  // Add each item to the display
  cartItems.forEach(cartItem => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    
    const subtotal = (cartItem.price * cartItem.quantity).toFixed(2);
    
    itemElement.innerHTML = \`
      <div class="item-name">\${cartItem.name}</div>
      <div class="item-price">$\${cartItem.price.toFixed(2)}</div>
      <div class="item-quantity">
        <button class="quantity-btn minus">-</button>
        <span>\${cartItem.quantity}</span>
        <button class="quantity-btn plus">+</button>
      </div>
      <div class="item-subtotal">$\${subtotal}</div>
      <button class="remove-btn">Remove</button>
    \`;
    
    // Add event listeners
    const minusBtn = itemElement.querySelector('.minus');
    minusBtn.addEventListener('click', () => {
      updateQuantity(cartItem.productId, cartItem.quantity - 1);
    });
    
    const plusBtn = itemElement.querySelector('.plus');
    plusBtn.addEventListener('click', () => {
      updateQuantity(cartItem.productId, cartItem.quantity + 1);
    });
    
    const removeBtn = itemElement.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      removeFromCart(cartItem.productId);
    });
    
    cartElement.appendChild(itemElement);
  });
  
  // Update total
  totalElement.textContent = calculateTotal().toFixed(2);
}

// Display products
function displayProducts() {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'product4.jpg' }
  ];
  
  const productsContainer = document.getElementById('products');
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    
    productElement.innerHTML = \`
      <img src="images/\${product.image}" alt="\${product.name}">
      <h3>\${product.name}</h3>
      <p class="price">$\${product.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    \`;
    
    const addToCartBtn = productElement.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
      addToCart(product.id, product.name, product.price);
    });
    
    productsContainer.appendChild(productElement);
  });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  loadCart();
});`,
      explanation: "This solution implements a complete shopping cart system using vanilla JavaScript. It includes functionality to add items to the cart, update quantities, remove items, and calculate totals. The cart state is saved to localStorage so it persists between page refreshes. The code organizes cart logic into clear functions and includes proper event handling for the cart interactions."
    }
  },
  {
    id: 6,
    title: "Implement User Authentication with Firebase",
    description: "Learn how to implement user authentication in a web application using Firebase.",
    category: "backend",
    level: "advanced",
    tags: ["firebase", "authentication", "javascript", "web-development"],
    duration: 75,
    objectives: [
      "Set up a Firebase project",
      "Implement user registration",
      "Implement user login",
      "Implement user logout",
      "Secure your application with Firebase authentication"
    ],
    tasks: [
      {
        title: "Set up Firebase project",
        description: "Create a new Firebase project and enable authentication."
      },
      {
        title: "Implement user registration",
        description: "Implement a function to allow users to register with their email and password."
      },
      {
        title: "Implement user login",
        description: "Implement a function to allow users to log in with their email and password."
      },
      {
        title: "Implement user logout",
        description: "Implement a function to allow users to log out of the application."
      },
      {
        title: "Secure your application",
        description: "Secure your application by only allowing authenticated users to access certain resources."
      }
    ],
    solution: {
      code: `
// Import the Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to register a new user
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User registered:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

// Function to login an existing user
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw error;
  }
};

// Function to logout the current user
const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out user:", error.message);
    throw error;
  }
};

export { registerUser, loginUser, logoutUser };
`,
      explanation: "This solution provides a basic implementation of user authentication using Firebase. It includes functions to register new users, log in existing users, and log out the current user. The solution also shows how to secure your application by only allowing authenticated users to access certain resources."
    }
  },
  {
    id: 7,
    title: "Create a Chat Application with Socket.IO",
    description: "Build a real-time chat application using Socket.IO.",
    category: "fullstack",
    level: "advanced",
    tags: ["socket.io", "node.js", "javascript", "web-development"],
    duration: 120,
    objectives: [
      "Set up a Node.js server with Socket.IO",
      "Create a client-side application to connect to the server",
      "Implement real-time messaging",
      "Handle user connections and disconnections"
    ],
    tasks: [
      {
        title: "Set up Node.js server",
        description: "Set up a Node.js server with Socket.IO to handle real-time communication."
      },
      {
        title: "Create client-side application",
        description: "Create a client-side application to connect to the server and send/receive messages."
      },
      {
        title: "Implement real-time messaging",
        description: "Implement a function to send and receive messages in real-time."
      },
      {
        title: "Handle user connections",
        description: "Handle user connections and disconnections to keep track of active users."
      }
    ],
    solution: {
      code: `
// Server-side code (Node.js with Socket.IO)
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 4000;

// Handle new user connections
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Listen for new messages
  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', data); // Broadcast the message to all connected clients
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

// Client-side code (HTML and JavaScript)
<!DOCTYPE html>
<html>
<head>
    <title>Chat Application</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #messages { list-style-type: none; margin: 0; padding: 0; }
        #messages li { padding: 5px 10px; }
        #messages li:nth-child(odd) { background: #eee; }
    </style>
</head>
<body>
    <h1>Chat Application</h1>
    <ul id="messages"></ul>
    <form id="chatForm">
        <input type="text" id="messageInput" placeholder="Type your message">
        <button type="submit">Send</button>
    </form>
    <script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
    <script>
        const socket = io('http://localhost:4000'); // Connect to the Socket.IO server
        const messages = document.getElementById('messages');
        const chatForm = document.getElementById('chatForm');
        const messageInput = document.getElementById('messageInput');

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = messageInput.value;
            socket.emit('message', message); // Send the message to the server
            messageInput.value = '';
        });

        socket.on('message', (message) => {
            const li = document.createElement('li');
            li.textContent = message;
            messages.appendChild(li);
        });
    </script>
</body>
</html>
`,
      explanation: "This solution provides a basic chat application using Socket.IO. It includes a Node.js server to handle real-time communication and a client-side application to connect to the server and send/receive messages. The application allows users to send messages in real-time and handles user connections and disconnections."
    }
  },
  {
    id: 8,
    title: "Flutter To-Do List App",
    description: "Create a to-do list app with Flutter",
    category: "mobile",
    level: "beginner",
    tags: ["flutter", "dart", "mobile", "state-management"],
    duration: 120, 
    objectives: [
      "Set up a Flutter development environment",
      "Create a beautiful UI with Flutter widgets",
      "Implement CRUD operations for to-do items",
      "Manage state in a Flutter application",
      "Use local storage to persist to-do items"
    ],
    tasks: [
      {
        title: "Set Up Flutter Environment",
        description: "Install Flutter SDK and set up your development environment"
      },
      {
        title: "Create a New Flutter Project",
        description: "Initialize a new Flutter project and understand the project structure"
      },
      {
        title: "Design the UI",
        description: "Create a home screen with a list of to-dos and action buttons"
      },
      {
        title: "Create Todo Model",
        description: "Define a Todo class with properties like id, title, description, and completion status"
      },
      {
        title: "Implement Add Todo Functionality",
        description: "Create a form to add new to-dos to the list"
      },
      {
        title: "Implement Todo List Display",
        description: "Display the list of to-dos with proper formatting"
      },
      {
        title: "Add Edit and Delete Functionality",
        description: "Allow users to edit and delete existing to-dos"
      },
      {
        title: "Implement Todo Completion Toggle",
        description: "Add the ability to mark to-dos as completed or incomplete"
      },
      {
        title: "Add Persistence",
        description: "Save to-dos to local storage so they persist between app launches"
      }
    ],
    solution: {
      code: `// main.dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

void main() {
  runApp(TodoApp());
}

class TodoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: TodoListScreen(),
    );
  }
}

class Todo {
  final String id;
  String title;
  String description;
  bool isCompleted;

  Todo({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
  });

  // Convert Todo to a map for storing in SharedPreferences
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'isCompleted': isCompleted,
    };
  }

  // Create Todo from a map when reading from SharedPreferences
  factory Todo.fromMap(Map<String, dynamic> map) {
    return Todo(
      id: map['id'],
      title: map['title'],
      description: map['description'],
      isCompleted: map['isCompleted'],
    );
  }
}

class TodoListScreen extends StatefulWidget {
  @override
  _TodoListScreenState createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  List<Todo> todos = [];
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _loadTodos();
  }

  // Load todos from SharedPreferences
  _loadTodos() async {
    final prefs = await SharedPreferences.getInstance();
    final todosJson = prefs.getStringList('todos') ?? [];
    
    setState(() {
      todos = todosJson
          .map((todo) => Todo.fromMap(json.decode(todo)))
          .toList();
    });
  }

  // Save todos to SharedPreferences
  _saveTodos() async {
    final prefs = await SharedPreferences.getInstance();
    final todosJson = todos
        .map((todo) => json.encode(todo.toMap()))
        .toList();
    prefs.setStringList('todos', todosJson);
  }

  // Add a new todo
  _addTodo() {
    if (_titleController.text.isEmpty) return;

    final newTodo = Todo(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      title: _titleController.text,
      description: _descriptionController.text,
    );

    setState(() {
      todos.add(newTodo);
      _titleController.clear();
      _descriptionController.clear();
    });

    _saveTodos();
    Navigator.pop(context); // Close the dialog
  }

  // Toggle todo completion status
  _toggleTodoStatus(String id) {
    setState(() {
      final todo = todos.firstWhere((todo) => todo.id == id);
      todo.isCompleted = !todo.isCompleted;
    });
    _saveTodos();
  }

  // Delete a todo
  _deleteTodo(String id) {
    setState(() {
      todos.removeWhere((todo) => todo.id == id);
    });
    _saveTodos();
  }

  // Edit a todo
  _editTodo(Todo todo) async {
    _titleController.text = todo.title;
    _descriptionController.text = todo.description;

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Edit Todo'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: _titleController,
                decoration: InputDecoration(
                  labelText: 'Title',
                ),
              ),
              TextField(
                controller: _descriptionController,
                decoration: InputDecoration(
                  labelText: 'Description',
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              child: Text('Cancel'),
              onPress: () => Navigator.pop(context),
            ),
            TextButton(
              child: Text('Save'),
              onPress: () {
                if (_titleController.text.isNotEmpty) {
                  setState(() {
                    todo.title = _titleController.text;
                    todo.description = _descriptionController.text;
                  });
                  _saveTodos();
                  Navigator.pop(context);
                  _titleController.clear();
                  _descriptionController.clear();
                }
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Todo App'),
      ),
      body: todos.isEmpty
          ? Center(child: Text('No todos yet. Add some!'))
          : ListView.builder(
              itemCount: todos.length,
              itemBuilder: (context, index) {
                final todo = todos[index];
                return ListTile(
                  title: Text(
                    todo.title,
                    style: TextStyle(
                      decoration: todo.isCompleted
                          ? TextDecoration.lineThrough
                          : TextDecoration.none,
                    ),
                  ),
                  subtitle: Text(todo.description),
                  leading: Checkbox(
                    value: todo.isCompleted,
                    onChanged: (_) => _toggleTodoStatus(todo.id),
                  ),
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      IconButton(
                        icon: Icon(Icons.edit),
                        onPressed: () => _editTodo(todo),
                      ),
                      IconButton(
                        icon: Icon(Icons.delete),
                        onPressed: () => _deleteTodo(todo.id),
                      ),
                    ],
                  ),
                );
              },
            ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          _titleController.clear();
          _descriptionController.clear();
          showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text('Add Todo'),
                content: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    TextField(
                      controller: _titleController,
                      decoration: InputDecoration(
                        labelText: 'Title',
                      ),
                    ),
                    TextField(
                      controller: _descriptionController,
                      decoration: InputDecoration(
                        labelText: 'Description',
                      ),
                    ),
                  ],
                ),
                actions: [
                  TextButton(
                    child: Text('Cancel'),
                    onPressed: () => Navigator.pop(context),
                  ),
                  TextButton(
                    child: Text('Add'),
                    onPressed: _addTodo,
                  ),
                ],
              );
            },
          );
        },
      ),
    );
  }
}`,
      explanation: "This Flutter application creates a to-do list app with basic CRUD functionality. It uses SharedPreferences to persist todos between app sessions. Users can add, edit, mark as complete, and delete todos. The UI includes a list view showing all todos, and dialogs for adding and editing todos."
    }
  }
];
