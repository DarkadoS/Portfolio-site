const SKILLS = ["Python", "R", "Java", "SQL", "Pandas", "NumPy", "Scikit-Learn", "Optimization", "Power BI", "HTML/CSS/JS", "Git & GitHub"];

export default function Skills() {
  return (
    <section id="skills" className="pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-accent mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS.map((s) => (
            <div key={s} className="card p-4 rounded-lg flex items-center justify-center text-sm text-slate-100">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
