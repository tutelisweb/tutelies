import { ArrowRight, CheckCircle2, Database, FileText, Users, ShieldCheck, Bell, Route } from "lucide-react";

const covered = [
  [Database, "Data inventory and journeys"],
  [FileText, "Notices, consent and individual rights"],
  [Users, "Children’s data, retention and transfers where applicable"],
  [ShieldCheck, "Vendors and safeguards"],
  [Bell, "Incident readiness"],
  [Route, "Roadmap and evidence expectations"]
];

export default function Dpdp({ onNavigate }) {
  return (
    <section id="dpdp" className="dpdp-section section-padding">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <div>
          <p className="section-eyebrow text-tutelis-teal">FEATURED SERVICE / DPDP</p>
          <h2 className="section-title mt-4 text-white">DPDP READINESS THAT GOES BEYOND A CHECKLIST.</h2>
          <p className="mt-6 text-base leading-8 text-slate-100">
            Privacy obligations reach across admissions, HR, patient journeys, learning platforms, vendor systems and day-to-day operations. We help your teams see the complete picture.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-100">
            Start with a focused review of one entity or priority data journey. Understand what is already working, what requires attention and who should own the next action.
          </p>
          <button onClick={() => onNavigate("contact")} className="button-primary mt-8">
            Discuss your DPDP scope <ArrowRight size={17} />
          </button>
          <p className="mt-5 max-w-xl text-xs leading-6 text-slate-300">
            Engagements are scoped readiness and implementation support; not a certification or legal opinion.
          </p>
        </div>
        <div className="dpdp-panel">
          <div className="flex items-center gap-3 border-b border-white/15 pb-5">
            <span className="dpdp-panel-mark"><ShieldCheck size={26} /></span>
            <div>
              <p className="text-xs font-bold tracking-[.16em] text-tutelis-teal">ENGAGEMENT COVERS</p>
              <h3 className="mt-1 font-heading text-2xl font-bold uppercase text-white">A practical readiness view</h3>
            </div>
          </div>
          <div className="mt-6 space-y-5">
            {covered.map(([Icon, label]) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={19} className="mt-0.5 shrink-0 text-tutelis-teal" />
                <span className="text-sm leading-6 text-slate-100">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
