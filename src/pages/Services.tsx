import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Code2, Smartphone, Users, Globe, Database, Cloud, Shield, 
  CheckCircle2, Sparkles, Star, ChevronDown, ChevronUp, Cpu, Award, Zap, 
  Building2, Stethoscope, GraduationCap, Car, ShoppingCart, Send, Layout, Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ProjectFlipCard } from "@/components/ProjectFlipCard";
import { FaqSection } from "@/components/FaqSection";
import { projectsData } from "@/data/projectsData";
import servicesHeroBackground from "@/assets/services-hero-background.jpg";

const servicesList = [
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Native iOS, Android & FlutterFlow Cross-Platform Applications",
    description: "We build intuitive, high-performance mobile applications that users love. From sub-second push notifications to offline-first data sync, our mobile apps deliver exceptional engagement.",
    features: [
      "Native iOS & Android App Engineering",
      "FlutterFlow & React Native Cross-Platform",
      "Real-Time Push Notifications (FCM)",
      "Biometric Login & Secure Storage",
      "App Store & Google Play Publishing",
      "Offline-First Architecture & Sync"
    ],
    badge: "iOS & Android"
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    subtitle: "Enterprise ERP, CRM & Web Software Architecture",
    description: "Tailor-made software products engineered specifically around your company's operational workflows. We automate repetitive tasks and consolidate business intelligence into unified dashboards.",
    features: [
      "Enterprise ERP & CRM Platforms",
      "Laravel & PHP Web Systems",
      "Role-Based Access Control (RBAC)",
      "Automated PDF & Report Engines",
      "Legacy Database Migration",
      "RESTful & GraphQL API Development"
    ],
    badge: "Enterprise"
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development & Portals",
    subtitle: "High-Performance Modern Web Apps & Client Portals",
    description: "Product-led web platforms crafted with React, Next.js, and modern CSS systems. Engineered for fast load speeds, responsive grids, and high conversion.",
    features: [
      "Custom Client & Admin Portals",
      "Full-Stack React & Node.js Apps",
      "E-Commerce & Payment Gateways",
      "Progressive Web Apps (PWA)",
      "SEO & Core Web Vitals Optimization",
      "Multi-Language Internationalization"
    ],
    badge: "Web Software"
  },
  {
    id: "ai-automation",
    icon: Cpu,
    title: "Artificial Intelligence & SaaS",
    subtitle: "Generative AI, NLP & Intelligent Process Automation",
    description: "Empower your business with smart AI automation. We integrate large language models, predictive analytics, and automated decision-making engines into your existing workflows.",
    features: [
      "Custom AI Agent Development",
      "Natural Language Processing (NLP)",
      "Predictive Data & Trend Analytics",
      "Automated Workflow Bots",
      "SaaS Multi-Tenant Architecture",
      "AI Code & Data Audit"
    ],
    badge: "AI Powered"
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Scalable AWS Deployment, Docker & CI/CD Pipelines",
    description: "Reliable, high-availability cloud architecture designed to scale seamlessly with your user growth. Zero downtime deployment with 24/7 infrastructure monitoring.",
    features: [
      "AWS & Google Cloud Setup",
      "Docker & Kubernetes Containerization",
      "Automated CI/CD Release Pipelines",
      "Database Clustering & Replication",
      "Bank-Grade Security Audits",
      "24/7 Monitoring & Disaster Recovery"
    ],
    badge: "Cloud & Security"
  },
  {
    id: "staff-aug",
    icon: Users,
    title: "Staff Augmentation & Dedicated Teams",
    subtitle: "Senior On-Demand Engineers to Accelerate Delivery",
    description: "Scale your development team quickly with senior full-stack, mobile, and AI engineers. Seamless integration with your agile sprints and internal team culture.",
    features: [
      "Dedicated Senior iOS & Android Developers",
      "Full-Stack Laravel & React Engineers",
      "Flexible Monthly & Sprint Hiring",
      "Direct Slack & Jira Communication",
      "100% IP & Code Ownership",
      "No Overhead & Fast Onboarding"
    ],
    badge: "Team Extension"
  }
];

const techTabs = [
  {
    category: "Mobile",
    items: ["FlutterFlow", "Flutter", "iOS (Swift)", "Android (Kotlin)", "React Native", "Firebase FCM"]
  },
  {
    category: "Frontend Web",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Vite"]
  },
  {
    category: "Backend & API",
    items: ["Laravel", "PHP 8+", "Node.js", "Express", "Python", "REST API / GraphQL"]
  },
  {
    category: "Database & Storage",
    items: ["MySQL", "PostgreSQL", "Firebase Firestore", "Redis", "MongoDB", "AWS S3"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Cloud", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "Vercel / Netlify"]
  }
];

const Services = () => {
  const [activeTechTab, setActiveTechTab] = useState<number>(0);
  const [heroFormSubmitted, setHeroFormSubmitted] = useState<boolean>(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />

        {/* 1. Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${servicesHeroBackground})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-950/78" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Hero Text */}
              <div className="lg:col-span-7 flex flex-col items-center space-y-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-400">
                  <Sparkles size={14} /> Full-Spectrum Software Engineering
                </div>

                <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Future-Proof Your<br />
                  Business With Scalable<br />
                  <span className="text-sky-400">Web, Mobile & AI</span><br />
                  Solutions.
                </h1>

                <p className="max-w-3xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
                  Transforming ambitious companies with custom products engineered for accelerated digital growth, high performance, and bank-grade security.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <a href="#consultation-form">
                    <Button size="lg" className="bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-8 py-6 rounded-full text-base shadow-lg">
                      GET A FREE QUOTE <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </a>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline" className="border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-full text-base">
                      Explore Case Studies
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Mini Consultation Form Card */}
              <div className="lg:col-span-5">
                <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-200">
                  {heroFormSubmitted ? (
                    <div className="text-center py-8 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-sky-100 text-[#0f6cbd] font-bold text-xl flex items-center justify-center mx-auto">
                        ✓
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Request Received!</h3>
                      <p className="text-xs text-slate-600">Our engineering lead will get in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setHeroFormSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="text-lg font-extrabold text-slate-900">Get Free Consultation</h3>
                        <p className="text-xs text-slate-500">Fill out your project details for an immediate quote.</p>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">Work Email</label>
                        <input
                          required
                          type="email"
                          placeholder="john@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">Select Service</label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] bg-white">
                          <option>Mobile App Development</option>
                          <option>Custom Software / ERP</option>
                          <option>Web Portal Development</option>
                          <option>AI Automation & SaaS</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider"
                      >
                        Request Quote Now
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Impact Stats Ticker */}
        <section className="bg-slate-900 text-white py-8 border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">50+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Projects Delivered</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">99.9%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Uptime & Reliability</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">15+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Global Enterprise Partners</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">50K+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Daily Active Users</div>
              </div>
              <div className="p-3 col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">4.9 / 5.0</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Services Spectrum */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="px-4 py-1.5 rounded-full bg-[#0f6cbd] text-white text-xs font-extrabold uppercase tracking-widest shadow-md">
                OUR SERVICES SPECTRUM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                End-to-End Technology Capabilities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Explore our full suite of web, mobile, AI, and enterprise software solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Brand Blue Icon Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#0f6cbd] text-white flex items-center justify-center font-bold shadow-md">
                        <service.icon size={26} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-extrabold uppercase">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">{service.title}</h3>
                      <p className="text-xs font-bold text-[#0f6cbd] mt-1">{service.subtitle}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="pt-2 space-y-2">
                      <div className="text-[11px] font-extrabold uppercase text-slate-700 tracking-wider">Key Capabilities:</div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {service.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0f6cbd] shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/80 mt-6">
                    <a href="#consultation-form">
                      <Button className="w-full bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-sm">
                        Get Service Quote
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Featured Case Studies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-widest border border-sky-500/30">
                  PROVEN RESULTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                  Featured Case Studies & Workflows
                </h2>
              </div>
              <Link to="/portfolio" className="text-sm font-extrabold text-sky-400 hover:underline">
                View All Case Studies →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.slice(0, 4).map((project) => (
                <ProjectFlipCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Development Process / 4-Step Workflow */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                DEVELOPMENT WORKFLOW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                How We Deliver Products Built To Win
              </h2>
              <p className="text-slate-600 text-sm">
                A structured 4-step engineering process designed for transparency and speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery & Strategy", desc: "Understanding goals, requirements, user roles, and system scope." },
                { step: "02", title: "UI/UX & Architecture", desc: "Crafting wireframes, design systems, and database schema." },
                { step: "03", title: "Agile Build & QA", desc: "Sprint demos, automated testing, and sub-second performance optimization." },
                { step: "04", title: "Deployment & Scale", desc: "CI/CD cloud deployment, monitoring, and ongoing feature releases." }
              ].map((item) => (
                <div key={item.step} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-3">
                  <div className="text-4xl font-extrabold text-[#0f6cbd]">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Technologies & Frameworks Interactive Tabs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                MODERN TECH STACK
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Technologies We Master</h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {techTabs.map((tab, idx) => (
                <button
                  key={tab.category}
                  onClick={() => setActiveTechTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTechTab === idx
                      ? "bg-[#0f6cbd] text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.category}
                </button>
              ))}
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {techTabs[activeTechTab].items.map((item) => (
                <div key={item} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Frequently Asked Questions */}
        <FaqSection
          title="How We Build Under"
          highlightText="Regulation"
          subtitle="Compliance is an architecture decision we make in the first sprint, not a checklist we run before launch. Here's how that works across every layer of your build."
        />

        {/* 8. Contact / Request a Quote Form */}
        <section id="consultation-form" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest border border-sky-500/30">
                  Ready to Build?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Let’s Discuss Your Next Big Project
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Send us your project details or request a free consultation. Our team will review your requirements and provide an estimated timeline & cost proposal.
                </p>
                <div className="space-y-2 text-xs text-slate-400">
                  <div>✓ Strict NDA signed before technical discussions</div>
                  <div>✓ 100% Source code ownership & asset transfer</div>
                  <div>✓ Direct access to senior software architects</div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thank you! Your quote request has been submitted.");
                    }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">Request a Scope & Estimate</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Work Email</label>
                        <input
                          required
                          type="email"
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service Required</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] bg-white">
                          <option>Mobile App Development</option>
                          <option>Custom Software / ERP</option>
                          <option>Web Portal / SaaS</option>
                          <option>Artificial Intelligence & Automation</option>
                          <option>Staff Augmentation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Project Overview</label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe your project goals, features, or timeline..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold py-4 rounded-xl shadow-lg text-sm uppercase tracking-wider"
                    >
                      Submit Consultation Request <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
