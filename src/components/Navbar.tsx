import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const megaMenuGroups = [
  {
    title: "Product Engineering",
    items: ["Mobile App Development", "Custom Software Development", "Web Development", "Game Development"],
  },
  {
    title: "Data & AI",
    items: ["Artificial Intelligence", "Cloud Services", "Blockchain Development", "Staff Augmentation"],
  },
  {
    title: "Growth & Marketing",
    items: ["Digital Marketing Services", "Brand Systems", "Product Launches", "Revenue Enablement"],
  },
];

const portfolioItems = [
  { name: "Fintech Mobile App", category: "Mobile App", accent: "from-cyan-400 to-sky-600" },
  { name: "AI Operations Suite", category: "AI", accent: "from-violet-500 to-fuchsia-500" },
  { name: "B2B SaaS Platform", category: "SaaS", accent: "from-emerald-500 to-teal-500" },
  { name: "Growth Analytics Hub", category: "Data", accent: "from-amber-500 to-orange-500" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "portfolio" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setIsScrolled(value > 24));

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "border-white/10 bg-[#0B0F1A]/80 backdrop-blur-md" : "border-white/10 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Hakam TechSol Logo" className="h-10 w-auto" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                Services
                <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 right-0 top-full mt-4 w-full"
                  >
                    <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-slate-800 bg-[#0b1329]/95 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl">
                      <div className="grid gap-8 lg:grid-cols-[1.05fr_1.95fr]">
                        <div className="rounded-[24px] border border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_55%),_linear-gradient(135deg,_#111936,_#0b1329)] p-6">
                          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Build to win</p>
                          <h3 className="mt-3 text-2xl font-semibold text-white">Launch premium digital products with speed and clarity.</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-400">
                            From product strategy to delivery, we craft high-performing platforms with measurable business impact.
                          </p>
                          <div className="mt-6 rounded-[20px] border border-slate-800/80 bg-slate-950/50 p-4">
                            <div className="flex items-center gap-3">
                              <img src={logo} alt="Hakam TechSol logo" className="h-12 w-auto" />
                              <div>
                                <p className="text-sm font-semibold text-white">Hakam TechSol</p>
                                <p className="text-sm text-slate-400">Modern software, built for ambitious teams.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                          {megaMenuGroups.map((group) => (
                            <div key={group.title}>
                              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">{group.title}</h4>
                              <ul className="mt-3 space-y-2">
                                {group.items.map((item) => (
                                  <li key={item}>
                                    <a
                                      href="/services"
                                      className="group flex items-center justify-between rounded-xl border border-transparent px-2 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                                    >
                                      <span>{item}</span>
                                      <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">›</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex justify-end">
                        <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-500/20">
                          View All Services <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("portfolio")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                Portfolio
                <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {activeDropdown === "portfolio" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-4 w-[360px] rounded-2xl border border-white/10 bg-[#0F172A]/95 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-lg"
                  >
                    <div className="grid gap-3">
                      {portfolioItems.map((project) => (
                        <motion.a
                          key={project.name}
                          whileHover={{ scale: 1.01, y: -2 }}
                          href="/contact"
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${project.accent}`} />
                            <div>
                              <p className="text-sm font-semibold text-white">{project.name}</p>
                              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
                            </div>
                          </div>
                          <ArrowRight size={16} className="text-slate-400" />
                        </motion.a>
                      ))}
                    </div>
                    <div className="mt-4 text-right">
                      <a href="/services" className="text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200">
                        View All Projects
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-hero-gradient px-6 text-white shadow-[0_16px_45px_rgba(34,211,238,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_22px_60px_rgba(34,211,238,0.28)]">
                Book a Call
              </Button>
            </Link>
          </div>

          <button className="rounded-full border border-white/10 p-2 text-white lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="fixed inset-y-0 right-0 top-16 w-[88vw] max-w-sm border-l border-white/10 bg-[#0B0F1A]/95 p-6 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-hero-gradient text-white">Book a Call</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
