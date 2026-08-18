import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Palette } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  onOpenResumeModal: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentThemeIndex, selectTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-5 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between border backdrop-blur-xl ${
          isScrolled
            ? 'bg-[#050507]/90 border-zinc-800 shadow-[0_0_25px_rgba(var(--theme-primary-rgb),0.15)]'
            : 'bg-[#050507]/70 border-zinc-800/80 shadow-[0_0_15px_rgba(0,0,0,0.6)]'
        }`}
      >
        {/* LOGO MA. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-sm font-bold tracking-wider text-white uppercase focus:outline-none"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white font-mono text-xs tracking-tighter shadow-md group-hover:scale-105 transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, var(--theme-secondary), var(--theme-primary))`,
              boxShadow: `0 0 14px rgba(var(--theme-primary-rgb), 0.4)`,
            }}
          >
            MA.
          </div>
          <span className="font-bold tracking-wider text-xs sm:text-sm uppercase">
            Mohamed{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
              }}
            >
              Aaseef M.
            </span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-1 transition-colors duration-300 relative ${
                  isActive ? 'font-bold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                style={{
                  color: isActive ? 'var(--theme-accent)' : undefined,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: `linear-gradient(to right, var(--theme-secondary), var(--theme-accent))`,
                      boxShadow: `0 0 10px rgba(var(--theme-accent-rgb), 0.8)`,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CONTROLS: THEME INDICATOR + RESUME BUTTON + MOBILE TOGGLE */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Subtle Dynamic Theme Selector Dots */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0C0C10]/90 border border-zinc-800 backdrop-blur-md"
            title="Theme Atmosphere"
          >
            <Palette className="w-3 h-3 text-zinc-400 mr-0.5" />
            <div className="flex items-center gap-1">
              {THEMES.map((theme, idx) => {
                const isSelected = idx === currentThemeIndex;
                return (
                  <button
                    key={theme.id}
                    onClick={() => selectTheme(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative ${
                      isSelected ? 'scale-125 z-10' : 'opacity-50 hover:opacity-100 hover:scale-110'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                      boxShadow: isSelected ? `0 0 8px ${theme.accent}` : 'none',
                    }}
                    aria-label={`Select theme: ${theme.name}`}
                    title={`${theme.name}${isSelected ? ' (Active)' : ''}`}
                  />
                );
              })}
            </div>
          </div>

          <button
            onClick={onOpenResumeModal}
            className="px-3.5 py-1.5 border rounded-full text-[10px] uppercase font-mono font-bold transition-all duration-500 flex items-center gap-1.5"
            style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.4)`,
              color: `var(--theme-accent)`,
              boxShadow: `0 0 12px rgba(var(--theme-primary-rgb), 0.2)`,
            }}
          >
            <Download className="w-3 h-3" />
            <span>Resume</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-300" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-300" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-[#0C0C10] border border-zinc-800 rounded-2xl p-4 space-y-3 shadow-2xl max-w-7xl mx-auto"
          >
            {/* Mobile Theme Dot Switcher */}
            <div className="flex items-center justify-between px-2 py-1.5 rounded-xl bg-[#050508] border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Palette className="w-3 h-3 text-[#EF4444]" />
                <span>RED THEMES</span>
              </span>
              <div className="flex items-center gap-1.5">
                {THEMES.map((theme, idx) => {
                  const isSelected = idx === currentThemeIndex;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => selectTheme(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        isSelected ? 'scale-125 ring-1 ring-white' : 'opacity-60'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                      }}
                      title={theme.name}
                    />
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-mono transition-all ${
                      isActive
                        ? 'bg-zinc-800/90 text-[#EF4444] border border-[#EF4444]/40 font-bold'
                        : 'text-zinc-300 hover:bg-zinc-800/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs uppercase font-mono font-bold tracking-widest text-white shadow-lg transition-all duration-700"
                style={{
                  background: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
