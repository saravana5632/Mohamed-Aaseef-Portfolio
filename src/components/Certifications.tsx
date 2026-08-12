import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, FileCheck, PlusCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1420] border border-[#168BFF]/30 text-[#00A8FF] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3 shadow-[0_0_12px_rgba(22,139,255,0.15)]">
            <Award className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>05 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#00E5FF] to-[#FF1744]">Courses</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#168BFF] via-[#00E5FF] to-[#FF1744] mx-auto mt-4 rounded-full" />
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
                className="bg-[#0A0F18] hover:bg-[#0D1420] p-6 rounded-3xl border border-slate-800 hover:border-[#168BFF]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#168BFF]/10 text-[#00A8FF] text-[10px] border border-[#168BFF]/30 uppercase font-bold tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF1744]" />
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">{cert.title}</h3>

                  <div className="flex flex-wrap gap-1.5 my-3">
                    {cert.skillsLearned.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#030509] border border-slate-800 text-[10px] font-mono text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-[#FF1744] to-[#168BFF] hover:from-[#FF2D55] hover:to-[#00A8FF] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_4px_20px_rgba(255,23,68,0.25)] flex items-center gap-1.5"
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
            className="max-w-2xl mx-auto bg-[#0A0F18] p-8 sm:p-10 rounded-3xl border border-slate-800 text-center space-y-4 shadow-2xl relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#168BFF]/10 border border-[#168BFF]/30 flex items-center justify-center mx-auto text-[#00E5FF]">
              <FileCheck className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-wider font-mono">Certifications Will Be Added Soon</h3>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Verified certifications from online platforms, course completions, and technical workshops are currently being compiled and will be published here shortly.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#030509] border border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <PlusCircle className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Configured to render via portfolioData.ts</span>
              </span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
