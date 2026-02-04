
import React from 'react';

interface PartnersPageProps {
  onOpenConsultation: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#faf9f6] py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-24">
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8">Partner with Axiwatt</h1>
            <p className="text-neutral-500 text-xl font-light leading-relaxed">
              We provide architects and developers with the tools to co-create sustainable landmarks without aesthetic compromise.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-white p-12 shadow-sm border border-neutral-100">
              <h3 className="text-lg font-serif mb-4">Tools & Modeling</h3>
              <p className="text-neutral-500 text-sm font-light mb-6">Access our BIM/Revit libraries and energy simulation plugins for early-stage integration.</p>
              <ul className="text-[10px] tracking-[0.1em] uppercase text-amber-700 space-y-2">
                <li>• BIM Objects (LOD 300+)</li>
                <li>• Parametric Sun Studies</li>
                <li>• Net-Zero Compliance Audit</li>
              </ul>
            </div>
            <div className="bg-white p-12 shadow-sm border border-neutral-100">
              <h3 className="text-lg font-serif mb-4">Collaboration Workflow</h3>
              <p className="text-neutral-500 text-sm font-light mb-6">Our engineering team acts as an extension of your studio, handling the technical solar MEP.</p>
              <ul className="text-[10px] tracking-[0.1em] uppercase text-amber-700 space-y-2">
                <li>• Design Coordination</li>
                <li>• Technical Specs (CSI/MasterFormat)</li>
                <li>• White-Label Reporting</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-900 p-12 md:p-24 text-center text-white">
            <h2 className="text-3xl font-serif mb-8">Ready to integrate Net-Zero luxury?</h2>
            <button 
              onClick={onOpenConsultation}
              className="px-12 py-5 border border-white/20 hover:border-white transition-colors text-[10px] tracking-[0.3em] uppercase font-bold"
            >
              Request Portal Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
