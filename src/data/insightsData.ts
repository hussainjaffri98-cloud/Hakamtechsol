import webImage from "@/assets/web-dev.jpg";
import mobileImage from "@/assets/mobile-dev.jpg";
import aiImage from "@/assets/hero-tech.jpg";
import cloudImage from "@/assets/hero-bg.jpg";
import transformationImage from "@/assets/team.jpg";
import softwareImage from "@/assets/freelance.jpg";

export type InsightCategory = "Web Development" | "Mobile Apps" | "AI & Machine Learning" | "Cloud & DevOps" | "Digital Transformation" | "Business & Technology";

export interface Insight {
  title: string;
  category: InsightCategory;
  image: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export const insights: Insight[] = [
  { title: "Building Smarter Digital Solutions for Modern Businesses", category: "Business & Technology", image: transformationImage, description: "Practical ways to connect technology decisions with business goals, customer needs, and measurable growth.", date: "August 2026", readTime: "5 min read", slug: "smarter-digital-solutions" },
  { title: "How High-Performance Websites Turn Visitors Into Customers", category: "Web Development", image: webImage, description: "The web development principles that make modern products faster, more accessible, and conversion-focused.", date: "August 2026", readTime: "6 min read", slug: "high-performance-websites" },
  { title: "Mobile-First Product Experiences That Keep Users Engaged", category: "Mobile Apps", image: mobileImage, description: "Build intuitive mobile experiences that feel fast, reliable, and valuable from the first interaction.", date: "July 2026", readTime: "4 min read", slug: "mobile-first-experiences" },
  { title: "Turning AI Into Practical Business Value", category: "AI & Machine Learning", image: aiImage, description: "Where automation, predictive insight, and AI-powered workflows can deliver real operational impact.", date: "July 2026", readTime: "7 min read", slug: "practical-ai-value" },
  { title: "Cloud Foundations for Confident, Scalable Growth", category: "Cloud & DevOps", image: cloudImage, description: "A clear approach to secure infrastructure, dependable delivery pipelines, and sustainable scale.", date: "June 2026", readTime: "5 min read", slug: "cloud-foundations" },
  { title: "A Practical Roadmap for Digital Transformation", category: "Digital Transformation", image: softwareImage, description: "How teams can modernize workflows without losing focus on people, process, and outcomes.", date: "June 2026", readTime: "6 min read", slug: "digital-transformation-roadmap" },
];
