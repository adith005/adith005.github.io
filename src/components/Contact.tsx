'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Message sent! Thank you for reaching out.');
    setTimeout(() => setFormStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diego VZ Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#9B1B30]/50" />
            <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
              07 / GET IN TOUCH
            </span>
            <div className="h-px w-12 bg-[#9B1B30]/50" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact & Reach Out
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Interested in AI agent development, edge computer vision projects, RAG systems, or full-time opportunities? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#121212]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>

              {/* Email Box */}
              <div className="group rounded-xl bg-[#1E1E1E] p-4 border border-white/5 hover:border-[#9B1B30]/50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#9B1B30]/20 border border-[#9B1B30]/40 flex items-center justify-center text-[#C72C41]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Email</div>
                    <a
                      href="mailto:adithabhilash05@gmail.com"
                      className="text-sm font-semibold text-white hover:text-[#C72C41] transition-colors"
                    >
                      adithabhilash05@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('adithabhilash05@gmail.com', 'email')}
                  className="p-2 text-zinc-400 hover:text-[#C72C41] rounded-lg transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="group rounded-xl bg-[#1E1E1E] p-4 border border-white/5 hover:border-[#9B1B30]/50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#9B1B30]/20 border border-[#9B1B30]/40 flex items-center justify-center text-[#C72C41]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Phone</div>
                    <a
                      href="tel:9072088202"
                      className="text-sm font-semibold text-white hover:text-[#C72C41] transition-colors"
                    >
                      +91 9072088202
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('9072088202', 'phone')}
                  className="p-2 text-zinc-400 hover:text-[#C72C41] rounded-lg transition-colors"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="rounded-xl bg-[#1E1E1E] p-4 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#9B1B30]/20 border border-[#9B1B30]/40 flex items-center justify-center text-[#C72C41]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-white">Kerala, India</div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <a
                  href="https://github.com/adith005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1E1E1E] border border-white/10 hover:border-[#9B1B30]/60 text-xs font-semibold text-zinc-200 hover:text-[#C72C41] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#C72C41]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/adithabhilash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1E1E1E] border border-white/10 hover:border-[#9B1B30]/60 text-xs font-semibold text-zinc-200 hover:text-[#C72C41] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#C72C41]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-[#121212]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#1E1E1E] text-xs sm:text-sm text-white placeholder-zinc-500 rounded-xl p-3 border border-white/10 focus:border-[#9B1B30] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#1E1E1E] text-xs sm:text-sm text-white placeholder-zinc-500 rounded-xl p-3 border border-white/10 focus:border-[#9B1B30] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="AI Project Collaboration / Position Opportunity"
                  className="w-full bg-[#1E1E1E] text-xs sm:text-sm text-white placeholder-zinc-500 rounded-xl p-3 border border-white/10 focus:border-[#9B1B30] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Adith, I would love to discuss..."
                  className="w-full bg-[#1E1E1E] text-xs sm:text-sm text-white placeholder-zinc-500 rounded-xl p-3 border border-white/10 focus:border-[#9B1B30] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#9B1B30] text-white font-extrabold text-sm hover:bg-[#C72C41] transition-all duration-300 shadow-lg shadow-[#9B1B30]/30 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {formStatus && (
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-xs font-semibold text-green-400 text-center">
                  {formStatus}
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
