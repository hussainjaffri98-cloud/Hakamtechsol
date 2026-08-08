import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  tag: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "The privacy laws & compliance we build to",
    tag: "GDPR • CCPA • Consent by Design",
    answer: "We treat privacy and data protection as core architectural design constraints, not a disclaimer. Data collection is minimized, consent is explicit, and user rights, access, deletion, and portability are built directly into the database schema from day one."
  },
  {
    question: "The security standards we deliver on",
    tag: "SOC2 • ISO 27001 • Bank-Grade Encryption",
    answer: "Every software build includes sub-second encrypted database connections, role-based access control (RBAC), automated vulnerability scanning, and end-to-end TLS encryption across all web and mobile API endpoints."
  },
  {
    question: "How long does a custom software or app development project take?",
    tag: "Agile Sprints • 6-10 Weeks Average",
    answer: "Development timelines depend on project scope. Typical MVPs and mobile apps are delivered within 6 to 10 weeks, while enterprise ERPs or healthcare systems take 3 to 4 months. We deliver live bi-weekly sprint demos."
  },
  {
    question: "100% Intellectual Property (IP) & Source Code Rights",
    tag: "Full Code Ownership • NDA Protected",
    answer: "We sign strict Non-Disclosure Agreements (NDA) prior to technical discovery. Upon completion, 100% of the source code, design assets, database schemas, and intellectual property rights are fully transferred to your company."
  },
  {
    question: "Post-launch 24/7 maintenance and SLA support",
    tag: "24/7 SLA • Zero-Downtime Releases",
    answer: "We provide dedicated post-launch support, server monitoring, zero-downtime CI/CD deployment pipelines, and continuous feature scaling so your platform runs smoothly without interruption."
  }
];

interface FaqSectionProps {
  title?: string;
  highlightText?: string;
  subtitle?: string;
  faqs?: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = "How We Build Under",
  highlightText = "Regulation",
  subtitle = "Compliance is an architecture decision we make in the first sprint, not a checklist we run before launch. Here's how that works across every layer of your build.",
  faqs = defaultFaqs,
}) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1320] text-white border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {title} <span className="text-sky-400">{highlightText}</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Right Column Accordion Items (Unified Blue & White Design!) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-lg ${
                    isOpen
                      ? "bg-[#0f6cbd] text-white p-6 sm:p-7 shadow-blue-500/20"
                      : "bg-[#f4f4f6] text-slate-900 hover:bg-white p-5 sm:p-6"
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`text-base sm:text-lg font-bold leading-snug ${
                        isOpen ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Circular +/- Button */}
                    <button
                      type="button"
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-white text-[#0f6cbd]"
                          : "bg-white text-slate-800 shadow-sm"
                      }`}
                      aria-label={isOpen ? "Collapse FAQ" : "Expand FAQ"}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                  </div>

                  {/* Expanded Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="space-y-3 pt-4"
                      >
                        {/* Sub-tag pill */}
                        <div className="text-[11px] font-extrabold uppercase tracking-widest text-sky-100 opacity-90">
                          {faq.tag}
                        </div>

                        {/* Answer text */}
                        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
