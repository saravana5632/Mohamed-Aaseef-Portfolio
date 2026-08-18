import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookMarked, Building2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#050507] bg-grid-pattern">
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
            <GraduationCap className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>04 // ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Education &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
              }}
            >
              Qualifications
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
            }}
          />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 space-y-12">
          {/* Vertical Timeline Gradient Line */}
          <div
            className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-0.5 transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
            }}
          />

          {educationData.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div
                  className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full bg-[#050508] border-2 flex items-center justify-center group-hover:scale-125 transition-all z-10"
                  style={{
                    borderColor: `var(--theme-accent)`,
                    boxShadow: `0 0 15px rgba(var(--theme-primary-rgb), 0.5)`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full transition-colors"
                    style={{ backgroundColor: `var(--theme-primary)` }}
                  />
                </div>

                {/* Education Card */}
                <div className="bg-[#0C0C10] p-6 sm:p-8 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 shadow-xl relative">
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#050508] border border-zinc-800 font-mono text-[10px] uppercase font-bold tracking-widest mb-2" style={{ color: `var(--theme-accent)` }}>
                        <Building2 className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
                        <span>{item.institution}</span>
                      </span>

                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        {item.degreeOrLevel}
                      </h3>

                      {item.fieldOfStudy && (
                        <p className="font-mono text-xs uppercase tracking-wider mt-1 font-semibold" style={{ color: `var(--theme-accent)` }}>
                          {item.fieldOfStudy}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 gap-1 shrink-0 uppercase tracking-wider">
                      <span className="flex items-center gap-1 text-zinc-200">
                        <Calendar className="w-3.5 h-3.5" style={{ color: `var(--theme-primary)` }} />
                        <span>{item.yearOrGraduation}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Badges / Current Status / Scores */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.currentDetails && (
                      <span
                        className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold border"
                        style={{
                          backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                          borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                          color: `var(--theme-accent)`,
                        }}
                      >
                        Current: {item.currentDetails}
                      </span>
                    )}

                    {item.percentage && (
                      <span
                        className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 border"
                        style={{
                          backgroundColor: `rgba(var(--theme-secondary-rgb), 0.15)`,
                          borderColor: `rgba(var(--theme-secondary-rgb), 0.35)`,
                          color: `var(--theme-accent)`,
                        }}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Score: {item.percentage}</span>
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-3 border-t border-zinc-800 text-xs text-zinc-300 font-mono">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <BookMarked className="w-3.5 h-3.5 shrink-0" style={{ color: `var(--theme-primary)` }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
