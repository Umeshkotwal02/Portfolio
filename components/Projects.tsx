
import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "Kapoor Lehenga Saree",
    category: "E-Commerce",
    tech: "React, Redux, Razorpay",
    desc: "Complete shopping experience with global state management and secure payments."
  },
  {
    title: "Kesaria Textile",
    category: "Marketplace",
    tech: "React, SEO, SCSS",
    desc: "High-ranking SEO architecture with dynamic sitemaps and localized market pages."
  },
  {
    title: "The Magic Homes",
    category: "PropTech",
    tech: "Next.js, Firebase",
    desc: "Property rental platform with real-time listings and authentication."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black tracking-tighter">FEATURED<br/>WORKS</h2>
          <span className="hidden md:block text-xs uppercase tracking-widest font-bold opacity-30 pb-2">Selected Projects (2022-2025)</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative aspect-square bg-black group overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                <div>
                   <span className="text-[10px] uppercase tracking-widest opacity-60">{project.category}</span>
                   <h3 className="text-3xl font-black mt-2 leading-none">{project.title}</h3>
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono opacity-50">{project.tech}</span>
                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8655 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4.5C11.5 4.22386 11.2761 4 11 4L6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5H10.5V9C10.5 9.27614 10.7239 9.5 11 9.5C11.2761 9.5 11.5 9.27614 11.5 9L11.5 4.5ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
