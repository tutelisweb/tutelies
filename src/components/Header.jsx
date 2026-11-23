import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navItems = [
  ["Services", "services"],
  ["Sectors", "sectors"],
  ["Our approach", "approach"],
  ["DPDP readiness", "dpdp"],
  ["About", "about"]
];

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-tutelis-navy/95 backdrop-blur-md">
      <div className="site-container flex h-[82px] items-center justify-between gap-5">
        <button onClick={() => navigate("home")} aria-label="Tutelis home" className="shrink-0 rounded-md bg-white px-2 py-1.5">
          <img src="/assets/tutelis-logo.jpeg" alt="Tutelis Solutions — Your Security Compliance Partner" className="h-auto w-[154px] sm:w-[174px]" />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => navigate(id)} className="nav-link">
              {label}
            </button>
          ))}
          <button onClick={() => navigate("contact")} className="button-secondary">
            Talk to us <ArrowRight size={15} />
          </button>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/25 text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-tutelis-navy px-5 py-4 lg:hidden">
          <div className="site-container flex flex-col">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => navigate(id)} className="mobile-nav-link">{label}</button>
            ))}
            <button onClick={() => navigate("contact")} className="button-primary mt-4">
              Talk to us <ArrowRight size={16} />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
