import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import ExperienceSection from '@/components/Experience';
import ProjectsSection from '@/components/Projects';
import PublicationsSection from '@/components/Publications';
import EducationSection from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundGlow from '@/components/BackgroundGlow';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import {
  fetchProjectsFromCSV,
  fetchExperienceFromCSV,
  fetchEducationFromCSV,
  fetchPublicationsFromCSV,
} from '@/lib/csvParser';

export default async function Home() {
  const [projectsData, experienceData, educationData, publicationsData] = await Promise.all([
    fetchProjectsFromCSV(),
    fetchExperienceFromCSV(),
    fetchEducationFromCSV(),
    fetchPublicationsFromCSV(),
  ]);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-[#9B1B30]/40 selection:text-white font-sans overflow-x-hidden">
      {/* Christoph Nagel Inspired Initial Loading Screen */}
      <Preloader />

      {/* NexStudio Interactive Custom Pointer Arrow */}
      <CustomCursor />

      {/* Ambient Lighting & Glow Effects */}
      <BackgroundGlow />

      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <ExperienceSection initialExperience={experienceData} />
        <ProjectsSection initialProjects={projectsData} />
        <PublicationsSection initialPublications={publicationsData} />
        <EducationSection initialEducation={educationData} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
