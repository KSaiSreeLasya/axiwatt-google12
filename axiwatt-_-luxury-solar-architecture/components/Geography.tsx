
import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  "Kokapet & Financial District",
  "Jubilee Hills & Banjara Hills",
  "Narsingi & Puppalguda",
  "Tellapur & Gachibowli"
];

export const Geography: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] uppercase text-amber-700 mb-6 font-semibold"
          >
            Local Presence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-3xl md:text-4xl font-serif text-neutral-900 mb-12"
          >
            Serving Hyderabad’s Most Exclusive Enclaves
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {locations.map((loc, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="group cursor-default relative"
              >
                <motion.span 
                  whileHover={{ y: -2 }}
                  className="text-lg md:text-xl font-serif text-neutral-500 group-hover:text-neutral-900 transition-colors"
                >
                  {loc}
                </motion.span>
                <motion.div 
                  className="h-[2px] bg-amber-600 mt-2 mx-auto" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 1 + (idx * 0.1), duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
