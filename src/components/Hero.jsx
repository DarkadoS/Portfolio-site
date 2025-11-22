// import profile from "../assets/profile.jpg";

// export default function Hero() {
//   return (
//     <section id="home" className="min-h-[80vh] flex items-center">
//       <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-4xl md:text-6xl font-extrabold">
//             Hi, I'm <span className="text-accent">Priya</span>
//           </h1>
//           <p className="mt-4 text-slate-300 max-w-xl">
//             M.Tech Sustainable Engineering • Data Science • Optimization.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-4">
//             <a href="#projects" className="px-5 py-2 rounded-lg bg-accent text-black font-medium shadow">View Projects</a>
//             <a href="/src/assets/resume.pdf" download className="px-5 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-black transition">Download Resume</a>
//           </div>
//         </div>

//         <div className="flex justify-center md:justify-end">
//           <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow card">
//             <img src={profile} alt="Priya" className="object-cover w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="max-w-6xl px-6 text-center flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg mb-6">
          <img src={profile} alt="Priya" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, I’m <span className="text-accent">Priya</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl">
          M.Tech Sustainable Engineering · Data Science · Optimization
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-105 transition">View Projects</a>
          <a href="/src/assets/resume.pdf" download className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-black transition">Download Resume</a>
        </div>

        <div className="mt-6 flex gap-6 text-2xl">
          <a href="https://github.com/darkados" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/priya003" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
