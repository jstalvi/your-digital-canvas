// ============================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

export const portfolioConfig = {
  // Personal Info
  name: "Shourya Khanna",
  title: "Portfolio",
  year: "'25",
  tagline: "UI/UX Designer & Developer",

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    firstName: "Shourya",
    description:
      "I am a UI/UX Designer and I design because I love solving problems, experimenting, trying, and creating things from right clicks and wrong ones. I believe it's not just about elements; it's about images, tweaks, and the tiny details that make a product worth using. I'm not just about looking good. I'm about making experience that makes sense without overthinking for me it's my job.",
  },

  // Experience Items
  experience: [
    {
      title: "Interaction Design Intern at",
      company: "Lannister.Ai",
      period: "Jan 2025 - Present",
    },
    {
      title: "Interaction Design Intern at ITV",
      company: "Blue",
      period: "Jun 2024 - Aug 2024",
    },
    {
      title: "Graphic Design & Social Media",
      company: "Intern at iDesign.Market",
      period: "May 2024",
    },
    {
      title: "Freelance Designer",
      company: "",
      period: "2022 - Present",
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelors in Graphics Communication,",
      institution: "BJMC",
      period: "2021-2024",
    },
    {
      degree: "Masters in Interaction Design",
      institution: "Symbiosis Institute of Design, Pune",
      period: "2024-2026",
    },
    {
      degree: "Food Mania: Kakao Latte, 07,000",
      institution: "",
      period: "2023",
    },
    {
      degree: "Graphathon, Open cv since V'23",
      institution: "",
      period: "2023",
    },
  ],

  // Contact Info
  contact: {
    email: "shouryakhanna22@gmail.com",
    phone: "+91-7869440468",
    linkedin: "linkedin.com/in/shourya-khanna-f104bc2d7",
    behance: "behance.net/shouryakhanna",
  },

  // Software/Skills Icons (use lucide icon names or custom)
  skills: [
    { name: "Figma", icon: "Figma" },
    { name: "Framer", icon: "Frame" },
    { name: "Adobe XD", icon: "Layers" },
    { name: "Photoshop", icon: "Image" },
    { name: "Illustrator", icon: "Pen" },
    { name: "After Effects", icon: "Film" },
    { name: "Blender", icon: "Box" },
    { name: "Webflow", icon: "Globe" },
  ],

  // Projects
  projects: [
    {
      id: 1,
      number: "01",
      title: "MAVOO",
      subtitle: "Apartment, Guest list, complex and security management app",
      color: "coral" as const,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      number: "02",
      title: "SAVANA",
      subtitle: "Website designed for a productive activity app (SaaS)",
      color: "sunshine" as const,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      number: "03",
      title: "CALICART.COM",
      subtitle: "Finances Management System",
      color: "forest" as const,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      number: "04",
      title: "ANITHA",
      subtitle: "AI design for the MAXXN Textiles",
      color: "ocean" as const,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      number: "05",
      title: "MILAN UI",
      subtitle: "Home fit business, simplifies orders",
      color: "grape" as const,
      image: "/placeholder.svg",
    },
  ],

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/shourya-khanna",
    behance: "https://behance.net/shouryakhanna",
    dribbble: "https://dribbble.com/shouryakhanna",
    instagram: "https://instagram.com/shouryakhanna",
  },

  // Footer
  footer: {
    copyright: "© 2025 All rights reserved.",
    builtWith: "Built with Lovable",
  },
};

export type PortfolioConfig = typeof portfolioConfig;
export type ProjectColor = "coral" | "sunshine" | "forest" | "ocean" | "grape";
