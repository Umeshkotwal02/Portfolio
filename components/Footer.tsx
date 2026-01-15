
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 px-6 bg-black text-white/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-bold tracking-widest uppercase text-white">
          Umesh Kotwal &copy; {new Date().getFullYear()}
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em]">
          Handcrafted in React & Next.js
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest">Privacy</a>
          <a href="#" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
