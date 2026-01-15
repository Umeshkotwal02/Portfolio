
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 border-l-4 border-black pl-4">About Me</h2>
          <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            I am a results-driven <span className="opacity-40 italic">Frontend Specialist</span> with a deep focus on <span className="underline decoration-1 underline-offset-8">React.js & Next.js</span>. 
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-12 text-lg font-medium opacity-80">
            <p>
              With extensive experience in building real-world enterprise projects like DMS and ERP modules, I bridge the gap between complex backend logic and pixel-perfect user interfaces.
            </p>
            <p>
              My philosophy centers on performance, SEO awareness, and a meticulous approach to UI/UX, ensuring every application I build is as fast as it is beautiful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
