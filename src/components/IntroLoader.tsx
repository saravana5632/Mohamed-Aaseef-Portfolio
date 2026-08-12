import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, FastForward } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('IDENTITY CORE // ONLINE');
  const [isSystemReady, setIsSystemReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Lock background scrolling while loader is active
    document.body.style.overflow = 'hidden';

    if (prefersReducedMotion) {
      setProgress(100);
      setStatusMessage('SYSTEM READY');
      setIsSystemReady(true);
      const timer = setTimeout(() => {
        handleFinish();
      }, 300);
      return () => clearTimeout(timer);
    }

    // Progress Bar Timer (~2.6s total)
    const startTime = Date.now();
    const duration = 2600; // ms

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      // Status telemetry progression
      if (currentProgress < 30) {
        setStatusMessage('IDENTITY CORE // ONLINE');
      } else if (currentProgress < 65) {
        setStatusMessage('INTERFACE // INITIALIZED');
      } else if (currentProgress < 90) {
        setStatusMessage('MODULES // READY');
      } else {
        setStatusMessage('SYSTEM READY');
        setIsSystemReady(true);
      }

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          handleFinish();
        }, 300);
      }
    }, 30);

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 700);
  };

  const handleSkip = () => {
    handleFinish();
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#030509] bg-grid-pattern flex flex-col items-center justify-center px-4 overflow-hidden select-none"
        >
          {/* Ambient Background Radial Glows */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000"
            style={{ background: `rgba(var(--theme-primary-rgb), 0.15)` }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
            style={{ background: `rgba(var(--theme-secondary-rgb), 0.1)` }}
          />

          {/* Skip Intro Button */}
          <button
            onClick={handleSkip}
            className="fixed bottom-6 right-6 z-[105] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A0F18]/80 hover:bg-[#168BFF]/20 border border-slate-800 hover:border-[#00E5FF]/50 text-slate-400 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-all backdrop-blur-md shadow-lg group"
            aria-label="Skip Introduction"
          >
            <span>SKIP INTRO</span>
            <FastForward className="w-3 h-3 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Main Centered Visual Container */}
          <div className="relative z-10 max-w-lg w-full text-center space-y-6">
            
            {/* Stage 1-3: Energy Point -> Geometric Rings -> Central MA Core */}
            <div className="relative flex items-center justify-center my-6 min-h-[160px]">
              
              {/* Step 1: Tiny Cyan Energy Point */}
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 1.8, 1], opacity: [0, 1, 0.8] }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_20px_#00E5FF]"
              />

              {/* Step 2: Thin Geometric Rings Construct Around It */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{ scale: 1, opacity: 0.7, rotate: 360 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute w-32 h-32 rounded-full border border-dashed border-[#168BFF]/50 pointer-events-none"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{ scale: 1, opacity: 0.5, rotate: -360 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute w-44 h-44 rounded-full border border-t-[#00E5FF] border-b-[#FF1744] border-l-transparent border-r-transparent pointer-events-none"
              />

              {/* Technical Extending Circuit Lines */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
              >
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="var(--theme-primary)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="var(--theme-accent)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="var(--theme-secondary)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="var(--theme-primary)" strokeWidth="1" strokeDasharray="3 3" />
              </motion.svg>

              {/* Step 3: Central MA Core Monogram */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-24 h-24 rounded-full bg-[#080E18] border border-[#00E5FF]/40 shadow-[0_0_35px_rgba(22,139,255,0.3)] flex flex-col items-center justify-center relative overflow-hidden group z-10"
              >
                <div
                  className="absolute inset-0 opacity-80 transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, rgba(var(--theme-secondary-rgb),0.2), rgba(var(--theme-primary-rgb),0.25), rgba(var(--theme-accent-rgb),0.2))`,
                  }}
                />
                <span
                  className="font-mono font-black text-2xl tracking-tighter relative z-10 text-transparent bg-clip-text transition-all duration-700"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
                  }}
                >
                  MA.
                </span>
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest relative z-10 mt-0.5">
                  DEV.OS
                </span>
              </motion.div>
            </div>

            {/* Stage 4: Telemetry Status Messaging */}
            <div className="space-y-3 pt-1">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] font-bold transition-colors duration-700"
                style={{ color: `var(--theme-primary)` }}
              >
                MOHAMED AASEEF M. // CSBS STUDENT
              </motion.div>

              {/* Status Indicator */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0F18] border text-[10px] font-mono uppercase tracking-widest transition-all duration-700"
                style={{
                  borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                  boxShadow: `0 0 15px rgba(var(--theme-primary-rgb), 0.1)`,
                }}
              >
                {isSystemReady ? (
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
                ) : (
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: `var(--theme-accent)` }} />
                )}
                <span
                  className="font-bold transition-colors duration-700"
                  style={{ color: isSystemReady ? `var(--theme-accent)` : '#94A3B8' }}
                >
                  {statusMessage}
                </span>
              </div>
            </div>

            {/* Progress Bar & Telemetry */}
            <div className="space-y-1.5 pt-2 max-w-xs mx-auto">
              <div className="w-full h-1.5 bg-[#0A0F18] rounded-full overflow-hidden border border-slate-800 p-[1px]">
                <div
                  className="h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(0,229,255,0.6)]"
                  style={{
                    width: `${progress}%`,
                    backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
                  }}
                />
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                <span>SYS_INIT // 2026</span>
                <span className="font-bold" style={{ color: `var(--theme-accent)` }}>{progress}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

