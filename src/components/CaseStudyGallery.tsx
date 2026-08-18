import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projectsData";

interface CaseStudyGalleryProps {
  project: Project;
}

export const CaseStudyGallery = ({ project }: CaseStudyGalleryProps) => {
  const images = project.galleryImages?.length
    ? project.galleryImages
    : project.visualImages
      ? [{ src: project.visualImages.detail ?? project.visualImages.card, alt: `${project.title} project showcase` }]
      : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => setActiveIndex(0), [project.id]);

  if (!images.length) return null;

  const goTo = (index: number) => setActiveIndex((index + images.length) % images.length);
  const activeImage = images[activeIndex];

  return (
    <div className="space-y-4">
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-md sm:h-[420px] md:h-[500px]">
        <img src={activeImage.src} alt={activeImage.alt} className="h-full w-full rounded-2xl object-contain" />
        {images.length > 1 && <>
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous project screen" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-2 text-white shadow-lg transition hover:bg-[#0f6cbd]"><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next project screen" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-2 text-white shadow-lg transition hover:bg-[#0f6cbd]"><ChevronRight size={20} /></button>
        </>}
      </div>
      {images.length > 1 && <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((image, index) => <button key={image.src} type="button" onClick={() => goTo(index)} aria-label={`View ${image.alt}`} className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 p-1 transition sm:h-20 sm:w-20 ${index === activeIndex ? "border-[#0f6cbd]" : "border-slate-200 hover:border-sky-300"}`}><img src={image.src} alt="" className="h-full w-full rounded-lg object-cover" /></button>)}
      </div>}
    </div>
  );
};
