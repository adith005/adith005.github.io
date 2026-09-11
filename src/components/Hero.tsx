'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Mail, Download, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const portfolioImages = [
  {
    src: '/data/Gemini_Generated_Image_hb7o0ahb7o0ahb7o.png',
    title: 'Primary AI & Data Science Engineer',
    subtitle: 'AI/ML engineering & Data Analysis/Science',
  },
  {
    src: '/data/Gemini_Generated_Image_2ycjqp2ycjqp2ycj.png',
    title: 'Autonomous Swarm & Vision Lead',
    subtitle: 'Robotics & Hardware Specialist',
  },
  {
    src: '/data/Gemini_Generated_Image_yh3xjyh3xjyh3xjy.png',
    title: 'RAG Architecture & NLP Engineer',
    subtitle: 'Context Optimization & Source Citation',
  },
];

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(e.clientX - (rect.left + centerX));
    y.set(e.clientY - (rect.top + centerY));

    const normalizedX = Math.max(0, Math.min(1, relX / rect.width));
    let newIndex = 0;
    if (normalizedX < 0.34) {
      newIndex = 0;
    } else if (normalizedX < 0.67) {
      newIndex = 1;
    } else {
      newIndex = 2;
    }

    setActiveImageIndex(newIndex);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    setActiveImageIndex(0);
  };

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column - Diego VZ Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Numbered Subhead (Diego VZ style) */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
                01 / INTRO & SPECIALIZATION
              </span>
              <div className="h-px w-12 bg-[#9B1B30]/50" />
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#9B1B30]/50 text-xs font-medium text-[#C72C41]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C72C41] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C72C41]" />
              </span>
              <span>Available for Software Development, AI, Data Science, and Robotics Roles</span>
            </div>

            {/* Main Headline & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                Adith Abhilash
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-300">
                <span className="text-[#C72C41] font-bold">AI & Data Science Engineer</span>
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Results-driven engineer specializing in AI agents, RAG architectures with source citation, custom NLP engines, and real-time computer vision deployed on edge companion computers.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4 items-center">
              {/* Resume Download Button */}
              <a
                href="/data/Adith_Abhilash_ATS_Resume.pdf"
                download="Adith_Abhilash_ATS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#9B1B30] text-white font-extrabold text-sm hover:bg-[#C72C41] transition-all duration-300 shadow-lg shadow-[#9B1B30]/30 flex items-center gap-2 group"
                aria-label="Download Resume"
              >
                <span>Resume</span>
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/adith005"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#121212] border border-white/15 hover:border-[#9B1B30]/70 text-zinc-200 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
              >
                <GithubIcon className="w-4 h-4 text-[#C72C41]" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://linkedin.com/in/adithabhilash"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#121212] border border-white/15 hover:border-[#9B1B30]/70 text-zinc-200 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
              >
                <LinkedinIcon className="w-4 h-4 text-[#C72C41]" />
                <span>LinkedIn</span>
              </a>

              {/* Email Quick Copy / Mail */}
              <a
                href="mailto:adithabhilash05@gmail.com"
                className="p-3 rounded-full bg-[#121212] border border-white/15 hover:border-[#9B1B30]/70 text-zinc-400 hover:text-[#C72C41] transition-all duration-300 hover:bg-white/5"
                title="Email: adithabhilash05@gmail.com"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Highlights Stats Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono leading-tight">Software Developer</div>
                <div className="text-xs text-zinc-500 mt-1">Full Stack & Web Applications</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono leading-tight">RAG & LLM</div>
                <div className="text-xs text-zinc-500 mt-1">Context Optimization and Citation</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#C72C41] font-mono leading-tight">Edge Vision</div>
                <div className="text-xs text-zinc-500 mt-1">Jetson Nano & Pixhawk</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white font-mono leading-tight">IEEE 2025</div>
                <div className="text-xs text-zinc-500 mt-1">Scopus Paper Author</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Column - Mohamed Shehata Interactive Cursor Hover & Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="perspective-1000">
              <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative rounded-3xl bg-[#121212] border border-white/15 p-4 overflow-hidden shadow-2xl shadow-black/90 group hover:border-[#9B1B30]/70 transition-colors duration-300 cursor-pointer"
              >
                {/* Image Stack Frame - Instant Opacity Layering */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                  {portfolioImages.map((img, idx) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={idx === 0}
                      className={`object-cover object-center transition-all duration-300 filter brightness-95 contrast-105 ${
                        activeImageIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}

                  {/* Gradient Overlay for Sleek Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#9B1B30]/50 text-[11px] font-mono text-[#C72C41] flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#C72C41]" />
                      <span>{isHovered ? 'Cursor Hover Active' : 'Move Cursor Over Frame'}</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
                      {activeImageIndex + 1} / {portfolioImages.length}
                    </div>
                  </div>

                  {/* Bottom Text Bar on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-left transition-all duration-200">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C72C41] transition-colors">
                      {portfolioImages[activeImageIndex].title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      {portfolioImages[activeImageIndex].subtitle}
                    </p>
                  </div>
                </div>

                {/* Mohamed Shehata Style Dynamic Hover Indicator */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-3.5 h-3.5 text-[#C72C41]" />
                    <span className="text-xs font-mono text-zinc-400">
                      {isHovered ? 'Move Cursor Across to Cycle' : 'Hover over image to interact'}
                    </span>
                  </div>

                  <div className="flex space-x-1.5">
                    {portfolioImages.map((img, idx) => (
                      <div
                        key={img.src}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeImageIndex === idx
                          ? 'w-6 bg-[#9B1B30] shadow-[0_0_8px_#9B1B30]'
                          : 'w-2 bg-zinc-700'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
