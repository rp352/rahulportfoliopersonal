import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0a0c]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111115] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 text-[#f4f4f6]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-[#E25822] tracking-wider uppercase">
                  {project.badge || 'SELECTED PROJECT'}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-mono text-xs text-[#8e8e9b]">
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8e8e9b] hover:text-[#f4f4f6] hover:border-white/30 transition-all font-mono text-xs"
              >
                ✕
              </button>
            </div>

            {/* Title & Overview */}
            <div className="mt-8 mb-8">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
                {project.title}
              </h2>
              <p className="font-sans text-base text-[#9a9aa6] mt-4 leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-xs text-[#E25822] tracking-wider uppercase block mb-2">
                  01 / Problem
                </span>
                <p className="text-sm text-[#9a9aa6] leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-xs text-[#E25822] tracking-wider uppercase block mb-2">
                  02 / Solution
                </span>
                <p className="text-sm text-[#f4f4f6] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="my-8 pt-6 border-t border-white/10">
                <span className="font-mono text-xs text-[#8e8e9b] tracking-wider uppercase block mb-4">
                  Key Technical Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/[0.015] border border-white/5">
                      <h4 className="font-sans font-semibold text-sm text-[#f4f4f6] mb-1">
                        {feat.title}
                      </h4>
                      <p className="font-sans text-xs text-[#8e8e9b] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Details */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="my-8 pt-6 border-t border-white/10">
                <span className="font-mono text-xs text-[#8e8e9b] tracking-wider uppercase block mb-4">
                  Modular Architecture
                </span>
                <div className="space-y-3">
                  {project.architecture.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/[0.015] border border-white/5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <span className="font-mono text-xs text-[#E25822]">{item.title}</span>
                      <span className="font-sans text-xs text-[#9a9aa6] sm:max-w-md text-left sm:text-right">{item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags & CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="editorial-tag px-3 py-1 rounded text-xs text-[#f4f4f6]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#E25822] text-black font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#ff5500] transition-all flex items-center space-x-2"
                  >
                    <span>Visit Website</span>
                    <span>↗</span>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-mono tracking-wider uppercase hover:border-[#E25822] hover:bg-[#E25822]/10 transition-all text-[#f4f4f6] flex items-center space-x-2"
                >
                  <span>GitHub Repository</span>
                  <span className="text-[#E25822]">↗</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
