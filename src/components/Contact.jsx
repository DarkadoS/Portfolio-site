export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message recorded locally (connect a backend for real messages).");
    e.target.reset();
  };

  return (
    <section id="contact" className="pt-12 pb-12">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-2xl font-semibold text-accent mb-6">Contact</h2>
        <div className="card p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-slate-900/60 border border-slate-800" required />
            <input type="email" placeholder="Email" className="p-3 rounded bg-slate-900/60 border border-slate-800" required />
            <textarea rows="5" placeholder="Message" className="p-3 rounded bg-slate-900/60 border border-slate-800" required></textarea>
            <button type="submit" className="px-5 py-2 rounded bg-accent text-black mt-3">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
