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
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const isServicesMenuOpen = activeDropdown === "services";

  useMotionValueEvent(scrollY, "change", (value) => setIsScrolled(value > 24));

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isServicesMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isServicesMenuOpen]);

  useEffect(() => {
    if (!isServicesMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsServicesHovered(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesMenuOpen]);

  useEffect(() => {
    if (isServicesHovered) {
      setActiveDropdown("services");
      return;
    }

    if (isServicesMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isServicesHovered, isServicesMenuOpen]);

  return (
    <>
      <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "border-gray-200 bg-white/90 backdrop-blur-md" : "border-gray-100 bg-white"
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
                  location.pathname === link.path ? "text-sky-600" : "text-slate-700 hover:text-sky-600"
                }`}
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-sky-600">
                Services
                <ChevronDown size={16} />
              </button>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("portfolio")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-sky-600">
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
                    className="absolute left-0 top-full mt-4 w-[360px] rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
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
                              <p className="text-sm font-semibold text-slate-900">{project.name}</p>
                              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.category}</p>
                            </div>
                          </div>
                          <ArrowRight size={16} className="text-slate-500" />
                        </motion.a>
                      ))}
                    </div>
                    <div className="mt-4 text-right">
                      <a href="/services" className="text-sm font-medium text-sky-600 transition-colors hover:text-sky-700">
                        View All Projects
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-sky-600">
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-[#0f6cbd] px-6 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-700">
                Book a Call
              </Button>
            </Link>
          </div>

          <button className="rounded-full border border-gray-200 p-2 text-slate-700 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
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
            className="fixed inset-y-0 right-0 top-16 w-[88vw] max-w-sm border-l border-gray-200 bg-white p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                link.name === "Services" ? (
                  <button
                    key={link.path}
                    type="button"
                    className="rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown("services");
                    }}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link key={link.path} to={link.path} className="rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#0f6cbd] text-white hover:bg-blue-700">Book a Call</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isServicesMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/20 backdrop-blur-[2px]"
            onClick={() => setActiveDropdown(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mx-auto mt-20 w-[min(92vw,1400px)] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.16)]"
              onClick={(event) => event.stopPropagation()}
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <div className="flex justify-end border-b border-slate-200 px-6 py-4 lg:px-8">
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition-colors duration-300 hover:text-sky-600"
                  onClick={() => {
                    setActiveDropdown(null);
                    setIsServicesHovered(false);
                  }}
                  aria-label="Close services menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_2.2fr]">
                <div className="border-b border-slate-200 bg-slate-50 p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Build to win</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                    Launch premium digital products with clarity and momentum.
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                    From product strategy to delivery, we create modern software experiences that help ambitious teams move faster and grow stronger.
                  </p>
                  <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                        <ArrowRight size={20} />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900">Hakam TechSol</p>
                        <p className="text-sm text-slate-600">Modern software, built for ambitious teams.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-0 p-6 sm:p-8 lg:grid-cols-3 lg:gap-6 lg:p-10">
                  {megaMenuGroups.map((group, index) => (
                    <div key={group.title} className={`${index < megaMenuGroups.length - 1 ? "lg:border-r lg:border-slate-200 lg:pr-6" : ""}`}>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900">{group.title}</h4>
                      <ul className="mt-4 space-y-2">
                        {group.items.map((item) => (
                          <li key={item}>
                            <a
                              href="/services"
                              className="block rounded-xl px-2 py-2 text-sm leading-7 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-sky-600"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsServicesHovered(false);
                              }}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white px-6 py-5 lg:px-8">
                <div className="flex justify-end">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-600 transition-all duration-300 hover:scale-[1.02] hover:bg-sky-100"
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsServicesHovered(false);
                    }}
                  >
                    View All Services <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
