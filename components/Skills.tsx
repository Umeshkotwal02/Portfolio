
import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { category: "Frameworks", items: ["React.js", "Next.js", "Redux Toolkit", "Bootstrap", "SCSS"] },
  { category: "Languages", items: ["JavaScript", "C", "HTML5", "CSS3"] },
  { category: "Backend/Tools", items: ["Firebase", "SQL", "MySQL", "Git", "Vercel"] },
  { category: "Personal", items: ["Performance", "SEO Best Practices", "Pixel Perfect UI", "Agile Workflow"] }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 text-white/40">Technical Arsenal</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-white/40 text-[10px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map(skill => (
                  <li key={skill} className="text-xl font-bold hover:translate-x-2 transition-transform duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
