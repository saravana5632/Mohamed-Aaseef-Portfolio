import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Terminal,
  Database,
  Layers,
  GitBranch,
  Wrench,
  Bot,
  BrainCircuit,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories, softSkills, softSkillsOverview } from '../data/portfolioData';

// Category color mapper
const getCategoryStyle = (index: number) => {
  switch (index % 3) {
    case 0:
      return {
        icon: <Code className="w-5 h-5 text-[#EF4444]" />,
        border: 'hover:border-red-500/50',
        badge: 'bg-red-950/40 text-red-400 border-red-800/40',
      };
    case 1:
      return {
        icon: <Terminal className="w-5 h-5 text-[#DC2626]" />,
        border: 'hover:border-red-600/50',
        badge: 'bg-red-950/30 text-red-300 border-red-800/30',
      };
    case 2:
      return {
        icon: <Layers className="w-5 h-5 text-[#FF2E3B]" />,
        border: 'hover:border-red-500/50',
        badge: 'bg-red-900/30 text-red-300 border-red-700/40',
      };
    default:
      return {
        icon: <Code className="w-5 h-5 text-[#EF4444]" />,
        border: 'hover:border-red-500/50',
        badge: 'bg-red-950/40 text-red-400 border-red-800/40',
      };
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-[#050507] bg-dots-pattern">
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
            <Code className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Technical &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
              }}
            >
              Professional Skills
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
            Grounded in core Computer Science &amp; Business Systems fundamentals with hands-on practice.
          </p>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
            }}
          />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIdx) => {
            const style = getCategoryStyle(catIdx);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.04 }}
                className="bg-[#0C0C10]/95 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/80 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Technical Corner Brackets */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-zinc-700 group-hover:border-red-500 transition-colors pointer-events-none" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-zinc-700 group-hover:border-red-500 transition-colors pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-zinc-700 group-hover:border-red-500 transition-colors pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-zinc-700 group-hover:border-red-500 transition-colors pointer-events-none" />

                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-xl pointer-events-none transition-colors duration-700" style={{ background: `rgba(var(--theme-primary-rgb), 0.05)` }} />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#050508] border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                        {style.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono group-hover:text-red-400 transition-colors">
                          {category.title}
                        </h3>
                        {category.description && (
                          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-0.5">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#050508] border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 font-mono transition-all group/item"
                      >
                        <span className="font-medium text-zinc-200">{skill.name}</span>
                        {skill.level && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border uppercase font-bold ${style.badge}`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Technical Node Indicator */}
                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>CAT // {String(catIdx + 1).padStart(2, '0')}</span>
                  <span className="font-bold" style={{ color: `var(--theme-accent)` }}>TECH_NODE // ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0C0C10] p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-700"
            style={{ background: `rgba(var(--theme-primary-rgb), 0.05)` }}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-2" style={{ color: `var(--theme-accent)` }}>
              <Users className="w-3.5 h-3.5" />
              <span>COLLABORATION &amp; WORK ETHIC</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">
              Soft Skills &amp; Professional Approach
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              {softSkillsOverview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-[#050508] border border-zinc-800 hover:border-red-500/40 transition-colors text-xs font-mono text-zinc-300 uppercase tracking-wider"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: `var(--theme-accent)` }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
