import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Layers,
  Package,
  Puzzle,
  X,
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface ProjectFolder {
  id: string;
  num: string;
  tabTitle: string;
  title: string;
  year: string;
  description: string;
  techStack: string[];
  icon: React.ComponentType<{ className?: string }>;
  githubUrl: string;
  liveUrl?: string;
  previewType: 'portfolio' | 'ai' | 'event' | 'cgpa' | 'weather' | 'extension';
}

const projects: ProjectFolder[] = [
  {
    id: 'portfolio-website',
    num: '01',
    tabTitle: 'Portfolio Website',
    title: 'Portfolio Website',
    year: '2026',
    description:
      'My personal editorial portfolio website built with React, Vite, Tailwind CSS, Lenis, and Motion Primitives with retro-tech brutalist aesthetics.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'TypeScript'],
    icon: Globe,
    githubUrl: 'https://github.com/rp352/ARJUN-portfolio-website',
    liveUrl: 'https://rahulpariharia.dev',
    previewType: 'portfolio',
  },
  {
    id: 'design-inspector',
    num: '02',
    tabTitle: 'Design Inspector',
    title: 'Design Inspector',
    year: '2026',
    description:
      'Design Inspector is a browser extension I built to make reverse-engineering web interfaces easier. Select an element on any webpage and instantly explore the design information behind it, from typography and colors to structure and dimensions.',
    techStack: ['JavaScript', 'Manifest V3', 'Chrome Extension APIs', 'CSS3', 'DOM APIs'],
    icon: Layers,
    githubUrl: 'https://github.com/rp352/design-inspector-',
    liveUrl: '#',
    previewType: 'extension',
  },
  {
    id: 'inventory-management',
    num: '03',
    tabTitle: 'Inventory Management',
    title: 'Inventory Management System',
    year: '2026',
    description:
      'A comprehensive inventory & logistics management platform designed to track stock levels, manage sales orders, monitor deliveries, and organize customer profiles with real-time analytics.',
    techStack: ['React 19', 'Vite', 'JavaScript', 'CSS3', 'HTML5'],
    icon: Package,
    githubUrl: 'https://github.com/rp352/project-5k',
    liveUrl: '#',
    previewType: 'portfolio',
  },
  {
    id: 'youtube-extension',
    num: '04',
    tabTitle: 'YouTube Recommendation Ext',
    title: 'YouTube Recommendation & Feed Extension',
    year: '2026',
    description:
      'Manifest V3 browser extension evaluating user viewing behavior to surface high-signal educational videos and suppress clickbait distractions.',
    techStack: ['JavaScript', 'Chrome Extension APIs', 'Manifest V3', 'HTML/CSS'],
    icon: Puzzle,
    githubUrl: 'https://github.com/rp352/youtube-doped-feed-',
    liveUrl: '#',
    previewType: 'extension',
  },
];

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectFolder | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowRight' && activeProject) {
        const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
        const nextIndex = (currentIndex + 1) % projects.length;
        setActiveProject(projects[nextIndex]);
      }
      if (e.key === 'ArrowLeft' && activeProject) {
        const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setActiveProject(projects[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  const activeIndex = activeProject
    ? projects.findIndex((p) => p.id === activeProject.id)
    : 0;

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!activeProject) return;
    if (direction === 'next') {
      const nextIndex = (activeIndex + 1) % projects.length;
      setActiveProject(projects[nextIndex]);
    } else {
      const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
      setActiveProject(projects[prevIndex]);
    }
  };

  return (
    <section id="work" className="relative py-28 md:py-36 px-6 sm:px-10 md:px-14 max-w-7xl mx-auto select-none">
      
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-14">
        
        {/* Left: Label & Title */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 font-mono text-xs tracking-wider uppercase">
            <span className="text-[#E25822] font-semibold">03 —</span>
            <span className="text-[#9a9aa6]">PROJECTS</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#ffffff] tracking-tight flex items-baseline">
            <span>Some things I've built</span>
            <span className="inline-block w-2.5 h-2.5 bg-[#E25822] ml-1.5 mb-1" />
          </h2>
        </div>

        {/* Right: Subtitle Note & Link */}
        <div className="space-y-4 max-w-sm">
          <p className="font-sans text-xs sm:text-sm text-[#8e8e9b] leading-relaxed">
            A collection of selected projects that reflect my interests, skills and curiosity.
          </p>
          <a
            href="https://github.com/rp352"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#f4f4f6] hover:text-[#E25822] transition-colors tracking-widest uppercase"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E25822]" />
          </a>
        </div>

      </div>

      {/* ===================================================
          3x2 FOLDER GRID (Morphing Popover Triggers)
          =================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.id}
              layoutId={`folder-card-${project.id}`}
              onClick={() => setActiveProject(project)}
              className="relative cursor-pointer group pt-7 transform-gpu will-change-transform"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Folder Top Tab */}
              <motion.div
                layoutId={`folder-tab-${project.id}`}
                className="absolute top-0 left-0 h-8 px-4 rounded-t-xl bg-[#181310] border-t border-l border-r border-[#E25822]/40 text-[#E25822] group-hover:bg-[#E25822] group-hover:text-black font-mono text-[11px] font-semibold tracking-wider flex items-center space-x-2 transition-all shadow-md"
              >
                <span className="truncate max-w-[180px]">{project.tabTitle}</span>
              </motion.div>

              {/* Main Folder Body */}
              <motion.div
                layoutId={`folder-body-${project.id}`}
                className="relative rounded-2xl rounded-tl-none bg-[#111116] border border-[#E25822]/30 group-hover:border-[#E25822]/70 group-hover:shadow-[0_0_25px_rgba(226,88,34,0.15)] transition-all p-6 sm:p-7 min-h-[190px] flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Amber/Terracotta Radial Top Glow */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#E25822]/15 via-[#E25822]/5 to-transparent pointer-events-none" />

                {/* Card Title Content */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-sans font-bold text-lg text-[#f4f4f6] group-hover:text-[#ffffff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#8e8e9b] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Bar: Number & Icon */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5 font-mono text-xs text-[#8e8e9b]">
                  <span className="text-[#8e8e9b] group-hover:text-[#E25822] transition-colors font-semibold">
                    {project.num}
                  </span>
                  <Icon className="w-5 h-5 text-[#8e8e9b] group-hover:text-[#E25822] transition-colors" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Geolocation Coordinate Indicator */}
      <div className="pt-10 font-mono text-[10px] text-[#555562] flex items-center space-x-2">
        <span>+ 19.2183° N / 72.9781° E</span>
      </div>

      {/* ===================================================
          MOTION PRIMITIVES MORPHING POPOVER (EXPANDED VIEW)
          =================================================== */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Morphed Folder Modal Container */}
            <motion.div
              layoutId={`folder-card-${activeProject.id}`}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-full max-w-4xl z-10 pt-8"
            >
              {/* Morphed Folder Top Tab */}
              <motion.div
                layoutId={`folder-tab-${activeProject.id}`}
                className="absolute top-0 left-0 h-9 px-6 rounded-t-xl bg-[#E25822] text-black font-mono text-xs font-bold tracking-wider flex items-center space-x-3 shadow-lg"
              >
                <span>{activeProject.tabTitle}</span>
                <span className="text-black/60 font-medium">{activeProject.num}</span>
              </motion.div>

              {/* Morphed Folder Main Body */}
              <motion.div
                layoutId={`folder-body-${activeProject.id}`}
                className="relative rounded-2xl rounded-tl-none bg-[#111116] border border-[#E25822]/60 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(226,88,34,0.2)] p-6 sm:p-8 md:p-10 overflow-hidden"
              >
                {/* Top Subtle Amber Ambient Lighting */}
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#E25822]/20 via-[#E25822]/5 to-transparent pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#E25822] hover:text-black hover:border-[#E25822] text-[#8e8e9b] transition-all cursor-pointer z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Inside Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                  
                  {/* Left Column: Rich Interactive Mockup Preview Frame */}
                  <div className="md:col-span-6 rounded-xl bg-black/60 border border-white/10 p-5 relative overflow-hidden">
                    
                    {/* Simulated Browser Frame Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="font-mono text-[9px] text-[#8e8e9b]">
                        {activeProject.id}.app
                      </span>
                    </div>

                    {/* Preview Graphic / Visual Layout */}
                    <div className="min-h-[190px] flex flex-col justify-center items-center text-center p-4 bg-white/[0.02] rounded-lg border border-white/5">
                      <activeProject.icon className="w-12 h-12 text-[#E25822] mb-3" />
                      <div className="font-display font-bold text-lg text-[#ffffff]">
                        {activeProject.title}
                      </div>
                      <div className="font-mono text-[11px] text-[#8e8e9b] mt-1">
                        BUILD_STATUS // ACTIVE & DEPLOYED
                      </div>
                      <div className="w-full h-[1px] bg-white/10 my-3" />
                      <div className="font-mono text-[10px] text-[#E25822]">
                        &gt; {activeProject.techStack.join(' • ')}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Detailed Project Information */}
                  <div className="md:col-span-6 space-y-5">
                    
                    <div>
                      <div className="flex items-center space-x-3 mb-1 font-mono text-xs text-[#8e8e9b]">
                        <span className="text-[#E25822] font-bold">{activeProject.num}</span>
                        <span>•</span>
                        <span>{activeProject.year}</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f4f4f6]">
                        {activeProject.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#a0a0ab] leading-relaxed">
                      {activeProject.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] text-[#8e8e9b] uppercase tracking-wider block">
                        TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#f4f4f6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center space-x-4 pt-2 font-mono text-xs">
                      {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-[#E25822] text-black font-semibold hover:bg-[#ff5500] transition-colors flex items-center space-x-1.5"
                        >
                          <span>Visit Project</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-white/15 hover:border-[#E25822] text-[#f4f4f6] hover:bg-[#E25822]/10 transition-all flex items-center space-x-1.5"
                      >
                        <Github className="w-3.5 h-3.5 text-[#E25822]" />
                        <span>Source Code</span>
                      </a>
                    </div>

                  </div>

                </div>

                {/* Bottom Pagination Controls */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10 font-mono text-xs text-[#8e8e9b]">
                  <button
                    onClick={() => navigateProject('prev')}
                    className="flex items-center space-x-1.5 hover:text-[#E25822] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>PREV</span>
                  </button>

                  <span className="tracking-widest font-semibold text-[#f4f4f6]">
                    {activeProject.num} / 0{projects.length}
                  </span>

                  <button
                    onClick={() => navigateProject('next')}
                    className="flex items-center space-x-1.5 hover:text-[#E25822] transition-colors cursor-pointer"
                  >
                    <span>NEXT</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
