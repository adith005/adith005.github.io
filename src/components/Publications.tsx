'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Users, Building, Sparkles, FileSpreadsheet } from 'lucide-react';
import { Publication } from '@/types';
import { fetchPublicationsFromCSV } from '@/lib/csvParser';

interface PublicationsProps {
  initialPublications?: Publication[];
}

export default function PublicationsSection({ initialPublications }: PublicationsProps) {
  const [publications, setPublications] = useState<Publication[]>(initialPublications || []);
  const [loading, setLoading] = useState(!initialPublications || initialPublications.length === 0);

  useEffect(() => {
    if (!initialPublications || initialPublications.length === 0) {
      fetchPublicationsFromCSV()
        .then((data) => {
          setPublications(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed loading publication CSV:', err);
          setLoading(false);
        });
    }
  }, [initialPublications]);

  return (
    <section id="publications" className="py-24 relative z-10 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diego VZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
                05 / RESEARCH & PAPERS
              </span>
              <div className="h-px w-12 bg-[#9B1B30]/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Publications
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Peer-reviewed conference publications in artificial intelligence, neural modeling, and epidemiological simulation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-[#121212] px-3.5 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            <FileSpreadsheet className="w-4 h-4 text-[#C72C41]" />
            <span>Parsed dynamically from publication.csv</span>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {[1].map((i) => (
              <div key={i} className="animate-pulse bg-[#121212] rounded-2xl h-56 border border-white/10 p-8" />
            ))}
          </div>
        )}

        {/* Publications Grid / Cards */}
        {!loading && (
          <div className="space-y-8 max-w-5xl mx-auto">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 hover:border-[#9B1B30]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9B1B30]/10"
              >
                {/* Top Row: IEEE Badge & Paper Index */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-[#9B1B30] shadow-sm">
                      {pub.publisher || 'IEEE'} Scopus Indexed
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/5 border border-white/10">
                      {pub.year}
                    </span>
                  </div>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1E1E] border border-white/10 text-xs font-semibold text-[#C72C41] hover:bg-[#9B1B30] hover:text-white transition-all duration-300 group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View on IEEE Xplore</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Paper Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#C72C41] transition-colors leading-snug mb-3">
                  {pub.name}
                </h3>

                {/* Conference Info */}
                {pub.conference && (
                  <div className="flex items-start sm:items-center gap-2 text-xs font-medium text-rose-200/90 mb-4 bg-[#1E1E1E]/80 px-3.5 py-2 rounded-xl border border-[#9B1B30]/30 w-fit">
                    <Building className="w-3.5 h-3.5 text-[#C72C41] shrink-0 mt-0.5 sm:mt-0" />
                    <span>{pub.conference}</span>
                  </div>
                )}

                {/* Abstract / Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {pub.description}
                </p>

                {/* Authors List & Footer Details */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-start gap-2 text-zinc-400">
                    <Users className="w-4 h-4 text-[#C72C41] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-zinc-500 mr-2">Authors:</span>
                      <span className="text-zinc-300">{pub.authors}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[#C72C41] font-mono text-[11px] shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>29th IEEE Scopus Publication</span>
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
