
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          UK.
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium hover:text-white/60 transition-colors uppercase tracking-widest"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
           <a href="mailto:umeshkotwal7@gmail.com" className="px-5 py-2 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
             Let's Talk
           </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
