import { ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const leaders = [
  ["SD", "Sri Duggirala", "Advisor", "Cybersecurity, Technology Risk & Governance"],
  ["AS", "CA Abhijit Sharma", "Co-founder", "Finance, Risk & Governance"],
  ["SS", "Shalini Sahai", "CTO", "Technology & Operations"]
];

export default function About() {
  return (
    <section id="about" className="section-light section-padding">
      <div className="site-container grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow="ABOUT TUTELIS" title="SENIOR OVERSIGHT. MULTIDISCIPLINARY PERSPECTIVE."
            description="Tutelis combines cybersecurity, technology risk, privacy, legal, finance, governance, quality and assurance expertise — with recommendations tailored to the organisation, not a generic product stack." />
          <div className="mt-9 rounded-2xl bg-tutelis-navy p-7 text-white sm:p-8">
            <ShieldCheck size={30} className="text-tutelis-teal" />
            <p className="mt-5 font-heading text-2xl font-semibold uppercase leading-relaxed">Security you can trust. Privacy you can prove. Compliance that lasts.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow text-tutelis-violet">LEADERSHIP</p>
          <div className="mt-4 divide-y divide-slate-200">
            {leaders.map(([initials, name, role, expertise]) => (
              <article key={name} className="flex items-center gap-5 py-6">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-tutelis-violet font-heading text-lg font-bold text-white">{initials}</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold uppercase text-tutelis-navy">{name}</h3>
                  <p className="mt-1 text-sm font-bold text-tutelis-violet">{role}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{expertise}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Supported by specialists in legal and privacy, GRC, technology operations, audit and automation, as engagement needs require.
          </p>
        </div>
      </div>
    </section>
  );
}
