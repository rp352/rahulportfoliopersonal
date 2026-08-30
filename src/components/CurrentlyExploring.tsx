import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FocusArea {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  detail: string;
  tags: string[];
}

const focusAreas: FocusArea[] = [
  {
    id: 'ai',
    name: 'AI',
    category: '01 / INTELLIGENCE',
    subtitle: 'Recommendation Systems & Machine Learning',
    detail: 'Exploring interest modeling, semantic filtering, and integrating client-side AI algorithms into consumer tools.',
    tags: ['Python', 'Recommendation Logic', 'Semantic Filtering', 'LLM Workflows']
  },
  {
    id: 'web',
    name: 'WEB',
    category: '02 / PLATFORM',
    subtitle: 'Modern Scalable Frontend & Architecture',
    detail: 'Crafting responsive, high-performance web applications with semantic structure, clean UX, and modern standards.',
    tags: ['JavaScript ES6+', 'HTML5 / CSS3', 'React / TypeScript', 'Tailwind CSS']
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    category: '03 / WORKFLOWS',
    subtitle: 'Scripting & Developer Productivity',
    detail: 'Writing Python utilities and exploring visual node pipelines to eliminate repetitive digital tasks.',
    tags: ['Python Scripting', 'n8n Pipelines', 'DOM Automation', 'CLI Utilities']
  },
  {
    id: 'ui-ux',
    name: 'UI/UX',
    category: '04 / INTERFACE',
    subtitle: 'Visual Hierarchy & Interaction Design',
    detail: 'Studying typography scaling, micro-interactions, layout ergonomics, and prototyping with Figma.',
    tags: ['Figma', 'Visual Hierarchy', 'Micro-Interactions', 'Design Systems']
  },
  {
    id: 'browser-extensions',
    name: 'BROWSER EXTENSIONS',
    category: '05 / UTILITIES',
    subtitle: 'Manifest V3 & Native Browser APIs',
    detail: 'Building lightweight in-browser tools that integrate seamlessly with existing websites like YouTube to improve daily workflows.',
    tags: ['Manifest V3', 'DOM Injection', 'Storage APIs', 'Shadow DOM']
  }
];

export const CurrentlyExploring: React.FC = () => {
  const [activeArea, setActiveArea] = useState<FocusArea>(focusAreas[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="focus" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 mb-16">
        <div>
          <span className="font-mono text-xs text-[#E25822] tracking-widest uppercase mb-3 block">
            01.1 — CURIOUS STACK
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#f4f4f6]">
            CURRENTLY EXPLORING
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8e8e9b] mt-4 md:mt-0 max-w-xs">
          An editorial manifesto of subjects I study and experiment with daily.
        </p>
      </div>

      {/* Main Focus Layout: Staggered Large Words + Contextual Dynamic Spec Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Giant Staggered Words (Frame 04) */}
        <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
          {focusAreas.map((area, index) => {
            const isHovered = hoveredId === area.id;
            const isCurrentActive = activeArea.id === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  setHoveredId(area.id);
                  setActiveArea(area);
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveArea(area)}
                className="group cursor-pointer py-2 flex items-baseline justify-between border-b border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-baseline space-x-4 md:space-x-6">
                  <span className="font-mono text-xs text-[#8e8e9b] group-hover:text-[#E25822] transition-colors">
                    0{index + 1}
                  </span>
                  
                  <span
                    className={`font-display font-extrabold tracking-tight transition-all duration-300 text-3xl sm:text-5xl md:text-6xl ${
                      isHovered || isCurrentActive
                        ? 'text-[#f4f4f6] translate-x-2'
                        : 'text-[#4c4c58] hover:text-[#9a9aa6]'
                    }`}
                  >
                    {area.name}
                  </span>
                </div>

                <span className="font-mono text-xs text-[#8e8e9b] group-hover:text-[#E25822] transition-colors opacity-0 group-hover:opacity-100 hidden sm:inline-block">
                  EXPLORE ↗
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Editorial Live Inspector Card */}
        <div className="lg:col-span-5 sticky top-32">
          <motion.div
            key={activeArea.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-card p-8 rounded-xl relative overflow-hidden"
          >
            {/* Top Spec Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-mono text-xs text-[#E25822] tracking-widest uppercase">
                {activeArea.category}
              </span>
              <span className="font-mono text-[11px] text-[#8e8e9b]">
                FOCUS SPEC
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="mt-6 mb-4">
              <h3 className="font-display font-bold text-2xl text-[#f4f4f6] tracking-tight">
                {activeArea.name}
              </h3>
              <p className="font-sans text-sm text-[#E25822] mt-1 font-medium">
                {activeArea.subtitle}
              </p>
            </div>

            {/* Editorial Description */}
            <p className="font-sans text-sm text-[#9a9aa6] leading-relaxed mb-6">
              {activeArea.detail}
            </p>

            {/* Tech / Area Tags */}
            <div className="pt-6 border-t border-white/10">
              <span className="font-mono text-[10px] text-[#8e8e9b] uppercase tracking-wider block mb-3">
                Key Topics & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {activeArea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="editorial-tag px-3 py-1 rounded text-xs text-[#f4f4f6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>

    </section>
  );
};
