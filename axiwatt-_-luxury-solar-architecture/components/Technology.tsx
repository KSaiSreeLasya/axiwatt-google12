
import React from 'react';
import { motion } from 'framer-motion';

const techItems = [
  {
    category: "Solar Modules",
    title: "Ultra-High Efficiency Glass",
    desc: "Bespoke glass-on-glass modules with up to 23% conversion efficiency, designed for structural permanence."
  },
  {
    category: "Energy Storage",
    title: "Solid-State Reserve Systems",
    desc: "Discrete, high-capacity chemical energy storage that acts as the estate's primary heart, ensuring zero-latency transitions."
  },
  {
    category: "Smart Mobility",
    title: "V2H Charging Integration",
    desc: "Intelligent charging infrastructure that bridges the estate's energy and your fleet's mobility."
  },
  {
    category: "Digital Control",
    title: "Axiwatt OS",
    desc: "Predictive AI-driven energy management with 24/7 global monitoring through a secure, encrypted interface."
  }
];

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="text-[12px] tracking-[0.5em] uppercase text-[#635e5a] mb-6 font-semibold">Engineered Legacy</p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2c2825]">World-Class Systems. 40-Year Durability.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e4df] border border-[#e8e4df] shadow-sm">
          {techItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-14 hover:bg-[#fdfcfb] transition-all duration-500 group cursor-default"
            >
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#b9975b] mb-10 font-bold">{item.category}</p>
              <motion.h4 
                whileHover={{ x: 3 }}
                className="text-2xl font-serif text-[#2c2825] mb-6 group-hover:text-[#b9975b] transition-colors"
              >
                {item.title}
              </motion.h4>
              <p className="text-[#635e5a] text-base font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
