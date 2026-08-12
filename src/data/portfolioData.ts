import {
  PersonalInfo,
  AboutDetails,
  SkillCategory,
  Project,
  EducationItem,
  Certification,
  Achievement,
  LanguageItem,
  InterestsData,
} from '../types';

export const personalInfo: PersonalInfo = {
  fullName: 'Mohamed Aaseef M.',
  professionalTitle: 'CSBS Student | Web Developer',
  dob: '09 August 2006',
  location: 'Chennai, Tamil Nadu, India',
  email: 'mmohamedaaseef@gmail.com',
  phone: '8778738503',
  githubUrl: 'https://github.com/mmohamedaaseef-cloud',
  linkedinUrl: 'https://www.linkedin.com/in/mohamed-aaseef-a2574839a/',
  // Place your resume PDF at /public/assets/Mohamed_Aaseef_Resume.pdf and update this path if necessary
  resumePath: '/assets/Mohamed_Aaseef_Resume.pdf',
};

export const heroTypingTitles: string[] = [
  'CSBS Student',
  'Aspiring Software Developer',
  'Web Developer',
  'Full Stack Developer Aspirant',
  'Tech Enthusiast',
];

export const heroBio =
  'I am a pre-final-year Computer Science and Business Systems (CSBS) student at Panimalar Engineering College, passionate about technology, programming, and building useful digital solutions. I enjoy exploring new technologies and continuously improving my technical and problem-solving skills.';

export const aboutData: AboutDetails = {
  introduction:
    'I am a pre-final-year Computer Science and Business Systems (CSBS) student at Panimalar Engineering College, passionate about technology, programming, and building useful digital solutions. I enjoy exploring new technologies and continuously improving my technical and problem-solving skills.',
  careerObjective:
    'To build a successful career in the technology industry where I can apply my programming, problem-solving, and creative skills to develop innovative solutions while continuously learning and growing professionally.',
  dreamRoles: ['Software Developer', 'Full Stack Developer'],
  areasOfInterest: [
    'Web Development',
    'Software Development',
    'Java Programming',
    'Database Management',
  ],
  quickInfo: [
    { label: 'Name', value: 'Mohamed Aaseef M.' },
    { label: 'Degree', value: 'B.Tech – Computer Science & Business Systems' },
    { label: 'College', value: 'Panimalar Engineering College (PEC)' },
    { label: 'Current Status', value: 'Pre-Final-Year Student' },
    { label: 'Current Year', value: '3rd Year' },
    { label: 'Current Semester', value: '5th Semester' },
    { label: 'Expected Graduation', value: '2028' },
    { label: 'Location', value: 'Chennai, Tamil Nadu, India' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Foundational languages used for logic & software development',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive user interfaces and web layouts',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript', level: 'Basics' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Server-side application logic and web service foundations',
    skills: [
      { name: 'Node.js', level: 'Basics' },
      { name: 'Express.js', level: 'Basics' },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational & NoSQL database management tools',
    skills: [
      { name: 'MySQL' },
      { name: 'MongoDB', level: 'Basics' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Modern styling utilities and component-based UI libraries',
    skills: [
      { name: 'Bootstrap' },
      { name: 'React.js', level: 'Beginner' },
    ],
  },
  {
    title: 'Version Control',
    description: 'Source code management, repository hosting & workflow',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Basic Git Commands' },
      { name: 'Repository Management' },
      { name: 'Version Control' },
    ],
  },
  {
    title: 'Development Tools',
    description: 'IDEs, code editors, and API testing environments',
    skills: [
      { name: 'Visual Studio Code' },
      { name: 'IntelliJ IDEA' },
      { name: 'Eclipse' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'AI Tools',
    description: 'AI-assisted code optimization and research tools',
    skills: [
      { name: 'ChatGPT' },
      { name: 'GitHub Copilot' },
    ],
  },
  {
    title: 'Core Technical Knowledge',
    description: 'Fundamental computer science concepts & architectural patterns',
    skills: [
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Data Structures' },
      { name: 'Database Management Systems (DBMS)' },
      { name: 'REST API Basics' },
    ],
  },
];

export const softSkills: string[] = [
  'Teamwork',
  'Problem Solving',
  'Adaptability',
  'Time Management',
  'Responsibility',
  'Continuous Learning',
  'Developing Communication Skills',
  'Collaboration',
];

export const softSkillsOverview =
  'I enjoy working collaboratively with others to complete tasks effectively, adapting swiftly to new situations, and taking responsibility when required. I am dedicated to continuous learning and actively work on strengthening both my technical abilities and communication skills.';

export const projectsData: Project[] = [
  {
    id: 'problemchain',
    isFeatured: true,
    title: 'ProblemChain',
    subtitle: 'AI-Powered Community Problem to Startup Opportunity Platform',
    description:
      'ProblemChain is an AI-powered community platform designed to identify and verify real-world local problems and transform them into potential startup opportunities. Citizens can report issues and unmet community needs such as lack of pharmacies, grocery stores, EV charging stations, repair centres, educational services, healthcare facilities, or other local services. AI categorizes problems, detects duplicate reports, and estimates community demand. After administrator verification, valid problems can be converted into startup opportunities that entrepreneurs can explore.',
    whyCreated:
      'ProblemChain was created to bridge the gap between community needs and entrepreneurs. Traditional complaint platforms mainly collect complaints, while ProblemChain focuses on turning genuine community problems into useful business and startup opportunities. The project aims to help communities address local problems while helping entrepreneurs identify locations and services with real market demand.',
    myRoleTitle: 'Documentation & Presentation Lead',
    myRoleResponsibilities: [
      'Organizing project documentation',
      'Preparing project presentations',
      'Explaining the project concept',
      'Communicating project objectives',
      'Documenting the workflow',
      'Presenting important features',
      'Understanding different project modules',
      'Explaining the technologies used',
      'Communicating the overall solution clearly during presentations',
      'Collaborating with the team to understand and present the project effectively',
    ],
    technologies: [
      'React.js',
      'Vite',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'JWT',
      'bcrypt',
      'Leaflet.js',
      'OpenStreetMap',
      'Cloudinary',
      'Postman',
      'Git',
      'GitHub',
    ],
    features: [
      'Community problem reporting',
      'Location-based reporting',
      'Description and evidence submission',
      'Image uploads',
      'AI-based problem categorization',
      'Duplicate problem detection',
      'Community demand estimation',
      'Administrator verification',
      'Conversion of verified problems into startup opportunities',
      'Interactive maps',
      'Demand heatmaps',
      'Smart filters',
      'Analytics dashboard',
      'Queue-based opportunity allocation for entrepreneurs',
      'Opportunity locking to prevent duplicate claims',
      'Project milestone tracking',
      'Progress tracking',
      'Citizen notifications',
      'Entrepreneur notifications',
      'Administrator notifications',
      'Secure user authentication',
    ],
    githubUrl: 'https://github.com/RONALD-REX-7/RUSH_HOUR_2026',
    isLiveDemoAvailable: false,
    liveDemoUrl: undefined,
    imagePlaceholderTitle: 'ProblemChain Interface & Map Dashboard Screenshot Placeholder',
    imagePath: undefined, // Add screenshot path here e.g. '/assets/problemchain-preview.png'
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'pec-bs',
    institution: 'Panimalar Engineering College (PEC)',
    degreeOrLevel: 'Bachelor of Technology (B.Tech)',
    fieldOfStudy: 'Computer Science and Business Systems (CSBS)',
    currentDetails: '3rd Year | 5th Semester',
    yearOrGraduation: 'Expected Graduation: 2028',
    location: 'Chennai, Tamil Nadu',
    highlights: [
      'Pursuing specialized CSBS curriculum combining core computer science with business systems engineering',
      'Actively developing team project presentation skills and foundational software programming concepts',
    ],
  },
  {
    id: 'school-12',
    institution: 'Sre Sasstha Matriculation Higher Secondary School',
    degreeOrLevel: 'Higher Secondary Education (12th)',
    yearOrGraduation: 'Year Completed: 2024',
    location: 'Tamil Nadu',
    percentage: '69.83%',
    highlights: ['State Board Curriculum'],
  },
  {
    id: 'school-10',
    institution: 'Sre Sasstha Matriculation Higher Secondary School',
    degreeOrLevel: 'Secondary Education (10th)',
    yearOrGraduation: 'Year Completed: 2022',
    location: 'Tamil Nadu',
    percentage: '71.8%',
    highlights: ['State Board Curriculum'],
  },
];

// Certifications are prepared for future upload
export const certificationsData: Certification[] = [];

// Achievements are prepared for future upload
export const achievementsData: Achievement[] = [];

export const languagesData: LanguageItem[] = [
  { name: 'Urdu', proficiency: 'Mother Tongue' },
  { name: 'Tamil', proficiency: 'Native' },
  { name: 'English', proficiency: 'Professional' },
];

export const interestsData: InterestsData = {
  technology: [
    'Web Development',
    'Software Development',
    'Artificial Intelligence',
    'Programming',
    'Emerging Technologies',
  ],
  career: [
    'Software Development',
    'Full Stack Development',
    'Exploring career opportunities in the IT industry',
  ],
  hobbies: [
    'Watching movies',
    'Playing video games',
    'Listening to music',
    'Exploring new technologies',
  ],
  other: [
    'Space',
    'Science',
    'Artificial Intelligence',
    'Technology Trends',
    'Improving technical knowledge',
  ],
};
