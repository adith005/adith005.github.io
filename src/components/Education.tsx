'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, FileSpreadsheet } from 'lucide-react';
import { Education } from '@/types';
import { fetchEducationFromCSV } from '@/lib/csvParser';

interface EducationProps {
  initialEducation?: Education[];
}

export default function EducationSection({ initialEducation }: EducationProps) {
  const [educationList, setEducationList] = useState<Education[]>(initialEducation || []);
  const [loading, setLoading] = useState(!initialEducation || initialEducation.length === 0);

  useEffect(() => {
    if (!initialEducation || initialEducation.length === 0) {
      fetchEducationFromCSV()
        .then((data) => {
          setEducationList(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed loading education CSV:', err);
          setLoading(false);
        });
    }
  }, [initialEducation]);

  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diego VZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
                06 / ACADEMICS
              </span>
              <div className="h-px w-12 bg-[#9B1B30]/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education & Background
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Academic history in Artificial Intelligence, Data Science, and core fundamental sciences.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-[#121212] px-3.5 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            <FileSpreadsheet className="w-4 h-4 text-[#C72C41]" />
            <span>Parsed dynamically from education.csv</span>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-[#121212] rounded-2xl h-60 border border-white/10 p-6" />
            ))}
          </div>
        )}

        {/* Education Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationList.map((item, idx) => (
              <motion.div
                key={item.id || item.qualification}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between hover:border-[#9B1B30]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#9B1B30]/10"
              >
                <div className="space-y-4">
                  {/* Period & Marks Header */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-[#C72C41]" />
                      <span>{item.period}</span>
                    </div>

                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold text-[#C72C41] bg-[#9B1B30]/20 border border-[#9B1B30]/40">
                      {item.marks}
                    </span>
                  </div>

                  {/* Qualification Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C72C41] transition-colors leading-snug">
                    {item.qualification}
                  </h3>

                  {/* Place / Institution */}
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-zinc-200">
                      {item.place}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <MapPin className="w-3 h-3 text-[#C72C41]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed pt-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Badge */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C72C41]" />
                    <span>Verified Academic Record</span>
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
