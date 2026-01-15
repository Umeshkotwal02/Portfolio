
import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 border-l-4 border-black pl-4">Education</h2>
        
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-b border-black/10 pb-8"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black">B.Tech – Computer Engineering</h3>
              <span className="text-sm font-bold opacity-40 uppercase">2019 – 2023</span>
            </div>
            <p className="text-lg font-medium opacity-80">KCE Society’s College of Engineering & Management, Jalgaon</p>
            <p className="mt-2 text-sm font-bold">CGPA: 8.18</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-b border-black/10 pb-8"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black">HSC (Science)</h3>
              <span className="text-sm font-bold opacity-40 uppercase">2018 – 2019</span>
            </div>
            <p className="text-lg font-medium opacity-80">Gyanjoyt Vidyalaya, Surat</p>
            <p className="mt-2 text-sm font-bold">Percentage: 60.62%</p>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-black/40">Certifications</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-lg font-bold">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              NPTEL Cloud Computing (IIT Kharagpur)
            </li>
            <li className="flex items-center gap-4 text-lg font-bold">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              NPTEL Industry 4.0 & Industrial IoT (IIT Kharagpur)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
