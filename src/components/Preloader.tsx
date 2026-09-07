'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [statusText, setStatusText] = useState('Initializing AI Systems...');

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';

    // Status text updates
    const statusTimer1 = setTimeout(() => setStatusText('Parsing Knowledge Engine...'), 600);
    const statusTimer2 = setTimeout(() => setStatusText('Loading Neural Weights...'), 1200);
    const statusTimer3 = setTimeout(() => setStatusText('System Operational'), 1700);

    // Smooth counter progress loop
    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds loading time

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const calculatedProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(calculatedProgress);

      if (calculatedProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = '';
        }, 300);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(statusTimer1);
      clearTimeout(statusTimer2);
      clearTimeout(statusTimer3);
      cancelAnimationFrame(frameId);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 bg-[#000000] flex flex-col justify-between p-6 sm:p-12 text-white overflow-hidden border-b border-[#9B1B30]/40"
        >
          {/* Top Bar - Brand & Title */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-400 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B1B30] animate-pulse" />
              <span className="font-bold text-white tracking-wider uppercase">Adith Abhilash</span>
            </div>
            <span className="text-[#C72C41] font-semibold hidden sm:inline">
              AI & Data Science Engineer
            </span>
            <span>2026</span>
          </div>

          {/* Center - Christoph Nagel Style Giant Percentage Counter */}
          <div className="my-auto py-12 flex flex-col items-center justify-center space-y-4">
            <div className="relative font-mono text-7xl sm:text-9xl font-extrabold tracking-tighter leading-none select-none">
              <span className="burgundy-gradient-text">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="text-[#C72C41] text-4xl sm:text-6xl font-bold ml-1">%</span>
            </div>

            {/* Dynamic Burgundy Progress Line */}
            <div className="w-48 sm:w-80 h-1 bg-[#121212] rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#9B1B30] to-[#C72C41]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Bottom Bar - Status & Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Status:</span>
              <span className="text-[#C72C41] font-semibold">{statusText}</span>
            </div>

            <div className="text-zinc-500 text-[11px] sm:text-xs">
              Inspired by Christoph Nagel • Portfolio Reveal
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
