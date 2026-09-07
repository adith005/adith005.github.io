'use client';

import React from 'react';
import { ArrowUp, Mail, Phone, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#070708] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
          
          {/* Brand & Name */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#9B1B30]/20 border border-[#9B1B30]/40 flex items-center justify-center text-[#C72C41]">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                Adith Abhilash
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              AI & Data Science Engineer specializing in RAG architectures with source citations, autonomous companion-computer vision swarms, and custom NLP engines.
            </p>
          </div>

          {/* Quick Contact & Socials */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4 text-xs font-mono">
            <a
              href="mailto:adithabhilash05@gmail.com"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#C72C41] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C72C41]" />
              <span>adithabhilash05@gmail.com</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href="tel:9072088202"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#C72C41] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C72C41]" />
              <span>+91 9072088202</span>
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Adith Abhilash. All rights reserved. Sleek Burgundy Portfolio.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/adith005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C72C41] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/adithabhilash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C72C41] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#121212] border border-white/10 hover:border-[#9B1B30]/60 text-zinc-400 hover:text-[#C72C41] transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
