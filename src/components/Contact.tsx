import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Loader2,
  X,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactSubmission } from '../services/contactService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const validateField = (name: string, value: string) => {
    let error = '';
    const trimmed = value.trim();

    if (name === 'name') {
      if (!trimmed) {
        error = 'Name is required.';
      } else if (trimmed.length < 2) {
        error = 'Name must be at least 2 characters long.';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmed) {
        error = 'Email address is required.';
      } else if (!emailRegex.test(trimmed)) {
        error = 'Please enter a valid email address.';
      }
    } else if (name === 'subject') {
      if (!trimmed) {
        error = 'Subject is required.';
      } else if (trimmed.length < 5) {
        error = 'Subject must be at least 5 characters long.';
      }
    } else if (name === 'message') {
      if (!trimmed) {
        error = 'Message is required.';
      } else if (trimmed.length < 15) {
        error = 'Message must be at least 15 characters long.';
      }
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    const error = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const subjectErr = validateField('subject', formData.subject);
    const messageErr = validateField('message', formData.message);

    if (nameErr || emailErr || subjectErr || messageErr) {
      setFieldErrors({
        name: nameErr,
        email: emailErr,
        subject: subjectErr,
        message: messageErr,
      });
      setStatus('error');
      setErrorMessage('Please fix the validation errors below before submitting.');
      setToast({
        type: 'error',
        message: '❌ Please check all required form fields.',
      });
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    setToast(null);

    try {
      const response = await sendContactSubmission(formData);

      if (response.success) {
        setStatus('success');
        setToast({
          type: 'success',
          message: '✅ Thank you! Your message has been sent successfully.',
        });
        // Clear all form fields automatically on success
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFieldErrors({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(response.message || 'Failed to send message. Please try again.');
        setToast({
          type: 'error',
          message: '❌ Failed to send message. Please try again.',
        });
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setToast({
        type: 'error',
        message: '❌ Failed to send message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#050507] bg-grid-pattern">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-20 right-4 sm:right-8 z-[150] max-w-md px-5 py-3.5 rounded-2xl border backdrop-blur-xl shadow-2xl font-mono text-xs flex items-center justify-between gap-3 ${
              toast.type === 'success'
                ? 'bg-[#180A0A]/90 border-red-500/40 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                : 'bg-red-950/90 border-red-600/50 text-red-200 shadow-[0_0_20px_rgba(220,38,38,0.3)]'
            }`}
          >
            <div className="flex items-center gap-2">
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: `var(--theme-accent)` }} />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              )}
              <span className="font-bold">{toast.message}</span>
            </div>
            <button
              onClick={() => setToast(null)}
              className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0C10] border text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-3 transition-all duration-700"
            style={{
              borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
              color: `var(--theme-accent)`,
              boxShadow: `0 0 12px rgba(var(--theme-primary-rgb), 0.15)`,
            }}
          >
            <MessageSquare className="w-3.5 h-3.5" style={{ color: `var(--theme-accent)` }} />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Contact{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
              }}
            >
              Mohamed Aaseef
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 uppercase tracking-wider font-mono">
            Open for internships, campus opportunities, software project discussions, and networking.
          </p>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))`,
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0C0C10] p-6 sm:p-8 rounded-3xl border border-zinc-800 space-y-6 shadow-2xl relative">
              <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2 font-mono">Contact Information</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I am always eager to connect with engineering recruiters, tech mentors, and fellow developers.
              </p>

              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#050508] border border-zinc-800 hover:border-red-500/50 transition-all group"
              >
                <div
                  className="p-3 rounded-xl border transition-colors"
                  style={{
                    backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                    borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                    color: `var(--theme-accent)`,
                  }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email Address</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors font-mono">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#050508] border border-zinc-800 hover:border-red-500/50 transition-all group"
              >
                <div
                  className="p-3 rounded-xl border transition-colors"
                  style={{
                    backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                    borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                    color: `var(--theme-accent)`,
                  }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Phone Number</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors font-mono">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#050508] border border-zinc-800">
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: `rgba(var(--theme-primary-rgb), 0.1)`,
                    borderColor: `rgba(var(--theme-primary-rgb), 0.3)`,
                    color: `var(--theme-accent)`,
                  }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Current Location</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">{personalInfo.location}</div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-zinc-800 space-y-3 font-mono">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                  Professional Profiles
                </div>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#050508] hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white text-xs font-mono uppercase font-bold tracking-wider transition-all group"
                  >
                    <Github className="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#050508] hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white text-xs font-mono uppercase font-bold tracking-wider transition-all group"
                  >
                    <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0C0C10] p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2 font-mono">Send a Direct Message</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-6">
                Fill out the form below to send an inquiry message directly. Submissions are saved automatically to Google Sheets and sent to <span className="font-mono font-bold" style={{ color: `var(--theme-accent)` }}>mmohamedaaseef@gmail.com</span>.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-2xl bg-red-950/20 border border-red-600/30 text-center space-y-4 font-mono shadow-[0_0_30px_rgba(220,38,38,0.15)]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-14 h-14 mx-auto" style={{ color: `var(--theme-accent)` }} />
                  </motion.div>
                  <h4 className="text-xl font-black text-white uppercase tracking-wider">Message Sent Successfully!</h4>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    ✅ Thank you! Your message has been saved to Google Sheets and emailed to <span className="font-bold" style={{ color: `var(--theme-accent)` }}>mmohamedaaseef@gmail.com</span>. Mohamed Aaseef will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setToast(null);
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:brightness-110"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-red-950/30 border border-red-600/60 text-red-400 text-xs font-mono flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider flex justify-between">
                        <span>Your Name <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#050508] border ${
                          fieldErrors.name
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        } focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors font-mono disabled:opacity-50 disabled:cursor-not-allowed`}
                      />
                      {fieldErrors.name && (
                        <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{fieldErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider flex justify-between">
                        <span>Your Email <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#050508] border ${
                          fieldErrors.email
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        } focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors font-mono disabled:opacity-50 disabled:cursor-not-allowed`}
                      />
                      {fieldErrors.email && (
                        <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{fieldErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider flex justify-between">
                      <span>Subject <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      disabled={status === 'submitting'}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#050508] border ${
                        fieldErrors.subject
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      } focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors font-mono disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    {fieldErrors.subject && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{fieldErrors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider flex justify-between">
                      <span>Message <span className="text-red-500">*</span></span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      disabled={status === 'submitting'}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your detailed inquiry message here (minimum 15 characters)..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#050508] border ${
                        fieldErrors.message
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      } focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 transition-colors resize-none font-mono disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    {fieldErrors.message && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{fieldErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))`,
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

