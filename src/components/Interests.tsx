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
    <section id="interests" className="py-20 relative bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1420] border border-[#168BFF]/30 text-[#00A8FF] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3 shadow-[0_0_12px_rgba(22,139,255,0.15)]">
            <Compass className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>07 // BEYOND CODE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Interests &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#00E5FF] to-[#FF1744]">Passions</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
            Personal pursuits, technology curiosities, and career directions that drive continuous growth.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#168BFF] via-[#00E5FF] to-[#FF1744] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tech Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-[#0A0F18] p-6 rounded-3xl border border-slate-800 hover:border-[#168BFF]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#030509] border border-slate-800 w-fit text-[#168BFF] mb-4 group-hover:border-[#168BFF]/40 transition-colors">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Technology Interests</h3>
              <div className="space-y-2">
                {interestsData.technology.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
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
            className="bg-[#0A0F18] p-6 rounded-3xl border border-slate-800 hover:border-[#FF1744]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#030509] border border-slate-800 w-fit text-[#FF1744] mb-4 group-hover:border-[#FF1744]/40 transition-colors">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Career Focus</h3>
              <div className="space-y-2">
                {interestsData.career.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744]" />
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
            className="bg-[#0A0F18] p-6 rounded-3xl border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#030509] border border-slate-800 w-fit text-[#00E5FF] mb-4 group-hover:border-[#00E5FF]/40 transition-colors">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Hobbies &amp; Leisure</h3>
              <div className="space-y-2">
                {interestsData.hobbies.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
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
            className="bg-[#0A0F18] p-6 rounded-3xl border border-slate-800 hover:border-[#00A8FF]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#030509] border border-slate-800 w-fit text-[#00A8FF] mb-4 group-hover:border-[#00A8FF]/40 transition-colors">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-3 font-mono uppercase tracking-wide">Scientific &amp; Space</h3>
              <div className="space-y-2">
                {interestsData.other.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF]" />
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
