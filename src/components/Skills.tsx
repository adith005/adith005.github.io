'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI Engineering & NLP',
    icon: Brain,
    description: 'Generative AI architectures, retriever systems, dynamic token pruning, and real-time vision.',
    skills: [
      'LLMs',
      'RAG',
      'Agentic Workflows',
      'LangChain',
      'OpenCV',
      'CNNs',
      'Vector Search',
      'Token Optimization',
    ],
  },
  {
    title: 'Full-Stack & Cloud',
    icon: Code,
    description: 'Backend architecture, spatial API integrations, relational databases, and algorithm design.',
    skills: [
      'Python (Flask/FastAPI)',
      'SQL',
      'MySQL',
      'REST APIs',
      'Google Maps API',
      'Data Structures & Algorithms',
    ],
  },
  {
    title: 'Embedded Systems & Edge Computing',
    icon: Cpu,
    description: 'Companion computer hardware integration, autonomous flight controllers, and telemetry.',
    skills: [
      'NVIDIA Jetson Nano',
      'Raspberry Pi',
      'Pixhawk 6x',
      'MAVLink',
      'Hardware Integration',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diego VZ Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#9B1B30]/50" />
            <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
              02 / SKILLS & TECH STACK
            </span>
            <div className="h-px w-12 bg-[#9B1B30]/50" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Competencies
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A comprehensive stack spanning artificial intelligence, data engineering, full-stack backends, and edge robotics integration.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 hover:border-[#9B1B30]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#9B1B30]/10"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#9B1B30]/20 border border-[#9B1B30]/50 flex items-center justify-center text-[#C72C41] group-hover:scale-105 group-hover:bg-[#9B1B30] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#C72C41] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 my-4 group-hover:bg-[#9B1B30]/30 transition-colors" />

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E1E1E] text-zinc-200 border border-white/10 hover:border-[#9B1B30]/50 hover:text-white hover:bg-[#9B1B30]/20 transition-all duration-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#C72C41]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>{category.skills.length} core technologies</span>
                  <span className="text-[#C72C41] opacity-0 group-hover:opacity-100 transition-opacity">
                    Production Ready
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
