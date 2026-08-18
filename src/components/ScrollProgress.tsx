import React, { useState, useEffect } from 'react';

interface ScrollProgressProps {
  activeSection: string;
}

const sectionModuleMap: Record<string, string> = {
  home: 'MA CORE // INITIALIZED',
  about: 'MODULE_01 // ABOUT',
  skills: 'MODULE_02 // TECH STACK',
  projects: 'MODULE_03 // BUILDS',
  education: 'MODULE_04 // EDUCATION',
  certifications: 'MODULE_05 // CREDENTIALS',
  achievements: 'MODULE_06 // MILESTONES',
  interests: 'MODULE_07 // INTERESTS',
  contact: 'MODULE_08 // COMMUNICATION',
};

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ activeSection }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(
          100,
          Math.max(0, Math.round((window.scrollY / totalHeight) * 100))
        );
        setScrollPercent(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentModuleLabel = sectionModuleMap[activeSection] || 'DEV.OS // ACTIVE';

  return (
    <>
      {/* Top Fixed Thin Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[120] bg-black/80 pointer-events-none">
        <div
          className="h-full transition-all duration-150 ease-out shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          style={{
            width: `${scrollPercent}%`,
            backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
          }}
        />
      </div>

      {/* Far Right Futuristic Vertical Telemetry Module Badge (Desktop) */}
      <div className="hidden lg:flex fixed right-4 bottom-8 z-[90] flex-col items-end gap-1 font-mono text-[9px] uppercase tracking-widest pointer-events-none select-none">
        <div
          className="px-2.5 py-1 rounded-full bg-[#050508]/95 border text-zinc-300 shadow-xl backdrop-blur-md flex items-center gap-2 transition-all duration-700"
          style={{
            borderColor: `rgba(var(--theme-primary-rgb), 0.35)`,
            boxShadow: `0 0 12px rgba(var(--theme-primary-rgb), 0.15)`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-ping"
            style={{ backgroundColor: `var(--theme-accent)` }}
          />
          <span style={{ color: `var(--theme-accent)` }} className="font-bold">
            {currentModuleLabel}
          </span>
          <span className="text-zinc-500">|</span>
          <span className="font-bold text-zinc-300">{scrollPercent}%</span>
        </div>
      </div>
    </>
  );
};
