import type { PortfolioData } from "./types";
import { GithubIcon, LeetcodeIcon, LinkedInIcon } from "./components/icons";

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Debrup Saha",
  title: "Full Stack Developer & Cloud Enthusiast",
  contact: {
    email: "sahadebrup185@gmail.com",
    phone: "+91 7890552782",
    location: "Kolkata, India",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/debrup-saha/",
      icon: LinkedInIcon,
    },
    { name: "Github", url: "https://github.com/Debrup09", icon: GithubIcon },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/debrupsaha/",
      icon: LeetcodeIcon,
    },
  ],
  about: {
    summary:
      "A passionate and results-oriented Information Technology undergraduate with a strong foundation in software development, data structures, and algorithms. Experienced in building scalable applications using Java, React, and cloud technologies.",
    goals:
      "My career goal is to work on challenging, large-scale projects that solve real-world problems. I am passionate about clean code, performance optimization, and creating intuitive user experiences. I continuously seek opportunities to learn new technologies and grow as a software engineer in a collaborative and innovative environment.",
  },
  education: [
    {
      degree: "B. Tech in Information Technology",
      institution: "Government College of Engineering and Ceramic Technology",
      cgpa: "9.0 CGPA",
      years: "2023 - 2026",
    },
    {
      degree: "Diploma in Computer Science and Technology",
      institution: "Kingston Polytechnic College",
      cgpa: "8.8 CGPA",
      years: "2020 - 2023",
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      skills: [
        "Java (Proficient)",
        "JavaScript",
        "Python",
        "HTML",
        "CSS",
        "Spring",
        "Spring Boot",
        "Hibernate",
        "Maven",
        "React",
        "Oracle Cloud Infrastructure",
      ],
    },
    {
      title: "Database and Language",
      skills: ["Mongo DB", "MySQL", "SQL (Intermediate)"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "IntelliJ",
        "Figma",
        "Jira",
        "Cisco Packet Tracer",
      ],
    },
    {
      title: "Course Work",
      skills: [
        "Database Management System",
        "Object-Oriented Programming",
        "Software Development",
        "Computer Networks",
        "Operating Systems",
        "Data Structures",
        "Algorithms",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Collaboration",
        "Communication",
        "Planning",
        "Teamwork",
        "Time Management",
        "Leadership",
      ],
    },
  ],
  workExperience: [
    {
      role: "Java Developer Intern",
      company: "CodeAlpha",
      companyUrl:
        "https://drive.google.com/file/d/1oRE6nX3ExRtL9AGWG3d1rpE4dUFaFPYn/view?usp=sharing",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote, India",
      description: [
        "Engineered 2 Java applications (Student Grade Tracker & Hotel Reservation System), implementing OOP principles.",
        "Utilized data structures (ArrayLists), and booking/payment simulation features.",
        "Earned a performance-based Letter of Recommendation for excellent work.",
      ],
      recommendationUrl:
        "https://drive.google.com/file/d/1NL0laq4gwKha8LwMimLuN5vzCUyAPGM-/view?usp=sharing",
    },
    {
      role: "Cloud Computing & Big Data Intern",
      company: "YBI Foundation",
      companyUrl:
        "https://drive.google.com/file/d/1ANj4QjRfY5Qh3fkkSThnDqRnn7K9azm8/view?usp=sharing",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote, India",
      description: [
        "Helped develop scalable and resilient solutions for big data processing, demonstrating a strong understanding of system performance and reliability.",
        "Managed virtual machines, storage, and database solutions, which improved system uptime by 20%.",
      ],
    },
  ],
  projects: [
    {
      title: "Notes and Password Manager",
      description: [
        "Developed a secure Python-based Notes & Password Manager using Tkinter (GUI) and SQLite3 (database), featuring user authentication, encryption, and password recovery for data privacy.",
        "Implemented CRUD operations for notes/passwords, clipboard integration, and URL navigation, following the Waterfall model with unit/integration testing.",
      ],
      techStack: ["Python", "SQL", "Tkinter", "SQLite3"],
      sourceUrl: "https://github.com/Debrup09/Notes-and-Password-Manager",
    },
    {
      title: "MythBuster Webpage",
      description: [
        "Built a full-stack React/Supabase app enabling full CRUD operations for submitting, filtering, and discovering verifiable facts.",
        "Developed a responsive UI with Vanilla CSS and enforced 100% data integrity via mandatory source link validation.",
      ],
      techStack: ["React", "Supabase", "Vanilla CSS"],
      liveUrl: "https://debrup-saha-mythbuster.netlify.app/",
      sourceUrl: "https://github.com/Debrup09/MythbusterWebPageProject",
    },
  ],
  achievements: [
    {
      description:
        "Participated in the ICDMAI Hackathon 2025 and achieved notable results.",
      linkUrl:
        "https://drive.google.com/file/d/1KG9eSRA3rNw5hu9cSdFtTI1Cw7uAYrB8/view?usp=sharing",
    },
    {
      description:
        "Completed job simulations for Amazon, Nestlé, JPMorgan, PwC Switzerland, Walmart, HP, and Tata.",
      linkUrl:
        "https://drive.google.com/drive/folders/1b_QTH95PVDKchXZABxuaahlXeXetIwxI?usp=sharing",
    },
    {
      description: "Completed CS 401: Operating Systems.",
      linkUrl:
        "https://drive.google.com/file/d/1C7GEN04T4anrOCGtcV51aYsvtKSpe0Fj/view?usp=sharing",
    },
    {
      description: "Oracle Cloud Infrastructure Architect Associate.",
      linkUrl:
        "https://drive.google.com/file/d/1aI3cAQnNJiGF-rFLLJLDxOsUutp1dC36/view?usp=sharing",
    },
    {
      description: "Oracle Cloud Infrastructure Developer Professional.",
      linkUrl:
        "https://drive.google.com/file/d/1Ew74HBcSsu0MUducKKbAhkO0QBVM1Nwj/view?usp=sharing",
    },
    {
      description: "Cisco Junior Cybersecurity Analyst.",
      linkUrl:
        "https://drive.google.com/file/d/1yL--VnNehhfQVbP6lGauZdR7Xu_5ygdw/view?usp=sharing",
    },
  ],
};
