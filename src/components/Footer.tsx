import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-zinc-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
            &copy; 2026 Mohamed Aaseef M. All Rights Reserved.
          </p>
          <p className="text-[9px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">
            B.Tech CSBS | Panimalar Engineering College (PEC)
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#0C0C10] hover:bg-red-500/20 text-zinc-400 hover:text-white border border-zinc-800 hover:border-red-500/50 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#0C0C10] hover:bg-red-500/20 text-zinc-400 hover:text-white border border-zinc-800 hover:border-red-500/50 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-xl bg-[#0C0C10] hover:bg-red-500/20 text-zinc-400 hover:text-white border border-zinc-800 hover:border-red-500/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0C0C10] hover:bg-red-600 border text-[10px] font-mono font-bold uppercase tracking-widest transition-all hover:text-white"
            style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
              color: `var(--theme-accent)`,
              boxShadow: `0 0 10px rgba(var(--theme-primary-rgb), 0.15)`,
            }}
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
