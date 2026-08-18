import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  GraduationCap,
  Calendar,
  Layers,
  MapPin,
  Cpu,
  Database,
  Terminal,
  GitBranch,
  Sparkles,
  Zap,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Technology nodes list
const techNodes = [
  { id: 'java', name: 'Java', category: 'CODE', color: '#EF4444', position: 'top-left' },
  { id: 'cpp', name: 'C++', category: 'CODE', color: '#DC2626', position: 'top-right' },
  { id: 'python', name: 'Python', category: 'CODE', color: '#FF2E3B', position: 'left-center' },
  { id: 'react', name: 'React', category: 'WEB', color: '#F87171', position: 'right-center' },
  { id: 'nodejs', name: 'Node.js', category: 'WEB', color: '#B91C1C', position: 'bottom-left' },
  { id: 'mysql', name: 'MySQL', category: 'DATA', color: '#EF4444', position: 'bottom-right' },
  { id: 'mongodb', name: 'MongoDB', category: 'DATA', color: '#991B1B', position: 'top-center' },
  { id: 'git', name: 'Git', category: 'TOOLS', color: '#FF2E3B', position: 'bottom-center' },
];

export const DeveloperIdentityCore: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle desktop tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const tiltStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg) scale3d(1.01, 1.01, 1.01)`,
        transition: 'transform 0.15s ease-out',
      }
    : {
        transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.5s ease-out',
      };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* DESKTOP / TABLET CORE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
        style={tiltStyle}
        className="relative bg-[#0A0A0E]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-[0_0_50px_rgba(239,68,68,0.08)] overflow-hidden group"
      >
        {/* Futuristic CSS Corner Brackets */}
        <div
          className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 rounded-tl-sm pointer-events-none z-20 transition-all duration-700"
          style={{ borderColor: `var(--theme-primary)` }}
        />
        <div
          className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 rounded-tr-sm pointer-events-none z-20 transition-all duration-700"
          style={{ borderColor: `var(--theme-accent)` }}
        />
        <div
          className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl-sm pointer-events-none z-20 transition-all duration-700"
          style={{ borderColor: `var(--theme-secondary)` }}
        />
        <div
          className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 rounded-br-sm pointer-events-none z-20 transition-all duration-700"
          style={{ borderColor: `var(--theme-primary)` }}
        />

        {/* Ambient Subtle Gradient Edge Borders */}
        <div
          className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-all duration-700"
          style={{
            background: `linear-gradient(to right, rgba(var(--theme-primary-rgb),0.35), rgba(var(--theme-accent-rgb),0.25), rgba(var(--theme-secondary-rgb),0.35))`,
          }}
        />

        {/* Horizontal Scanning Light Beam Effect */}
        <div
          className="absolute left-0 right-0 h-20 blur-md -translate-y-full animate-[scan_8s_infinite_linear] pointer-events-none z-0 transition-all duration-700"
          style={{
            background: `linear-gradient(to bottom, transparent, rgba(var(--theme-accent-rgb),0.12), transparent)`,
          }}
        />

        {/* Ambient Background Radial Glows */}
        <div
          className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-700"
          style={{ background: `rgba(var(--theme-primary-rgb), 0.15)` }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-700"
          style={{ background: `rgba(var(--theme-secondary-rgb), 0.15)` }}
        />

        {/* Top Header Labels & DEV.OS Micro Panel */}
        <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/80 relative z-10 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse transition-colors duration-700"
              style={{ backgroundColor: `var(--theme-accent)` }}
            />
            <span className="text-zinc-300 font-bold">DEV.OS // MA_CORE</span>
          </div>

          <div
            className="px-2.5 py-1 rounded-full bg-[#050508] border flex items-center gap-1.5 transition-all duration-700"
            style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
              boxShadow: `0 0 10px rgba(var(--theme-primary-rgb), 0.1)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: `var(--theme-accent)` }} />
            <span className="text-[9px] font-bold tracking-wider" style={{ color: `var(--theme-accent)` }}>
              SYSTEM // ONLINE
            </span>
          </div>
        </div>

        {/* CENTRAL IDENTITY CORE AREA */}
        <div className="relative my-8 py-6 flex flex-col items-center justify-center z-10">
          
          {/* Subtle Connection Lines SVG Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30">
            <defs>
              <linearGradient id="lineGradDynamic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--theme-primary)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="var(--theme-accent)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--theme-secondary)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Connecting radial lines */}
            <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGradDynamic)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#lineGradDynamic)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="url(#lineGradDynamic)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="url(#lineGradDynamic)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="20%" y2="85%" stroke="url(#lineGradDynamic)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="url(#lineGradDynamic)" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* CENTRAL MA INITIALS WITH ROTATING RINGS */}
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 my-2">
            
            {/* Outer Slow Rotating Ring 1 */}
            <div
              className="absolute inset-0 rounded-full border border-dashed animate-[spin_24s_linear_infinite] transition-all duration-700"
              style={{ borderColor: `rgba(var(--theme-primary-rgb), 0.4)` }}
            />

            {/* Middle Reverse Rotating Ring 2 */}
            <div
              className="absolute -inset-2 rounded-full border border-l-transparent border-r-transparent animate-[spin_18s_linear_infinite_reverse] opacity-80 transition-all duration-700"
              style={{
                borderTopColor: `var(--theme-accent)`,
                borderBottomColor: `var(--theme-secondary)`,
              }}
            />

            {/* Inner Glow Ring 3 */}
            <div
              className="absolute -inset-4 rounded-full border animate-pulse transition-all duration-700"
              style={{ borderColor: `rgba(var(--theme-primary-rgb), 0.25)` }}
            />

            {/* Central Glow Orb */}
            <div
              className="absolute inset-2 rounded-full blur-md transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb),0.25), rgba(var(--theme-accent-rgb),0.2), rgba(var(--theme-secondary-rgb),0.25))`,
              }}
            />

            {/* Central MA Core Circle */}
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#08080C] border flex flex-col items-center justify-center z-10 group-hover:scale-105 transition-all duration-700"
              style={{
                borderColor: `rgba(var(--theme-accent-rgb), 0.5)`,
                boxShadow: `0 0 25px rgba(var(--theme-primary-rgb), 0.35)`,
              }}
            >
              <span
                className="font-black text-2xl sm:text-3xl text-transparent bg-clip-text tracking-tighter transition-all duration-700"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary), var(--theme-accent))`,
                }}
              >
                MA
              </span>
              <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">
                DEV_CORE
              </span>
            </div>
          </div>

          {/* DEVELOPER NAME & STATUS */}
          <div className="mt-4 text-center space-y-1 z-10">
            <h2 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wider">
              Mohamed Aaseef M.
            </h2>
            <p
              className="text-xs font-mono uppercase tracking-widest font-semibold transition-colors duration-700"
              style={{ color: `var(--theme-primary)` }}
            >
              CSBS STUDENT • WEB DEVELOPER
            </p>

            {/* Open to Opportunities Status */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest mt-2 transition-all duration-700"
              style={{
                backgroundColor: `rgba(var(--theme-accent-rgb), 0.1)`,
                borderColor: `rgba(var(--theme-accent-rgb), 0.35)`,
                color: `var(--theme-accent)`,
                boxShadow: `0 0 15px rgba(var(--theme-accent-rgb), 0.2)`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-ping transition-colors duration-700"
                style={{ backgroundColor: `var(--theme-accent)` }}
              />
              <span>● OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {/* FLOATING TECH NODES SURROUNDING THE CORE */}
          <div className="hidden sm:block absolute inset-0 pointer-events-none z-20">
            {/* Top Left: Java */}
            <div
              onMouseEnter={() => setHoveredNode('java')}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-2 left-4 pointer-events-auto transition-transform hover:scale-110 cursor-pointer"
            >
              <div
                className="px-2.5 py-1 rounded-lg bg-[#0E0E12]/90 border text-[10px] font-mono text-zinc-200 shadow-lg flex items-center gap-1.5 backdrop-blur-md transition-colors duration-700"
                style={{ borderColor: `rgba(var(--theme-primary-rgb), 0.4)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: `var(--theme-primary)` }} />
                <span>Java</span>
              </div>
            </div>

            {/* Top Right: C++ */}
            <div
              onMouseEnter={() => setHoveredNode('cpp')}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-2 right-4 pointer-events-auto transition-transform hover:scale-110 cursor-pointer"
            >
              <div
                className="px-2.5 py-1 rounded-lg bg-[#0E0E12]/90 border text-[10px] font-mono text-zinc-200 shadow-lg flex items-center gap-1.5 backdrop-blur-md transition-colors duration-700"
                style={{ borderColor: `rgba(var(--theme-accent-rgb), 0.4)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: `var(--theme-accent)` }} />
                <span>C++</span>
              </div>
            </div>

            {/* Middle Left: Python */}
            <div
              onMouseEnter={() => setHoveredNode('python')}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-auto transition-transform hover:scale-110 cursor-pointer"
            >
              <div
                className="px-2.5 py-1 rounded-lg bg-[#0E0E12]/90 border text-[10px] font-mono text-zinc-200 shadow-lg flex items-center gap-1.5 backdrop-blur-md transition-colors duration-700"
                style={{ borderColor: `rgba(var(--theme-primary-rgb), 0.4)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: `var(--theme-primary)` }} />
                <span>Python</span>
              </div>
            </div>

            {/* Middle Right: React */}
            <div
              onMouseEnter={() => setHoveredNode('react')}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-auto transition-transform hover:scale-110 cursor-pointer"
            >
              <div
                className="px-2.5 py-1 rounded-lg bg-[#0E0E12]/90 border text-[10px] font-mono text-zinc-200 shadow-lg flex items-center gap-1.5 backdrop-blur-md transition-colors duration-700"
                style={{ borderColor: `rgba(var(--theme-accent-rgb), 0.4)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: `var(--theme-accent)` }} />
                <span>React</span>
              </div>
            </div>

            {/* Bottom Left: Node.js */}
            <div
              onMouseEnter={() => setHoveredNode('nodejs')}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute bottom-4 left-6 pointer-events-auto transition-transform hover:scale-110 cursor-pointer"
            >
              <div
                className="px-2.5 py-1 rounded-lg bg-[#0E0E12]/90 border text-[10px] font-mono text-zinc-200 shadow-lg flex items-center gap-1.5 backdrop-blur-md transition-colors duration-700"
                style={{ borderColor: `rgba(var(--theme-accent-rgb), 0.4)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: `var(--theme-accent)` }} />
                <span>Node.js</span>
              </div>
            </div>

            {/* Bottom Right: MySQL */}
            <div
              onMouseEnter={() => setHoveredNode('mysql')}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute bottom-4 right-6 pointer-events-auto transition-transform hover:scale-110 cursor-pointer"
            >
              <div
                className="px-2.5 py-1 rounded-lg bg-[#0E0E12]/90 border text-[10px] font-mono text-zinc-200 shadow-lg flex items-center gap-1.5 backdrop-blur-md transition-colors duration-700"
                style={{ borderColor: `rgba(var(--theme-secondary-rgb), 0.4)` }}
              >
                <span className="w-1.5 h-1.5 rounded-full transition-colors duration-700" style={{ backgroundColor: `var(--theme-secondary)` }} />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY RING INDICATOR */}
        <div className="flex items-center justify-center gap-2 py-2 border-y border-zinc-800/80 my-4 text-[9px] font-mono uppercase tracking-widest text-zinc-400 z-10 relative">
          <span style={{ color: `var(--theme-primary)` }} className="font-bold transition-colors duration-700">CODE</span>
          <span className="text-zinc-600">•</span>
          <span style={{ color: `var(--theme-accent)` }} className="font-bold transition-colors duration-700">WEB</span>
          <span className="text-zinc-600">•</span>
          <span style={{ color: `var(--theme-primary)` }} className="font-bold transition-colors duration-700">DATA</span>
          <span className="text-zinc-600">•</span>
          <span style={{ color: `var(--theme-secondary)` }} className="font-bold transition-colors duration-700">TOOLS</span>
        </div>

        {/* IDENTITY INFORMATION MODULES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10 pt-2">
          {/* Education */}
          <div className="p-3 rounded-2xl bg-[#0D0D12]/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="text-[9px] font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-1 transition-colors duration-700" style={{ color: `var(--theme-primary)` }}>
              <GraduationCap className="w-3 h-3" />
              <span>EDUCATION</span>
            </div>
            <div className="text-xs font-extrabold text-white leading-tight">B.Tech CSBS</div>
            <div className="text-[9px] font-mono text-zinc-400 mt-0.5 truncate">Panimalar EC</div>
          </div>

          {/* Current Status */}
          <div className="p-3 rounded-2xl bg-[#0D0D12]/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="text-[9px] font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-1 transition-colors duration-700" style={{ color: `var(--theme-accent)` }}>
              <Calendar className="w-3 h-3" />
              <span>CURRENT</span>
            </div>
            <div className="text-xs font-extrabold text-white leading-tight">3rd Year</div>
            <div className="text-[9px] font-mono text-zinc-400 mt-0.5">5th Semester</div>
          </div>

          {/* Graduation */}
          <div className="p-3 rounded-2xl bg-[#0D0D12]/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="text-[9px] font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-1 transition-colors duration-700" style={{ color: `var(--theme-primary)` }}>
              <Layers className="w-3 h-3" />
              <span>GRADUATING</span>
            </div>
            <div className="text-xs font-extrabold text-white leading-tight">2028</div>
            <div className="text-[9px] font-mono text-zinc-400 mt-0.5">Expected</div>
          </div>

          {/* Focus */}
          <div className="p-3 rounded-2xl bg-[#0D0D12]/90 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="text-[9px] font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-1 transition-colors duration-700" style={{ color: `var(--theme-secondary)` }}>
              <Zap className="w-3 h-3" />
              <span>FOCUS</span>
            </div>
            <div className="text-xs font-extrabold text-white leading-tight">Full Stack</div>
            <div className="text-[9px] font-mono text-zinc-400 mt-0.5">Software Dev</div>
          </div>
        </div>

        {/* SYSTEM FOOTER LABELS */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[9px] font-mono text-zinc-500 uppercase tracking-widest relative z-10">
          <span>STATUS // LEARNING</span>
          <span>LOCATION // CHENNAI</span>
          <span>ROLE // STUDENT_DEV</span>
        </div>
      </motion.div>
    </div>
  );
};
