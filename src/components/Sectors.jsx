import { GraduationCap, School, HeartPulse, HandHeart, Hotel, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading";

const sectors = [
  [GraduationCap, "Universities & colleges"],
  [School, "Schools & education trusts"],
  [HeartPulse, "Hospitals & healthcare"],
  [HandHeart, "NGOs & nonprofits"],
  [Hotel, "Hospitality & services"],
  [BriefcaseBusiness, "Employers & digital businesses"]
];

export default function Sectors() {
  return (
    <section id="sectors" className="section-light section-padding">
      <div className="site-container">
        <SectionHeading eyebrow="WHO WE SUPPORT" title="BUILT AROUND YOUR BUSINESS CONTEXT."
          description="Different organisations handle personal data in different ways. We shape our advice around your people, processes, systems and responsibilities." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(([Icon, title], index) => (
            <article key={title} className="sector-card">
              <span className="sector-icon"><Icon size={25} strokeWidth={1.8} /></span>
              <div>
                <p className="text-xs font-bold tracking-widest text-tutelis-violet">0{index + 1}</p>
                <h3 className="mt-1 font-heading text-xl font-semibold uppercase text-tutelis-navy">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
