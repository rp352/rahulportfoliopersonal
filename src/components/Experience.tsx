import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { scrollToTarget } from '../lib/scroll';

export const Experience: React.FC = () => {
  const scrollToProjects = () => {
    scrollToTarget('#work', { offset: -60 });
  };

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 px-6 sm:px-10 md:px-12 max-w-7xl mx-auto select-none overflow-hidden"
    >
      {/* Top Section Divider */}
      <div className="w-full h-[1px] bg-white/10 mb-16 md:mb-20" />

      {/* Target Reticle Crosshair */}
      <div className="absolute left-[2%] top-[28%] w-6 h-6 pointer-events-none opacity-40 hidden lg:block">
        <div className="w-full h-full rounded-full border border-white/25 relative flex items-center justify-center">
          <div className="absolute inset-x-[-5px] top-1/2 h-[1px] bg-white/40" />
          <div className="absolute inset-y-[-5px] left-1/2 w-[1px] bg-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
        
        {/* =========================================
            LEFT COLUMN: Poster Typography, Subtitle & CTA
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 z-10">
          
          <div>
            {/* Tag: 03 — EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs tracking-wider uppercase mb-5 flex items-center space-x-2"
            >
              <span className="text-[#E25822] font-semibold">03 —</span>
              <span className="text-[#9a9aa6]">EXPERIENCE</span>
            </motion.div>

            {/* Poster Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-[-0.045em] leading-[0.96]"
            >
              <span className="text-[#ffffff] block">REAL</span>
              <span className="text-[#ffffff] block">WORLD,</span>
              <span className="text-[#ffffff] block">EVEN IF</span>
              <span className="text-[#ffffff] block">JUST</span>
              <span className="text-[#454552] block">THE</span>
              <span className="text-[#454552] block">BEGINNING</span>
            </motion.h2>

            {/* Terracotta Horizontal Accent Rule */}
            <div className="w-28 h-[2.5px] bg-[#E25822] my-6" />

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs text-[#8e8e9b] leading-relaxed max-w-xs"
            >
              Hands-on exposure to client revision cycles, real deadlines, and collaborative digital production.
            </motion.p>
          </div>

          {/* CTA: VIEW ALL PROJECTS Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center space-x-3.5 group cursor-pointer focus:outline-none"
            >
              <span className="font-mono text-xs tracking-widest text-[#f4f4f6] uppercase font-medium group-hover:text-[#E25822] transition-colors">
                VIEW ALL PROJECTS
              </span>
              <span className="w-9 h-9 rounded-full border border-[#E25822]/60 group-hover:border-[#E25822] group-hover:bg-[#E25822]/10 transition-all flex items-center justify-center text-[#E25822]">
                <span className="text-sm transform group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </button>

            {/* Geolocation Coordinates */}
            <div className="flex items-start space-x-2 font-mono text-[10px] text-[#555562] mt-8">
              <span className="text-[#8e8e9b]">+</span>
              <div>
                <div>19.2183° N</div>
                <div>72.9781° E</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* =========================================
            RIGHT COLUMN: Tactile Dossier Folder UI Component
            ========================================= */}
        <div className="lg:col-span-7 relative pt-10 sm:pt-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative transform-gpu will-change-transform"
          >
            {/* Layer 1: Distressed Cardboard Backing */}
            <div className="absolute -inset-3 bg-[#151210] rounded-3xl -rotate-1 border border-white/5 pointer-events-none opacity-80 shadow-2xl" />
            <div className="absolute -inset-1.5 bg-[#181412] rounded-3xl rotate-1 border border-white/5 pointer-events-none opacity-50 shadow-xl" />

            {/* Layer 2: Manila Top Tab */}
            <div className="absolute top-[-36px] left-6 sm:left-10 h-10 px-5 rounded-t-xl bg-[#d5bb96] text-[#1c1815] border-t border-l border-r border-[#c2a47d] font-mono text-xs font-bold tracking-wider flex items-center shadow-lg z-20">
              <span>Freelance Video Editing Support</span>
            </div>

            {/* Layer 3: Orange Postage Stamp Badge (2 MONTHS) */}
            <div className="absolute top-[-20px] right-8 sm:right-12 px-3 py-1.5 rounded-sm bg-[#E25822] text-[#ffffff] font-mono text-[9px] font-extrabold uppercase tracking-widest rotate-2 shadow-2xl border-t border-b border-[#ff6a28] z-30 flex flex-col items-center leading-none">
              <span className="text-xs font-black">2</span>
              <span className="text-[7.5px] opacity-95">MONTHS</span>
            </div>

            {/* Layer 4: Main Dossier Card Container */}
            <div className="relative rounded-2xl rounded-tl-none bg-[#111116] border border-[#2b2b38] shadow-[0_30px_70px_rgba(0,0,0,0.95)] p-5 sm:p-7 md:p-8 overflow-hidden z-10">
              
              {/* Top Subtle Amber Ambient Gradient */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#E25822]/10 via-transparent to-transparent pointer-events-none" />

              {/* Close Button in Corner */}
              <button className="absolute top-4 right-4 p-1.5 rounded-full text-[#60606e] hover:text-[#f4f4f6] transition-colors cursor-pointer">
                <X className="w-4 h-4" />
              </button>

              {/* Two-Column Interior Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-start relative z-10">
                
                {/* Left Sub-Column: Real NLE Video Timeline Simulator */}
                <div className="md:col-span-5 rounded-xl bg-black/90 border border-white/10 p-3 space-y-2.5 relative overflow-hidden shadow-inner">
                  
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#8e8e9b] pb-2 border-b border-white/10">
                    <span>PROJECT PREVIEW</span>
                    <span className="text-[#E25822]">PR_REC_01</span>
                  </div>

                  {/* Video Monitor Frame */}
                  <div className="relative rounded-lg bg-[#0d0d12] border border-white/10 aspect-video overflow-hidden flex items-center justify-center group">
                    <img
                      src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80"
                      alt="Video Editing Footage Frame"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={338}
                      className="w-full h-full object-cover opacity-80 filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                    
                    {/* Timecode overlay */}
                    <div className="absolute bottom-1.5 left-1.5 font-mono text-[8.5px] text-[#f4f4f6] bg-black/75 px-1.5 py-0.5 rounded border border-white/10">
                      00:02:14:18
                    </div>

                    {/* Green Live Indicator */}
                    <div className="absolute top-1.5 right-1.5 flex items-center space-x-1 font-mono text-[7.5px] text-[#4ade80] bg-black/75 px-1.5 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                      <span>REC</span>
                    </div>
                  </div>

                  {/* Multi-Track NLE Timeline */}
                  <div className="space-y-1 pt-1 font-mono text-[7.5px]">
                    
                    {/* Video Track V2 */}
                    <div className="flex items-center space-x-1">
                      <span className="text-[#60606e] w-3.5">V2</span>
                      <div className="flex-1 h-3 bg-white/[0.03] rounded flex items-center px-1 space-x-1">
                        <div className="w-12 h-2 rounded-[2px] bg-[#3a5ca8] text-[6.5px] text-white px-1 flex items-center">B-ROLL</div>
                        <div className="w-16 h-2 rounded-[2px] bg-[#3a5ca8] text-[6.5px] text-white px-1 flex items-center">B-ROLL_05</div>
                      </div>
                    </div>

                    {/* Video Track V1 */}
                    <div className="flex items-center space-x-1">
                      <span className="text-[#60606e] w-3.5">V1</span>
                      <div className="flex-1 h-3 bg-white/[0.03] rounded flex items-center px-1 space-x-1">
                        <div className="w-24 h-2 rounded-[2px] bg-[#8a3da8] text-[6.5px] text-white px-1 flex items-center">MAIN_A</div>
                        <div className="w-20 h-2 rounded-[2px] bg-[#8a3da8] text-[6.5px] text-white px-1 flex items-center">MAIN_B</div>
                      </div>
                    </div>

                    {/* Audio Track A1 */}
                    <div className="flex items-center space-x-1">
                      <span className="text-[#60606e] w-3.5">A1</span>
                      <div className="flex-1 h-3 bg-white/[0.03] rounded flex items-center px-1 space-x-1">
                        <div className="w-full h-2 rounded-[2px] bg-[#287a50] text-[6.5px] text-white px-1 flex items-center">DIALOGUE</div>
                      </div>
                    </div>

                    {/* Audio Track A2 */}
                    <div className="flex items-center space-x-1">
                      <span className="text-[#60606e] w-3.5">A2</span>
                      <div className="flex-1 h-3 bg-white/[0.03] rounded flex items-center px-1 space-x-1">
                        <div className="w-28 h-2 rounded-[2px] bg-[#b87028] text-[6.5px] text-white px-1 flex items-center">SFX</div>
                      </div>
                    </div>

                  </div>

                  {/* Expand HUD Icon */}
                  <div className="flex justify-end pt-0.5">
                    <Maximize2 className="w-3 h-3 text-[#60606e] hover:text-[#f4f4f6] cursor-pointer transition-colors" />
                  </div>

                </div>

                {/* Right Sub-Column: Role, Description, Takeaways, Tools */}
                <div className="md:col-span-7 space-y-4">
                  
                  <div>
                    <span className="font-mono text-xs text-[#E25822] uppercase tracking-wider block font-semibold">
                      PRACTICAL APPRENTICESHIP
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#ffffff] mt-0.5 tracking-tight">
                      Freelance Video Editing Support
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-[#a0a0ab] leading-relaxed">
                    Worked under a seasoned freelance video editor for two months, gaining hands-on practical exposure to professional video editing workflows, creative briefs, strict turnaround deadlines, client revision cycles, and digital asset organization.
                  </p>

                  {/* Practical Takeaways */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9.5px] text-[#8e8e9b] uppercase tracking-wider block font-semibold">
                      PRACTICAL TAKEAWAYS
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      <div className="p-2 rounded-lg bg-white/[0.025] border border-white/5 text-[10.5px] text-[#e0e0e8] leading-snug flex items-start space-x-1.5">
                        <span className="text-[#E25822] font-bold">•</span>
                        <span>Hands-on exposure to client revision cycles and creative briefs</span>
                      </div>

                      <div className="p-2 rounded-lg bg-white/[0.025] border border-white/5 text-[10.5px] text-[#e0e0e8] leading-snug flex items-start space-x-1.5">
                        <span className="text-[#E25822] font-bold">•</span>
                        <span>Understanding strict turnaround deadlines and asset management</span>
                      </div>

                      <div className="p-2 rounded-lg bg-white/[0.025] border border-white/5 text-[10.5px] text-[#e0e0e8] leading-snug flex items-start space-x-1.5">
                        <span className="text-[#E25822] font-bold">•</span>
                        <span>Attention to visual pacing, audio synchronization, and storytelling</span>
                      </div>

                      <div className="p-2 rounded-lg bg-white/[0.025] border border-white/5 text-[10.5px] text-[#e0e0e8] leading-snug flex items-start space-x-1.5">
                        <span className="text-[#E25822] font-bold">•</span>
                        <span>Communication skills for clarifying project requirements</span>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Workflows */}
                  <div className="space-y-1.5 pt-0.5">
                    <span className="font-mono text-[9.5px] text-[#8e8e9b] uppercase tracking-wider block font-semibold">
                      TOOLS & WORKFLOWS
                    </span>
                    <div className="flex flex-wrap gap-1 font-mono text-[9.5px]">
                      {['PREMIERE PRO', 'AFTER EFFECTS', 'PHOTOSHOP', 'ASSET MANAGEMENT'].map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[#f4f4f6]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Pagination & Barcode Bar */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 font-mono text-xs text-[#8e8e9b] relative z-10">
                <div className="flex items-center space-x-2 text-[10px] text-[#555562]">
                  <span className="tracking-widest">RP_DOSSIER_2301</span>
                </div>

                <div className="flex items-center space-x-3">
                  <ChevronLeft className="w-4 h-4 text-[#555562] hover:text-[#f4f4f6] transition-colors cursor-pointer" />
                  <span className="tracking-widest font-semibold text-[#f4f4f6]">01 / 06</span>
                  <ChevronRight className="w-4 h-4 text-[#555562] hover:text-[#f4f4f6] transition-colors cursor-pointer" />
                </div>
              </div>

            </div>

            {/* Bottom Archival Stamp Watermark */}
            <div className="absolute -bottom-6 -right-3 font-mono text-[10px] text-[#8e8e9b]/25 tracking-widest select-none pointer-events-none uppercase rotate-6">
              KEEP BUILDING // ARCHIVE
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
