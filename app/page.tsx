"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Boxes,
  FileText,
  Mail,
  Phone,
  Instagram,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Download,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Sparkles,
  Layers,
  Send,
  Menu,
  X,
  CheckCircle2,
  Calendar,
  UserCheck,
  ShieldCheck,
  Zap,
  Sun,
  Moon,
  HeartHandshake,
  Landmark,
  Coins,
  Brain,
} from "lucide-react";

// --- TYPEWRITER EFFECT HOOK ---
const roles = [
  "Project Manager Assistant",
  "Fullstack Developer",
  "AI Automation Developer",
  "System Analyst",
];

function useTypewriter(words: string[], typingSpeed = 90, erasingSpeed = 50, pauseDuration = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, erasingSpeed, pauseDuration]);

  return words[index].substring(0, subIndex);
}

// --- DATA DEFINITIONS ---

interface Project {
  id: string;
  title: string;
  category: "Fullstack" | "Backend" | "AI & Automation" | "Management";
  tech: string[];
  description: string;
  githubUrl?: string;
  features: string[];
  year: string;
  role: string;
  colorTheme: string;
}

const projectsData: Project[] = [
  {
    id: "wims",
    title: "WIMS - Warehouse & Inventory Management System",
    category: "Fullstack",
    colorTheme: "from-indigo-500 to-purple-500",
    tech: ["ASP.NET Core MVC", "Entity Framework Core", "SQLite", "PostgreSQL", "Bootstrap 5"],
    description:
      "Enterprise-grade warehouse and inventory management system built with ASP.NET Core MVC and Entity Framework Core. Designed the data layer with SQLite/PostgreSQL and built a Bootstrap 5 dark-themed interface.",
    features: [
      "Enterprise inventory tracking & stock movement logs",
      "Relational data abstraction layer using Entity Framework Core",
      "Support for multi-database backends (SQLite for dev, PostgreSQL for production)",
      "Bootstrap 5 dark theme tailored for warehouse operations",
    ],
    year: "2026",
    role: "Fullstack Developer",
    githubUrl: "https://github.com/isamuha36",
  },
  {
    id: "ciwiru",
    title: "Website Desa Ciwiru",
    category: "Fullstack",
    colorTheme: "from-blue-500 to-cyan-500",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "MariaDB", "Docker", "Better Auth", "Recharts"],
    description:
      "Full-stack village government website with a Next.js frontend and a separate Next.js REST API backend, both written in TypeScript. Implemented authentication, RBAC, budget visualizations, and containerization.",
    features: [
      "Role-Based Access Control (RBAC) with Better Auth",
      "Interactive village budget & demographics analytics using Recharts",
      "Containerized architecture with Docker for seamless cross-platform deployment",
      "Prisma ORM integration with MariaDB for optimized query performance",
    ],
    year: "2026",
    role: "Fullstack Developer",
    githubUrl: "https://github.com/isamuha36",
  },
  {
    id: "samikados",
    title: "SAMIKADOS",
    category: "Management",
    colorTheme: "from-emerald-500 to-teal-500",
    tech: ["Laravel", "Vue.js", "Agile / Scrum", "MySQL"],
    description:
      "E-commerce platform developed for a Yogyakarta-based printing company during an internship at PT Madana Innovation Technology, comprising separate web applications for customers, sellers, and admins.",
    features: [
      "Led project management using Agile / Scrum methodologies",
      "Triple-portal architecture: Customer App, Seller Hub, and Admin Dashboard",
      "Robust backend API using Laravel paired with reactive Vue.js frontends",
    ],
    year: "2026",
    role: "Project Manager Assistant",
  },
  {
    id: "saladdin",
    title: "Saladdin-LMS",
    category: "Backend",
    colorTheme: "from-purple-500 to-pink-500",
    tech: ["Laravel", "RESTful API", "MySQL", "Database Architecture"],
    description:
      "Developed a robust and scalable backend architecture using Laravel framework to support a learning management system platform with optimized relational database schemas.",
    features: [
      "Designed efficient schemas for high-concurrency learning platforms",
      "Built secure RESTful API endpoints with authentication and middleware validation",
      "Automated database migrations and seeders for modular scaling",
    ],
    year: "2025",
    role: "Backend Developer",
    githubUrl: "https://github.com/isamuha36",
  },
  {
    id: "chatbot-datains",
    title: "Knowledge Chatbot Data Ins",
    category: "AI & Automation",
    colorTheme: "from-fuchsia-500 to-rose-500",
    tech: ["n8n", "Gemini API", "AI Automation", "Vector Search"],
    description:
      "Developing automated conversation flows using n8n for responsive customer service. Integrating the Gemini API with internal databases to provide accurate answers in real time.",
    features: [
      "Automated multi-step workflow orchestration using n8n",
      "Gemini API integration with internal context grounding",
      "Real-time customer query resolution with fallback escalation routing",
    ],
    year: "2025",
    role: "AI Automation Developer",
  },
  {
    id: "eats-tedi",
    title: "Eats - TEDI",
    category: "Management",
    colorTheme: "from-amber-500 to-orange-500",
    tech: ["Android (Java/Kotlin)", "Trello", "Agile", "UI/UX Prototyping"],
    description:
      "Led a team of three in developing an Android-based cashier application from initiation to launch. Managed the backlog, monitored the timeline using Trello, and ensured feature alignment with requirements.",
    features: [
      "Cross-functional team leadership (3 developers)",
      "Agile workflow management & sprint planning on Trello",
      "Complete product lifecycle management from requirement analysis to final APK delivery",
    ],
    year: "2024",
    role: "Project Manager",
  },
];

interface Experience {
  title: string;
  organization: string;
  period: string;
  type: string;
  badgeStyle: string;
  icon: React.ReactNode;
  points: string[];
}

const experiencesData: Experience[] = [
  {
    title: "System Analyst & Technical Writer Intern",
    organization: "PT Madana Innovation Technology",
    period: "Jan 2026 – Jun 2026",
    type: "Internship",
    badgeStyle: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
    icon: <Briefcase className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    points: [
      "Analyzed system requirements from stakeholders and translated them into comprehensive Software Requirements Specifications (SRS).",
      "Collaborated with dev teams to streamline architecture decisions and project roadmaps.",
    ],
  },
  {
    title: "Hustler / Product Lead",
    organization: "Google Developer Group (GDG) on Campus UGM",
    period: "Nov 2024 – Jun 2025",
    type: "Leadership",
    badgeStyle: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
    icon: <Sparkles className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    points: [
      "Conducted in-depth research and analysis of SDGs-related issues, including market sizing and competitive landscape to identify technology opportunities.",
      "Developed work plans, managed project timelines, and ensured project stages met target deliverables.",
      "Proactively guided team dynamics to maintain high productivity.",
    ],
  },
  {
    title: "Lab Assistant",
    organization: "Departemen Layanan dan Informasi Kesehatan SV UGM",
    period: "Jan 2026 – Jun 2026",
    type: "Academic",
    badgeStyle: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
    icon: <GraduationCap className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
    points: [
      "Guided students through hands-on laboratory sessions for Data Mining and Web Programming courses.",
      "Assisted in grading assignments, evaluating code logic, and facilitating practical workshops.",
    ],
  },
  {
    title: "Lab Assistant",
    organization: "Departemen Teknik Elektro dan Informatika SV UGM",
    period: "Jan 2025 – Jun 2026",
    type: "Academic",
    badgeStyle: "bg-purple-500/10 text-purple-600 border-purple-500/30 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
    icon: <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    points: [
      "Guided students through hands-on laboratory sessions for Information Technology, Computer Installation, and Data Structures courses.",
    ],
  },
  {
    title: "Member of Data Mining & Artificial Intelligence",
    organization: "Komunitas Mahasiswa TIK UGM",
    period: "Nov 2024 – Oct 2025",
    type: "Community",
    badgeStyle: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/30 dark:bg-fuchsia-950 dark:text-fuchsia-300 dark:border-fuchsia-800",
    icon: <Brain className="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" />,
    points: [
      "Actively participated in dedicated learning seasons, deepening knowledge in data science, predictive modeling, and machine learning workflows.",
    ],
  },
  {
    title: "Deputy Head of Administration and Housekeeping Division",
    organization: "Jama'ah Shalahuddin UGM",
    period: "Jan 2024 – Feb 2026",
    type: "Organization",
    badgeStyle: "bg-rose-500/10 text-rose-600 border-rose-500/30 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800",
    icon: <Landmark className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
    points: [
      "Facilitated secretariat duties by preparing administrative reports, organizing meeting schedules, and coordinating cross-divisional operations.",
    ],
  },
  {
    title: "Staff of Finance",
    organization: "Ramadhan di Kampus UGM",
    period: "May 2024 – Jul 2024",
    type: "Committee",
    badgeStyle: "bg-amber-500/10 text-amber-600 border-amber-500/30 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    icon: <Coins className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    points: [
      "Managed financial operations including budget planning, expense tracking, and transparent reporting.",
      "Successfully achieved the funding target of IDR 115,881,202 for event execution.",
    ],
  },
  {
    title: "Volunteer",
    organization: "Rumah ZIS UGM",
    period: "Sep 2024 – Present",
    type: "Social Work",
    badgeStyle: "bg-teal-500/10 text-teal-600 border-teal-500/30 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
    icon: <HeartHandshake className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
    points: [
      "Distributed zakat in the form of financial aid and essential goods to qualified recipients across Yogyakarta.",
    ],
  },
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    accent: "border-indigo-500/30 hover:border-indigo-500",
    skills: [
      { name: "Python", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
      { name: "PHP", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
      { name: "Java", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30" },
      { name: "Kotlin", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30" },
      { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
      { name: "TypeScript", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30" },
      { name: "C#", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    accent: "border-purple-500/30 hover:border-purple-500",
    skills: [
      { name: "Laravel", color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30" },
      { name: "Vue.js", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
      { name: "Next.js (React)", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30" },
      { name: "ASP.NET Core MVC", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30" },
      { name: "Entity Framework Core", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
      { name: "Prisma ORM", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30" },
      { name: "Bootstrap", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30" },
      { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
    accent: "border-cyan-500/30 hover:border-cyan-500",
    skills: [
      { name: "MySQL", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30" },
      { name: "MariaDB", color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30" },
      { name: "PostgreSQL", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
      { name: "SQLite", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30" },
    ],
  },
  {
    title: "Tools & AI Platforms",
    icon: <Cpu className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    accent: "border-emerald-500/30 hover:border-emerald-500",
    skills: [
      { name: "Docker", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30" },
      { name: "Git / GitHub", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30" },
      { name: "Trello", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
      { name: "Jira", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
      { name: "Figma", color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30" },
      { name: "VS Code", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30" },
      { name: "Android Studio", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
      { name: "Claude API", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30" },
      { name: "Gemini API", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
      { name: "n8n", color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30" },
    ],
  },
];

// --- RAINBOW PARTICLE INTERFACE ---
interface Particle {
  id: number;
  x: number;
  y: number;
  hue: number;
  size: number;
}

// --- MAIN PAGE COMPONENT ---
export default function PortfolioPage() {
  const typedRole = useTypewriter(roles);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  // Hero Section Dynamic Color Particle Trail State
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const hueRef = useRef(0);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Color-changing particle trail generator
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hueRef.current = (hueRef.current + 15) % 360;

    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
      hue: hueRef.current,
      size: Math.floor(Math.random() * 8) + 12,
    };

    setParticles((prev) => [...prev.slice(-25), newParticle]);
  };

  const categories = ["All", "Fullstack", "Backend", "AI & Automation", "Management"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div
      className={`relative min-h-screen transition-all duration-500 ease-in-out ${
        theme === "dark" ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      } selection:bg-indigo-500 selection:text-white`}
    >
      {/* --- PURE GLASSMORPHISM FLOATING NAVBAR --- */}
      <div className="fixed top-4 inset-x-0 z-50 max-w-6xl mx-auto px-4 sm:px-6 pointer-events-none">
        <header
          className={`pointer-events-auto rounded-full px-6 h-16 sm:h-18 flex items-center justify-between transition-all duration-500 ${
            theme === "dark"
              ? "bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-slate-950/60"
              : "bg-white/40 backdrop-blur-xl border border-slate-200/70 shadow-xl shadow-slate-200/50"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-500 ${
                  theme === "dark" ? "bg-slate-950/90" : "bg-white/90"
                }`}
              >
                <Terminal className="w-4 h-4 text-indigo-500 dark:text-indigo-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Isa Muhammad
              </span>
              <span className="block text-[10px] text-indigo-500 dark:text-indigo-400 font-mono tracking-wider">
                ismhmmd.dev
              </span>
            </div>
          </a>

          {/* Desktop Floating Links */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "CV Preview", href: "#cv-preview" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  theme === "dark"
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    : "text-slate-700 hover:text-slate-950 hover:bg-white/70 shadow-xs"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Bar */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Light/Dark Theme"
              className={`p-2 rounded-full border transition-all duration-500 flex items-center justify-center ${
                theme === "dark"
                  ? "bg-slate-900/60 border-slate-700/60 text-amber-400 hover:bg-slate-800/80 hover:scale-110"
                  : "bg-white/60 border-slate-300/80 text-indigo-600 hover:bg-white shadow-xs hover:scale-110"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <a
              href="https://docs.google.com/document/d/1ddN1iNVZZYcTGqLvg_mOojrp_OlrA8EersP37NPnWzw/export?format=pdf"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 ${
                theme === "dark"
                  ? "text-slate-200 bg-slate-900/60 border-slate-700/60 hover:border-indigo-500/50 hover:bg-slate-800/80"
                  : "text-slate-800 bg-white/70 border-slate-300/80 hover:border-indigo-500 hover:bg-white shadow-xs"
              }`}
            >
              <Download className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`md:hidden p-2 rounded-full border transition-all duration-300 ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white bg-slate-900/60 border-slate-800"
                  : "text-slate-600 hover:text-slate-900 bg-white/70 border-slate-200"
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className={`pointer-events-auto md:hidden mt-2 border rounded-2xl p-4 space-y-2 shadow-2xl backdrop-blur-2xl transition-colors duration-500 ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-950/95"
                  : "border-slate-200 bg-white/95"
              }`}
            >
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "CV Preview", href: "#cv-preview" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    theme === "dark"
                      ? "text-slate-300 hover:bg-slate-900"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="https://docs.google.com/document/d/1ddN1iNVZZYcTGqLvg_mOojrp_OlrA8EersP37NPnWzw/export?format=pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-95 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- SECTION 1: HERO SECTION (LARGE ANIMATED 60px GRID HIGH CONTRAST) --- */}
      <section
        id="hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative pt-28 pb-24 md:pt-36 md:pb-32 z-10 overflow-hidden"
      >
        {/* ANIMATED LARGE GRID OVERLAY (60px SIZE WITH SLOW PANNING ANIMATION) */}
        <div className="absolute inset-0 pointer-events-none hero-grid-pattern opacity-95" />
        <div className="absolute inset-0 pointer-events-none glow-mesh opacity-90" />

        {/* DYNAMIC RAINBOW PARTICLES */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <AnimatePresence>
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0.85, scale: 1 }}
                animate={{ opacity: 0, scale: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="particle-trail pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px]"
                style={{
                  left: `${p.x}px`,
                  top: `${p.y}px`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: `hsl(${p.hue}, 95%, 60%)`,
                  boxShadow: `0 0 12px 2px hsl(${p.hue}, 95%, 60%)`,
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Seamless Bottom Gradient Fade into About Section */}
        <div
          className={`absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-b ${
            theme === "dark"
              ? "from-transparent via-slate-950/60 to-slate-900/60"
              : "from-transparent via-slate-50/60 to-slate-100/60"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Status Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-colors duration-500 ${
                  theme === "dark"
                    ? "bg-indigo-950/80 border-indigo-700/80 text-indigo-300 shadow-lg shadow-indigo-950/50"
                    : "bg-indigo-50 border-indigo-300 text-indigo-800 shadow-xs"
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                <span>Available for Internships & Projects</span>
              </div>

              {/* Title & Name */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    Isa Muhammad
                  </span>
                </h1>

                {/* Sub-header Typewriter Effect */}
                <div className="h-12 flex items-center text-xl sm:text-3xl font-mono font-semibold text-indigo-600 dark:text-indigo-300">
                  <span className="text-slate-400 mr-2">&gt;</span>
                  <span>{typedRole}</span>
                  <span className="w-2.5 h-6 ml-1 bg-cyan-500 dark:bg-cyan-400 inline-block animate-pulse" />
                </div>
              </div>

              <p
                className={`text-base sm:text-lg leading-relaxed max-w-2xl transition-colors duration-500 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Mahasiswa Teknologi Rekayasa Perangkat Lunak{" "}
                <strong
                  className={`font-semibold transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Universitas Gadjah Mada (UGM)
                </strong>
                . Berfokus pada full-stack web development, arsitektur sistem, data mining, dan AI automation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all hover:scale-105"
                >
                  <Boxes className="w-4 h-4" />
                  <span>Lihat Proyek</span>
                </a>
                <a
                  href="#cv-preview"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-slate-500 shadow-md"
                      : "bg-white hover:bg-slate-100 border-slate-300 text-slate-800 hover:border-slate-400 shadow-sm"
                  }`}
                >
                  <FileText className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  <span>Live CV Preview</span>
                </a>
              </div>

              {/* Social Channels Pill */}
              <div
                className={`pt-6 border-t flex items-center gap-4 transition-colors duration-500 ${
                  theme === "dark" ? "border-slate-800/80 text-slate-400" : "border-slate-300 text-slate-600"
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Connect:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:isamuha36@gmail.com"
                    title="Email"
                    className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-slate-900/90 border-slate-800 text-indigo-400 hover:border-indigo-500 hover:bg-indigo-950/40"
                        : "bg-white border-slate-200 text-indigo-600 hover:border-indigo-300 shadow-xs"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/62895365540817"
                    target="_blank"
                    rel="noreferrer"
                    title="WhatsApp"
                    className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-slate-900/90 border-slate-800 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-950/40"
                        : "bg-white border-slate-200 text-emerald-600 hover:border-emerald-300 shadow-xs"
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/isamuha36"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-500 hover:bg-slate-800"
                        : "bg-white border-slate-200 text-slate-800 hover:border-slate-400 shadow-xs"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/isa-muhammad010325"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-slate-900/90 border-slate-800 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-950/40"
                        : "bg-white border-slate-200 text-cyan-600 hover:border-cyan-300 shadow-xs"
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/ismhmmd_"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram"
                    className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-slate-900/90 border-slate-800 text-pink-400 hover:border-pink-500 hover:bg-pink-950/40"
                        : "bg-white border-slate-200 text-pink-600 hover:border-pink-300 shadow-xs"
                    }`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Card: User Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 shadow-2xl shadow-indigo-500/25 group">
                <div
                  className={`rounded-[22px] p-6 space-y-6 border transition-colors duration-500 ${
                    theme === "dark"
                      ? "bg-slate-900/95 backdrop-blur-xl border-slate-800"
                      : "bg-white/95 backdrop-blur-xl border-slate-200"
                  }`}
                >
                  {/* USER PHOTO CONTAINER WITH UGM ALMA MATER HIGHLIGHT */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700/50 shadow-inner group">
                    <Image
                      src="/profile.jpg"
                      alt="Isa Muhammad - Software Engineering UGM"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Photo Top Badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/50 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5 shadow-lg">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Universitas Gadjah Mada</span>
                    </div>

                    {/* Photo Bottom Info Bar */}
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-white space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">Isa Muhammad</span>
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                      </div>
                      <p className="text-xs text-slate-300 font-mono">
                        D4 Teknologi Rekayasa Perangkat Lunak UGM
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Color Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div
                      className={`p-3 rounded-xl border transition-colors duration-500 ${
                        theme === "dark"
                          ? "bg-indigo-950/40 border-indigo-800/60"
                          : "bg-indigo-50/80 border-indigo-200"
                      }`}
                    >
                      <div className="text-xl font-bold text-indigo-500 dark:text-indigo-400">6+</div>
                      <div className="text-[11px] text-indigo-900 dark:text-slate-300 font-medium">
                        Major Tech Projects
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-xl border transition-colors duration-500 ${
                        theme === "dark"
                          ? "bg-purple-950/40 border-purple-800/60"
                          : "bg-purple-50/80 border-purple-200"
                      }`}
                    >
                      <div className="text-xl font-bold text-purple-500 dark:text-purple-400">2</div>
                      <div className="text-[11px] text-purple-900 dark:text-slate-300 font-medium">
                        UGM Lab Assistant Roles
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-xl border transition-colors duration-500 ${
                        theme === "dark"
                          ? "bg-cyan-950/40 border-cyan-800/60"
                          : "bg-cyan-50/80 border-cyan-200"
                      }`}
                    >
                      <div className="text-xl font-bold text-cyan-500 dark:text-cyan-400">15+</div>
                      <div className="text-[11px] text-cyan-900 dark:text-slate-300 font-medium">
                        Languages & Tools
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-xl border transition-colors duration-500 ${
                        theme === "dark"
                          ? "bg-amber-950/40 border-amber-800/60"
                          : "bg-amber-50/80 border-amber-200"
                      }`}
                    >
                      <div className="text-xl font-bold text-amber-500 dark:text-amber-400">
                        Insani
                      </div>
                      <div className="text-[11px] text-amber-900 dark:text-slate-300 font-medium">
                        Scholarship Awardee
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT SECTION (DIAGONAL STRIPES WITH SEAMLESS GRADIENT BLEND) --- */}
      <section
        id="about"
        className={`py-20 relative z-10 transition-colors duration-500 pattern-diagonal overflow-hidden ${
          theme === "dark" ? "bg-slate-900/50" : "bg-slate-100/70"
        }`}
      >
        {/* Seamless Top & Bottom Blending Overlays */}
        <div
          className={`absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-slate-950 to-transparent" : "from-slate-50 to-transparent"
          }`}
        />
        <div
          className={`absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-transparent to-slate-950" : "from-transparent to-slate-50"
          }`}
        />

        {/* Ambient Purple Floating Orbs for About */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-indigo-950/80 border-indigo-700/80 text-indigo-300"
                  : "bg-indigo-50 border-indigo-300 text-indigo-800"
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Profil & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Tentang Saya</h2>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Menghubungkan fondasi akademis yang kuat dengan pengalaman praktis dalam membangun perangkat lunak modern.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Academic Foundation Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border-l-4 border-l-indigo-500">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Pendidikan UGM</h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <strong className="text-indigo-600 dark:text-indigo-400">Universitas Gadjah Mada</strong> (Jul 2023 - Present)
                <br />
                Bachelor&apos;s of Applied Science in Software Engineering Technology.
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                  Relevant Coursework:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Project Management",
                    "Software Architecture",
                    "Requirements Engineering",
                    "Data Structures",
                    "Object Oriented Programming",
                    "Analysis & Design",
                  ].map((course) => (
                    <span
                      key={course}
                      className={`text-[11px] px-2.5 py-1 rounded-md border font-medium transition-colors duration-500 ${
                        theme === "dark"
                          ? "bg-indigo-950/40 border-indigo-800/60 text-indigo-300"
                          : "bg-indigo-50 border-indigo-200 text-indigo-800"
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical Vision Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border-l-4 border-l-purple-500">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500 dark:text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Prinsip & Visi</h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Memiliki passion tinggi dalam mempelajari hal-hal baru dan berkontribusi memberikan dampak positif bagi sekitar. 
                Ilmu yang diperoleh diyakini harus bermanfaat bagi diri sendiri dan lingkungan.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Akademis & Organisasi seimbang dengan performa tinggi</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pendekatan analitis berbasis data & software specification</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Adaptif terhadap teknologi terkini (AI, Containerization, Frameworks)</span>
                </div>
              </div>
            </div>

            {/* Key Roles Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 space-y-4 border-l-4 border-l-cyan-500">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Fokus Utama</h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Menggabungkan perspektif teknis dan manajerial untuk menghasilkan produk perangkat lunak yang scalable dan handal.
              </p>
              <div className="space-y-3 pt-2">
                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-3 transition-colors duration-500 ${
                    theme === "dark" ? "bg-indigo-950/40 border-indigo-800/60" : "bg-indigo-50 border-indigo-200"
                  }`}
                >
                  <Terminal className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span className="text-xs font-semibold">Fullstack Web Engineering</span>
                </div>
                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-3 transition-colors duration-500 ${
                    theme === "dark" ? "bg-purple-950/40 border-purple-800/60" : "bg-purple-50 border-purple-200"
                  }`}
                >
                  <Database className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  <span className="text-xs font-semibold">System Architecture & Specification (SRS)</span>
                </div>
                <div
                  className={`p-2.5 rounded-xl border flex items-center gap-3 transition-colors duration-500 ${
                    theme === "dark" ? "bg-cyan-950/40 border-cyan-800/60" : "bg-cyan-50 border-cyan-200"
                  }`}
                >
                  <Zap className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                  <span className="text-xs font-semibold">AI Automation & Workflow Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: EXPERIENCE SECTION (POLKA DOT MATRIX PATTERN WITH SEAMLESS BLEND) --- */}
      <section id="experience" className="py-24 relative z-10 pattern-dots overflow-hidden">
        {/* Seamless Top & Bottom Blending Overlays */}
        <div
          className={`absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-slate-950 to-transparent" : "from-slate-50 to-transparent"
          }`}
        />
        <div
          className={`absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-transparent to-slate-900/60" : "from-transparent to-slate-100/70"
          }`}
        />

        {/* Glow Line Ambient for Experience */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-purple-950/80 border-purple-700/80 text-purple-300"
                  : "bg-purple-50 border-purple-300 text-purple-800"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career & Leadership Track</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Pengalaman Profesional & Organisasi
            </h2>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Pengalaman nyata dalam industri, kepemimpinan proyek, riset AI, serta pengajaran akademis di UGM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiencesData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card glass-card-hover rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-slate-900/10 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          {exp.icon}
                        </div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-md border text-[11px] font-mono font-medium ${exp.badgeStyle}`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold hover:text-indigo-500 transition-colors pt-1">
                        {exp.title}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <span>{exp.organization}</span>
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg border shrink-0 transition-colors duration-500 ${
                        theme === "dark"
                          ? "bg-slate-900/80 border-slate-800 text-slate-300"
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {exp.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROJECTS SECTION (TECH CROSSHAIR MATRIX PATTERN WITH SEAMLESS BLEND) --- */}
      <section
        id="projects"
        className={`py-24 relative z-10 border-y transition-colors duration-500 pattern-crosshair overflow-hidden ${
          theme === "dark" ? "bg-slate-900/60 border-slate-800/60" : "bg-slate-100/70 border-slate-200"
        }`}
      >
        {/* Seamless Top & Bottom Blending Overlays */}
        <div
          className={`absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-slate-950 to-transparent" : "from-slate-50 to-transparent"
          }`}
        />
        <div
          className={`absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-transparent to-slate-950" : "from-transparent to-slate-50"
          }`}
        />

        {/* Cyan Ambient Flares for Projects */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-cyan-950/80 border-cyan-700/80 text-cyan-300"
                  : "bg-cyan-50 border-cyan-300 text-cyan-800"
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Proyek Portofolio</h2>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Eksplorasi proyek-proyek unggulan berdasarkan filter kategori berikut:
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : theme === "dark"
                    ? "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  <div className="p-6 space-y-4">
                    {/* Header Badge & Year */}
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-white bg-gradient-to-r ${project.colorTheme} shadow-sm`}>
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-medium text-indigo-500 dark:text-slate-400">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md border font-medium transition-colors duration-500 ${
                            theme === "dark"
                              ? "bg-slate-900 border-slate-800 text-slate-300"
                              : "bg-slate-100 border-slate-200 text-slate-700"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1 transition-colors"
                    >
                      <span>Detail Spec</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECT DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`border rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto ${
                theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 p-2 rounded-lg ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white bg-slate-800/60"
                    : "text-slate-600 hover:text-slate-900 bg-slate-100"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold text-white bg-gradient-to-r ${selectedProject.colorTheme}`}>
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-2xl font-extrabold mt-2">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 mt-1">
                  Peran: {selectedProject.role}
                </p>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-wider">
                  Key Features & Architecture Highlights:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 tracking-wider">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                        theme === "dark"
                          ? "bg-slate-950 border-slate-800 text-slate-300"
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold ${
                    theme === "dark"
                      ? "bg-slate-800 text-slate-300 hover:text-white"
                      : "bg-slate-200 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  Tutup
                </button>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Buka GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SECTION 5: SKILLS & CERTIFICATIONS (FUTURISTIC TECH CONSTELLATION NODE NETWORK PATTERN WITH SEAMLESS BLEND) --- */}
      <section id="skills" className="py-24 relative z-10 pattern-constellation overflow-hidden">
        {/* Seamless Top & Bottom Blending Overlays */}
        <div
          className={`absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-slate-950 to-transparent" : "from-slate-50 to-transparent"
          }`}
        />
        <div
          className={`absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-transparent to-slate-900/60" : "from-transparent to-slate-100/70"
          }`}
        />

        {/* Emerald Glow Spheres for Skills */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-emerald-950/80 border-emerald-700/80 text-emerald-300"
                  : "bg-emerald-50 border-emerald-300 text-emerald-800"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Tech Stack & Achievements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Keahlian & Sertifikasi</h2>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Teknologi, bahasa pemrograman, tools, dan penghargaan yang dikuasai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className={`glass-card glass-card-hover rounded-2xl p-6 space-y-4 border ${cat.accent}`}>
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div
                    className={`p-2.5 rounded-xl border transition-colors duration-500 ${
                      theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-medium transition-transform hover:scale-105 ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Award */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 border-l-4 border-l-amber-500">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-500 dark:text-amber-400">Awardee</span>
                <h4 className="text-sm font-bold mt-0.5">Insani Scholarship Batch 11</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">LPI Gema Insani (2025)</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 border-l-4 border-l-indigo-500">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-indigo-500 dark:text-indigo-400">Certification</span>
                <h4 className="text-sm font-bold mt-0.5">Database Programming with SQL</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Oracle Academy (Jun 2023)</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 border-l-4 border-l-purple-500">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500 dark:text-purple-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-purple-500 dark:text-purple-400">Certification</span>
                <h4 className="text-sm font-bold mt-0.5">Data Visualization for Data Analysis</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">MySkill Short Class (Jul 2023)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: GOOGLE DOCS LIVE CV PREVIEW (MINIMALIST GRADIENT BACKDROP WITH SEAMLESS BLEND) --- */}
      <section
        id="cv-preview"
        className={`py-24 relative z-10 border-y transition-colors duration-500 overflow-hidden ${
          theme === "dark" ? "bg-slate-900/60 border-slate-800/60" : "bg-slate-100/70 border-slate-200"
        }`}
      >
        {/* Seamless Top & Bottom Blending Overlays */}
        <div
          className={`absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-slate-950 to-transparent" : "from-slate-50 to-transparent"
          }`}
        />
        <div
          className={`absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-transparent to-slate-950" : "from-transparent to-slate-50"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-indigo-950/80 border-indigo-700/80 text-indigo-300"
                  : "bg-indigo-50 border-indigo-300 text-indigo-800"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Document View</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Live Preview Curriculum Vitae</h2>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Tampilan langsung dokumen CV resmi tanpa perlu mengunduh.
            </p>
          </div>

          {/* Iframe Container */}
          <div className="glass-card rounded-2xl overflow-hidden p-2 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div
              className={`flex items-center justify-between px-4 py-3 rounded-xl border mb-3 transition-colors duration-500 ${
                theme === "dark" ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <FileText className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>CV-Isa_Muhammad-Juli_2026.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://docs.google.com/document/d/1ddN1iNVZZYcTGqLvg_mOojrp_OlrA8EersP37NPnWzw/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka di Google Docs</span>
                </a>
              </div>
            </div>

            {/* Desktop: Show iframe preview */}
            <div className="hidden md:block relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[8.5/11] min-h-[600px]">
              <iframe
                src="https://docs.google.com/document/d/1ddN1iNVZZYcTGqLvg_mOojrp_OlrA8EersP37NPnWzw/preview"
                className="w-full h-full border-0"
                title="Isa Muhammad CV Preview"
                allow="autoplay"
              />
            </div>

            {/* Mobile: Show action buttons instead of broken iframe */}
            <div
              className={`md:hidden flex flex-col items-center justify-center gap-6 rounded-xl border p-8 text-center transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-slate-950/80 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Curriculum Vitae</h3>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                  Buka dokumen CV untuk melihat secara lengkap.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <a
                  href="https://docs.google.com/document/d/1ddN1iNVZZYcTGqLvg_mOojrp_OlrA8EersP37NPnWzw/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka CV</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1ddN1iNVZZYcTGqLvg_mOojrp_OlrA8EersP37NPnWzw/export?format=pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CONTACT SECTION (HEXAGONAL PULSE MESH PATTERN WITH SEAMLESS BLEND) --- */}
      <section id="contact" className="py-24 relative z-10 pattern-hex overflow-hidden">
        {/* Seamless Top Blending Overlay */}
        <div
          className={`absolute top-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-b ${
            theme === "dark" ? "from-slate-950 to-transparent" : "from-slate-50 to-transparent"
          }`}
        />

        {/* Pink Glow Orb for Contact */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-emerald-950/80 border-emerald-700/80 text-emerald-300"
                  : "bg-emerald-50 border-emerald-300 text-emerald-800"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Hubungi Saya</h2>
            <p
              className={`text-sm sm:text-base transition-colors duration-500 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Tertarik untuk berkolaborasi, diskusi proyek, atau tawaran posisi magang/kerja? Silakan hubungi saya melalui saluran berikut.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Cards Grid */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:isamuha36@gmail.com"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block group border-l-4 border-l-indigo-500"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Email</div>
                  <div className="text-sm font-bold group-hover:text-indigo-500 transition-colors">
                    isamuha36@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/62895365540817"
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block group border-l-4 border-l-emerald-500"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">WhatsApp / Call</div>
                  <div className="text-sm font-bold group-hover:text-emerald-500 transition-colors">
                    +62 8953 6554 0817
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/isa-muhammad010325"
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block group border-l-4 border-l-cyan-500"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-bold group-hover:text-cyan-500 transition-colors">
                    linkedin.com/in/isa-muhammad010325
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/isamuha36"
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block group border-l-4 border-l-slate-500"
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                    theme === "dark" ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                >
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Repositories</div>
                  <div className="text-sm font-bold group-hover:text-indigo-500 transition-colors">
                    github.com/isamuha36
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/ismhmmd_"
                target="_blank"
                rel="noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block group border-l-4 border-l-pink-500"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 dark:text-pink-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Instagram Handle</div>
                  <div className="text-sm font-bold group-hover:text-pink-500 transition-colors">
                    @ismhmmd_
                  </div>
                </div>
              </a>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Send className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                  <span>Kirim Pesan Langsung</span>
                </h3>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-800 text-center space-y-3"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Pesan Terkirim!</h4>
                    <p className="text-xs text-slate-300">
                      Terima kasih telah menghubungi. Saya akan merespon pesan Anda secepatnya.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Masukkan nama Anda"
                          className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors duration-500 ${
                            theme === "dark"
                              ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                              : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                          Email Anda *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="contoh@email.com"
                          className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors duration-500 ${
                            theme === "dark"
                              ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                              : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Topik pesan / tawaran magang"
                        className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors duration-500 ${
                          theme === "dark"
                            ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                            : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Pesan *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tuliskan detail pesan Anda..."
                        className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors duration-500 resize-none ${
                          theme === "dark"
                            ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                            : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-opacity"
                    >
                      Kirim Pesan Sekarang
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className={`py-10 border-t relative z-10 transition-colors duration-500 ${
          theme === "dark" ? "border-slate-800/80 bg-slate-950 text-slate-500" : "border-slate-200 bg-white text-slate-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono">
            © 2026 Isa Muhammad. Built with Next.js & Tailwind CSS.
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href="#hero" className="hover:text-indigo-500 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
