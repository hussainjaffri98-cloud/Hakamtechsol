import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projectsData";
import { ProjectMockupFrame } from "./ProjectMockupFrame";
import { PlatformBadges } from "./PlatformBadges";

interface ProjectSliderProps {
  projects: Project[];
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const INTERVAL = 3000;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, INTERVAL);
  }, [projects.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleManualNav = (index: number) => {
    goTo(index);
    startTimer();
  };

  const handlePrev = () => {
    goTo((current - 1 + projects.length) % projects.length);
    startTimer();
  };

  const handleNext = () => {
    goTo((current + 1) % projects.length);
    startTimer();
  };

  const project = projects[current];

  return (
    <div className="relative w-full">
      {/* Main Slide Card */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 gap-0 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden lg:grid-cols-2">
          {/* Left: Project Visual */}
          <div className="flex items-center justify-center bg-slate-50 p-4 min-h-[220px] sm:min-h-[280px]">
            <ProjectMockupFrame project={project} variant="card" />
          </div>

          {/* Right: Project Info */}
          <div className="flex flex-col justify-between p-4 sm:p-6">
            {/* Badge & Counter */}
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#0f6cbd] text-[11px] font-extrabold uppercase tracking-wide">
                {project.badge}
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                {current + 1} / {projects.length}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 flex-1">
              <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">{project.subtitle}</p>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {project.fullDescription}
              </p>

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold border border-slate-200">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>
              )}

              {/* Platforms */}
              <div className="pt-0.5">
                <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                  Available on
                </p>
                <PlatformBadges platforms={project.platforms} size="compact" />
              </div>
            </div>

            {/* Key Metrics */}
            {project.metrics && project.metrics.length >= 2 && (
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-3 border-t border-slate-100">
                {project.metrics.slice(0, 2).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg bg-slate-50 border border-slate-100 p-2 text-center"
                  >
                    <div className="text-sm font-extrabold text-slate-900">{metric.value}</div>
                    <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-3">
              <Link
                to={`/portfolio/${project.id}`}
                className="inline-flex items-center gap-2 w-full justify-center py-2.5 px-5 rounded-full border-2 border-[#0f6cbd] bg-white hover:bg-[#0f6cbd] text-[#0f6cbd] hover:text-white font-extrabold text-xs transition-all duration-200 shadow-sm uppercase tracking-wider"
              >
                View Case Study
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
