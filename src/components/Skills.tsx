import React, { useState } from 'react';
import { 
  Terminal, 
  FileCode, 
  Binary, 
  FileText, 
  Palette, 
  Zap, 
  Figma, 
  Layout, 
  GitBranch, 
  Github, 
  Cloud, 
  Code, 
  Workflow, 
  Puzzle, 
  Globe, 
  Brain, 
  Cpu, 
  Layers,
  Sparkles,
  Filter,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, SkillLevel } from '../types';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | SkillLevel>('all');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Programming',
    'Web Development',
    'Design & UI/UX',
    'Tools & Platforms',
    'Areas of Interest'
  ];

  const getSkillIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Terminal': return <Terminal {...props} className="w-5 h-5 text-emerald-400" />;
      case 'FileCode': return <FileCode {...props} className="w-5 h-5 text-blue-400" />;
      case 'Binary': return <Binary {...props} className="w-5 h-5 text-cyan-400" />;
      case 'FileText': return <FileText {...props} className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <Palette {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Zap': return <Zap {...props} className="w-5 h-5 text-amber-400" />;
      case 'Figma': return <Figma {...props} className="w-5 h-5 text-pink-400" />;
      case 'Layout': return <Layout {...props} className="w-5 h-5 text-purple-400" />;
      case 'GitBranch': return <GitBranch {...props} className="w-5 h-5 text-red-400" />;
      case 'Github': return <Github {...props} className="w-5 h-5 text-slate-200" />;
      case 'Cloud': return <Cloud {...props} className="w-5 h-5 text-sky-400" />;
      case 'Code': return <Code {...props} className="w-5 h-5 text-blue-400" />;
      case 'Workflow': return <Workflow {...props} className="w-5 h-5 text-violet-400" />;
      case 'Puzzle': return <Puzzle {...props} className="w-5 h-5 text-cyber-cyan" />;
      case 'Globe': return <Globe {...props} className="w-5 h-5 text-teal-400" />;
      case 'Brain': return <Brain {...props} className="w-5 h-5 text-fuchsia-400" />;
      case 'Cpu': return <Cpu {...props} className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles {...props} className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesLevel = selectedFilter === 'all' || skill.level === selectedFilter;
    const matchesCat = activeCategory === 'All' || skill.category === activeCategory;
    return matchesLevel && matchesCat;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-surface-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A transparent overview of the technologies I'm comfortable using and the areas I'm actively exploring.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          
          {/* Level Filter Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-surface-100 border border-white/[0.08]">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white/10 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills ({skillsData.length})
            </button>
            <button
              onClick={() => setSelectedFilter('comfortable')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                selectedFilter === 'comfortable'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Comfortable With
            </button>
            <button
              onClick={() => setSelectedFilter('exploring')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                selectedFilter === 'exploring'
                  ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3 h-3 text-cyber-cyan" />
              Currently Exploring
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-cyber-cyan/15 border-cyber-cyan/40 text-cyber-cyan font-medium'
                    : 'bg-surface-200/50 border-white/[0.05] text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const isComfortable = skill.level === 'comfortable';
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between space-y-3 group"
              >
                {/* Header: Icon + Category + Level Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-surface-200 border border-white/[0.08] group-hover:border-cyber-cyan/40 transition-colors">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                      isComfortable
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                        : 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30'
                    }`}
                  >
                    {isComfortable ? (
                      <>
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                        Comfortable
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-2.5 h-2.5 text-cyber-cyan" />
                        Exploring
                      </>
                    )}
                  </span>
                </div>

                {/* Skill Name & Description */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-base text-white group-hover:text-cyber-cyan transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Category footer tag */}
                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{skill.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Transparency Banner */}
        <div className="mt-12 p-4 rounded-xl bg-surface-100/60 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>Honest Evaluation: No fake percentages. Skills represent genuine project building & active learning.</span>
          </div>
          <span className="font-mono text-slate-400">LPU CSE Curricular & Self-Taught</span>
        </div>

      </div>
    </section>
  );
};
