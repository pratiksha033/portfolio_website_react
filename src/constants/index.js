import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    quite,
    aicareer,
    jobportal,
    cpu,
    
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend developer",
      icon: mobile,
    },
    {
      title: "Backend developer",
      icon: backend,
    },
    {
      title: "Python backend developer",
      icon: creator,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Craft Your Careers",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2025 - Mar 2025",
      points: [
        "Worked on a full-stack MERN-based e-commerce application from scratch.",

"Developed backend APIs and implemented authentication features.",

"Integrated frontend components with server-side logic.",

"Gained experience in building complete application flows and writing clean code.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Drone Sangam LLP",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2025 - Aug 2025",
      points: [
        "Contributed to a B2B SaaS platform as part of the Founder’s Office team.",

"Built and improved backend features and REST APIs.",

"Integrated frontend components using React for real-time use cases.",

"Worked on interactive map-based features to improve user experience.",
      ],
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CPU Scheduling",
      description:
        "A CPU Scheduling System manages process execution by deciding the order in which processes access the CPU. It uses algorithms like FCFS, SJF, Round Robin, and Priority Scheduling to improve efficiency, reduce waiting time, and optimize CPU utilization.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: cpu,
      source_code_link: "https://github.com/pratiksha033/CPU-Scheduling",
    },
    {
      name: "Job Seeking Web Application",
      description:
        "A full-stack job-seeking web application built with the MERN stack. It features role-based access for job seekers and recruiters, secure JWT authentication, job posting and application modules, dynamic search and filtering, and Cloudinary integration for profile uploads. The UI is fully responsive and styled using Tailwind CSS.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: jobportal,
      source_code_link: "https://github.com/pratiksha033/job-seeking",
    },
    {
      name: "AI Career Coach",
      description:
        "An intelligent, full-stack web application that offers personalized career guidance using AI. This platform helps users build resumes, craft cover letters, practice interviews, and gain industry insights — all powered by modern web technologies.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Prisma ORM",
          color: "red-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "orange-text-gradient",
        },
      ],
      image: aicareer,
      source_code_link: "https://github.com/pratiksha033/AI-Career-Coach",
    },

    {
      name: "Quiet Hours Scheduler",
      description:
        "A full-stack web application that allows authenticated users to schedule silent-study time blocks and receive automated email reminders 10 minutes before each block begins.This project demonstrates a modern web development stack, including a Next.js frontend, a complete Supabase backend (database, authentication, storage, edge functions) and integration with a third-party email service (Resend).",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Supabase Auth",
          color: "red-text-gradient",
        },
        {
          name: "SupabasePostgres",
          color: "orange-text-gradient",
        },
      ],
      image: quite,
      source_code_link: "https://github.com/pratiksha033/Quite_hours_scheduler",
    },

    {
      name: "Multiverse AI- Unified LLM Interface",
      description:
        "Multiverse AI is a cutting-edge platform that unifies access to multiple Large Language Models (LLMs) into one seamless interface. Instead of juggling between OpenAI GPT, Google Gemini, and Anthropic Claude, users can submit a single query and instantly receive responses from all providers — all in one place.This project is designed to eliminate context switching, streamline workflows, and boost productivity for developers, researchers, and AI enthusiasts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS / ShadCN / Material UI",
          color: "red-text-gradient",
        },
        {
          name: "Google Gemini, OpenAI GPT, Anthropic Claude",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/pratiksha033/MultiverseAI--Unified-LLM-interfaces",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };