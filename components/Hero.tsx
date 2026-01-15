
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
         <h1 className="text-[20rem] font-black pointer-events-none select-none">UMESH</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <span className="inline-block px-4 py-1 mb-6 border border-white/20 text-xs tracking-[0.3em] uppercase">
          Surat, Gujarat
        </span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-4">
          UMESH KOTWAL
        </h1>
        <p className="text-xl md:text-3xl font-light text-white/60 tracking-tight max-w-2xl mx-auto">
          Frontend Developer specializing in <span className="text-white italic">React.js & Next.js</span>. 
          Crafting pixel-perfect, high-performance web experiences.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-40">Scroll to Explore</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
