import { useState } from "react";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  { id: "p1", title: "Sustainable Concrete", summary: "LCA on recycled PET in concrete", tech: ["OpenLCA", "Sustainability"] },
  { id: "p2", title: "EV Battery Management", summary: "Smart monitoring system for EVs", tech: ["IoT", "Embedded"] }
];

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-accent mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.id} className="card p-5 rounded-xl hover:shadow-lg transition cursor-pointer" onClick={() => setOpen(p.id)}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800/60">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        {open && <ProjectModal project={PROJECTS.find((x) => x.id === open)} onClose={() => setOpen(null)} />}
      </div>
    </section>
  );
}
