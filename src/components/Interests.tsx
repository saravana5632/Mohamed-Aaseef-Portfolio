import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Laptop,
  Briefcase,
  Gamepad2,
  Rocket,
} from 'lucide-react';
import { interestsData } from '../data/portfolioData';

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-20 relative bg-[#09090D]">
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
            <Compass className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>07 // BEYOND CODE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Interests &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
              }}
            >
              Passions
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
            Personal pursuits, technology curiosities, and career directions that drive continuous growth.
          </p>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tech Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-[#0C0C10] p-6 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#050508] border border-zinc-800 w-fit mb-4 group-hover:border-red-500/40 transition-colors" style={{ color: `var(--theme-accent)` }}>
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Technology Interests</h3>
              <div className="space-y-2">
                {interestsData.technology.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: `var(--theme-primary)` }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Career Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0C0C10] p-6 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#050508] border border-zinc-800 w-fit mb-4 group-hover:border-red-500/40 transition-colors" style={{ color: `var(--theme-secondary)` }}>
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Career Focus</h3>
              <div className="space-y-2">
                {interestsData.career.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: `var(--theme-secondary)` }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#0C0C10] p-6 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#050508] border border-zinc-800 w-fit mb-4 group-hover:border-red-500/40 transition-colors" style={{ color: `var(--theme-accent)` }}>
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Hobbies &amp; Leisure</h3>
              <div className="space-y-2">
                {interestsData.hobbies.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: `var(--theme-accent)` }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scientific & Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0C0C10] p-6 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#050508] border border-zinc-800 w-fit mb-4 group-hover:border-red-500/40 transition-colors" style={{ color: `var(--theme-primary)` }}>
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Scientific &amp; Space</h3>
              <div className="space-y-2">
                {interestsData.other.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: `var(--theme-primary)` }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
