export default function Footer() {
  return (
    <footer className="mt-12 bg-[color:var(--surface)] border-t border-slate-800 py-6">
      <div className="mx-auto max-w-6xl px-6 text-center text-slate-400">
        © {new Date().getFullYear()} Priya • Built with React + Tailwind
      </div>
    </footer>
  );
}
