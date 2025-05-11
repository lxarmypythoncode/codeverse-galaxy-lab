export interface ILab {
  id: number;
  title: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  task: string;
  defaultCode: string;
  solution: string;
  hints: string[];
  testCases?: { input: string; expectedOutput: string }[];
  slug: string;
}

export const labs: ILab[] = [
  {
    id: 1,
    title: "Build a Responsive Navigation Bar",
    category: "frontend",
    level: "beginner",
    description: "Create a responsive navigation bar that collapses into a hamburger menu on mobile devices",
    task: "Implement a responsive navigation bar with smooth transitions and accessibility features",
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Nav Bar</title>
  <style>
    /* Add your CSS here */
    
  </style>
</head>
<body>
  <!-- Add your HTML here -->
  
  <script>
    // Add your JavaScript here
    
  </script>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Nav Bar</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    
    header {
      background: #333;
      color: #fff;
      padding: 1rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
    }
    
    .nav-item {
      margin-left: 1.5rem;
    }
    
    .nav-link {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .nav-link:hover {
      color: #ccc;
    }
    
    .hamburger {
      display: none;
      cursor: pointer;
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
    }
    
    @media screen and (max-width: 768px) {
      .hamburger {
        display: block;
        z-index: 10;
      }
      
      .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        flex-direction: column;
        width: 70%;
        height: 100vh;
        background: #333;
        padding: 4rem 2rem 2rem;
        transition: right 0.3s ease;
        z-index: 5;
      }
      
      .nav-menu.active {
        right: 0;
      }
      
      .nav-item {
        margin: 1rem 0;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <div class="logo">CodeVerseLab</div>
        <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">☰</button>
        <ul class="nav-menu" id="nav-menu" aria-label="Main navigation">
          <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Projects</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <script>
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      hamburger.textContent = isExpanded ? '☰' : '✕';
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.textContent = '☰';
      });
    });
  </script>
</body>
</html>`,
    hints: [
      "Use HTML, CSS, and JavaScript",
      "Don't use any external libraries or frameworks",
      "Ensure the navigation is accessible (proper ARIA attributes)",
      "Style it with a modern design",
      "Implement smooth animations"
    ],
    testCases: [
      {
        input: "Desktop view (width > 768px)",
        expectedOutput: "Navigation links should be displayed horizontally"
      },
      {
        input: "Mobile view (width < 768px)",
        expectedOutput: "Navigation links should be hidden and hamburger menu should be visible"
      },
      {
        input: "Click hamburger menu in mobile view",
        expectedOutput: "Navigation menu should slide in from the right"
      }
    ],
    timeEstimate: 30,
    slug: "responsive-navigation-bar"
  },
  {
    id: 2,
    title: "API Rate Limiter",
    category: "backend",
    level: "intermediate",
    description: "Implement a rate limiter for a Node.js Express API",
    task: "Create a middleware that limits requests to 100 per hour per IP address",
    defaultCode: `const express = require('express');
const app = express();

// Implement your rate limiter middleware here
function rateLimiter(maxRequests, windowMs) {
  // Your code here
}

// Apply your middleware
app.use(rateLimiter(100, 60 * 60 * 1000)); // 100 requests per hour

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
`,
    solution: `const express = require('express');
const app = express();

function rateLimiter(maxRequests, windowMs) {
  // Store for tracking requests
  const requestStore = new Map();
  
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    // Initialize or retrieve the IP's request history
    if (!requestStore.has(ip)) {
      requestStore.set(ip, []);
    }
    
    // Get the request history for this IP
    const requestHistory = requestStore.get(ip);
    
    // Clean up old requests (sliding window)
    const windowStart = now - windowMs;
    const recentRequests = requestHistory.filter(timestamp => timestamp > windowStart);
    
    // Update the store with only recent requests
    requestStore.set(ip, recentRequests);
    
    // Check if limit is exceeded
    if (recentRequests.length >= maxRequests) {
      res.status(429).json({
        error: 'Too Many Requests',
        message: 'Rate limit exceeded. Please try again later.'
      });
      return;
    }
    
    // Add current request timestamp
    recentRequests.push(now);
    requestStore.set(ip, recentRequests);
    
    // Set headers
    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', maxRequests - recentRequests.length);
    res.setHeader('X-RateLimit-Reset', Math.ceil((windowStart + windowMs) / 1000));
    
    next();
  };
}

app.use(rateLimiter(100, 60 * 60 * 1000)); // 100 requests per hour

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
`,
    hints: [
      "Use an in-memory store (for simplicity)",
      "Return appropriate status codes (429) when limit is exceeded",
      "Include remaining limit count in response headers",
      "Implement a sliding window algorithm for more accurate rate limiting"
    ],
    testCases: [
      {
        input: "Single request",
        expectedOutput: "Status 200 with X-RateLimit-Remaining: 99"
      },
      {
        input: "101 requests within an hour",
        expectedOutput: "Status 429 after the 100th request"
      },
      {
        input: "Request after window expiration",
        expectedOutput: "Status 200 with reset limits"
      }
    ],
    timeEstimate: 45,
    slug: "api-rate-limiter"
  },
  {
    id: 3,
    title: "SQL Injection Prevention",
    category: "cyber",
    level: "intermediate",
    description: "Identify and fix SQL injection vulnerabilities in existing code",
    task: "Identify all SQL injection vulnerabilities in the code and fix each vulnerability",
    defaultCode: `const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'app_user',
  password: 'password',
  database: 'user_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Login endpoint
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  // VULNERABLE: Direct string concatenation in SQL query
  const query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";
  
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    
    if (result.length > 0) {
      res.json({ success: true, user: result[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// User search endpoint
app.get('/users', (req, res) => {
  const searchTerm = req.query.search || '';
  
  // VULNERABLE: Direct string concatenation in SQL query
  const query = "SELECT id, name, email FROM users WHERE name LIKE '%" + searchTerm + "%' OR email LIKE '%" + searchTerm + "%'";
  
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    
    res.json({ users: results });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
`,
    solution: `const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'app_user',
  password: 'password',
  database: 'user_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Input validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

// Login endpoint
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  // Input validation
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }
  
  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }
  
  // FIXED: Using parameterized query
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  
  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    
    if (result.length > 0) {
      // Don't return password in response
      const user = { ...result[0] };
      delete user.password;
      
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// User search endpoint
app.get('/users', (req, res) => {
  const searchTerm = req.query.search || '';
  
  // FIXED: Using parameterized query with placeholders
  const query = "SELECT id, name, email FROM users WHERE name LIKE ? OR email LIKE ?";
  const searchPattern = \`%\${searchTerm}%\`;
  
  db.query(query, [searchPattern, searchPattern], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    
    res.json({ users: results });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
`,
    hints: [
      "Look for places where user input is directly concatenated into SQL queries",
      "Use prepared statements/parameterized queries",
      "Consider using an ORM like Sequelize or TypeORM instead of raw queries"
    ],
    testCases: [
      {
        input: "Normal login with email: user@example.com, password: password123",
        expectedOutput: "Status 200 or 401 (depending on if credentials match)"
      },
      {
        input: "SQL Injection attack: email: ' OR '1'='1", 
        expectedOutput: "Status 401 (rejected), not returning all users"
      },
      {
        input: "Search with term: '; DROP TABLE users; --",
        expectedOutput: "Status 200 with empty or filtered results, not executing the DROP command"
      }
    ],
    timeEstimate: 40,
    slug: "sql-injection-prevention"
  },
  {
    id: 4,
    title: "Flutter State Management with Provider",
    category: "mobile",
    level: "intermediate",
    description: "Build a shopping cart app using Flutter's Provider package for state management",
    task: "Create a product listing page showing at least 5 products and implement a shopping cart",
    defaultCode: `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// Create your models here

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Shopping Cart',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: ProductsPage(),
    );
  }
}

class ProductsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Implement products page
    return Scaffold();
  }
}

class CartPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Implement cart page
    return Scaffold();
  }
}`,
    solution: `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// Models
class Product {
  final String id;
  final String name;
  final double price;
  final String imageUrl;

  Product({
    required this.id,
    required this.name,
    required this.price,
    required this.imageUrl,
  });
}

class CartItem {
  final Product product;
  int quantity;

  CartItem({
    required this.product,
    this.quantity = 1,
  });

  double get total => product.price * quantity;
}

class CartModel extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => [..._items];
  
  int get itemCount => _items.fold(0, (sum, item) => sum + item.quantity);
  
  double get totalAmount => _items.fold(
    0, (sum, item) => sum + (item.product.price * item.quantity)
  );

  void addProduct(Product product) {
    final existingIndex = _items.indexWhere(
      (item) => item.product.id == product.id
    );

    if (existingIndex >= 0) {
      _items[existingIndex].quantity++;
    } else {
      _items.add(CartItem(product: product));
    }

    notifyListeners();
  }

  void removeProduct(String productId) {
    final existingIndex = _items.indexWhere(
      (item) => item.product.id == productId
    );

    if (existingIndex >= 0) {
      if (_items[existingIndex].quantity > 1) {
        _items[existingIndex].quantity--;
      } else {
        _items.removeAt(existingIndex);
      }
    }

    notifyListeners();
  }

  void clearCart() {
    _items.clear();
    notifyListeners();
  }
}

// Sample data
final sampleProducts = [
  Product(
    id: 'p1',
    name: 'Smartphone',
    price: 799.99,
    imageUrl: 'https://via.placeholder.com/150',
  ),
  Product(
    id: 'p2',
    name: 'Laptop',
    price: 1299.99,
    imageUrl: 'https://via.placeholder.com/150',
  ),
  Product(
    id: 'p3',
    name: 'Headphones',
    price: 159.99,
    imageUrl: 'https://via.placeholder.com/150',
  ),
  Product(
    id: 'p4',
    name: 'Smartwatch',
    price: 249.99,
    imageUrl: 'https://via.placeholder.com/150',
  ),
  Product(
    id: 'p5',
    name: 'Wireless Earbuds',
    price: 129.99,
    imageUrl: 'https://via.placeholder.com/150',
  ),
];

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Shopping Cart',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: Colors.grey[100],
      ),
      home: ProductsPage(),
    );
  }
}

class ProductsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Products'),
        actions: [
          Stack(
            alignment: Alignment.center,
            children: [
              IconButton(
                icon: Icon(Icons.shopping_cart),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => CartPage()),
                  );
                },
              ),
              Positioned(
                right: 8,
                top: 8,
                child: Consumer<CartModel>(
                  builder: (_, cart, __) {
                    return cart.itemCount == 0
                        ? Container()
                        : Container(
                            padding: EdgeInsets.all(2),
                            decoration: BoxDecoration(
                              color: Colors.red,
                              borderRadius: BorderRadius.circular(10),
                            ),
                            constraints: BoxConstraints(
                              minWidth: 16,
                              minHeight: 16,
                            ),
                            child: Text(
                              '${cart.itemCount}',
                              style: TextStyle(
                                fontSize: 10,
                                color: Colors.white,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          );
                  },
                ),
              ),
            ],
          ),
        ],
      ),
      body: GridView.builder(
        padding: EdgeInsets.all(10),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 3 / 4,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
        ),
        itemCount: sampleProducts.length,
        itemBuilder: (ctx, i) {
          final product = sampleProducts[i];
          return Card(
            elevation: 4,
            child: Column(
              children: [
                Expanded(
                  child: Image.network(
                    product.imageUrl,
                    fit: BoxFit.cover,
                  ),
                ),
                Padding(
                  padding: EdgeInsets.all(8),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        product.name,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 4),
                      Text('\$${product.price.toStringAsFixed(2)}'),
                      SizedBox(height: 8),
                      Consumer<CartModel>(
                        builder: (_, cart, __) {
                          final isInCart = cart.items.any(
                            (item) => item.product.id == product.id
                          );
                          return ElevatedButton(
                            onPressed: () {
                              if (!isInCart) {
                                cart.addProduct(product);
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text('${product.name} added to cart'),
                                    duration: Duration(seconds: 2),
                                  ),
                                );
                              } else {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(builder: (context) => CartPage()),
                                );
                              }
                            },
                            child: Text(
                              isInCart ? 'View Cart' : 'Add to Cart',
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class CartPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Shopping Cart'),
      ),
      body: Consumer<CartModel>(
        builder: (context, cart, child) {
          if (cart.items.isEmpty) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.shopping_cart_outlined,
                    size: 100,
                    color: Colors.grey,
                  ),
                  Text(
                    'Your cart is empty',
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.grey,
                    ),
                  ),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Text('Continue Shopping'),
                  ),
                ],
              ),
            );
          }
          return Column(
            children: [
              Expanded(
                child: ListView.builder(
                  itemCount: cart.items.length,
                  itemBuilder: (ctx, i) {
                    final item = cart.items[i];
                    return Card(
                      margin: EdgeInsets.symmetric(
                        horizontal: 15,
                        vertical: 4,
                      ),
                      child: Padding(
                        padding: EdgeInsets.all(8),
                        child: ListTile(
                          leading: CircleAvatar(
                            backgroundImage: NetworkImage(item.product.imageUrl),
                          ),
                          title: Text(item.product.name),
                          subtitle: Text(
                            'Total: \$${(item.product.price * item.quantity).toStringAsFixed(2)}',
                          ),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              IconButton(
                                icon: Icon(Icons.remove),
                                onPressed: () {
                                  cart.removeProduct(item.product.id);
                                },
                              ),
                              Text('${item.quantity}'),
                              IconButton(
                                icon: Icon(Icons.add),
                                onPressed: () {
                                  cart.addProduct(item.product);
                                },
                              ),
                            ],
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
              Card(
                margin: EdgeInsets.all(15),
                child: Padding(
                  padding: EdgeInsets.all(8),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Total',
                        style: TextStyle(fontSize: 20),
                      ),
                      Spacer(),
                      Chip(
                        label: Text(
                          '\$${cart.totalAmount.toStringAsFixed(2)}',
                          style: TextStyle(
                            color: Theme.of(context).primaryTextTheme.titleLarge?.color,
                          ),
                        ),
                        backgroundColor: Theme.of(context).primaryColor,
                      ),
                      SizedBox(width: 10),
                      ElevatedButton(
                        onPressed: () {
                          cart.clearCart();
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text('Order placed successfully!'),
                              duration: Duration(seconds: 2),
                            ),
                          );
                        },
                        child: Text('ORDER NOW'),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
`,
    hints: [
      "Use the ChangeNotifier class to create your data models",
      "Use ChangeNotifierProvider to make your models available to widgets",
      "Use Consumer or Provider.of to access the models in your widgets"
    ],
    testCases: [
      {
        input: "Add product to cart",
        expectedOutput: "Product appears in cart, item count increases"
      },
      {
        input: "Increase product quantity",
        expectedOutput: "Product quantity increases, total updates correctly"
      },
      {
        input: "Remove product from cart",
        expectedOutput: "Product quantity decreases or removes product if quantity is 1"
      }
    ],
    timeEstimate: 60,
    slug: "flutter-state-management"
  },
  {
    id: 5,
    title: "React Component Optimization",
    category: "frontend",
    level: "advanced",
    description: "Optimize rendering performance of a React component displaying a large dataset",
    task: "Optimize the product list component using appropriate React techniques",
    defaultCode: `import React, { useState, useEffect } from 'react';
import './App.css';

// This mimics a large dataset that might come from an API
const generateLargeDataset = () => {
  const items = [];
  for (let i = 1; i <= 10000; i++) {
    items.push({
      id: i,
      name: \`Product \${i}\`,
      price: Math.floor(Math.random() * 1000) + 1,
      category: ['Electronics', 'Clothing', 'Books', 'Home', 'Toys'][
        Math.floor(Math.random() * 5)
      ],
    });
  }
  return items;
};

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Load data on mount
  useEffect(() => {
    const data = generateLargeDataset();
    setProducts(data);
    setFilteredProducts(data);
  }, []);
  
  // This function is inefficient and causes performance issues
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = products.filter(product => {
      return product.name.toLowerCase().includes(term.toLowerCase()) && 
        (selectedCategory === '' || product.category === selectedCategory);
    });
    
    setFilteredProducts(filtered);
  };
  
  // This function is also inefficient
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    
    const filtered = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        (category === '' || product.category === category);
    });
    
    setFilteredProducts(filtered);
  };
  
  return (
    <div className="App">
      <h1>Product List</h1>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Home">Home</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      
      <div className="product-count">
        Showing {filteredProducts.length} products
      </div>
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
`,
    solution: `import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import './App.css';

// This mimics a large dataset that might come from an API
const generateLargeDataset = () => {
  const items = [];
  for (let i = 1; i <= 10000; i++) {
    items.push({
      id: i,
      name: \`Product \${i}\`,
      price: Math.floor(Math.random() * 1000) + 1,
      category: ['Electronics', 'Clothing', 'Books', 'Home', 'Toys'][
        Math.floor(Math.random() * 5)
      ],
    });
  }
  return items;
};

// Memoized Product component
const Product = React.memo(({ data, index, style }) => {
  const product = data[index];
  
  return (
    <div style={style} className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
});

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Load data on mount
  useEffect(() => {
    const data = generateLargeDataset();
    setProducts(data);
  }, []);
  
  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        (selectedCategory === '' || product.category === selectedCategory);
    });
  }, [products, searchTerm, selectedCategory]);
  
  // Optimized event handlers with useCallback
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  
  const handleCategoryChange = useCallback((e) => {
    setSelectedCategory(e.target.value);
  }, []);
  
  // Row renderer function for the virtualized list
  const Row = useCallback(({ index, style }) => {
    return <Product data={filteredProducts} index={index} style={style} />;
  }, [filteredProducts]);
  
  return (
    <div className="App">
      <h1>Product List</h1>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Home">Home</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      
      <div className="product-count">
        Showing {filteredProducts.length} products
      </div>
      
      <div className="product-list-container">
        {filteredProducts.length > 0 ? (
          <List
            className="product-list"
            height={500}
            itemCount={filteredProducts.length}
            itemSize={100}
            width="100%"
          >
            {Row}
          </List>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
`,
    hints: [
      "Use memo, useCallback, and useMemo hooks",
      "Implement windowing/virtualization with a library like react-window",
      "Use efficient state management to minimize re-renders",
      "Add proper keys to list items"
    ],
    testCases: [
      {
        input: "Initial render of 10,000 items",
        expectedOutput: "UI remains responsive, no freezing"
      },
      {
        input: "Filter by search term 'Product 100'",
        expectedOutput: "List updates quickly with matching items"
      },
      {
        input: "Scroll through the list",
        expectedOutput: "Smooth scrolling without rendering all items"
      }
    ],
    timeEstimate: 50,
    slug: "react-component-optimization"
  }
];
