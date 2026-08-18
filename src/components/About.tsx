import React from 'react';
import { motion } from 'motion/react';
import {
  User,
  GraduationCap,
  Target,
  Briefcase,
  Compass,
  BookOpen,
  Download,
  Languages,
} from 'lucide-react';
import { aboutData, languagesData } from '../data/portfolioData';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-20 relative bg-[#09090D]">
      {/* Decorative Gradient Line */}
      <div
        className="absolute inset-x-0 top-0 h-px transition-all duration-700"
        style={{
          background: `linear-gradient(to right, transparent, rgba(var(--theme-primary-rgb), 0.4), transparent)`,
        }}
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
            <User className="w-3 h-3" style={{ color: `var(--theme-accent)` }} />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Background &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
              }}
            >
              Career Aspirations
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Summary, Objective, Roles & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Introduction Card */}
            <div className="bg-[#0C0C10] p-6 sm:p-8 rounded-3xl border border-zinc-800 relative overflow-hidden shadow-xl hover:border-red-500/40 transition-colors">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-all duration-700"
                style={{ background: `rgba(var(--theme-primary-rgb), 0.08)` }}
              />
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold mb-2 flex items-center gap-2" style={{ color: `var(--theme-accent)` }}>
                <BookOpen className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
                <span>Personal Overview</span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                {aboutData.introduction}
              </p>
            </div>

            {/* Career Objective Card */}
            <div className="bg-[#0C0C10] p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl hover:border-red-500/40 transition-colors">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold mb-2 flex items-center gap-2" style={{ color: `var(--theme-accent)` }}>
                <Target className="w-3.5 h-3.5" style={{ color: `var(--theme-primary)` }} />
                <span>Career Objective</span>
              </div>
              <p
                className="text-zinc-300 leading-relaxed text-xs sm:text-sm italic border-l-2 pl-4 py-2 bg-[#050508]/60 rounded-r-xl"
                style={{ borderColor: `var(--theme-primary)` }}
              >
                "{aboutData.careerObjective}"
              </p>
            </div>

            {/* Target Roles & Primary Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Target Roles */}
              <div className="bg-[#0C0C10] p-5 rounded-3xl border border-zinc-800 shadow-xl">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2" style={{ color: `var(--theme-accent)` }}>
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Target Roles</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutData.dreamRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                      style={{
                        background: `rgba(var(--theme-primary-rgb), 0.12)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.35)`,
                        borderWidth: '1px',
                        color: `var(--theme-accent)`,
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Interests */}
              <div className="bg-[#0C0C10] p-5 rounded-3xl border border-zinc-800 shadow-xl">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2" style={{ color: `var(--theme-accent)` }}>
                  <Compass className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
                  <span>Primary Interests</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutData.areasOfInterest.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#050508] border border-zinc-800 text-zinc-300 text-xs font-mono"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="bg-[#0C0C10] p-6 rounded-3xl border border-zinc-800 shadow-xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold mb-4 flex items-center gap-2" style={{ color: `var(--theme-accent)` }}>
                <Languages className="w-3.5 h-3.5" />
                <span>Languages Proficiency</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languagesData.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#050508] border border-zinc-800 hover:border-red-500/40 transition-colors"
                  >
                    <p className="font-bold text-white text-xs sm:text-sm">{lang.name}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest mt-0.5" style={{ color: `var(--theme-accent)` }}>{lang.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0C0C10] p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold flex items-center gap-2" style={{ color: `var(--theme-accent)` }}>
                  <GraduationCap className="w-4 h-4" style={{ color: `var(--theme-accent)` }} />
                  <span>Student Profile</span>
                </div>
                <span
                  className="text-[10px] font-mono px-2.5 py-1 rounded-md border font-bold uppercase"
                  style={{
                    backgroundColor: `rgba(var(--theme-primary-rgb), 0.12)`,
                    color: `var(--theme-accent)`,
                    borderColor: `rgba(var(--theme-primary-rgb), 0.35)`,
                  }}
                >
                  CSBS '28
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {aboutData.quickInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-2xl bg-[#050508]/80 border border-zinc-800 hover:border-red-500/30 transition-all text-xs"
                  >
                    <span className="text-zinc-400 font-mono uppercase text-[10px] tracking-wider">{info.label}</span>
                    <span className="font-bold text-zinc-200 font-mono text-right">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full py-3.5 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_4px_20px_rgba(239,68,68,0.25)] flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume PDF</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
