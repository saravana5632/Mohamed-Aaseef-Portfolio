import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, Mail, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadAttempt = () => {
    // Triggers download attempt to the configured resume path
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Mohamed_Aaseef_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0C0C10] w-full max-w-lg rounded-3xl border border-zinc-800 p-6 sm:p-8 space-y-6 relative shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#050508] hover:bg-red-500/20 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-2xl bg-[#050508] border border-zinc-800"
              style={{ color: `var(--theme-accent)` }}
            >
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide font-mono">Resume Download</h3>
              <p className="text-xs font-mono" style={{ color: `var(--theme-accent)` }}>Mohamed Aaseef M. - CSBS Student</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
            <p className="leading-relaxed">
              Click below to download the official resume PDF of <strong className="text-white">Mohamed Aaseef M.</strong> (B.Tech CSBS student at Panimalar Engineering College).
            </p>

            <div className="p-4 rounded-2xl bg-[#050508] border border-zinc-800 space-y-2 text-xs font-mono">
              <div className="font-semibold flex items-center justify-between" style={{ color: `var(--theme-accent)` }}>
                <span>Resume Document Target:</span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                    borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                    color: `var(--theme-accent)`,
                  }}
                >
                  PDF Format
                </span>
              </div>
              <div className="text-zinc-400 break-all text-[11px]">
                {personalInfo.resumePath}
              </div>
              <div className="text-[10px] text-zinc-500 pt-1">
                * To replace with your actual PDF file, place your resume in <code className="text-red-400">/public/assets/Mohamed_Aaseef_Resume.pdf</code>.
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="space-y-3 pt-2 font-mono">
            <button
              onClick={handleDownloadAttempt}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-all hover:brightness-110"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                boxShadow: `0 4px 20px rgba(var(--theme-primary-rgb), 0.25)`,
              }}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#050508] hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs font-semibold border border-zinc-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#050508] hover:bg-red-500/20 text-zinc-300 hover:text-white text-xs font-semibold border border-zinc-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
