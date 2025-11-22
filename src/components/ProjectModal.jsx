export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="max-w-lg w-full card rounded-xl p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button onClick={onClose}>✕</button>
        </div>
        <p className="mt-4">{project.summary}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-slate-800/60 rounded text-xs">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
