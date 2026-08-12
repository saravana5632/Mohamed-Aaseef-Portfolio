import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from 'lucide-react';
import { personalInfo, heroTypingTitles, heroBio } from '../data/portfolioData';
import { DeveloperIdentityCore } from './DeveloperIdentityCore';

interface HeroProps {
  introComplete: boolean;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ introComplete, onOpenResumeModal }) => {
  const FULL_NAME = 'MOHAMED AASEEF';

  // Name typing state (starts empty, types once after intro completes)
  const [nameText, setNameText] = useState('');
  const [isNameFinished, setIsNameFinished] = useState(false);

  // Role typing state (continuous loop, starts AFTER name finishes)
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isRoleDeleting, setIsRoleDeleting] = useState(false);

  // Character-by-character typing for MOHAMED AASEEF (starts only when introComplete === true)
  useEffect(() => {
    if (!introComplete || isNameFinished) return;

    let charIndex = 0;
    let nameInterval: NodeJS.Timeout;

    // Small 300ms delay after intro loader disappears before typing starts
    const startTimeout = setTimeout(() => {
      nameInterval = setInterval(() => {
        if (charIndex <= FULL_NAME.length) {
          setNameText(FULL_NAME.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(nameInterval);
          setIsNameFinished(true);
        }
      }, 85); // 85ms per character
    }, 300);

    return () => {
      clearTimeout(startTimeout);
      if (nameInterval) clearInterval(nameInterval);
    };
  }, [introComplete, isNameFinished]);

  // Continuous cycling role typing animation (starts only after name finishes)
  useEffect(() => {
    if (!isNameFinished) return;

    const currentRole = heroTypingTitles[roleIndex];
    const typingSpeed = isRoleDeleting ? 30 : 65;

    const roleTimer = setTimeout(() => {
      if (!isRoleDeleting) {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText.length === currentRole.length) {
          setTimeout(() => setIsRoleDeleting(true), 2000);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsRoleDeleting(false);
          setRoleIndex((prev) => (prev + 1) % heroTypingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(roleTimer);
  }, [isNameFinished, roleText, isRoleDeleting, roleIndex]);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#030509] bg-grid-pattern"
    >
      {/* Background Ambient Radial Glows with Dynamic CSS Variables */}
      <div
        className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none animate-pulse-slow transition-all duration-1000"
        style={{ background: `rgba(var(--theme-primary-rgb), 0.12)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none animate-pulse-slow transition-all duration-1000"
        style={{ background: `rgba(var(--theme-secondary-rgb), 0.12)` }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000"
        style={{ background: `rgba(var(--theme-accent-rgb), 0.08)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HERO TEXT & CTAS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Premium Status Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1420] border text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] transition-all duration-700"
              style={{
                borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                color: `var(--theme-accent)`,
                boxShadow: `0 0 15px rgba(var(--theme-primary-rgb), 0.15)`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: `var(--theme-accent)` }}
              />
              <span>CSBS STUDENT • PEC</span>
            </div>

            {/* Main Heading Hierarchy */}
            <div className="space-y-3">
              <span className="block text-xl sm:text-2xl font-bold text-slate-300 tracking-wider font-mono">
                Hi, I'm
              </span>

              {/* Full Name with Sequential Character Typing */}
              <div className="relative inline-block my-1 max-w-full min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[4.5rem] lg:min-h-[5.5rem]">
                {/* Subtle ambient glow behind full name */}
                <div
                  className="absolute -inset-1.5 blur-xl opacity-75 rounded-3xl pointer-events-none transition-all duration-700"
                  style={{
                    background: `linear-gradient(to right, rgba(var(--theme-primary-rgb),0.25), rgba(var(--theme-accent-rgb),0.2), rgba(var(--theme-secondary-rgb),0.25))`,
                  }}
                />

                <h1
                  className="relative font-black tracking-tight uppercase leading-none text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700"
                  style={{
                    backgroundImage: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF 35%, var(--theme-accent) 70%, var(--theme-primary) 100%)`,
                  }}
                >
                  {nameText}
                  <span
                    className="animate-pulse font-light ml-0.5 inline-block"
                    style={{
                      color: `var(--theme-accent)`,
                      filter: `drop-shadow(0 0 12px var(--theme-accent))`,
                    }}
                  >
                    |
                  </span>
                </h1>
              </div>

              {/* Role Typing Animation Container (Appears after name completes) */}
              <div className="pt-2 flex items-center justify-center lg:justify-start min-h-[44px]">
                {isNameFinished ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 bg-[#0A0F18] px-4 py-2 rounded-xl border border-slate-800/90 shadow-lg max-w-full flex-wrap"
                  >
                    <span
                      className="font-mono font-bold text-xs sm:text-sm transition-colors duration-700"
                      style={{ color: `var(--theme-secondary)` }}
                    >
                      &gt;
                    </span>
                    <span
                      className="font-mono text-xs sm:text-sm md:text-base font-semibold text-transparent bg-clip-text whitespace-normal break-words transition-all duration-700"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), #FFFFFF)`,
                      }}
                    >
                      {roleText}
                    </span>
                    <span
                      className="w-2 h-4 animate-pulse rounded-sm shrink-0 transition-colors duration-700"
                      style={{
                        backgroundColor: `var(--theme-accent)`,
                        boxShadow: `0 0 8px var(--theme-accent)`,
                      }}
                    />
                  </motion.div>
                ) : (
                  <div className="h-9" />
                )}
              </div>
            </div>

            {/* Bio */}
            <p className="text-slate-400 text-xs sm:text-sm sm:leading-relaxed leading-normal max-w-xl mx-auto lg:mx-0 font-normal">
              {heroBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all duration-700 flex items-center gap-2.5 group hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                  boxShadow: `0 4px 25px rgba(var(--theme-secondary-rgb), 0.35)`,
                }}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-200 bg-[#0A0F18] border transition-all duration-500 flex items-center gap-2.5 group"
                style={{
                  borderColor: `rgba(var(--theme-primary-rgb), 0.4)`,
                }}
              >
                <Download
                  className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 duration-500"
                  style={{ color: `var(--theme-accent)` }}
                />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                CONNECT_
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0A0F18] border border-slate-800 flex items-center justify-center hover:border-[#168BFF] text-slate-300 hover:text-[#00A8FF] hover:shadow-[0_0_15px_rgba(22,139,255,0.4)] transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0A0F18] border border-slate-800 flex items-center justify-center hover:border-[#00E5FF] text-slate-300 hover:text-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-full bg-[#0A0F18] border border-slate-800 flex items-center justify-center hover:border-[#FF1744] text-slate-300 hover:text-[#FF1744] hover:shadow-[0_0_15px_rgba(255,23,68,0.4)] transition-all cursor-pointer"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DEVELOPER IDENTITY CORE */}
          <div className="lg:col-span-6 flex justify-center">
            <DeveloperIdentityCore />
          </div>

        </div>
      </div>
    </section>
  );
};
