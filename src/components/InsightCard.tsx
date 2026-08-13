import { ArrowRight, Clock3, CalendarDays } from "lucide-react";
import { Insight } from "@/data/insightsData";

export const InsightCard = ({ insight }: { insight: Insight }) => (
  <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
    <div className="h-52 overflow-hidden">
      <img src={insight.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0f6cbd]">{insight.category}</span>
      <h3 className="mt-4 text-xl font-extrabold leading-snug text-slate-900">{insight.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{insight.description}</p>
      <div className="mt-5 flex items-center gap-3 text-xs font-medium text-slate-500"><span className="inline-flex items-center gap-1"><CalendarDays size={13} />{insight.date}</span><span className="inline-flex items-center gap-1"><Clock3 size={13} />{insight.readTime}</span></div>
      <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0f6cbd] transition-colors hover:text-blue-700">Read More <ArrowRight size={15} /></button>
    </div>
  </article>
);
