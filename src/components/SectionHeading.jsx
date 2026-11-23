export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`section-eyebrow ${light ? "text-tutelis-teal" : "text-tutelis-violet"}`}>{eyebrow}</p>
      <h2 className={`section-title ${light ? "text-white" : "text-tutelis-navy"}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-slate-200" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}
