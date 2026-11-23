import { FileSearch, FileCheck2, Cloud, Users, ClipboardList, Siren, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  [FileSearch, "DPDP readiness & gap assessment", "Applicability review, data journeys, lawful processing, control gaps, evidence review and a decision-ready remediation roadmap."],
  [FileCheck2, "Consent, notices & individual rights", "Design practical notice and consent journeys, withdrawal, grievance, correction and erasure processes, where applicable."],
  [Cloud, "Cybersecurity & cloud governance", "Review identity, access, data protection, vulnerability management, supplier controls, monitoring and response practices."],
  [Users, "Vendor & processor assurance", "Clarify accountability across outsourcing, contracts, cloud services, processors and evidence of safeguards in operation."],
  [ClipboardList, "ISO & SOC 2 readiness", "Support control design, implementation and evidence for ISO 27001, ISO 27701, ISO 20000 and SOC 2 engagements."],
  [Siren, "Incident & breach readiness", "Response processes, reporting pathways, practical playbooks, coordination, testing and lessons learned."]
];

export default function DetailedServices({ onNavigate }) {
  return (
    <section className="section-navy section-padding">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading light eyebrow="DETAILED SERVICES" title="PRACTICAL SUPPORT FOR YOUR NEXT STEP."
            description="From an initial readiness review to sustained control improvement, we help turn requirements into work your teams can own." />
          <button onClick={() => onNavigate("contact")} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-tutelis-teal hover:text-tutelis-teal">
            Discuss your needs <ArrowRight size={16} />
          </button>
        </div>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {services.map(([Icon, title, text], index) => (
            <article key={title} className="detail-service">
              <span className="detail-service-icon"><Icon size={22} /></span>
              <div>
                <p className="text-xs font-bold tracking-[.15em] text-tutelis-teal">0{index + 1} / SERVICE</p>
                <h3 className="mt-2 font-heading text-xl font-semibold uppercase text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
