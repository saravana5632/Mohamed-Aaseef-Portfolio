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
          className="bg-[#0A0F18] w-full max-w-lg rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 relative shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#030509] hover:bg-[#168BFF]/20 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#030509] border border-slate-800 text-[#00E5FF]">
              <FileText className="w-6 h-6 text-[#168BFF]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide font-mono">Resume Download</h3>
              <p className="text-xs font-mono text-[#00A8FF]">Mohamed Aaseef M. - CSBS Student</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <p className="leading-relaxed">
              Click below to download the official resume PDF of <strong className="text-white">Mohamed Aaseef M.</strong> (B.Tech CSBS student at Panimalar Engineering College).
            </p>

            <div className="p-4 rounded-2xl bg-[#030509] border border-slate-800 space-y-2 text-xs font-mono">
              <div className="text-[#00E5FF] font-semibold flex items-center justify-between">
                <span>Resume Document Target:</span>
                <span className="text-[10px] bg-[#168BFF]/10 px-2 py-0.5 rounded border border-[#168BFF]/30 text-[#00A8FF]">PDF Format</span>
              </div>
              <div className="text-slate-400 break-all text-[11px]">
                {personalInfo.resumePath}
              </div>
              <div className="text-[10px] text-slate-500 pt-1">
                * To replace with your actual PDF file, place your resume in <code className="text-[#00E5FF]">/public/assets/Mohamed_Aaseef_Resume.pdf</code>.
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="space-y-3 pt-2 font-mono">
            <button
              onClick={handleDownloadAttempt}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#FF1744] via-[#168BFF] to-[#168BFF] hover:from-[#FF2D55] hover:to-[#00A8FF] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#FF1744]/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#030509] hover:bg-[#168BFF]/20 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#030509] hover:bg-[#FF1744]/20 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF1744]" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
