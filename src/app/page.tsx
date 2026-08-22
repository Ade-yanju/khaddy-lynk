import Link from "next/link";

const services = ["Nursing and healthcare staffing", "Care and support workers", "Mental health and social care services", "Healthcare recruitment and placement"];

export default function Home() {
  return <>
    <section className="bg-[#123f49] text-white">
      <div className="container grid min-h-[620px] overflow-hidden lg:grid-cols-[1fr_.9fr]">
        <div className="flex flex-col justify-center px-6 py-20 lg:px-12">
          <p className="eyebrow text-[#f3b29f]">Safe-Lynk Nursing and Care Agency</p>
          <h1 className="display mt-5 max-w-2xl text-5xl leading-[1.06] sm:text-6xl">Healthcare Recruitment. Reliable People. The Right Fit.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#e0ece9]">Safe-Lynk Nursing and Care Agency helps healthcare organisations find suitable, reliable and experienced healthcare professionals to meet their staffing needs. We also help nurses, healthcare assistants, mental health support workers and other healthcare professionals find suitable employment opportunities that match their skills, experience and career goals.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link className="btn btn-primary" href="/for-employers">Request Staff</Link><Link className="btn border border-white text-white hover:bg-white hover:text-[#123f49]" href="/apply">Find a Job</Link></div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-0"><img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85" alt="Healthcare professional at work" className="h-full w-full object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#123f49] via-[#123f49]/45 to-transparent p-7"><p className="max-w-sm text-lg font-semibold leading-7 text-white">Our approach is simple: understand what is needed, find the right person and provide a professional service from start to finish.</p></div></div>
      </div>
    </section>
    <section className="section"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Who we are</p><h2 className="display mt-3 text-4xl">A professional service, centred around people&apos;s needs.</h2></div><div className="space-y-5 text-lg leading-8"><p>Safe-Lynk Ltd is a UK-based company with a focus on healthcare recruitment and care-related services. Safe-Lynk Ltd was incorporated in January 2017 and is currently registered as an active company.</p><p>Safe-Lynk Nursing and Care Agency is committed to connecting healthcare and care organisations with reliable, suitably qualified and compassionate professionals. We aim to provide a responsive and professional staffing service while maintaining high standards of care, safeguarding, confidentiality and respect for every individual.</p></div></div></section>
    <section className="section bg-white"><div className="container"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">What we do</p><h2 className="display mt-3 text-4xl">Supporting the right introductions.</h2></div><Link className="font-bold text-[#b8533e]" href="/services">Explore our services →</Link></div><div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[#d9e2df] bg-[#d9e2df] sm:grid-cols-2 lg:grid-cols-4">{services.map((service, index)=><div className="bg-white p-7" key={service}><span className="text-sm font-bold text-[#d2664d]">0{index + 1}</span><h3 className="mt-10 font-bold text-[#164c57]">{service}</h3></div>)}</div></div></section>
    <section className="section"><div className="container grid overflow-hidden rounded-2xl bg-[#e4efed] md:grid-cols-[.9fr_1.1fr]"><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professionals in conversation" className="h-72 w-full object-cover md:h-full"/><div className="p-8 md:p-12"><p className="eyebrow">Why Safe-Lynk?</p><h2 className="display mt-3 text-3xl">Built on professionalism, integrity and respect.</h2><p className="mt-5 leading-7">Our focus is on understanding the needs of both our clients and the professionals we work with.</p><Link href="/about" className="btn btn-secondary mt-7">About us</Link></div></div></section>
  </>;
}
