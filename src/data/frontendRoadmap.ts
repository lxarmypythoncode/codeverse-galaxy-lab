
export interface IRoadmapNode {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'concept' | 'skill' | 'tool';
  dependencies: string[]; // IDs of nodes that must be completed before this one
  resources?: {
    title: string;
    url: string;
    type: 'article' | 'video' | 'course' | 'documentation';
  }[];
}

export interface IRoadmap {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  nodes: IRoadmapNode[];
}

export const frontendRoadmap: IRoadmap = {
  id: 'frontend-detailed',
  title: 'Frontend Developer Roadmap',
  description: 'Comprehensive roadmap for becoming a professional frontend developer',
  category: 'frontend',
  nodes: [
    // Foundation: HTML, CSS, JavaScript
    {
      id: 'html-fundamentals',
      title: 'HTML Fundamentals',
      description: 'Learn basic HTML structure, semantic elements, forms, and tables',
      level: 'beginner',
      type: 'concept',
      dependencies: [],
      resources: [
        {
          title: 'HTML Tutorial for Beginners',
          url: 'https://www.w3schools.com/html/',
          type: 'documentation'
        },
        {
          title: 'HTML Crash Course',
          url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
          type: 'video'
        }
      ]
    },
    {
      id: 'css-fundamentals',
      title: 'CSS Fundamentals',
      description: 'Learn CSS selectors, box model, typography, colors, and basic layouts',
      level: 'beginner',
      type: 'concept',
      dependencies: ['html-fundamentals'],
      resources: [
        {
          title: 'CSS Tutorial',
          url: 'https://www.w3schools.com/css/',
          type: 'documentation'
        },
        {
          title: 'CSS Crash Course',
          url: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
          type: 'video'
        }
      ]
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design',
      description: 'Learn to create websites that work well on all device sizes using media queries',
      level: 'beginner',
      type: 'skill',
      dependencies: ['css-fundamentals'],
      resources: [
        {
          title: 'Responsive Web Design',
          url: 'https://www.w3schools.com/css/css_rwd_intro.asp',
          type: 'documentation'
        },
        {
          title: 'Responsive Web Design Fundamentals',
          url: 'https://web.dev/responsive-web-design-basics/',
          type: 'article'
        }
      ]
    },
    {
      id: 'css-flexbox',
      title: 'CSS Flexbox',
      description: 'Master the flexible box layout for dynamic one-dimensional layouts',
      level: 'beginner',
      type: 'concept',
      dependencies: ['css-fundamentals'],
      resources: [
        {
          title: 'A Complete Guide to Flexbox',
          url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
          type: 'documentation'
        },
        {
          title: 'Flexbox Froggy',
          url: 'https://flexboxfroggy.com/',
          type: 'course'
        }
      ]
    },
    {
      id: 'css-grid',
      title: 'CSS Grid',
      description: 'Learn the powerful two-dimensional layout system for complex designs',
      level: 'beginner',
      type: 'concept',
      dependencies: ['css-fundamentals'],
      resources: [
        {
          title: 'A Complete Guide to Grid',
          url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
          type: 'documentation'
        },
        {
          title: 'CSS Grid Garden',
          url: 'https://cssgridgarden.com/',
          type: 'course'
        }
      ]
    },
    {
      id: 'javascript-basics',
      title: 'JavaScript Basics',
      description: 'Learn JS syntax, data types, variables, operators, and control structures',
      level: 'beginner',
      type: 'concept',
      dependencies: ['html-fundamentals'],
      resources: [
        {
          title: 'JavaScript Tutorial',
          url: 'https://www.w3schools.com/js/',
          type: 'documentation'
        },
        {
          title: 'JavaScript for Beginners',
          url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
          type: 'video'
        }
      ]
    },
    {
      id: 'dom-manipulation',
      title: 'DOM Manipulation',
      description: 'Learn to interact with HTML elements using JavaScript',
      level: 'beginner',
      type: 'skill',
      dependencies: ['javascript-basics'],
      resources: [
        {
          title: 'JavaScript DOM Manipulation',
          url: 'https://www.javascripttutorial.net/javascript-dom/',
          type: 'documentation'
        },
        {
          title: 'DOM Manipulation in JavaScript',
          url: 'https://www.youtube.com/watch?v=y17RuWkWdn8',
          type: 'video'
        }
      ]
    },
    
    // Intermediate: JavaScript Advanced & Modern Tools
    {
      id: 'js-es6-plus',
      title: 'Modern JavaScript (ES6+)',
      description: 'Master arrow functions, destructuring, modules, promises, and async/await',
      level: 'intermediate',
      type: 'concept',
      dependencies: ['javascript-basics', 'dom-manipulation'],
      resources: [
        {
          title: 'JavaScript ES6 Features',
          url: 'https://www.w3schools.com/js/js_es6.asp',
          type: 'documentation'
        },
        {
          title: 'ES6 Tutorial',
          url: 'https://www.youtube.com/watch?v=nZ1DMMsyVyI',
          type: 'video'
        }
      ]
    },
    {
      id: 'fetch-api',
      title: 'Fetch API & AJAX',
      description: 'Learn to make HTTP requests and handle responses asynchronously',
      level: 'intermediate',
      type: 'skill',
      dependencies: ['js-es6-plus'],
      resources: [
        {
          title: 'Using the Fetch API',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
          type: 'documentation'
        },
        {
          title: 'JavaScript Fetch API',
          url: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
          type: 'video'
        }
      ]
    },
    {
      id: 'web-storage',
      title: 'Web Storage APIs',
      description: 'Learn to use localStorage and sessionStorage for client-side data',
      level: 'intermediate',
      type: 'concept',
      dependencies: ['javascript-basics'],
      resources: [
        {
          title: 'Web Storage API',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'module-bundlers',
      title: 'Module Bundlers',
      description: 'Learn to use tools like Webpack or Vite to bundle your JavaScript',
      level: 'intermediate',
      type: 'tool',
      dependencies: ['js-es6-plus'],
      resources: [
        {
          title: 'Webpack Documentation',
          url: 'https://webpack.js.org/concepts/',
          type: 'documentation'
        },
        {
          title: 'Vite Documentation',
          url: 'https://vitejs.dev/guide/',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      description: 'Learn TypeScript for type-safe JavaScript development',
      level: 'intermediate',
      type: 'concept',
      dependencies: ['js-es6-plus'],
      resources: [
        {
          title: 'TypeScript Documentation',
          url: 'https://www.typescriptlang.org/docs/',
          type: 'documentation'
        },
        {
          title: 'TypeScript Tutorial',
          url: 'https://www.youtube.com/watch?v=BCg4U1FzODs',
          type: 'video'
        }
      ]
    },
    {
      id: 'css-frameworks',
      title: 'CSS Frameworks',
      description: 'Learn popular CSS frameworks like Bootstrap or Tailwind CSS',
      level: 'intermediate',
      type: 'tool',
      dependencies: ['css-fundamentals', 'responsive-design'],
      resources: [
        {
          title: 'Bootstrap Documentation',
          url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
          type: 'documentation'
        },
        {
          title: 'Tailwind CSS Documentation',
          url: 'https://tailwindcss.com/docs',
          type: 'documentation'
        }
      ]
    },
    
    // Advanced: Frameworks, State Management, Testing
    {
      id: 'react-fundamentals',
      title: 'React.js Fundamentals',
      description: 'Learn component-based UI development with React',
      level: 'intermediate',
      type: 'tool',
      dependencies: ['js-es6-plus'],
      resources: [
        {
          title: 'React Documentation',
          url: 'https://react.dev/learn',
          type: 'documentation'
        },
        {
          title: 'React Course',
          url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
          type: 'video'
        }
      ]
    },
    {
      id: 'vue-fundamentals',
      title: 'Vue.js Fundamentals',
      description: 'Learn the progressive JavaScript framework for building UIs',
      level: 'intermediate',
      type: 'tool',
      dependencies: ['js-es6-plus'],
      resources: [
        {
          title: 'Vue.js Documentation',
          url: 'https://vuejs.org/guide/introduction.html',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'state-management',
      title: 'State Management',
      description: 'Learn state management with Redux, Context API, or other solutions',
      level: 'advanced',
      type: 'concept',
      dependencies: ['react-fundamentals'],
      resources: [
        {
          title: 'Redux Documentation',
          url: 'https://redux.js.org/introduction/getting-started',
          type: 'documentation'
        },
        {
          title: 'Context API',
          url: 'https://react.dev/learn/passing-data-deeply-with-context',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'frontend-routing',
      title: 'Frontend Routing',
      description: 'Learn client-side routing with React Router or Vue Router',
      level: 'intermediate',
      type: 'concept',
      dependencies: ['react-fundamentals', 'vue-fundamentals'],
      resources: [
        {
          title: 'React Router Documentation',
          url: 'https://reactrouter.com/en/main',
          type: 'documentation'
        },
        {
          title: 'Vue Router Documentation',
          url: 'https://router.vuejs.org/',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'frontend-testing',
      title: 'Frontend Testing',
      description: 'Learn testing frameworks like Jest, Testing Library, or Cypress',
      level: 'advanced',
      type: 'skill',
      dependencies: ['react-fundamentals'],
      resources: [
        {
          title: 'Jest Documentation',
          url: 'https://jestjs.io/docs/getting-started',
          type: 'documentation'
        },
        {
          title: 'React Testing Library',
          url: 'https://testing-library.com/docs/react-testing-library/intro/',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'web-performance',
      title: 'Web Performance Optimization',
      description: 'Learn techniques to optimize the loading and runtime performance of websites',
      level: 'advanced',
      type: 'skill',
      dependencies: ['react-fundamentals', 'module-bundlers'],
      resources: [
        {
          title: 'Web Performance',
          url: 'https://web.dev/learn-web-vitals/',
          type: 'documentation'
        },
        {
          title: 'Performance Optimization in React',
          url: 'https://reactjs.org/docs/optimizing-performance.html',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization',
      description: 'Learn libraries like Chart.js, D3.js, or Recharts to visualize data',
      level: 'advanced',
      type: 'skill',
      dependencies: ['react-fundamentals', 'js-es6-plus'],
      resources: [
        {
          title: 'Chart.js Documentation',
          url: 'https://www.chartjs.org/docs/latest/',
          type: 'documentation'
        },
        {
          title: 'Recharts Documentation',
          url: 'https://recharts.org/en-US/',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'animation',
      title: 'Web Animation',
      description: 'Learn CSS animations, transitions, and libraries like Framer Motion',
      level: 'advanced',
      type: 'skill',
      dependencies: ['css-fundamentals', 'react-fundamentals'],
      resources: [
        {
          title: 'CSS Animations',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
          type: 'documentation'
        },
        {
          title: 'Framer Motion',
          url: 'https://www.framer.com/motion/',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'accessibility',
      title: 'Web Accessibility',
      description: 'Learn to make websites accessible to people with disabilities',
      level: 'advanced',
      type: 'concept',
      dependencies: ['html-fundamentals', 'css-fundamentals', 'react-fundamentals'],
      resources: [
        {
          title: 'Web Accessibility Initiative',
          url: 'https://www.w3.org/WAI/',
          type: 'documentation'
        },
        {
          title: 'A11y Project',
          url: 'https://www.a11yproject.com/',
          type: 'documentation'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & CI/CD',
      description: 'Learn to deploy frontend apps using platforms like Vercel, Netlify, and GitHub Actions',
      level: 'advanced',
      type: 'skill',
      dependencies: ['react-fundamentals', 'module-bundlers'],
      resources: [
        {
          title: 'Vercel Documentation',
          url: 'https://vercel.com/docs',
          type: 'documentation'
        },
        {
          title: 'GitHub Actions',
          url: 'https://docs.github.com/en/actions',
          type: 'documentation'
        }
      ]
    }
  ]
};
