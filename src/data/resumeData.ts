import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    fullName: "VIRENDRA DATTATRAY WARE",
    title: "Aspiring Software Engineer & Web Developer",
    subtitle: "Diploma in Engineering (MSBTE - 79%) | Python, Web Technologies & Database Fundamentals",
    careerObjective:
      "A motivated and responsible individual seeking an opportunity to begin a professional career. Eager to apply technical knowledge, learn new skills, and contribute positively to the growth of the organization.",
    contact: {
      phone: "+91 8767793757",
      email: "virendraware21@gmail.com",
      location: "At/Post Barhanpur, Tal. Bhoom, Dist. Dharashiv, Maharashtra",
      dateOfBirth: "21 November 2003",
      github: "https://github.com/virendraware",
      linkedin: "https://linkedin.com/in/virendra-ware"
    }
  },
  experience: [
    {
      role: "Graduate Engineering Trainee / Project Candidate",
      organization: "Academic Technical Projects & Engineering Labs",
      location: "Solapur, Maharashtra",
      period: "2021 – 2024",
      type: "Academic & Project Experience",
      bullets: [
        "Applied core software engineering principles to build desktop and web-based applications using Python and MySQL.",
        "Collaborated with peers in laboratory environments to design structured database schemas and normalize relational tables.",
        "Demonstrated technical solutions and project documentation to department faculty, receiving a 79% MSBTE evaluation score.",
        "Managed source code versions utilizing Git and GitHub, adhering to clean repository structuring and collaborative workflows."
      ]
    },
    {
      role: "Web Application Developer (Capstone Project)",
      organization: "Vidya Vikas Pratishthan Polytechnic",
      location: "Solapur, Maharashtra",
      period: "2023 – 2024",
      type: "Capstone Project",
      bullets: [
        "Engineered an interactive student database portal utilizing HTML5, CSS3, JavaScript, and MySQL backend queries.",
        "Ensured responsive layouts and cross-browser consistency across mobile and desktop devices.",
        "Documented technical specifications, ER diagrams, and user test reports following standard engineering practices."
      ]
    }
  ],
  education: [
    {
      degree: "Diploma in Engineering (Polytechnic)",
      institution: "Vidya Vikas Pratishthan Polytechnic, Solapur",
      boardOrUniversity: "Maharashtra State Board of Technical Education (MSBTE)",
      year: "2021 – 2024",
      percentage: "79.00%",
      status: "First Class with Distinction",
      details: [
        "Comprehensive coursework in Programming (Python), Data Structures, Database Systems (MySQL), and Web Development.",
        "Consistently maintained high academic standing culminating in 79% aggregate MSBTE board result."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "S.P. College, Bhoom, Tal. Bhoom",
      boardOrUniversity: "Maharashtra State Board",
      year: "2020 – 2021",
      percentage: "59.17%",
      status: "Completed",
      details: [
        "Core science and mathematics curriculum strengthening quantitative and analytical reasoning skills."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Kalbhairav Madhyamik Vidyalaya, Shikrapur, Pune",
      boardOrUniversity: "Maharashtra State Board",
      year: "2018 – 2019",
      percentage: "75.00%",
      status: "First Class",
      details: [
        "Achieved Distinction in Mathematics and Science foundations."
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      description: "Core algorithms, object-oriented concepts, and application logic",
      skills: [
        { name: "Python", level: 85, levelLabel: "Proficient" },
        { name: "JavaScript (ES6+)", level: 75, levelLabel: "Intermediate" }
      ]
    },
    {
      category: "Web Technologies",
      description: "Front-end structure, responsive layouts, and user interfaces",
      skills: [
        { name: "HTML5", level: 90, levelLabel: "Advanced" },
        { name: "CSS3 / Modern CSS", level: 85, levelLabel: "Proficient" },
        { name: "Responsive UI Design", level: 80, levelLabel: "Proficient" },
        { name: "DOM Manipulation", level: 75, levelLabel: "Intermediate" }
      ]
    },
    {
      category: "Database & Backend",
      description: "Data modeling, schema design, and querying",
      skills: [
        { name: "MySQL", level: 80, levelLabel: "Proficient" },
        { name: "Relational Queries & CRUD", level: 85, levelLabel: "Proficient" },
        { name: "Database Normalization", level: 75, levelLabel: "Intermediate" }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      description: "Development environments, version control, and IDEs",
      skills: [
        { name: "VS Code", level: 90, levelLabel: "Advanced" },
        { name: "Git & GitHub", level: 80, levelLabel: "Proficient" },
        { name: "Android Studio", level: 70, levelLabel: "Intermediate" },
        { name: "Command Line / Terminal", level: 75, levelLabel: "Intermediate" }
      ]
    },
    {
      category: "Professional & Soft Skills",
      description: "Workplace collaboration, execution, and communication",
      skills: [
        { name: "Professional Communication", level: 90, levelLabel: "Advanced" },
        { name: "Teamwork & Collaboration", level: 90, levelLabel: "Advanced" },
        { name: "Time Management", level: 85, levelLabel: "Proficient" },
        { name: "Analytical Problem Solving", level: 80, levelLabel: "Proficient" }
      ]
    }
  ],
  projects: [
    {
      id: "student-mgmt-system",
      title: "Student Record & Academic Management System",
      subtitle: "Database-driven administrative solution with role-based records",
      category: "Full-Stack / Database",
      technologies: ["Python", "MySQL", "Tkinter", "SQL Connector"],
      summary:
        "A robust database application designed to streamline student registration, academic score tracking, and automated grade reporting for educational institutions.",
      highlights: [
        "Implemented secure MySQL CRUD queries with parameterized queries to prevent SQL vulnerabilities.",
        "Engineered an intuitive interface for staff to add, filter, update, and export student performance records.",
        "Optimized indexing on student enrollment tables, ensuring instantaneous queries across hundreds of records."
      ],
      githubUrl: "https://github.com/virendraware/student-management-system"
    },
    {
      id: "corporate-responsive-portal",
      title: "Responsive Corporate Client Portal",
      subtitle: "Mobile-first, accessible web application conforming to modern standards",
      category: "Web Development",
      technologies: ["HTML5", "CSS3", "JavaScript", "WCAG 2.1"],
      summary:
        "A responsive client portal built from the ground up focusing on clean typography, accessible semantic markup, and optimal performance across all screen sizes.",
      highlights: [
        "Structured semantic HTML5 tags with complete ARIA landmarks for screen-reader accessibility.",
        "Built responsive flexbox and CSS grid layouts with fluid typography without relying on heavy frameworks.",
        "Achieved a 98+ Lighthouse performance and accessibility score with optimized asset loading."
      ],
      githubUrl: "https://github.com/virendraware/corporate-web-portal",
      liveUrl: "https://virendraware.github.io/corporate-web-portal"
    },
    {
      id: "truthvision-verification",
      title: "TruthVision AI - Media Authenticity Inspection Tool",
      subtitle: "Exploratory technical prototype for digital asset verification",
      category: "Python / Data",
      technologies: ["Python", "OpenCV", "NumPy", "Metadata Parsing"],
      summary:
        "An analytical utility investigating digital artifacts, compression anomalies, and metadata consistency in media files to detect potential manipulations.",
      highlights: [
        "Developed automated Python scripts to extract EXIF metadata and detect structural inconsistencies.",
        "Generated visual inspection overlays highlighting altered pixel regions and error level analysis (ELA).",
        "Demonstrated modular code architecture with clean exception handling and logging."
      ],
      githubUrl: "https://github.com/virendraware/truthvision-ai"
    }
  ],
  languages: [
    { language: "Marathi", proficiency: "Native / Mother Tongue", native: true },
    { language: "Hindi", proficiency: "Full Professional Working Proficiency" },
    { language: "English", proficiency: "Professional Working Proficiency" }
  ],
  strengths: [
    {
      title: "Confident & Self-Motivated",
      description: "Approaches technical challenges with a proactive mindset and strong personal accountability."
    },
    {
      title: "Quick Learner & Adaptable",
      description: "Rapidly absorbs new programming paradigms, frameworks, and modern enterprise tooling."
    },
    {
      title: "Disciplined Time Management",
      description: "Structures project tasks systematically to meet deadlines and deliverables consistently."
    },
    {
      title: "Positive Working Attitude",
      description: "Enthusiastic team player committed to constructive collaboration and continuous self-improvement."
    }
  ],
  certifications: [
    {
      title: "Diploma in Engineering (MSBTE)",
      issuer: "Maharashtra State Board of Technical Education",
      year: "2024"
    },
    {
      title: "Python Programming & Database Foundations",
      issuer: "Academic Laboratory Certification",
      year: "2023"
    }
  ]
};
