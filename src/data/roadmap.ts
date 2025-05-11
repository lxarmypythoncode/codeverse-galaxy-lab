
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

export const roadmaps: IRoadmap[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Learn to build modern web interfaces with HTML, CSS, and JavaScript frameworks',
    category: 'frontend',
    nodes: [
      {
        id: 'html-basics',
        title: 'HTML Basics',
        description: 'Learn the fundamentals of HTML, semantic elements, and document structure',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'Introduction to HTML',
            url: 'https://www.w3schools.com/html/html_intro.asp',
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
        id: 'css-basics',
        title: 'CSS Basics',
        description: 'Learn CSS fundamentals, selectors, box model, and layouts',
        level: 'beginner',
        type: 'concept',
        dependencies: ['html-basics'],
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
        id: 'js-basics',
        title: 'JavaScript Basics',
        description: 'Learn JavaScript fundamentals, data types, functions, and DOM manipulation',
        level: 'beginner',
        type: 'concept',
        dependencies: ['html-basics', 'css-basics'],
        resources: [
          {
            title: 'JavaScript Basics',
            url: 'https://javascript.info/',
            type: 'documentation'
          },
          {
            title: 'JavaScript Crash Course',
            url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
            type: 'video'
          }
        ]
      },
      {
        id: 'responsive-design',
        title: 'Responsive Design',
        description: 'Learn to create websites that work well on all device sizes',
        level: 'beginner',
        type: 'skill',
        dependencies: ['css-basics'],
        resources: [
          {
            title: 'Responsive Web Design',
            url: 'https://www.w3schools.com/css/css_rwd_intro.asp',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'css-frameworks',
        title: 'CSS Frameworks',
        description: 'Learn popular CSS frameworks like Bootstrap or Tailwind CSS',
        level: 'beginner',
        type: 'tool',
        dependencies: ['css-basics', 'responsive-design'],
        resources: [
          {
            title: 'Bootstrap Documentation',
            url: 'https://getbootstrap.com/docs/',
            type: 'documentation'
          },
          {
            title: 'Tailwind CSS Documentation',
            url: 'https://tailwindcss.com/docs',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'js-advanced',
        title: 'Advanced JavaScript',
        description: 'Learn advanced JS concepts like closures, prototypes, async/await',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['js-basics'],
        resources: [
          {
            title: 'JavaScript: Understanding the Weird Parts',
            url: 'https://www.udemy.com/course/understand-javascript/',
            type: 'course'
          }
        ]
      },
      {
        id: 'frontend-build-tools',
        title: 'Build Tools',
        description: 'Learn about npm, Webpack, Babel, and other build tools',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['js-advanced'],
        resources: [
          {
            title: 'Webpack Documentation',
            url: 'https://webpack.js.org/concepts/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'react',
        title: 'React',
        description: 'Learn React for building interactive user interfaces',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['js-advanced'],
        resources: [
          {
            title: 'React Documentation',
            url: 'https://reactjs.org/docs/getting-started.html',
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
        id: 'typescript',
        title: 'TypeScript',
        description: 'Learn TypeScript to add static typing to your JavaScript',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['js-advanced'],
        resources: [
          {
            title: 'TypeScript Handbook',
            url: 'https://www.typescriptlang.org/docs/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'state-management',
        title: 'State Management',
        description: 'Learn state management with Redux, Context API, or MobX',
        level: 'advanced',
        type: 'concept',
        dependencies: ['react'],
        resources: [
          {
            title: 'Redux Documentation',
            url: 'https://redux.js.org/introduction/getting-started',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'testing',
        title: 'Frontend Testing',
        description: 'Learn testing with Jest, React Testing Library, or Cypress',
        level: 'advanced',
        type: 'skill',
        dependencies: ['react'],
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
        id: 'performance-optimization',
        title: 'Performance Optimization',
        description: 'Learn techniques to optimize frontend performance',
        level: 'advanced',
        type: 'skill',
        dependencies: ['react', 'frontend-build-tools'],
        resources: [
          {
            title: 'Web Performance',
            url: 'https://web.dev/learn-web-vitals/',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Learn to build server-side applications, APIs, and work with databases',
    category: 'backend',
    nodes: [
      {
        id: 'programming-basics',
        title: 'Programming Basics',
        description: 'Learn the fundamentals of programming with a language like JavaScript or Python',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'Python for Beginners',
            url: 'https://docs.python.org/3/tutorial/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'command-line',
        title: 'Command Line',
        description: 'Learn basic terminal commands and navigation',
        level: 'beginner',
        type: 'skill',
        dependencies: [],
        resources: [
          {
            title: 'Command Line Crash Course',
            url: 'https://www.codecademy.com/learn/learn-the-command-line',
            type: 'course'
          }
        ]
      },
      {
        id: 'version-control',
        title: 'Version Control (Git)',
        description: 'Learn Git for source code management',
        level: 'beginner',
        type: 'tool',
        dependencies: ['command-line'],
        resources: [
          {
            title: 'Git Documentation',
            url: 'https://git-scm.com/docs',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'nodejs',
        title: 'Node.js',
        description: 'Learn server-side JavaScript with Node.js',
        level: 'beginner',
        type: 'tool',
        dependencies: ['programming-basics'],
        resources: [
          {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/en/docs/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'express',
        title: 'Express.js',
        description: 'Learn Express.js framework for building web applications',
        level: 'beginner',
        type: 'tool',
        dependencies: ['nodejs'],
        resources: [
          {
            title: 'Express.js Documentation',
            url: 'https://expressjs.com/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'rest-apis',
        title: 'REST APIs',
        description: 'Learn to design and build RESTful APIs',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['express'],
        resources: [
          {
            title: 'RESTful API Design',
            url: 'https://restfulapi.net/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'databases',
        title: 'Databases',
        description: 'Learn SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['nodejs'],
        resources: [
          {
            title: 'SQL Tutorial',
            url: 'https://www.w3schools.com/sql/',
            type: 'documentation'
          },
          {
            title: 'MongoDB Documentation',
            url: 'https://docs.mongodb.com/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'orm',
        title: 'ORM/ODM',
        description: 'Learn ORMs like Sequelize or Mongoose',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['databases', 'express'],
        resources: [
          {
            title: 'Sequelize Documentation',
            url: 'https://sequelize.org/',
            type: 'documentation'
          },
          {
            title: 'Mongoose Documentation',
            url: 'https://mongoosejs.com/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'authentication',
        title: 'Authentication & Authorization',
        description: 'Learn JWT, OAuth, and user management',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['express', 'databases'],
        resources: [
          {
            title: 'JWT Introduction',
            url: 'https://jwt.io/introduction',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'backend-testing',
        title: 'Backend Testing',
        description: 'Learn unit and integration testing for backend',
        level: 'advanced',
        type: 'skill',
        dependencies: ['express', 'databases'],
        resources: [
          {
            title: 'Jest Documentation',
            url: 'https://jestjs.io/docs/getting-started',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'security',
        title: 'Security Best Practices',
        description: 'Learn backend security, OWASP top 10, and input validation',
        level: 'advanced',
        type: 'concept',
        dependencies: ['authentication', 'express'],
        resources: [
          {
            title: 'OWASP Top Ten',
            url: 'https://owasp.org/www-project-top-ten/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment & DevOps',
        description: 'Learn to deploy applications to production',
        level: 'advanced',
        type: 'skill',
        dependencies: ['nodejs', 'express', 'databases'],
        resources: [
          {
            title: 'Docker Documentation',
            url: 'https://docs.docker.com/',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'fullstack',
    title: 'Fullstack Developer',
    description: 'Master both frontend and backend development to build complete web applications',
    category: 'fullstack',
    nodes: [
      {
        id: 'html-css-js',
        title: 'HTML, CSS, JavaScript',
        description: 'Learn the core web technologies',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'responsive-design-fs',
        title: 'Responsive Design',
        description: 'Create websites that work on all device sizes',
        level: 'beginner',
        type: 'skill',
        dependencies: ['html-css-js'],
        resources: [
          {
            title: 'Responsive Web Design',
            url: 'https://www.w3schools.com/css/css_rwd_intro.asp',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'version-control-fs',
        title: 'Version Control (Git)',
        description: 'Learn Git basics for source code management',
        level: 'beginner',
        type: 'tool',
        dependencies: [],
        resources: [
          {
            title: 'Git & GitHub Crash Course',
            url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
            type: 'video'
          }
        ]
      },
      {
        id: 'frontend-framework',
        title: 'Frontend Framework',
        description: 'Learn React, Vue, or Angular',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['html-css-js'],
        resources: [
          {
            title: 'React Documentation',
            url: 'https://reactjs.org/docs/getting-started.html',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'node-express',
        title: 'Node.js & Express',
        description: 'Learn server-side JavaScript',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['html-css-js'],
        resources: [
          {
            title: 'Node.js & Express Course',
            url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
            type: 'video'
          }
        ]
      },
      {
        id: 'databases-fs',
        title: 'Databases',
        description: 'Learn SQL and NoSQL databases',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['node-express'],
        resources: [
          {
            title: 'Database Design Course',
            url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc',
            type: 'video'
          }
        ]
      },
      {
        id: 'rest-api-fs',
        title: 'REST API Development',
        description: 'Build RESTful APIs with Express',
        level: 'intermediate',
        type: 'skill',
        dependencies: ['node-express', 'databases-fs'],
        resources: [
          {
            title: 'Build a REST API with Node.js',
            url: 'https://www.youtube.com/watch?v=fgTGADljAeg',
            type: 'video'
          }
        ]
      },
      {
        id: 'auth',
        title: 'Authentication',
        description: 'Implement user authentication and authorization',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['rest-api-fs'],
        resources: [
          {
            title: 'JWT Authentication',
            url: 'https://www.youtube.com/watch?v=7Q17ubqLfaM',
            type: 'video'
          }
        ]
      },
      {
        id: 'frontend-state',
        title: 'Frontend State Management',
        description: 'Learn Redux, Context API, or other state management solutions',
        level: 'advanced',
        type: 'concept',
        dependencies: ['frontend-framework'],
        resources: [
          {
            title: 'Redux Course',
            url: 'https://www.youtube.com/watch?v=93p3LxR9xfM',
            type: 'video'
          }
        ]
      },
      {
        id: 'testing-fs',
        title: 'Testing',
        description: 'Learn frontend and backend testing',
        level: 'advanced',
        type: 'skill',
        dependencies: ['frontend-framework', 'rest-api-fs'],
        resources: [
          {
            title: 'Testing JavaScript',
            url: 'https://testingjavascript.com/',
            type: 'course'
          }
        ]
      },
      {
        id: 'deployment-fs',
        title: 'Deployment',
        description: 'Deploy fullstack applications',
        level: 'advanced',
        type: 'skill',
        dependencies: ['frontend-framework', 'rest-api-fs'],
        resources: [
          {
            title: 'Heroku Deployment Guide',
            url: 'https://devcenter.heroku.com/categories/deployment',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'typescript-fs',
        title: 'TypeScript',
        description: 'Add static typing to your JavaScript code',
        level: 'advanced',
        type: 'concept',
        dependencies: ['frontend-framework', 'node-express'],
        resources: [
          {
            title: 'TypeScript Documentation',
            url: 'https://www.typescriptlang.org/docs/',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Developer',
    description: 'Learn to build native and cross-platform mobile applications',
    category: 'mobile',
    nodes: [
      {
        id: 'programming-fundamentals',
        title: 'Programming Fundamentals',
        description: 'Learn the basics of programming with a language like JavaScript or Dart',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'JavaScript Tutorial',
            url: 'https://www.w3schools.com/js/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'mobile-design',
        title: 'Mobile UI Design',
        description: 'Learn design principles for mobile interfaces',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'Mobile UI Design Principles',
            url: 'https://www.youtube.com/watch?v=9jmx0ZNt0vU',
            type: 'video'
          }
        ]
      },
      {
        id: 'react-native',
        title: 'React Native',
        description: 'Build cross-platform mobile apps with React Native',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['programming-fundamentals'],
        resources: [
          {
            title: 'React Native Documentation',
            url: 'https://reactnative.dev/docs/getting-started',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'flutter',
        title: 'Flutter',
        description: 'Build cross-platform apps with Flutter and Dart',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['programming-fundamentals'],
        resources: [
          {
            title: 'Flutter Documentation',
            url: 'https://flutter.dev/docs',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'state-management-mobile',
        title: 'Mobile State Management',
        description: 'Learn state management for mobile apps',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['react-native', 'flutter'],
        resources: [
          {
            title: 'Redux for React Native',
            url: 'https://redux.js.org/introduction/getting-started',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'native-apis',
        title: 'Native Device APIs',
        description: 'Access device features like camera, GPS, notifications',
        level: 'intermediate',
        type: 'skill',
        dependencies: ['react-native', 'flutter'],
        resources: [
          {
            title: 'React Native Device APIs',
            url: 'https://reactnative.dev/docs/accessibilityinfo',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'offline-data',
        title: 'Offline Data Storage',
        description: 'Learn to store and sync data locally',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['react-native', 'flutter'],
        resources: [
          {
            title: 'AsyncStorage in React Native',
            url: 'https://reactnative.dev/docs/asyncstorage',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'responsive-mobile',
        title: 'Responsive Mobile Design',
        description: 'Design for different screen sizes and orientations',
        level: 'intermediate',
        type: 'skill',
        dependencies: ['mobile-design'],
        resources: [
          {
            title: 'Responsive Design in React Native',
            url: 'https://reactnative.dev/docs/dimensions',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'app-publishing',
        title: 'App Publishing',
        description: 'Learn to deploy to App Store and Google Play',
        level: 'advanced',
        type: 'skill',
        dependencies: ['react-native', 'flutter'],
        resources: [
          {
            title: 'Publishing to App Stores',
            url: 'https://reactnative.dev/docs/publishing-to-app-store',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'performance',
        title: 'Mobile App Performance',
        description: 'Optimize mobile app performance',
        level: 'advanced',
        type: 'skill',
        dependencies: ['react-native', 'flutter'],
        resources: [
          {
            title: 'React Native Performance',
            url: 'https://reactnative.dev/docs/performance',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'testing-mobile',
        title: 'Mobile App Testing',
        description: 'Learn to test mobile applications',
        level: 'advanced',
        type: 'skill',
        dependencies: ['react-native', 'flutter'],
        resources: [
          {
            title: 'Testing React Native Apps',
            url: 'https://callstack.github.io/react-native-testing-library/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'ci-cd-mobile',
        title: 'CI/CD for Mobile',
        description: 'Set up continuous integration and delivery',
        level: 'advanced',
        type: 'skill',
        dependencies: ['app-publishing'],
        resources: [
          {
            title: 'Fastlane Documentation',
            url: 'https://docs.fastlane.tools/',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'cyber',
    title: 'Cyber Security Specialist',
    description: 'Learn to secure systems, networks, and applications from cyber threats',
    category: 'cyber',
    nodes: [
      {
        id: 'networking-basics',
        title: 'Networking Fundamentals',
        description: 'Learn basic networking concepts, TCP/IP, and protocols',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'Computer Networking Course',
            url: 'https://www.youtube.com/watch?v=IPvYjXCsTg8',
            type: 'video'
          }
        ]
      },
      {
        id: 'linux-basics',
        title: 'Linux Basics',
        description: 'Learn Linux command line and basic system administration',
        level: 'beginner',
        type: 'skill',
        dependencies: [],
        resources: [
          {
            title: 'Linux Journey',
            url: 'https://linuxjourney.com/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'security-fundamentals',
        title: 'Security Fundamentals',
        description: 'Learn basic security concepts, CIA triad, and threat models',
        level: 'beginner',
        type: 'concept',
        dependencies: [],
        resources: [
          {
            title: 'Introduction to Cyber Security',
            url: 'https://www.coursera.org/learn/intro-cyber-security',
            type: 'course'
          }
        ]
      },
      {
        id: 'cryptography',
        title: 'Cryptography',
        description: 'Learn basic cryptographic concepts and algorithms',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['security-fundamentals'],
        resources: [
          {
            title: 'Cryptography I',
            url: 'https://www.coursera.org/learn/crypto',
            type: 'course'
          }
        ]
      },
      {
        id: 'web-app-security',
        title: 'Web Application Security',
        description: 'Learn common web vulnerabilities and how to prevent them',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['security-fundamentals'],
        resources: [
          {
            title: 'OWASP Top Ten',
            url: 'https://owasp.org/www-project-top-ten/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'network-security',
        title: 'Network Security',
        description: 'Learn to secure networks, firewalls, and intrusion detection',
        level: 'intermediate',
        type: 'concept',
        dependencies: ['networking-basics', 'security-fundamentals'],
        resources: [
          {
            title: 'Network Security Fundamentals',
            url: 'https://www.youtube.com/watch?v=E03gh1huvW4',
            type: 'video'
          }
        ]
      },
      {
        id: 'security-tools',
        title: 'Security Tools',
        description: 'Learn tools like Wireshark, Metasploit, Burp Suite',
        level: 'intermediate',
        type: 'tool',
        dependencies: ['security-fundamentals', 'linux-basics'],
        resources: [
          {
            title: 'Wireshark Tutorial',
            url: 'https://www.youtube.com/watch?v=lb1Dw0elw0Q',
            type: 'video'
          }
        ]
      },
      {
        id: 'secure-coding',
        title: 'Secure Coding Practices',
        description: 'Learn to write secure code and prevent vulnerabilities',
        level: 'intermediate',
        type: 'skill',
        dependencies: ['web-app-security'],
        resources: [
          {
            title: 'Secure Coding Guidelines',
            url: 'https://www.owasp.org/index.php/OWASP_Secure_Coding_Practices',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'penetration-testing',
        title: 'Penetration Testing',
        description: 'Learn ethical hacking and penetration testing methodologies',
        level: 'advanced',
        type: 'skill',
        dependencies: ['security-tools', 'web-app-security', 'network-security'],
        resources: [
          {
            title: 'Penetration Testing: A Hands-On Introduction',
            url: 'https://www.amazon.com/Penetration-Testing-Hands-Introduction-Hacking/dp/1593275641',
            type: 'course'
          }
        ]
      },
      {
        id: 'incident-response',
        title: 'Incident Response',
        description: 'Learn to respond to security incidents and breaches',
        level: 'advanced',
        type: 'skill',
        dependencies: ['network-security', 'security-tools'],
        resources: [
          {
            title: 'Incident Response Process',
            url: 'https://www.sans.org/white-papers/33901/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'forensics',
        title: 'Digital Forensics',
        description: 'Learn to investigate security incidents and collect evidence',
        level: 'advanced',
        type: 'skill',
        dependencies: ['incident-response'],
        resources: [
          {
            title: 'Digital Forensics Course',
            url: 'https://www.youtube.com/watch?v=sF_Zd-IPUs0',
            type: 'video'
          }
        ]
      },
      {
        id: 'security-architecture',
        title: 'Security Architecture',
        description: 'Learn to design secure systems and networks',
        level: 'advanced',
        type: 'concept',
        dependencies: ['network-security', 'web-app-security', 'cryptography'],
        resources: [
          {
            title: 'Security Architecture Design',
            url: 'https://www.cybrary.it/course/security-architecture/',
            type: 'course'
          }
        ]
      }
    ]
  }
];
