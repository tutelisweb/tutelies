import { ArrowRight, ShieldCheck, LockKeyhole, ClipboardCheck, CheckCircle2 } from "lucide-react";

const promiseItems = [
  { icon: ShieldCheck, title: "Know where you stand", text: "Understand your obligations, exposure and current controls." },
  { icon: LockKeyhole, title: "Control what matters", text: "Prioritise safeguards that fit your organisation." },
  { icon: ClipboardCheck, title: "Prove what works", text: "Build clear evidence and confidence over time." }
];

export default function Hero({ onNavigate }) {
  return (
    <>
      <section id="home" className="hero-section relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="brand-grid" />
        <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="max-w-[650px]">
            <div className="eyebrow mb-5"><span className="eyebrow-line" /> YOUR SECURITY COMPLIANCE PARTNER</div>
            <h1 className="display-title max-w-[680px]">
              FROM REQUIREMENTS<br />
              TO <span className="text-tutelis-teal">EFFECTIVE CONTROLS.</span>
            </h1>
            <p className="mt-7 max-w-[590px] text-base leading-8 text-slate-200 sm:text-lg">
              Practical, senior-led information security, privacy and governance advisory. We help organisations understand their risks, strengthen controls and show progress with evidence — within their existing landscape.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => onNavigate("services")} className="button-primary">
                Explore our services <ArrowRight size={17} />
              </button>
              <button onClick={() => onNavigate("contact")} className="button-outline">
                Talk to our team <ArrowRight size={16} />
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium text-slate-200">
              {["Senior-led delivery", "Proportionate solutions", "Evidence-led assurance"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-tutelis-teal" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="promise-panel">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-heading text-sm font-semibold uppercase tracking-[.16em] text-tutelis-teal">THE TUTELIS PROMISE</p>
                  <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl">Smarter security.<br />Stronger trust.</h2>
                </div>
                <div className="shield-emblem"><ShieldCheck size={42} strokeWidth={1.5} /></div>
              </div>
              <div className="space-y-3">
                {promiseItems.map(({ icon: Icon, title, text }, index) => (
                  <div key={title} className="promise-row">
                    <span className="promise-number">0{index + 1}</span>
                    <span className="promise-icon"><Icon size={22} strokeWidth={1.8} /></span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-white">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-200 sm:text-sm">{text}</p>
                    </div>
                    <ArrowRight className="hidden shrink-0 text-tutelis-teal sm:block" size={18} />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-full border border-tutelis-teal/80 px-4 py-2.5 text-center text-[10px] font-bold tracking-[.18em] text-white sm:text-xs">
                <ShieldCheck size={15} className="text-tutelis-teal" /> KNOW <span className="text-tutelis-teal">·</span> CONTROL <span className="text-tutelis-teal">·</span> PROVE
              </div>
            </div>
            <div className="absolute -right-3 -top-4 -z-0 h-20 w-20 rounded-full border border-tutelis-violet/50" />
            <div className="absolute -bottom-5 -left-5 -z-0 h-16 w-16 rounded-full border border-tutelis-teal/30" />
          </div>
        </div>
      </section>

      <div className="tagline-band">
        <div className="site-container flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-heading text-lg font-semibold uppercase tracking-[.08em] text-white">Security you can trust. Privacy you can prove. Compliance that lasts.</p>
          <span className="tagline-pill"><ShieldCheck size={14} /> SMARTER SECURITY. STRONGER TRUST.</span>
        </div>
      </div>
    </>
  );
}
