import { Code2 } from "lucide-react";
import { TeamMember } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => (
  <article className="relative grid grid-cols-1 items-center gap-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg sm:grid-cols-[180px_1fr] sm:gap-9 sm:p-8">
    <div className="mx-auto aspect-square w-40 overflow-hidden rounded-full border-4 border-[#0f6cbd] bg-sky-50 shadow-md sm:w-44">
      <img src={member.image} alt={`${member.name}, ${member.role}`} className="h-full w-full object-cover object-center brightness-[1.03] contrast-[1.04] saturate-[1.03]" />
    </div>
    <div>
      <h2 className="text-2xl font-extrabold leading-tight text-[#0f5c99] sm:text-3xl">{member.name}</h2>
      <p className="text-lg font-medium leading-tight text-[#0f5c99] sm:text-xl">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{member.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {[...member.skills, ...member.technologies].map((item) => (
          <span key={item} className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-bold text-[#0f6cbd] ring-1 ring-inset ring-sky-100">
            <Code2 size={11} /> {item}
          </span>
        ))}
      </div>
    </div>
  </article>
);
