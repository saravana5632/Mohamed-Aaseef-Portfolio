import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2, PlusCircle } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-[#09090D]">
      {/* Background Decorative Ambient Radial */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ background: `rgba(var(--theme-primary-rgb), 0.08)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0C10] border text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3 transition-all duration-700"
            style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
              color: `var(--theme-accent)`,
              boxShadow: `0 0 12px rgba(var(--theme-primary-rgb), 0.15)`,
            }}
          >
            <FolderGit2 className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Projects &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
              }}
            >
              Software Showcase
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
            Highlighting real-world problem solving, team documentation, and technology concepts.
          </p>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
            }}
          />
        </div>

        {/* Featured Project Showcase */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* More Projects Coming Soon Slot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0C0C10] p-8 rounded-3xl border border-dashed border-zinc-800 text-center space-y-3 hover:border-red-500/50 transition-colors shadow-2xl"
          >
            <div
              className="w-12 h-12 rounded-full border flex items-center justify-center mx-auto transition-all duration-700"
              style={{
                backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                color: `var(--theme-accent)`,
              }}
            >
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider font-mono">More Projects Coming Soon</h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
              Currently working on upcoming web applications, algorithm explorations, and full-stack software development projects.
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-[#050508] border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Future projects populate from <code style={{ color: `var(--theme-accent)` }}>portfolioData.ts</code>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
