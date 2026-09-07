'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, ChevronRight, FileSpreadsheet } from 'lucide-react';
import { Experience } from '@/types';
import { fetchExperienceFromCSV } from '@/lib/csvParser';

interface ExperienceProps {
  initialExperience?: Experience[];
}

export default function ExperienceSection({ initialExperience }: ExperienceProps) {
  const [experiences, setExperiences] = useState<Experience[]>(initialExperience || []);
  const [loading, setLoading] = useState(!initialExperience || initialExperience.length === 0);

  useEffect(() => {
    if (!initialExperience || initialExperience.length === 0) {
      fetchExperienceFromCSV()
        .then((data) => {
          setExperiences(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed loading experience CSV:', err);
          setLoading(false);
        });
    }
  }, [initialExperience]);

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diego VZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
                03 / WORK EXPERIENCE
              </span>
              <div className="h-px w-12 bg-[#9B1B30]/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Professional Timeline
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Engineering roles across software development, AI model design, NLP sentiment pipelines, and document intelligence.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-[#121212] px-3.5 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            <FileSpreadsheet className="w-4 h-4 text-[#C72C41]" />
            <span>Parsed dynamically from experience.csv</span>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse bg-[#121212] rounded-2xl h-40 border border-white/10 p-6" />
            ))}
          </div>
        )}

        {/* Minimalist Timeline */}
        {!loading && (
          <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 border-l border-white/15 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id || index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] sm:-left-[37px] top-2 w-4 h-4 rounded-full bg-[#000000] border-2 border-[#9B1B30] group-hover:scale-125 group-hover:bg-[#C72C41] transition-all duration-300 shadow-md shadow-[#9B1B30]/40" />

                {/* Content Card */}
                <div className="rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 hover:border-[#9B1B30]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#9B1B30]/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#C72C41] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-zinc-300 mt-1">
                        <Building2 className="w-4 h-4 text-[#C72C41]" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#9B1B30]/20 text-[#C72C41] border border-[#9B1B30]/40 text-xs font-mono w-fit font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#C72C41]">
                    <ChevronRight className="w-4 h-4" />
                    <span>Verified Industry Experience</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
