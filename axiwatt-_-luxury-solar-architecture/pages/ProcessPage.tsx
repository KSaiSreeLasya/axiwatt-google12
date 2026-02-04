
import React from 'react';

const steps = [
  { step: "01", title: "Discovery & Private Consultation", desc: "Understanding the unique energy profile and architectural ambitions of the estate." },
  { step: "02", title: "Architectural & Energy Modeling", desc: "Full BIM integration to simulate aesthetic and technical performance before execution." },
  { step: "03", title: "Regulatory & Execution", desc: "Managing GHMC/TERC approvals and surgical on-site integration by internal teams." },
  { step: "04", title: "Commissioning & Long-Term Care", desc: "24/7 monitoring and 'invisible' AMC protocols for lifetime resilience." }
];

export const ProcessPage: React.FC = () => {
  return (
    <div className="bg-[#faf9f6] py-24">
      <div className="container mx-auto px-6">
        <header className="mb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8">The Concierge Delivery</h1>
          <p className="text-neutral-500 text-lg font-light max-w-2xl mx-auto">
            Axiwatt eliminates project fragmentation by managing the entire lifecycle of your energy estate.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          {steps.map((s, idx) => (
            <div key={idx} className="group relative flex gap-12 pb-24 border-l border-neutral-100 pl-12 last:pb-0">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border border-neutral-200 group-hover:border-amber-500 transition-colors" />
              <div>
                <span className="text-5xl font-serif text-neutral-200 group-hover:text-amber-100 transition-colors leading-none mb-4 block">
                  {s.step}
                </span>
                <h3 className="text-2xl font-serif text-neutral-900 mb-4">{s.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed max-w-xl">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
