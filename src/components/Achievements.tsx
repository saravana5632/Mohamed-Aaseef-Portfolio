import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-[#050507] bg-dots-pattern">
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
            <Trophy className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>06 // RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Achievements &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
              }}
            >
              Milestones
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
            }}
          />
        </div>

        {achievementsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0C0C10] hover:bg-[#121218] p-6 rounded-3xl border border-zinc-800 hover:border-red-500/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest mb-2" style={{ color: `var(--theme-accent)` }}>
                  <Star className="w-3.5 h-3.5" style={{ color: `var(--theme-primary)` }} />
                  <span>{item.category}</span>
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2 font-mono">{item.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Professional Placeholder Card */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-[#0C0C10] p-8 sm:p-10 rounded-3xl border border-zinc-800 text-center space-y-4 shadow-2xl relative"
          >
            <div
              className="w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto"
              style={{
                backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                color: `var(--theme-accent)`,
              }}
            >
              <Trophy className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-wider font-mono">
              Achievements &amp; Milestones Updated Soon
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Future hackathon entries, coding contest recognitions, academic milestones, and event participation records will be logged here as they occur.
            </p>

            {/* Supported Milestone Categories */}
            <div className="pt-2 flex flex-wrap justify-center gap-2 text-[10px] font-mono uppercase tracking-wider">
              {['Hackathons', 'Coding Competitions', 'College Events', 'Academic Milestones', 'Tech Presentations'].map((cat) => (
                <span key={cat} className="px-3 py-1 rounded-lg bg-[#050508] border border-zinc-800 text-zinc-300">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
