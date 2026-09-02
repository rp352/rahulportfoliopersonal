import {
  Project,
  Skill,
  EducationItem,
  CertificateItem,
  ExperienceItem,
  JourneyMilestone,
  SocialLink
} from '../types';

export const personalInfo = {
  name: "Rahul Pariharia",
  preferredName: "Rahul",
  initials: "RP",
  roleHeadline: "Computer Science Student | Web Developer | AI Enthusiast | Builder",
  university: "Lovely Professional University",
  degree: "B.Tech Computer Science and Engineering",
  graduationYear: "2029",
  location: "Thane, Maharashtra, India",
  email: "rahul.pariharia2025@lpu.in",
  phone: "+91-9082135895",
  githubUrl: "https://github.com/rp352",
  linkedinUrl: "https://www.linkedin.com/in/rahul-pariharia/",
  portfolioUrl: "https://arjun-portfolio-website-tau.vercel.app/",
  status: "First-Year B.Tech CSE Student @ LPU",
  availabilityStatus: "Open to Collaborations & Freelance Projects",
  
  heroHeading: "Hi, I'm Rahul Pariharia.",
  heroSupporting: "Computer Science Student building practical things with code, AI and the web.",
  typewriterRoles: [
    "Web Developer",
    "AI Enthusiast",
    "Browser Extension Builder",
    "Problem Solver",
    "Future Freelancer"
  ],
  heroDescription: "I'm a B.Tech Computer Science student at Lovely Professional University who enjoys turning ideas into practical digital products. I'm currently exploring web development, AI, automation, and developer tools through independent projects.",
  
  aboutIntro: [
    "I'm Rahul, a Computer Science student at Lovely Professional University. I'm currently focused on strengthening my fundamentals while building projects outside the classroom.",
    "I enjoy experimenting with technology and turning small ideas into usable tools. My current interests include web development, AI-powered applications, browser extensions, automation, and UI/UX.",
    "I'm still early in my journey, so this portfolio is less about claiming years of experience and more about showing what I'm learning, building, and improving."
  ],
  
  personalQuote: "Curious enough to build it. Stubborn enough to keep improving it.",
  
  currentlyFocusedOn: [
    { title: "Web Development", subtitle: "Modern responsive web applications & tools", icon: "Globe" },
    { title: "Python", subtitle: "Core programming, scripting & algorithms", icon: "Code2" },
    { title: "Artificial Intelligence", subtitle: "Recommendation models & smart workflows", icon: "Brain" },
    { title: "Browser Extensions", subtitle: "Chrome extension APIs & DOM automation", icon: "Puzzle" },
    { title: "Automation", subtitle: "n8n workflows & developer productivity", icon: "Cpu" },
    { title: "UI/UX & Figma", subtitle: "Clean interfaces, design systems & micro-UX", icon: "Figma" },
  ],

  hobbies: [
    { name: "Football", desc: "Passionate about team strategy and high-energy matches", icon: "Activity" }
  ]
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rp352",
    icon: "Github",
    label: "Explore code repositories on GitHub"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-pariharia/",
    icon: "Linkedin",
    label: "Connect professionally on LinkedIn"
  },
  {
    name: "Email",
    url: "mailto:rahul.pariharia2025@lpu.in",
    icon: "Mail",
    label: "Send an email inquiry"
  },
  {
    name: "Phone",
    url: "tel:+919082135895",
    icon: "Phone",
    label: "Direct phone contact"
  }
];

export const skillsData: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", level: "comfortable", iconName: "Terminal", description: "Core data structures, object-oriented concepts, scripting & problem solving" },
  { name: "C", category: "Programming", level: "comfortable", iconName: "FileCode", description: "Low-level memory management, pointers, and systems fundamentals" },
  { name: "C++", category: "Programming", level: "exploring", iconName: "Binary", description: "Exploring OOP, STL containers, and algorithmic efficiency" },
  
  // Web Development
  { name: "HTML5", category: "Web Development", level: "comfortable", iconName: "FileText", description: "Semantic markup, accessibility standards, and modern DOM structure" },
  { name: "CSS3", category: "Web Development", level: "comfortable", iconName: "Palette", description: "Flexbox, CSS Grid, custom layouts, animations & responsive styling" },
  { name: "JavaScript (ES6+)", category: "Web Development", level: "comfortable", iconName: "Zap", description: "DOM manipulation, asynchronous JavaScript, Promises, and Browser APIs" },
  
  // Design & UI/UX
  { name: "Figma", category: "Design & UI/UX", level: "comfortable", iconName: "Figma", description: "Wireframing, UI prototyping, component libraries and responsive layout design" },
  { name: "UI/UX Fundamentals", category: "Design & UI/UX", level: "comfortable", iconName: "Layout", description: "Visual hierarchy, typography scaling, color contrast, and intuitive user flows" },
  
  // Tools & Platforms
  { name: "Git", category: "Tools & Platforms", level: "comfortable", iconName: "GitBranch", description: "Version control, branching, committing, merging and history inspection" },
  { name: "GitHub", category: "Tools & Platforms", level: "comfortable", iconName: "Github", description: "Repository management, open source collaboration, and documentation" },
  { name: "Vercel", category: "Tools & Platforms", level: "comfortable", iconName: "Cloud", description: "Continuous deployment and hosting for modern frontend applications" },
  { name: "VS Code", category: "Tools & Platforms", level: "comfortable", iconName: "Code", description: "Primary IDE configured with modern developer extensions and debuggers" },
  { name: "n8n", category: "Tools & Platforms", level: "exploring", iconName: "Workflow", description: "Exploring workflow automation, webhook triggers and API pipelines" },
  
  // Areas of Interest
  { name: "Browser Extensions", category: "Areas of Interest", level: "comfortable", iconName: "Puzzle", description: "Manifest V3, content scripts, background service workers, and storage APIs" },
  { name: "Web Development", category: "Areas of Interest", level: "comfortable", iconName: "Globe", description: "Crafting lightweight, blazing fast, and responsive digital interfaces" },
  { name: "Artificial Intelligence", category: "Areas of Interest", level: "exploring", iconName: "Brain", description: "Exploring recommendation mechanics, semantic search & machine learning concepts" },
  { name: "Workflow Automation", category: "Areas of Interest", level: "exploring", iconName: "Cpu", description: "Eliminating repetitive web tasks and building time-saving developer utilities" },
];

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "Web Application / Portfolio",
    badge: "Personal Project",
    category: "Web Application",
    status: "Completed",
    shortDescription: "My personal editorial portfolio website built with React, Vite, Tailwind CSS, Lenis, and Motion Primitives with retro-tech brutalist aesthetics.",
    fullDescription: "An editorial portfolio engineered for fluid 60+ FPS performance, combining GSAP ScrollTrigger timeline orchestration, Lenis inertial smooth scrolling, hardware-accelerated motion layers, and responsive retro-tech visual telemetry.",
    problemSolved: "Standard web portfolios frequently suffer from scroll stutter, bloated asset pipelines, and uninspired cookie-cutter aesthetics.",
    solution: "Architected a custom dark-mode brutalist experience with fine-tuned Lenis smooth scrolling, decoupled custom cursor, and compositor-optimized transitions.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Lenis", "GSAP", "TypeScript"],
    highlights: [
      "Synchronized GSAP ticker and Lenis inertial scrolling engine",
      "Hardware-accelerated compositor transitions and zero layout reflows",
      "Interactive folder popover card system with Framer Motion layoutId",
      "Brutalist typography and retro-tech visual telemetry HUDs",
      "Direct 1:1 hardware mouse tracking cursor"
    ],
    keyFeatures: [
      {
        title: "Inertial Smooth Scroll",
        description: "Custom Lenis configuration synchronized into GSAP animation frame loops.",
        icon: "Move"
      },
      {
        title: "Folder Tab Popover",
        description: "Interactive project folders that morph into full inspection modals.",
        icon: "Folder"
      },
      {
        title: "Telemetry & Coordinates HUD",
        description: "Real-time aesthetic visual counters and technical spec readouts.",
        icon: "Activity"
      }
    ],
    architecture: [
      {
        title: "Lenis + GSAP Loop",
        details: "Unified animation frame ticker ensuring fluid 60+ FPS scrolling across all sections."
      },
      {
        title: "Modular Component Structure",
        details: "Atomic React component design with isolated state and lazy-loaded modal portals."
      }
    ],
    githubUrl: "https://github.com/rp352/ARJUN-portfolio-website",
    liveDemoUrl: "https://arjun-portfolio-website-tau.vercel.app/"
  },
  {
    id: "youtube-recommendation-extension",
    title: "YouTube Recommendation & Personalization Extension",
    type: "Browser Extension / AI-Oriented Project",
    badge: "Featured Star Project",
    category: "Browser Extension",
    status: "Active Build",
    shortDescription: "A browser extension focused on improving the YouTube content discovery experience through personalized video recommendations and interest modeling.",
    fullDescription: "Standard algorithmic feeds can often trap users into repetitive or irrelevant clickbait. This extension explores client-side recommendation logic to analyze user interests and viewing habits, filtering and surfacing videos aligned with actual learning and productivity goals.",
    problemSolved: "YouTube's default algorithmic feed frequently optimizes for maximum watch time rather than user value, flooding the homepage with irrelevant or distracting videos.",
    solution: "Built a Manifest V3 Chrome extension that dynamically parses video metadata, computes interest-matching weights based on user-defined topics, and provides a customized feed experience.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Chrome Extension APIs", "Manifest V3", "Local Storage"],
    highlights: [
      "Personalized recommendations based on custom weight parameters",
      "Dynamic user interest modeling and topic scoring",
      "Direct DOM integration with YouTube homepage elements",
      "Client-side processing for privacy and zero latency",
      "Interactive popup controller for real-time feed adjustments"
    ],
    keyFeatures: [
      {
        title: "Interest Weight Modeling",
        description: "Allows users to define high-priority learning tags and downweight distracting entertainment categories.",
        icon: "Sliders"
      },
      {
        title: "Client-side Feed Scoring",
        description: "Evaluates video titles, channel data, and categories directly in the browser to re-rank the visible stream.",
        icon: "Cpu"
      },
      {
        title: "Clean Non-Intrusive Overlay",
        description: "Seamlessly integrates with YouTube's native design system while providing instant visual badges for high-relevance content.",
        icon: "Eye"
      },
      {
        title: "Privacy First",
        description: "Operates locally without sending user browsing logs or sensitive session data to third-party servers.",
        icon: "ShieldCheck"
      }
    ],
    architecture: [
      {
        title: "Content Script (`content.ts`)",
        details: "Monitors YouTube DOM mutations, injects relevance badges, and hides suppressed recommendations dynamically."
      },
      {
        title: "Relevance Engine (`curator/`)",
        details: "Applies tokenization and interest vector matching to calculate a normalized relevance score from 0.0 to 1.0."
      },
      {
        title: "Extension Popup (`popup.html`)",
        details: "Clean dashboard for users to tweak target keywords, whitelist channels, and view real-time feed analytics."
      }
    ],
    githubUrl: "https://github.com/rp352/youtube-doped-feed-",
    liveDemoUrl: "#"
  },
  {
    id: "design-inspector-extension",
    title: "Design Inspector",
    type: "Developer Tool / Browser Extension",
    badge: "Developer Utility",
    category: "Developer Tool",
    status: "Active Build",
    shortDescription: "Design Inspector is a browser extension I built to make reverse-engineering web interfaces easier. Select an element on any webpage and instantly explore the design information behind it, from typography and colors to structure and dimensions.",
    fullDescription: "Design Inspector is a browser extension I built to make reverse-engineering web interfaces easier. Select an element on any webpage and instantly explore the design information behind it, from typography and colors to structure and dimensions. Instead of manually opening browser DevTools, navigating complicated DOM trees, and digging through endless computed CSS rules, it provides an instant, point-and-click overlay.",
    problemSolved: "Inspecting website typography, spacing, and colors via standard browser DevTools involves multiple clicks, complex panels, and tedious manual calculations.",
    solution: "Created an intuitive on-page hover inspector that instantly extracts computed styles, font families, exact line heights, color swatches, and element boundaries into a clean floating HUD.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Chrome Extension APIs", "DOM APIs", "Computed Stylesheet Analysis"],
    highlights: [
      "One-click point-and-inspect for any element on the page",
      "Instant typography breakdown (Font family, size, weight, line-height)",
      "Automated page color palette extraction and HEX/RGB copy",
      "Box-model visualizer showing padding, margin, and bounding boxes",
      "Lightweight HUD overlay that never interferes with host site scripts"
    ],
    keyFeatures: [
      {
        title: "Instant Typography HUD",
        description: "Displays exact font family, loaded weights, letter spacing, and line height upon hovering over text.",
        icon: "Type"
      },
      {
        title: "Color Palette Harvester",
        description: "Scans DOM elements to generate a clean swatch palette of primary, secondary, and accent colors.",
        icon: "Palette"
      },
      {
        title: "Box Model & Spacing Ruler",
        description: "Visualizes margin, padding, border boundaries, and flex/grid alignments with precise pixel measurements.",
        icon: "Box"
      },
      {
        title: "Quick Asset Exporter",
        description: "Identifies background SVGs, image resolutions, and CSS background properties with one-click copy.",
        icon: "Download"
      }
    ],
    architecture: [
      {
        title: "High-Speed DOM Scanner",
        details: "Uses efficient `window.getComputedStyle` caching to inspect rendered nodes with zero page lag."
      },
      {
        title: "Floating Glass HUD",
        details: "Renders an isolated Shadow DOM inspector overlay to prevent host website CSS from breaking the HUD."
      },
      {
        title: "Clipboard Bridge",
        details: "Instant keyboard shortcuts to copy CSS rules, HEX color codes, or font declarations in standard formats."
      }
    ],
    githubUrl: "https://github.com/rp352/design-inspector-",
    liveDemoUrl: "#"
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    type: "Web Application / Dashboard",
    badge: "Full-Stack Project",
    category: "Web Application",
    status: "Active Build",
    shortDescription: "A comprehensive inventory & logistics management platform designed to track stock levels, manage sales orders, monitor deliveries, and organize customer profiles with real-time analytics.",
    fullDescription: "Built with React and modern Vite tooling, this inventory management suite streamlines operational tracking across stock cataloging, sales desk ordering, shipping logistics, and customer profile management in a unified interface.",
    problemSolved: "Small to medium businesses often struggle with fragmented spreadsheets for tracking stock, customer contacts, sales orders, and delivery statuses.",
    solution: "Developed an interactive dashboard and modular management system supporting live inventory monitoring, multi-status order workflows, and shipping updates.",
    techStack: ["React 19", "Vite", "JavaScript", "CSS3", "HTML5"],
    highlights: [
      "Real-time inventory stock level monitoring & low stock alerts",
      "Interactive sales order desk with status tracking",
      "Logistics & shipping dispatch management",
      "Customer directory and profile history",
      "Fast modular UI with responsive dashboard views"
    ],
    keyFeatures: [
      {
        title: "Stock & Inventory Control",
        description: "Tracks item quantities, categorization, and automatic low-stock notifications.",
        icon: "Package"
      },
      {
        title: "Sales Order Desk",
        description: "Manages purchase workflows from invoice generation to payment status.",
        icon: "ShoppingCart"
      },
      {
        title: "Logistics & Delivery Tracker",
        description: "Monitors shipping stages, delivery carriers, and estimated arrivals.",
        icon: "Truck"
      },
      {
        title: "Customer Profiles",
        description: "Centralizes buyer records, order histories, and contact telemetry.",
        icon: "Users"
      }
    ],
    architecture: [
      {
        title: "State Management Engine",
        details: "Dynamic tab routing and reactive state synchronization across inventory, order desks, and shipping modules."
      },
      {
        title: "Component Architecture",
        details: "Modular functional React components with optimized rendering cycles and instant search filters."
      }
    ],
    githubUrl: "https://github.com/rp352/project-5k",
    liveDemoUrl: "#"
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: "infosys-python-part-1",
    title: "Programming Fundamentals using Python - Part 1",
    organization: "Infosys Springboard",
    issueDate: "August 19, 2026",
    credentialId: "INF-PY-FUND-01",
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    skillsCovered: ["Python Fundamentals", "Control Structures", "Data Types", "Functions", "Algorithmic Thinking"],
    description: "Rigorous foundational certification covering core programming structures, algorithmic logic, functions, and standard libraries in Python."
  },
  {
    id: "infosys-python-part-2",
    title: "Programming Fundamentals using Python - Part 2",
    organization: "Infosys Springboard",
    issueDate: "August 19, 2026",
    credentialId: "INF-PY-FUND-02",
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    skillsCovered: ["OOP in Python", "Data Structures", "Exception Handling", "File I/O", "Modular Code Design"],
    description: "Advanced continuation exploring Object-Oriented Programming, custom classes, collections, error handling strategies, and clean code principles."
  },
  {
    id: "ncvte-diploma-cs",
    title: "NCVTE Diploma in Computer Science",
    organization: "J&K IT Training Institute",
    issueDate: "2024",
    grade: "Distinction",
    credentialId: "NCVTE-CS-DIP-2024",
    verificationUrl: "#",
    skillsCovered: ["Computer Science Fundamentals", "System Operations", "Data Processing", "IT Infrastructure"],
    description: "Comprehensive national vocational diploma in computer science applications, completed with Distinction honors."
  },
  {
    id: "nbvte-python",
    title: "Certificate in Python",
    organization: "National Board of Vocational Training Education",
    issueDate: "2023 - 2024",
    credentialId: "NBVTE-PY-2024",
    verificationUrl: "#",
    skillsCovered: ["Python Syntax", "Logical Problem Solving", "Basic Automation", "Scripting"],
    description: "Early specialized training in Python programming, covering foundational syntax, control flow, and computational problem solving."
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "freelance-video-editing",
    role: "Freelance Video Editing Support",
    type: "Freelance Mentorship / Practical Experience",
    duration: "2 Months",
    description: "Worked under a seasoned freelance video editor for two months, gaining hands-on practical exposure to professional video editing workflows, creative briefs, strict turnaround deadlines, client revision cycles, and digital asset organization.",
    keyTakeaways: [
      "Hands-on exposure to client revision cycles and creative briefs",
      "Understanding strict turnaround deadlines and asset management",
      "Attention to visual pacing, audio synchronization, and storytelling",
      "Communication skills for clarifying project requirements"
    ],
    toolsUsed: ["Premiere Pro", "CapCut", "Audio Syncing Tools", "Asset Management"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "lpu-btech-cse",
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    field: "Computer Science & Software Engineering",
    location: "Punjab, India",
    period: "2025 - 2029",
    isCurrent: true,
    score: "Currently Pursuing (First Year)",
    highlights: [
      "Focused on foundational data structures, programming paradigms, and problem solving",
      "Building independent projects in web technologies, AI tools, and browser extensions outside curriculum",
      "Active participant in tech exploration and developer learning communities"
    ]
  },
  {
    id: "dnyan-ganga-hsc",
    institution: "Dnyan Ganga Education Trust's College of Education",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science Stream",
    location: "Thane, Maharashtra",
    period: "2023 - 2025",
    score: "60.17%",
    isCurrent: false,
    highlights: [
      "Completed rigorous science curriculum focusing on Mathematics, Physics, and Chemistry",
      "Strengthened analytical reasoning and quantitative problem-solving foundations"
    ]
  },
  {
    id: "st-john-ssc",
    institution: "St. John The Baptist High School & Jr. College",
    degree: "Secondary School Certificate (SSC)",
    location: "Thane, Maharashtra",
    period: "2021 - 2023",
    score: "80.00%",
    isCurrent: false,
    highlights: [
      "Achieved 80.00% overall distinction in secondary school examinations",
      "Developed early passion for computers, programming, and technology"
    ]
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2023",
    title: "Secondary School Distinction & First Steps in Code",
    organization: "St. John The Baptist High School & NBVTE",
    description: "Graduated SSC with 80.00% in Thane, Maharashtra. Earned initial certification in Python from NBVTE, writing first CLI tools and logic scripts.",
    badge: "Foundation",
    tags: ["SSC 80%", "Python Basics", "Curiosity"]
  },
  {
    year: "2024",
    title: "NCVTE Computer Science Diploma with Distinction",
    organization: "J&K IT Training Institute",
    description: "Earned the NCVTE Diploma in Computer Science with Distinction, deepening understanding of core computing concepts and systems.",
    badge: "Diploma",
    tags: ["NCVTE Diploma", "Distinction", "CS Fundamentals"]
  },
  {
    year: "2025",
    title: "HSC Completion & Joining Lovely Professional University",
    organization: "Lovely Professional University",
    description: "Completed HSC Science stream and enrolled in B.Tech Computer Science and Engineering (Class of 2029) at LPU. Began exploring web development and browser extensions.",
    badge: "University",
    tags: ["B.Tech CSE", "LPU", "Web Dev"]
  },
  {
    year: "2026",
    title: "Building Practical Tools & Professional Certifications",
    organization: "Independent Builder / Infosys Springboard",
    description: "Built the YouTube Recommendation Extension and Design Inspector developer tool. Completed Infosys Springboard Python Parts 1 & 2.",
    badge: "Active Projects",
    tags: ["Browser Extensions", "Infosys Springboard", "Manifest V3", "AI Discovery"]
  },
  {
    year: "Present & Future",
    title: "Learning AI, Expanding Skillset & Entering Freelancing",
    organization: "Personal Growth & Client Projects",
    description: "Currently building real-world tools, studying modern AI models and automation workflows, and preparing to take on freelance web and extension development projects.",
    badge: "Current Focus",
    isCurrent: true,
    tags: ["AI Exploration", "Freelance Ready", "Continuous Improvement"]
  }
];
