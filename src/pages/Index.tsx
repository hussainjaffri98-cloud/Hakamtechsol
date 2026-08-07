// Hakam TechSol Home Page
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code2, Shield, Smartphone, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import LoaderScreen from "@/components/LoaderScreen";
import heroImage from "@/assets/hero-tech.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 250], [0, -40]);
  const imageParallax = useTransform(scrollY, [0, 260], [0, -20]);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      image: webDevImage,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional experiences.",
      image: mobileDevImage,
    },
    {
      icon: Users,
      title: "AI Automation",
      description: "Expert AI Automation developers ready to bring your vision to life.",
      image: freelanceImage,
    },
  ];

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Shield, text: "Secure Solutions" },
    { icon: Star, text: "Quality First" },
    { icon: CheckCircle, text: "24/7 Support" },
  ];

  return (
    <>
      <LoaderScreen />
      <PageTransition>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#f5f9ff_100%)]">
          <Navbar />

          <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
            <motion.div
              style={{ y: heroParallax }}
              className="absolute inset-0 z-0"
            >
              <img
                src={heroImage}
                alt="Technology innovation"
                className="h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.9),rgba(248,250,252,0.65),rgba(248,250,252,0.92))]" />
            </motion.div>

            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div
                animate={{ x: [0, 24, 0], y: [0, -18, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -24, 0], y: [0, 16, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] right-[10%] h-40 w-40 rounded-full bg-sky-500/20 blur-3xl"
              />
            </div>

            <div className="container relative z-10 mx-auto">
              <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={reveal}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="rounded-full border border-cyan-500/20 bg-white/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-sky-700 shadow-sm backdrop-blur"
                >
                  Premium digital experiences
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-7xl"
                >
                  We build bold software that feels as good as it looks.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
                >
                  Hakam TechSol delivers high-impact web, mobile, and automation experiences tailored for ambitious teams.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row"
                >
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-hero-gradient px-8 py-6 text-base text-white shadow-[0_16px_40px_rgba(14,165,233,0.3)] sm:w-auto">
                      Start Your Project <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link to="/services" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full border-slate-300 bg-white/80 px-8 py-6 text-base text-slate-700 sm:w-auto">
                      Explore Services
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-12 flex flex-wrap justify-center gap-6 border-t border-slate-200/70 pt-8"
                >
                  {features.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <Icon size={16} className="text-sky-600" />
                      <span>{text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="container mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-14 max-w-2xl text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">What We Do</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Services designed for modern product teams.
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Each engagement combines design clarity, scalable engineering, and thoughtful launch support.
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3">
                {services.map((service, index) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03, boxShadow: "0 24px 60px -20px rgba(15, 23, 42, 0.25)" }}
                    className="motion-card group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/90 p-0 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.35 }}
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />
                    </div>
                    <div className="p-6">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-hero-gradient shadow-lg"
                      >
                        <service.icon className="text-white" size={22} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                      <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-all hover:gap-3">
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
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Why Choose Us</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                    Technology that helps your product stand out.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    We blend elegant design systems with reliable engineering, ensuring your product feels premium from day one.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Experienced team with a product-first mindset",
                      "Flexible delivery for startups and established teams",
                      "Clear communication and measurable outcomes",
                      "Reliable technical support after launch",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.08, duration: 0.35 }}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm"
                      >
                        <CheckCircle className="text-sky-600" size={20} />
                        <span className="text-slate-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to="/about" className="mt-8 inline-block">
                    <Button className="bg-hero-gradient gap-2 px-6">
                      About Our Company <ArrowRight size={18} />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <motion.div
                    style={{ y: imageParallax }}
                    className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
                  >
                    <img src={webDevImage} alt="Professional workspace" className="h-[420px] w-full rounded-[20px] object-cover lg:h-[500px]" />
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/70 p-4 backdrop-blur">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20">
                          <Zap className="text-sky-400" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-white">100+ products launched</p>
                          <p className="text-sm text-slate-300">Built for ambitious brands and startups</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-[32px] bg-hero-gradient px-6 py-16 text-center text-white shadow-[0_24px_80px_rgba(14,165,233,0.25)] sm:px-10 lg:px-16"
              >
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Ready to turn your next idea into a standout experience?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
                  Let’s shape a product experience that feels polished, fast, and unforgettable.
                </p>
                <Link to="/contact" className="mt-8 inline-block">
                  <Button size="lg" className="bg-white px-8 text-slate-900 hover:bg-slate-100">
                    Get Started Today <ArrowRight size={18} />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default Index;
