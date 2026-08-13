import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, Code2, Smartphone, Shield, Star, Users, Zap, 
  Sparkles, Trophy, Cpu, Building2, Stethoscope, GraduationCap, Car, ShoppingCart, Activity 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { ProjectFlipCard } from "@/components/ProjectFlipCard";
import { projectsData } from "@/data/projectsData";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";
import teamImage from "@/assets/team.jpg";
import homeHeroVideo from "@/assets/home-hero-technology.mp4";

const servicesList = [
  {
    category: "Mobile App Development",
    desc: "iOS, Android, and FlutterFlow cross-platform apps built for high retention.",
    icon: Smartphone,
  },
  {
    category: "Custom Software Development",
    desc: "Tailored ERP, CRM, and CMS solutions for enterprise workflows.",
    icon: Code2,
  },
  {
    category: "Web Development & Portals",
    desc: "Product-led web applications using Laravel, React, and PHP.",
    icon: Building2,
  },
  {
    category: "Artificial Intelligence & SaaS",
    desc: "Workflow automation, NLP, and intelligent data modeling.",
    icon: Cpu,
  },
  {
    category: "Cloud Services & DevOps",
    desc: "Scalable cloud infrastructure, migration, and 24/7 support.",
    icon: Shield,
  },
  {
    category: "Staff Augmentation",
    desc: "Dedicated senior Android, iOS, and full-stack developers for your team.",
    icon: Users,
  },
];

const industriesList = [
  { name: "Automotive", desc: "Transforming automotive logistics & vehicle coordination.", icon: Car },
  { name: "Healthcare", desc: "Clinical patient records, visit tracking & medical reports.", icon: Stethoscope },
  { name: "Education", desc: "Quranic learning portals & student progress tracking.", icon: GraduationCap },
  { name: "Real Estate", desc: "Property portals, realtor dashboards & listing tools.", icon: Building2 },
  { name: "Sports Analytics", desc: "Player evaluation, squad analytics & performance radar.", icon: Trophy },
  { name: "ECommerce & Retail", desc: "High-conversion web stores & inventory management.", icon: ShoppingCart },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />

        {/* 1. Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 pt-28 pb-16 md:pt-36 md:pb-24">
          <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" aria-hidden="true">
            <source src={homeHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-300">
                  <Sparkles size={14} /> Built To Win • Digital Product Studio
                </div>

                <h1 className="max-w-6xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                  Design and Build your <span className="text-sky-400">Digital Reality</span> with Clarity.
                </h1>

                <p className="max-w-4xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                  HakamTechSol partners with ambitious teams globally to engineer web portals, mobile apps, SaaS platforms, and enterprise software.
                </p>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-8 py-6 text-base rounded-full shadow-lg">
                      GET A QUOTE <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 bg-slate-900/80 hover:bg-slate-800 text-white font-bold px-8 py-6 text-base rounded-full shadow-sm">
                      Explore Case Studies
                    </Button>
                  </Link>
                </div>

                {/* Key Stats Bar */}
                <div className="grid w-full max-w-5xl grid-cols-2 gap-4 border-t border-slate-700 pt-8 text-center sm:grid-cols-4">
                  <div>
                    <div className="text-2xl font-extrabold text-white">50+</div>
                    <div className="text-xs text-slate-300 font-medium">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0f6cbd]">99.9%</div>
                    <div className="text-xs text-slate-300 font-medium">Platform Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white">4.9 / 5.0</div>
                    <div className="text-xs text-slate-300 font-medium">Client Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0f6cbd]">24/7</div>
                    <div className="text-xs text-slate-300 font-medium">Dedicated Support</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Featured Case Studies Section (With 3D Card Flip Effect!) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                  Featured Case Studies
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                  Hover to Flip & Explore Real Client Projects
                </h2>
              </div>
              <Link to="/portfolio" className="text-sm font-extrabold text-[#0f6cbd] hover:underline flex items-center gap-1">
                View All Case Studies →
              </Link>
            </div>

            {/* 3D Flip Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.slice(0, 4).map((project) => (
                <ProjectFlipCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                Our Core Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                End-to-End Technology Solutions
              </h2>
              <p className="text-slate-600 text-sm">
                From product strategy and design to cloud engineering and deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <div key={index} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f6cbd] text-white flex items-center justify-center font-bold shadow-md">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.category}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f6cbd] hover:underline pt-2">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries We Serve */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-widest border border-sky-500/30">
                Domain Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Industries We Transform
              </h2>
              <p className="text-slate-300 text-sm">
                Bespoke tech solutions tailored for high-growth sectors globally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {industriesList.map((ind, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-sky-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    <ind.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-14 text-white text-center shadow-2xl space-y-6 border border-slate-800">
              <span className="px-4 py-1.5 rounded-full bg-[#0f6cbd] text-white text-xs font-extrabold uppercase tracking-widest">
                Start Your Digital Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to build something extraordinary?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                Schedule a consultation call with our solution architects to get a scope proposal and project estimation.
              </p>
              <div>
                <Link to="/contact">
                  <Button size="lg" className="bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-9 py-6 text-base rounded-full shadow-lg">
                    GET A QUOTE NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
