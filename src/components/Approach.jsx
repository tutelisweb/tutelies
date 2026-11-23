import { Compass, SearchCheck, Wrench, Activity, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  [Compass, "01", "Scope", "Agree entities, processes, data flows, stakeholders, requirements and evidence boundaries."],
  [SearchCheck, "02", "Assess", "Review controls and sample evidence; identify elemental gaps, risk priorities and dependencies."],
  [Wrench, "03", "Remediate", "Work with owners on proportionate changes to policies, workflows, contracts and safeguards."],
  [Activity, "04", "Sustain", "Validate fixes, maintain evidence, monitor exceptions and support leadership oversight."]
];

const outputs = ["Baseline and gap register", "Prioritised roadmap", "Agreed owners", "Validation evidence", "Management reporting"];

export default function Approach() {
  return (
    <section id="approach" className="section-navy section-padding">
      <div className="site-container">
        <SectionHeading light eyebrow="OUR ENGAGEMENT APPROACH" title="A CLEAR PATH FROM ASSESSMENT TO ACTION."
          description="A four-step engagement that helps your organisation understand its current position, address priorities and sustain progress." />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([Icon, number, title, text]) => (
            <article key={title} className="approach-card">
              <div className="flex items-center justify-between">
                <span className="approach-icon"><Icon size={23} /></span>
                <span className="font-heading text-4xl font-bold text-white/20">{number}</span>
              </div>
              <h3 className="mt-7 font-heading text-2xl font-bold uppercase text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-white/15 bg-tutelis-violet p-7 sm:p-9">
          <p className="font-heading text-lg font-semibold uppercase tracking-wider text-white">TYPICAL ENGAGEMENT OUTPUTS</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {outputs.map(item => (
              <span key={item} className="flex items-start gap-2 text-sm font-medium text-white">
                <Check size={17} className="mt-0.5 shrink-0 text-tutelis-teal" /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
