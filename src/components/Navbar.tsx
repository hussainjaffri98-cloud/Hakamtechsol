import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import builtToWinImage from "@/assets/built-to-win-phones.png";

const servicesMegaMenu = [
  {
    category: "Mobile App Development",
    items: ["iOS App Development", "Android App Development", "Cross Platform App Development"],
  },
  {
    category: "Custom Software Development",
    items: ["ERP Solution", "CRM Solution", "CMS Solution"],
  },
  {
    category: "Web Development",
    items: ["Ecommerce Website Development", "Web Portals"],
  },
  {
    category: "Game Development",
    items: ["2D Game Development", "3D Game Development", "Web3 Game Development"],
  },
  {
    category: "Artificial Intelligence",
    items: ["Generative AI", "Natural Language Processing", "AI Agent Development"],
  },
  {
    category: "Cloud Services",
    items: ["Cloud Application Development", "Cloud Migration", "Cloud Support & Maintenance"],
  },
  {
    category: "Staff Augmentation",
    items: ["Hire Android App Developer", "Hire iOS App Developer", "Hire NodeJs Developer"],
  },
  {
    category: "Blockchain Development",
    items: ["Metaverse Development", "NFT Development"],
  },
  {
    category: "Digital Marketing Services",
    items: ["Social Media Marketing", "Search Engine Marketing", "Search Engine Optimization"],
  },
];

const industriesMegaMenu = [
  { title: "Automotive", desc: "Transforming automotive industry with bespoke tech." },
  { title: "Healthcare", desc: "Better, accessible healthcare through tailored tech solutions." },
  { title: "On-Demand", desc: "Elevating on-demand services with innovative tech." },
  { title: "Education", desc: "Enhancing education with new-age EdTech." },
  { title: "Music", desc: "Advancing music industry with digital innovations." },
  { title: "ECommerce", desc: "Driving e-commerce growth with smart tech." },
  { title: "Real Estate", desc: "Innovating real estate with custom tech." },
  { title: "SAAS", desc: "Developing custom solutions for SAAS platforms." },
  { title: "Fintech", desc: "Empowering fintech with specialized tech services." },
  { title: "Logistics", desc: "Optimizing logistics with intelligent tech." },
  { title: "Retail", desc: "Scaling retail businesses through advanced technology." },
];

const portfolioItems = [
  { id: "kls-property-portal", name: "KLS Property Portal", category: "Laravel / PHP" },
  { id: "parking-alert-app", name: "Parking Alert App", category: "FlutterFlow" },
  { id: "players-evaluation-system", name: "Players Evaluation System", category: "SaaS Analytics" },
  { id: "learning-management-system", name: "Learning Management System", category: "EdTech App" },
  { id: "hospital-management-system", name: "Hospital Management System", category: "Healthcare PHP" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | "portfolio" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setIsScrolled(value > 24));

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!activeDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm" : "bg-white border-slate-150"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="HakamTechSol Logo" className="h-9 sm:h-11 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                to="/"
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === "/" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown Button */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    activeDropdown === "services" || location.pathname === "/services"
                      ? "text-[#0f6cbd]"
                      : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Services
                  <ChevronDown size={15} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#0f6cbd]" : ""}`} />
                </button>
              </div>

              {/* Industries Dropdown Button */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    activeDropdown === "industries" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Industries
                  <ChevronDown size={15} className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-[#0f6cbd]" : ""}`} />
                </button>
              </div>

              <Link
                to="/services"
                className="text-sm font-semibold text-slate-800 hover:text-[#0f6cbd] transition-colors"
              >
                Technologies
              </Link>

              <Link
                to="/about"
                className="text-sm font-semibold text-slate-800 hover:text-[#0f6cbd] transition-colors"
              >
                Insights
              </Link>

              {/* Portfolio Link & Hover Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown(null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/portfolio"
                  className={`text-sm font-semibold transition-colors py-2 ${
                    location.pathname.startsWith("/portfolio") ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Portfolio
                </Link>

                <AnimatePresence>
                  {false && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full mt-2 w-[340px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl z-50"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-2">Featured Case Studies</p>
                      <div className="space-y-1">
                        {portfolioItems.map((item) => (
                          <Link
                            key={item.id}
                            to={`/portfolio/${item.id}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between rounded-xl p-2.5 hover:bg-sky-50 transition-colors group"
                          >
                            <div>
                              <div className="text-sm font-bold text-slate-800 group-hover:text-[#0f6cbd]">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.category}</div>
                            </div>
                            <ArrowRight size={14} className="text-slate-400 group-hover:text-[#0f6cbd]" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-right">
                        <Link
                          to="/portfolio"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-[#0f6cbd] hover:underline"
                        >
                          View All Projects →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right GET A QUOTE CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm tracking-wide">
                  GET A QUOTE
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Services Mega Menu Overlay */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="fixed left-0 right-0 top-[4rem] lg:top-[5rem] z-40 bg-white border-b border-slate-200 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="container mx-auto px-6 py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side Highlight Box */}
                <div className="lg:col-span-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Built to Win</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                    </p>
                  </div>
                  
                  {/* Product Visual */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl sm:h-52 lg:h-44">
                      <img
                        src={builtToWinImage}
                        alt="Mobile dashboard and digital wallet applications"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Columns Grid */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                  {servicesMegaMenu.map((group) => (
                    <div key={group.category} className="space-y-2 border-b sm:border-b-0 border-slate-100 pb-4 sm:pb-0">
                      <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
                        {group.category}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-1.5 hover:text-[#0f6cbd] transition-colors group"
                            >
                              <span className="text-slate-400 group-hover:text-[#0f6cbd]">›</span>
                              <span>{item}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industries Mega Menu Overlay */}
      <AnimatePresence>
        {activeDropdown === "industries" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="fixed left-0 right-0 top-[4rem] lg:top-[5rem] z-40 bg-white border-b border-slate-200 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="container mx-auto px-6 py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side Highlight Box */}
                <div className="lg:col-span-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Built to Win</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                    </p>
                  </div>
                  
                  {/* Product Visual */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl sm:h-52 lg:h-44">
                      <img
                        src={builtToWinImage}
                        alt="Mobile dashboard and digital wallet applications"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Grid */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {industriesMegaMenu.map((ind) => (
                    <div key={ind.title} className="space-y-1">
                      <Link
                        to="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-sm font-extrabold text-slate-900 hover:text-[#0f6cbd] transition-colors block"
                      >
                        {ind.title}
                      </Link>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 25 }}
            className="fixed inset-y-0 right-0 top-16 w-[88vw] max-w-sm bg-white border-l border-slate-200 p-6 shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Home
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Services & Mega Menu
              </Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Portfolio & Case Studies
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                About & Insights
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold mt-4 py-3 rounded-full shadow-md">
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
