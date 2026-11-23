import { ArrowUp, Mail, Globe } from "lucide-react";

const links = [
  ["Services", "services"],
  ["Sectors", "sectors"],
  ["Our approach", "approach"],
  ["DPDP readiness", "dpdp"],
  ["About", "about"],
  ["Talk to us", "contact"]
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-tutelis-violet text-white">
      <div className="site-container py-9">
        <div className="flex flex-col justify-between gap-7 border-b border-white/25 pb-8 lg:flex-row lg:items-center">
          <button onClick={() => onNavigate("home")} className="w-fit rounded-md bg-white px-2 py-1.5">
            <img src="/assets/tutelis-logo.jpeg" alt="Tutelis Solutions" className="w-[160px]" />
          </button>
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map(([label, id]) => (
              <button key={id} onClick={() => onNavigate(id)} className="text-sm text-white/90 transition hover:text-tutelis-teal">{label}</button>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/90 sm:flex-row sm:items-center">
          <p>Tutelis — Information Security & Privacy Solutions | Your Trusted Guardian</p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:advisory@tutelis.in" className="inline-flex items-center gap-2"><Mail size={14} /> advisory@tutelis.in</a>
            <a href="https://www.tutelis.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Globe size={14} /> www.tutelis.in</a>
            <button onClick={() => onNavigate("home")} className="inline-flex items-center gap-1 font-bold"><ArrowUp size={14} /> Top</button>
          </div>
        </div>
        <p className="mt-5 text-[11px] text-white/75">Hyderabad, India · © {new Date().getFullYear()} Tutelis Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
