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
  switch (index) {
    case 0: // Programming
      return { icon: <Code className="w-5 h-5 text-[#168BFF]" />, border: 'hover:border-[#168BFF]/50', badge: 'bg-[#168BFF]/10 text-[#00A8FF] border-[#168BFF]/30' };
    case 1: // Frontend
      return { icon: <Terminal className="w-5 h-5 text-[#00A8FF]" />, border: 'hover:border-[#00A8FF]/50', badge: 'bg-[#00A8FF]/10 text-[#00E5FF] border-[#00A8FF]/30' };
    case 2: // Backend
      return { icon: <Layers className="w-5 h-5 text-[#FF1744]" />, border: 'hover:border-[#FF1744]/50', badge: 'bg-[#FF1744]/10 text-[#FF2D55] border-[#FF1744]/30' };
    case 3: // Databases
      return { icon: <Database className="w-5 h-5 text-[#00E5FF]" />, border: 'hover:border-[#00E5FF]/50', badge: 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30' };
    case 4: // Frameworks
      return { icon: <Layers className="w-5 h-5 text-[#168BFF]" />, border: 'hover:border-[#168BFF]/50', badge: 'bg-[#168BFF]/10 text-[#00A8FF] border-[#168BFF]/30' };
    case 5: // Version Control
      return { icon: <GitBranch className="w-5 h-5 text-[#00A8FF]" />, border: 'hover:border-[#00A8FF]/50', badge: 'bg-[#00A8FF]/10 text-[#00E5FF] border-[#00A8FF]/30' };
    case 6: // Tools
      return { icon: <Wrench className="w-5 h-5 text-slate-300" />, border: 'hover:border-slate-500/50', badge: 'bg-slate-800 text-slate-300 border-slate-700' };
    case 7: // AI Tools
      return { icon: <Bot className="w-5 h-5 text-[#00E5FF]" />, border: 'hover:border-[#00E5FF]/50', badge: 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30' };
    case 8: // Core Knowledge
      return { icon: <BrainCircuit className="w-5 h-5 text-[#FF1744]" />, border: 'hover:border-[#FF1744]/50', badge: 'bg-[#FF1744]/10 text-[#FF2D55] border-[#FF1744]/30' };
    default:
      return { icon: <Code className="w-5 h-5 text-[#168BFF]" />, border: 'hover:border-[#168BFF]/50', badge: 'bg-[#168BFF]/10 text-[#00A8FF] border-[#168BFF]/30' };
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-[#030509] bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1420] border text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3 transition-all duration-700"
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
          <p className="text-slate-400 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
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
                className="bg-[#0A0F18]/90 backdrop-blur-md p-6 rounded-3xl border border-slate-800/80 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Technical Corner Brackets */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-slate-700 group-hover:border-[#00E5FF] transition-colors pointer-events-none" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-slate-700 group-hover:border-[#00E5FF] transition-colors pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-slate-700 group-hover:border-[#00E5FF] transition-colors pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-slate-700 group-hover:border-[#00E5FF] transition-colors pointer-events-none" />

                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-xl pointer-events-none transition-colors duration-700" style={{ background: `rgba(var(--theme-primary-rgb), 0.05)` }} />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#030509] border border-slate-800 group-hover:border-slate-700 transition-colors">
                        {style.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono group-hover:text-[#00E5FF] transition-colors">
                          {category.title}
                        </h3>
                        {category.description && (
                          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-0.5">
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
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#030509] border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-mono transition-all group/item"
                      >
                        <span className="font-medium text-slate-200">{skill.name}</span>
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
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                  <span>CAT // {String(catIdx + 1).padStart(2, '0')}</span>
                  <span className="font-bold text-[#00E5FF]">TECH_NODE // ACTIVE</span>
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
          className="bg-[#0A0F18] p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#00E5FF] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>COLLABORATION &amp; WORK ETHIC</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">
              Soft Skills &amp; Professional Approach
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              {softSkillsOverview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-[#030509] border border-slate-800 hover:border-[#168BFF]/40 transition-colors text-xs font-mono text-slate-300 uppercase tracking-wider"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
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
