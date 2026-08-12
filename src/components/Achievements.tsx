import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-[#030509] bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1420] border border-[#168BFF]/30 text-[#00A8FF] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3 shadow-[0_0_12px_rgba(22,139,255,0.15)]">
            <Trophy className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>06 // RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Achievements &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#00E5FF] to-[#FF1744]">Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#168BFF] via-[#00E5FF] to-[#FF1744] mx-auto mt-4 rounded-full" />
        </div>

        {achievementsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0A0F18] hover:bg-[#0D1420] p-6 rounded-3xl border border-slate-800 hover:border-[#168BFF]/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5FF] mb-2">
                  <Star className="w-3.5 h-3.5 text-[#FF1744]" />
                  <span>{item.category}</span>
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2 font-mono">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Professional Placeholder Card */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-[#0A0F18] p-8 sm:p-10 rounded-3xl border border-slate-800 text-center space-y-4 shadow-2xl relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#168BFF]/10 border border-[#168BFF]/30 flex items-center justify-center mx-auto text-[#00E5FF]">
              <Trophy className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-wider font-mono">
              Achievements &amp; Milestones Updated Soon
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Future hackathon entries, coding contest recognitions, academic milestones, and event participation records will be logged here as they occur.
            </p>

            {/* Supported Milestone Categories */}
            <div className="pt-2 flex flex-wrap justify-center gap-2 text-[10px] font-mono uppercase tracking-wider">
              {['Hackathons', 'Coding Competitions', 'College Events', 'Academic Milestones', 'Tech Presentations'].map((cat) => (
                <span key={cat} className="px-3 py-1 rounded-lg bg-[#030509] border border-slate-800 text-slate-300">
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
