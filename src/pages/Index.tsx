// Hakam TechSol Home Page
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code2, PlayCircle, Shield, Smartphone, Sparkles, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";
import teamImage from "@/assets/team.jpg";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 220], [0, -30]);
  const imageParallax = useTransform(scrollY, [0, 260], [0, -18]);
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Product-led websites and platforms with refined interactions and scalable architecture.",
      image: webDevImage,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Modern iOS and Android apps shaped around conversion, retention, and delight.",
      image: mobileDevImage,
    },
    {
      icon: Users,
      title: "AI Automation",
      description: "Workflow automation and intelligent systems that accelerate business growth.",
      image: freelanceImage,
    },
  ];

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Shield, text: "Secure Solutions" },
    { icon: Star, text: "Quality First" },
    { icon: CheckCircle, text: "24/7 Support" },
  ];

  const portfolioItems = [
    { name: "Fintech Mobile App", category: "Mobile App" },
    { name: "AI Operations Suite", category: "AI" },
    { name: "SaaS Growth Platform", category: "SaaS" },
    { name: "Commerce Intelligence Hub", category: "Data" },
  ];

  const sectionTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeInOut" };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />

        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]" />
            <motion.div
              animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[18%] right-[10%] h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"
            />
          </div>

          <div className="container relative z-10 mx-auto py-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300 backdrop-blur">
                  <Sparkles size={14} /> Premium product studio
                </div>
                <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Design and build premium digital products that win.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Hakam TechSol partners with ambitious teams to create polished web, mobile, and AI experiences that look as remarkable as they perform.
                </p>
                <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-hero-gradient px-8 py-6 text-base text-white shadow-[0_16px_45px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(34,211,238,0.33)] sm:w-auto">
                      Start Your Project <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/services" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full border-white/20 bg-white/10 px-8 py-6 text-base text-slate-100 backdrop-blur transition-all duration-300 hover:scale-[1.05] hover:bg-white/15 sm:w-auto">
                      Explore Services
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm text-slate-400">
                  {features.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <Icon size={16} className="text-cyan-300" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
                style={{ y: heroParallax }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 p-3 shadow-[0_30px_90px_rgba(2,6,23,0.45)] backdrop-blur">
                  <motion.img
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
                    src={heroImage}
                    alt="Premium digital experience"
                    className="h-[420px] w-full rounded-[22px] object-cover lg:h-[520px]"
                  />
                  <div className="absolute inset-x-6 bottom-6 rounded-[20px] border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">Product-led delivery</p>
                        <p className="text-sm text-slate-400">Strategy, design, engineering, and launch in one team.</p>
                      </div>
                      <button className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                        <PlayCircle size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="container mx-auto">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={sectionTransition}
              className="mx-auto mb-14 max-w-2xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">What We Do</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Services crafted for high-growth product teams.</h2>
              <p className="mt-4 text-lg text-slate-400">Every engagement blends refined design, smart engineering, and a premium delivery experience.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: "easeInOut" }}
                  whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.03, boxShadow: "0 24px 70px -24px rgba(34,211,238,0.28)" }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/70 p-0 shadow-[0_16px_50px_rgba(2,6,23,0.28)] transition-all duration-300 hover:border-cyan-400/40"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img whileHover={shouldReduceMotion ? {} : { scale: 1.08 }} transition={{ duration: 0.35 }} src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                  </div>
                  <div className="p-6">
                    <motion.div whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.08 }} className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-hero-gradient shadow-lg">
                      <service.icon className="text-white" size={22} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                    <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all hover:gap-3">
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={sectionTransition}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why teams choose us</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A premium experience from day one.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">We blend elegant design systems, dependable engineering, and thoughtful strategy to help products feel exceptional at launch and beyond.</p>
                <div className="mt-8 space-y-4">
                  {[
                    "Product-first strategy and execution",
                    "Flexible delivery for startup and enterprise teams",
                    "Clear communication and transparent timelines",
                    "Ongoing support and product optimization",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08, duration: 0.35, ease: "easeInOut" }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3"
                    >
                      <CheckCircle className="text-cyan-300" size={20} />
                      <span className="text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/about" className="mt-8 inline-block">
                  <Button className="bg-hero-gradient gap-2 px-6 text-white">About Our Company <ArrowRight size={18} /></Button>
                </Link>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={sectionTransition}
                style={{ y: imageParallax }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.3)]">
                  <img src={teamImage} alt="Collaborative digital studio" className="h-[400px] w-full rounded-[22px] object-cover lg:h-[500px]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={sectionTransition}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.3)]"
              >
                <img src={webDevImage} alt="Mobile-first digital product" className="h-[360px] w-full rounded-[22px] object-cover lg:h-[460px]" />
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={sectionTransition}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Our approach</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Strategy-led execution with calm precision.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">We turn complex ideas into elegant experiences that feel effortless to users and rewarding to your business.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Discovery", text: "Clear goals and a refined roadmap from the start." },
                    { title: "Design", text: "Thoughtful interfaces that build trust and momentum." },
                    { title: "Build", text: "Scalable engineering with a premium finish." },
                    { title: "Grow", text: "Iterative support that keeps momentum high." },
                  ].map((step, index) => (
                    <motion.div key={step.title} whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }} transition={{ duration: 0.2 }} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-sm font-semibold text-white">0{index + 1}. {step.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{step.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="container mx-auto">
            <motion.div initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={sectionTransition} className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Selected work</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Recent projects built with care and conviction.</h2>
              </div>
              <Link to="/services" className="text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">View All Projects</Link>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {portfolioItems.map((project, index) => (
                <motion.article key={project.name} initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08, ease: "easeInOut" }} whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }} className="rounded-[24px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_16px_50px_rgba(2,6,23,0.24)]">
                  <div className="h-32 rounded-[18px] bg-gradient-to-br from-cyan-500/20 via-slate-800 to-violet-500/20" />
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-white">{project.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{project.category}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="container mx-auto">
            <motion.div initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={sectionTransition} className="rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(135deg,_rgba(34,211,238,0.18),_rgba(167,139,250,0.16))] px-6 py-16 text-center text-white shadow-[0_24px_80px_rgba(14,165,233,0.18)] sm:px-10 lg:px-16">
              <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Ready to turn your next idea into a standout experience?</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">Let’s build a product experience that feels polished, fast, and unforgettable.</p>
              <Link to="/contact" className="mt-8 inline-block">
                <Button size="lg" className="bg-white px-8 text-slate-900 transition-all duration-300 hover:scale-[1.05] hover:bg-slate-100">Get Started Today <ArrowRight size={18} /></Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
