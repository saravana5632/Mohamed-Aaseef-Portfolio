import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { IntroLoader } from './components/IntroLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'certifications',
      'achievements',
      'interests',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider introComplete={!isLoading}>
      <div className="min-h-screen bg-[#050507] text-slate-100 flex flex-col selection:bg-red-600 selection:text-white relative">
        {/* Futuristic Scroll Progress Line & Telemetry Badge */}
        {!isLoading && <ScrollProgress activeSection={activeSection} />}

        {/* Full-Screen Premium Intro Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <IntroLoader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Main Portfolio Layout with Smooth Fade-Up Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 15 : 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col min-h-screen w-full"
        >
          {/* Sticky Fixed Navigation Bar */}
          <Navbar
            activeSection={activeSection}
            onOpenResumeModal={() => setResumeModalOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="flex-grow">
            <Hero
              introComplete={!isLoading}
              onOpenResumeModal={() => setResumeModalOpen(true)}
            />
            <About onOpenResumeModal={() => setResumeModalOpen(true)} />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Achievements />
            <Interests />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>

        {/* Download Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

