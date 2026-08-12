import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  ShieldAlert,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle,
  Cpu,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const displayedFeatures = showAllFeatures ? project.features : project.features.slice(0, 9);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#0A0F18] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl relative group transition-all duration-300"
    >
      {/* Gradient Outline Border */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#168BFF]/40 via-[#00E5FF]/30 to-[#FF1744]/40 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Mouse Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(22,139,255,0.08), transparent 40%)`,
          }}
        />
      )}

      {/* Featured Header Ribbon */}
      <div className="bg-[#030509] px-6 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 relative z-10 font-mono">
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] px-2.5 py-1 rounded-md uppercase tracking-wider border font-bold transition-all duration-700"
            style={{
              backgroundColor: `rgba(var(--theme-secondary-rgb), 0.15)`,
              color: `var(--theme-secondary)`,
              borderColor: `rgba(var(--theme-secondary-rgb), 0.35)`,
            }}
          >
            PROJECT // 001
          </span>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest hidden sm:inline">
            FEATURED ENGINEERING BUILD
          </span>
        </div>
        <div className="text-right text-[10px] tracking-widest uppercase flex items-center gap-2">
          <span className="text-slate-400">STATUS:</span>
          <span style={{ color: `var(--theme-accent)` }} className="font-bold">DEVELOPMENT</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8 relative z-10">
        
        {/* Title & Links */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              {project.title}
            </h3>
            <p className="text-xs mt-1 uppercase tracking-widest font-mono font-bold" style={{ color: `var(--theme-accent)` }}>
              AI-POWERED COMMUNITY PROBLEM → STARTUP OPPORTUNITY PLATFORM
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest text-white transition-all shadow-lg flex items-center gap-2"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                }}
              >
                <Github className="w-4 h-4" />
                <span>Explore Repository</span>
              </a>
            )}

            <span className="px-4 py-2.5 border border-slate-800 rounded-xl text-slate-500 font-mono text-[10px] uppercase tracking-widest bg-[#030509]">
              Live Demo Coming Soon
            </span>
          </div>
        </div>

        {/* PROJECT ARCHITECTURE VISUAL FLOW */}
        <div
          className="p-4 rounded-2xl bg-[#03060B] border font-mono text-[10px] space-y-2 transition-all duration-700"
          style={{ borderColor: `rgba(var(--theme-primary-rgb), 0.3)` }}
        >
          <div className="text-slate-400 uppercase tracking-widest flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: `var(--theme-accent)` }} />
            <span>SYSTEM ARCHITECTURE VISUAL FLOW</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-center text-slate-200">
            <div className="px-3 py-1.5 rounded-lg bg-[#080D18] border border-slate-800 flex-1 min-w-[100px]">
              <span className="text-slate-400 block text-[8px] uppercase">STEP 01</span>
              <span className="font-bold text-white">Community</span>
            </div>
            <span style={{ color: `var(--theme-accent)` }}>→</span>
            <div className="px-3 py-1.5 rounded-lg bg-[#080D18] border border-slate-800 flex-1 min-w-[100px]">
              <span className="text-slate-400 block text-[8px] uppercase">STEP 02</span>
              <span className="font-bold text-white">Problem Report</span>
            </div>
            <span style={{ color: `var(--theme-accent)` }}>→</span>
            <div className="px-3 py-1.5 rounded-lg bg-[#080D18] border border-slate-800 flex-1 min-w-[100px]" style={{ borderColor: `rgba(var(--theme-primary-rgb), 0.5)` }}>
              <span className="text-slate-400 block text-[8px] uppercase">STEP 03</span>
              <span className="font-bold" style={{ color: `var(--theme-accent)` }}>AI Analysis</span>
            </div>
            <span style={{ color: `var(--theme-accent)` }}>→</span>
            <div className="px-3 py-1.5 rounded-lg bg-[#080D18] border border-slate-800 flex-1 min-w-[100px]">
              <span className="text-slate-400 block text-[8px] uppercase">STEP 04</span>
              <span className="font-bold text-white">Admin Verification</span>
            </div>
            <span style={{ color: `var(--theme-accent)` }}>→</span>
            <div className="px-3 py-1.5 rounded-lg bg-[#080D18] border border-slate-800 flex-1 min-w-[100px]" style={{ borderColor: `rgba(var(--theme-secondary-rgb), 0.5)` }}>
              <span className="text-slate-400 block text-[8px] uppercase">STEP 05</span>
              <span className="font-bold" style={{ color: `var(--theme-secondary)` }}>Startup Opportunity</span>
            </div>
          </div>
        </div>

        {/* Top Split: Interactive Screenshot Placeholder & Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Futuristic Visual Mockup Placeholder */}
          <div className="lg:col-span-6">
            <div className="bg-[#030509] p-4 rounded-2xl border border-slate-800 relative overflow-hidden group-hover:border-[#168BFF]/50 transition-all shadow-inner">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF1744]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" />
                  <span className="ml-2 text-slate-400">problemchain.app/dashboard</span>
                </div>
                <span className="text-[9px] text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-0.5 rounded border border-[#00E5FF]/30 font-bold uppercase">
                  AI Verified
                </span>
              </div>

              {/* Graphic Mockup Dashboard Canvas */}
              <div className="relative aspect-video rounded-xl bg-[#080D18] border border-slate-800 p-4 flex flex-col justify-between">
                
                {/* Top UI Header Bar */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span className="text-[#FF1744] font-bold flex items-center gap-1 uppercase">
                    <MapPin className="w-3 h-3 text-[#00E5FF]" /> Community Issue Heatmap
                  </span>
                  <span className="text-slate-400 uppercase">Chennai Region</span>
                </div>

                {/* Simulated Map / Heatmap Graphic */}
                <div className="my-2 py-3 px-3 rounded-xl bg-[#030509] border border-slate-800 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 rounded bg-[#FF1744]/10 border border-[#FF1744]/20 text-[#FF2D55]">
                    <div className="text-[9px] text-slate-400 uppercase">EV Chargers</div>
                    <div className="font-bold text-white text-xs mt-0.5">High Demand</div>
                  </div>
                  <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <div className="text-[9px] text-slate-400 uppercase">Pharmacy Gap</div>
                    <div className="font-bold text-white text-xs mt-0.5">Verified</div>
                  </div>
                  <div className="p-2 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF]">
                    <div className="text-[9px] text-slate-400 uppercase">Startup Opp</div>
                    <div className="font-bold text-white text-xs mt-0.5">Unlocked</div>
                  </div>
                </div>

                {/* Bottom Placeholder Notice */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <ImageIcon className="w-3.5 h-3.5 text-[#168BFF]" />
                    <span>Project Screenshot Interface</span>
                  </span>
                  <span className="text-[9px] text-[#00E5FF] uppercase">Interactive</span>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-slate-500 font-mono text-center uppercase tracking-wider">
                * Real project screenshot can be added to <code className="text-[#00E5FF]">/public/assets/</code>
              </div>
            </div>
          </div>

          {/* Project Description & Why We Created It */}
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-300">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#168BFF] mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Project Description</span>
              </div>
              <p className="leading-relaxed">{project.description}</p>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#FF1744] mb-2 flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-[#FF2D55]" />
                <span>Why We Created It</span>
              </div>
              <p className="leading-relaxed text-slate-400">{project.whyCreated}</p>
            </div>
          </div>

        </div>

        {/* My Role Subsection */}
        <div className="p-6 rounded-2xl bg-[#030509] border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest font-bold">
                My Role
              </span>
              <h4 className="text-base font-bold text-white uppercase tracking-wide font-mono">{project.myRoleTitle}</h4>
            </div>
            <span className="px-3 py-1 rounded-md bg-[#168BFF]/10 text-[#00A8FF] border border-[#168BFF]/30 text-[10px] font-mono uppercase tracking-wider">
              Team Documentation &amp; Presentation
            </span>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
            Responsibilities &amp; Key Contributions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {project.myRoleResponsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-300 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 shrink-0" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used Badges */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#168BFF] flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Technologies Arsenal</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#030509] border border-slate-800 rounded text-[9px] font-mono text-slate-300 uppercase tracking-wider hover:border-[#168BFF]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="space-y-3 pt-2 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#FF1744] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Key Innovations ({project.features.length})</span>
            </div>

            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-[10px] font-mono text-[#00A8FF] hover:text-[#00E5FF] flex items-center gap-1 uppercase tracking-wider transition-colors"
            >
              <span>{showAllFeatures ? 'Show Less' : `View All (${project.features.length})`}</span>
              {showAllFeatures ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {displayedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-[#030509] border border-slate-800 text-xs text-slate-300 flex items-center gap-2 font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
