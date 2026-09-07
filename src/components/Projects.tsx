'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Search, FileSpreadsheet, Tag } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { Project } from '@/types';
import { fetchProjectsFromCSV } from '@/lib/csvParser';

interface ProjectsProps {
  initialProjects?: Project[];
}

export default function ProjectsSection({ initialProjects }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects || []);
  const [loading, setLoading] = useState(!initialProjects || initialProjects.length === 0);
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (!initialProjects || initialProjects.length === 0) {
      fetchProjectsFromCSV()
        .then((data) => {
          setProjects(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed loading projects CSV:', err);
          setLoading(false);
        });
    }
  }, [initialProjects]);

  const allTechTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((proj) => {
      if (proj.tech_stack) {
        proj.tech_stack.split(',').forEach((t) => tagsSet.add(t.trim()));
      }
    });
    return ['All', ...Array.from(tagsSet)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesTech =
        selectedTech === 'All' ||
        (proj.tech_stack && proj.tech_stack.toLowerCase().includes(selectedTech.toLowerCase()));
      
      const matchesQuery =
        searchQuery === '' ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.tech_stack && proj.tech_stack.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTech && matchesQuery;
    });
  }, [projects, selectedTech, searchQuery]);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diego VZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#C72C41] tracking-widest uppercase">
                04 / FEATURED PROJECTS
              </span>
              <div className="h-px w-12 bg-[#9B1B30]/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Showcase
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Systems engineered across context window optimization, computer vision on Jetson hardware, enterprise RAG, and neural simulation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-[#121212] px-3.5 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            <FileSpreadsheet className="w-4 h-4 text-[#C72C41]" />
            <span>Parsed dynamically from projects.csv</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#121212] p-4 rounded-2xl border border-white/10">
          {/* Tech Tag Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Tag className="w-4 h-4 text-[#C72C41] shrink-0 hidden sm:block ml-1" />
            {allTechTags.slice(0, 7).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedTech === tech
                    ? 'bg-[#9B1B30] text-white font-extrabold shadow-md shadow-[#9B1B30]/30'
                    : 'bg-[#1E1E1E] text-zinc-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative shrink-0 w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1E1E1E] text-xs text-white placeholder-zinc-500 rounded-xl pl-9 pr-3 py-2 border border-white/10 focus:border-[#9B1B30] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-[#121212] rounded-2xl h-64 border border-white/10 p-6" />
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const techTags = project.tech_stack ? project.tech_stack.split(',').map((t) => t.trim()) : [];
              
              return (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between hover:border-[#9B1B30]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9B1B30]/10"
                >
                  <div className="space-y-4">
                    {/* Top Row: Index Badge & GitHub Link */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#C72C41] px-2.5 py-1 rounded-md bg-[#9B1B30]/20 border border-[#9B1B30]/40 font-bold">
                        Project #{String(index + 1).padStart(2, '0')}
                      </span>

                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-zinc-400 hover:text-[#C72C41] hover:bg-[#9B1B30]/20 rounded-lg border border-white/10 transition-colors"
                          title="View Repository on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#C72C41] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tech Tags & Links */}
                  <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                    {/* Tech Stack Tags with Burgundy Outlines */}
                    <div className="flex flex-wrap gap-1.5">
                      {techTags.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-[#9B1B30]/40 text-[#C72C41] bg-[#9B1B30]/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-1">
                      {project.github_url ? (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#C72C41] transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-[#C72C41]" />
                          <span>View Code</span>
                        </a>
                      ) : (
                        <span className="text-xs text-zinc-600 font-mono">Private Repo</span>
                      )}

                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#C72C41] hover:underline"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#121212] rounded-2xl border border-white/10">
            <Sparkles className="w-8 h-8 text-[#C72C41] mx-auto mb-3 opacity-60" />
            <p className="text-zinc-400 text-sm">No projects matching your search filter.</p>
            <button
              onClick={() => { setSelectedTech('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#C72C41] underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
