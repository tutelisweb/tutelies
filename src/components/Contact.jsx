import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-navy section-padding">
      <div className="site-container">
        <div className="contact-panel">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-eyebrow text-tutelis-teal">
                START A CONVERSATION
              </p>
              <h2 className="section-title mt-4 text-white">
                LET’S UNDERSTAND WHAT MATTERS TO YOUR ORGANISATION.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                Tell us about your security, privacy or DPDP readiness
                challenge. We can discuss the appropriate starting scope and
                next steps.
              </p>
            </div>
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=advisory@tutelis.in&su=Enquiry%20for%20Tutelis"
  target="_blank"
  rel="noopener noreferrer"
  className="button-primary"
>
  Email our team <ArrowRight size={17} />
</a>
          </div>
          <div className="mt-12 grid gap-5 border-t border-white/20 pt-7 text-sm text-slate-100 sm:grid-cols-3">
            <a
              href="mailto:advisory@tutelis.in"
              className="flex items-center gap-3 hover:text-tutelis-teal"
            >
              <Mail size={18} className="text-tutelis-teal" />{" "}
              advisory@tutelis.in
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={18} className="text-tutelis-teal" /> Hyderabad,
              India
            </span>
            <a
              href="https://www.tutelis.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-tutelis-teal"
            >
              <Globe size={18} className="text-tutelis-teal" /> www.tutelis.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
