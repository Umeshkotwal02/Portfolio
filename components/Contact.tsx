
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.5em] mb-12 opacity-40 italic underline decoration-white/20 underline-offset-8">Let's Create Together</h2>
          <a 
            href="mailto:umeshkotwal7@gmail.com"
            className="text-4xl md:text-7xl font-black tracking-tighter hover:opacity-60 transition-opacity break-words block mb-12"
          >
            umeshkotwal7@gmail.com
          </a>
          <p className="text-xl font-light opacity-50 mb-12">+91 7350360871 • Surat, Gujarat</p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="group flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold group-hover:underline">LinkedIn</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity"><path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8655 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4.5C11.5 4.22386 11.2761 4 11 4L6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5H10.5V9C10.5 9.27614 10.7239 9.5 11 9.5C11.2761 9.5 11.5 9.27614 11.5 9L11.5 4.5ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor"></path></svg>
            </a>
            <a href="#" className="group flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold group-hover:underline">GitHub</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity"><path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8655 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4.5C11.5 4.22386 11.2761 4 11 4L6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5H10.5V9C10.5 9.27614 10.7239 9.5 11 9.5C11.2761 9.5 11.5 9.27614 11.5 9L11.5 4.5ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor"></path></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
