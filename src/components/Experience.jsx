// src/components/Experience.jsx
export default function Experience() {
  const ITEMS = [
    { title: "Teaching Assistant", place: "IIT Hyderabad", period: "Jun 2025 - Present", desc: "TA for Sustainable Engineering courses." },
    { title: "Intern - Signal & Telecom", place: "N.E. Railway", period: "Jun 2023 - Jul 2023", desc: "Research in signalling principles." },
    { title: "Team Lead - Final Year Project", place: "MMMUT", period: "Aug 2023 - May 2024", desc: "Led EV battery management project." },
    { title: "Captain - Football Team", place: "MMMUT", period: "Aug 2022 - May 2024", desc: "Team leadership & organization." }
  ];

  return (
    <section id="experience" className="pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-accent mb-6">Experience & Roles</h2>

        <div className="space-y-4">
          {ITEMS.map((it, idx) => (
            <div key={idx} className="card p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium text-slate-100">{it.title}</h3>
                <p className="text-sm text-slate-300">{it.place}</p>
                <p className="text-sm text-slate-400 mt-1">{it.desc}</p>
              </div>
              <div className="text-sm text-slate-400 mt-3 md:mt-0">{it.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
