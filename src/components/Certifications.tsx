import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, FileCheck, PlusCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-[#09090D]">
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
            <Award className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>05 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Certifications &amp;{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
              }}
            >
              Courses
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
            }}
          />
        </div>

        {/* If certifications array has items, display them. Otherwise show polished ready message */}
        {certificationsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0C0C10] hover:bg-[#121218] p-6 rounded-3xl border border-zinc-800 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 font-mono">
                    <span
                      className="px-2.5 py-1 rounded text-[10px] border uppercase font-bold tracking-wider"
                      style={{
                        backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                        color: `var(--theme-accent)`,
                        borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" style={{ color: `var(--theme-primary)` }} />
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">{cert.title}</h3>

                  <div className="flex flex-wrap gap-1.5 my-3">
                    {cert.skillsLearned.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#050508] border border-zinc-800 text-[10px] font-mono text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center gap-2">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-1.5 shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Verify Credential</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Professional Architecture Placeholder Notice */
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
              <FileCheck className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-wider font-mono">Certifications Will Be Added Soon</h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Verified certifications from online platforms, course completions, and technical workshops are currently being compiled and will be published here shortly.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050508] border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                <PlusCircle className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
                <span>Configured to render via portfolioData.ts</span>
              </span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
