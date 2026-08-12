import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030509] border-t border-slate-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
            &copy; 2026 Mohamed Aaseef M. All Rights Reserved.
          </p>
          <p className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">
            B.Tech CSBS | Panimalar Engineering College (PEC)
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#0A0F18] hover:bg-[#168BFF]/20 text-slate-400 hover:text-[#00E5FF] border border-slate-800 hover:border-[#168BFF]/50 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#0A0F18] hover:bg-[#00E5FF]/20 text-slate-400 hover:text-[#00E5FF] border border-slate-800 hover:border-[#00E5FF]/50 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-xl bg-[#0A0F18] hover:bg-[#FF1744]/20 text-slate-400 hover:text-[#FF2D55] border border-slate-800 hover:border-[#FF1744]/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D1420] hover:bg-[#168BFF] text-[#00A8FF] hover:text-white border border-[#168BFF]/30 text-[10px] font-mono font-bold uppercase tracking-widest transition-all shadow-[0_0_10px_rgba(22,139,255,0.15)]"
            aria-label="Scroll Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
