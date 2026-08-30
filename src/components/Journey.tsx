import React from 'react';
import { 
  Milestone, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Rocket, 
  Code2, 
  Award, 
  GraduationCap, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>07 // DEVELOPMENT ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            My Journey So Far
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A chronological timeline of milestones, projects built, certifications earned, and what I'm working toward next.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-emerald-400/30 hidden sm:block" />
          <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-emerald-400/30 sm:hidden" />

          <div className="space-y-10">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 z-10">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      item.isCurrent
                        ? 'bg-emerald-500 border-white shadow-[0_0_15px_#10B981] animate-bounce'
                        : 'bg-surface-100 border-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${item.isCurrent ? 'bg-black' : 'bg-cyber-cyan'}`} />
                    </div>
                  </div>

                  {/* Timeline Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-right' : 'sm:text-left'
                  }`}>
                    <div className={`glass-panel rounded-2xl p-6 border transition-all ${
                      item.isCurrent
                        ? 'border-emerald-500/40 bg-surface-100/90 shadow-lg shadow-emerald-500/10'
                        : 'border-white/10 hover:border-cyber-cyan/30'
                    }`}>
                      {/* Year & Badge */}
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                          {item.year}
                        </span>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-300 bg-surface-200 border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-base sm:text-lg text-white">
                        {item.title}
                      </h3>

                      {/* Organization / Subtitle */}
                      {item.organization && (
                        <p className="text-xs font-mono text-slate-400 mt-0.5">
                          {item.organization}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      {item.tags && (
                        <div className={`flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.06] ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}>
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] border border-white/[0.06] text-slate-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Focus Banner */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl p-6 bg-gradient-to-r from-cyber-cyan/10 via-surface-100 to-cyber-purple/10 border border-cyber-cyan/30 text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-cyber-cyan font-mono text-xs font-bold uppercase tracking-wider">
            <Rocket className="w-4 h-4" />
            Currently In Motion
          </div>
          <p className="text-slate-200 text-sm sm:text-base font-medium">
            "Building projects, learning AI, improving my development skills, and preparing to enter the world of freelancing."
          </p>
        </div>

      </div>
    </section>
  );
};
