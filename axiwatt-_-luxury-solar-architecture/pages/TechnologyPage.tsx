
import React from 'react';

export const TechnologyPage: React.FC = () => {
  const tech = [
    { title: "Solar Modules", detail: "Custom Glass-Glass N-Type cells with minimal degradation over 40 years." },
    { title: "Energy Storage", title2: "LFP / Solid-State", detail: "Safe, high-density residential storage with sub-millisecond grid switching." },
    { title: "EV Charging", detail: "Bi-directional V2H (Vehicle-to-Home) systems for fleet resilience." },
    { title: "Axiwatt OS", detail: "Encrypted, local-first energy management with predictive AI diagnostics." }
  ];

  return (
    <div className="bg-[#fdfcfb] py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-32">
          <h1 className="text-5xl md:text-8xl font-serif text-[#2c2825] mb-10">Engineering Excellence.</h1>
          <p className="text-[#635e5a] text-2xl font-light max-w-4xl leading-relaxed">
            We source and refine world-class hardware systems, engineered for a 40-year legacy in Hyderabad's unique climate conditions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8e4df] border border-[#e8e4df]">
          {tech.map((item, idx) => (
            <div key={idx} className="bg-white p-16 hover:bg-[#f7f5f2] transition-colors duration-500">
              <h3 className="text-[12px] tracking-[0.3em] uppercase font-bold text-[#b9975b] mb-8">{item.title}</h3>
              <h4 className="text-3xl font-serif text-[#2c2825] mb-6">{item.title2 || item.title}</h4>
              <p className="text-[#635e5a] text-lg font-light leading-relaxed mb-10">{item.detail}</p>
              <div className="w-16 h-px bg-[#e8e4df]" />
            </div>
          ))}
        </div>

        <section className="mt-40 p-16 md:p-32 bg-[#2c2825] text-white relative overflow-hidden rounded-sm">
          <div className="max-w-4xl relative z-10">
            <h2 className="text-5xl font-serif mb-10">Digital Command</h2>
            <p className="text-[#dcd7d0] text-xl font-light leading-relaxed mb-16 max-w-2xl">
              The Axiwatt App is a secure portal for global monitoring. Control your estate’s energy profile from anywhere in the world with absolute privacy.
            </p>
            <div className="flex gap-8">
              <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Secure</span>
              </div>
              <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Global</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-[#b9975b] to-transparent pointer-events-none" />
        </section>
      </div>
    </div>
  );
};
