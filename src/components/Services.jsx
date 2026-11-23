import { ShieldCheck, LockKeyhole, ClipboardCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Information security",
    text: "Security governance, identity and access, vulnerability programmes, cloud and SaaS controls, incident readiness and resilience.",
    items: ["Security governance", "Identity & access", "Cloud & SaaS controls"]
  },
  {
    icon: LockKeyhole,
    number: "02",
    title: "Privacy & data protection",
    text: "DPDP readiness, data mapping, notices and consent, data-principal rights, retention, children’s data and processor oversight.",
    items: ["DPDP readiness", "Data mapping", "Consent & rights"]
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Governance & assurance",
    text: "Risk and control assessments, vendor assurance, audit evidence, management reporting, and ISO and SOC 2 readiness support.",
    items: ["Risk assessments", "Vendor assurance", "Audit evidence"]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-light section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="OUR SERVICE PILLARS"
          title="SECURITY, PRIVACY AND ASSURANCE — WORKING TOGETHER."
          description="A connected view of your information risks, obligations and controls. Practical support shaped around your organisation and the way it works."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(({ icon: Icon, number, title, text, items }) => (
            <article key={title} className="service-card">
              <div className="flex items-start justify-between">
                <span className="service-icon"><Icon size={25} strokeWidth={1.8} /></span>
                <span className="font-heading text-4xl font-bold text-tutelis-violet/20">{number}</span>
              </div>
              <h3 className="mt-7 font-heading text-2xl font-bold uppercase text-tutelis-navy">{title}</h3>
              <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-600">{text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map(item => <span key={item} className="service-chip">{item}</span>)}
              </div>
              {/* <div className="mt-7 border-t border-slate-200 pt-5 text-xs font-bold uppercase tracking-wider text-tutelis-violet">
                Our capabilities <ArrowUpRight size={15} className="ml-1 inline" />
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
