
import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    company: "Sridix Technology",
    role: "React.js Developer",
    period: "Sep 2024 – Present",
    desc: "Spearheading frontend architecture for ERP and DMS projects. Implementing pixel-perfect designs from Figma and optimizing SEO performance.",
    points: ["Next.js & Redux Toolkit", "FabricJS PDF Tool", "REST API Integration"]
  },
  {
    company: "Webito Infotech",
    role: "React.js Developer Intern",
    period: "Aug 2024 – Sep 2024",
    desc: "Developed responsive café website layouts using JavaScript and Bootstrap, focusing on cross-browser compatibility and authentication forms.",
    points: ["HTML/CSS", "Bootstrap", "JS Fundamentals"]
  },
  {
    company: "R3 Systems India Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Nov 2021 – Jan 2022",
    desc: "Remote internship focused on core web technologies and collaborative workflows for modern UI components.",
    points: ["Team Collaboration", "UI Components", "HTML/CSS/JS"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-16 text-white/40">Professional Journey</h2>
        
        <div className="space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group grid md:grid-cols-3 gap-8 items-start border-t border-white/10 pt-12"
            >
              <div className="col-span-1">
                <span className="text-white/40 text-sm block mb-2">{exp.period}</span>
                <h3 className="text-2xl font-black">{exp.company}</h3>
                <p className="text-white/60 italic">{exp.role}</p>
              </div>
              
              <div className="col-span-2">
                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.points.map(p => (
                    <span key={p} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white/60 uppercase tracking-widest">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
