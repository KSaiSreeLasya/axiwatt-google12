
import React from 'react';
import { motion } from 'framer-motion';

interface ConsultationModalProps {
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/80 backdrop-blur-xl"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-[#faf9f6] border border-neutral-200 p-8 md:p-16 overflow-hidden shadow-2xl rounded-sm"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-neutral-900 mb-4">Request a Private Consultation</h2>
          <p className="text-neutral-500 font-semibold text-[10px] tracking-[0.2em] uppercase">
            Experience absolute discretion and architectural excellence.
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-amber-600 transition-colors text-neutral-900 placeholder:text-neutral-400 font-light"
                required
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Private Email Address"
                className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-amber-600 transition-colors text-neutral-900 placeholder:text-neutral-400 font-light"
                required
              />
            </div>
          </div>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Estate Location (e.g., Jubilee Hills)"
              className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-amber-600 transition-colors text-neutral-900 placeholder:text-neutral-400 font-light"
              required
            />
          </div>
          <div className="relative group">
            <textarea 
              rows={3}
              placeholder="Primary Objectives (Architecture, Independence, Retrofit)"
              className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-amber-600 transition-colors text-neutral-900 placeholder:text-neutral-400 font-light resize-none"
            />
          </div>

          <div className="flex flex-col items-center gap-6 pt-6">
            <button 
              type="submit"
              className="w-full py-5 bg-neutral-900 text-white text-[12px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-black/10"
            >
              Confirm Request
            </button>
            <p className="text-[10px] text-neutral-400 tracking-[0.1em] text-center max-w-sm font-medium">
              By submitting this form, you acknowledge that Axiwatt operates with strict confidentiality protocols. Our concierge will contact you within 24 hours.
            </p>
          </div>
        </form>

        <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-amber-500/5 rounded-full blur-3xl" />
      </motion.div>
    </motion.div>
  );
};
