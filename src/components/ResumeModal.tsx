import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  Code2,
  Sparkles,
  FileText
} from 'lucide-react';
import { 
  personalInfo, 
  educationData, 
  projectsData, 
  certificatesData, 
  skillsData, 
  experienceData 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-surface-100 border border-cyber-cyan/30 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 overflow-hidden text-left max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header (Non-printable) */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyber-cyan" />
            <h2 className="font-display font-bold text-lg text-white">
              Rahul Pariharia — Interactive Resume Preview
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan text-xs font-semibold hover:bg-cyber-cyan/30 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-surface-200 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="overflow-y-auto pr-2 space-y-6 text-slate-200 print:text-black print:bg-white print:p-0">
          
          {/* Resume Header */}
          <div className="pb-5 border-b border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-xs font-mono text-cyber-cyan mt-0.5">
                  {personalInfo.roleHeadline}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-0.5 sm:text-right">
                <p>{personalInfo.location}</p>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-1">
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="hover:text-cyber-cyan">
                GitHub: github.com/rp352
              </a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-cyber-cyan">
                LinkedIn: linkedin.com/in/rahul-pariharia
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan">
              Profile Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              First-year B.Tech Computer Science and Engineering undergraduate at Lovely Professional University with a hands-on builder mindset. Focused on programming fundamentals (Python, C), modern web technologies (HTML, CSS, JavaScript), browser extension architecture, and client-side AI/automation utilities.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan">
              Education
            </h3>
            <div className="space-y-2.5">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-3 rounded-xl bg-surface-200/50 border border-white/[0.04]">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-xs text-cyber-cyan mt-0.5">
                    <span>{edu.degree} {edu.field && `(${edu.field})`}</span>
                    {edu.score && <span className="font-mono text-emerald-400">{edu.score}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan">
              Key Technical Projects
            </h3>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-surface-200/50 border border-white/[0.04] space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono text-cyber-cyan text-[11px]">{proj.type}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {proj.shortDescription}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 flex flex-wrap gap-1.5">
                    <span>Tech:</span>
                    {proj.techStack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan">
              Technical Skills & Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-surface-200/40 border border-white/[0.04]">
                <span className="font-mono text-slate-400 block mb-1">Comfortable With:</span>
                <p className="text-slate-200">
                  Python, C, HTML5, CSS3, JavaScript (ES6+), Figma, Git, GitHub, Vercel, VS Code, Browser Extension APIs
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-200/40 border border-white/[0.04]">
                <span className="font-mono text-slate-400 block mb-1">Currently Exploring:</span>
                <p className="text-slate-200">
                  C++, Artificial Intelligence & Recommendation Models, Workflow Automation (n8n), Advanced DOM Engines
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan">
              Certifications & Diplomas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificatesData.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-surface-200/40 border border-white/[0.04]">
                  <p className="font-semibold text-white">{cert.title}</p>
                  <p className="font-mono text-[11px] text-slate-400">{cert.organization} ({cert.issueDate})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan">
              Practical Experience
            </h3>
            {experienceData.map((exp) => (
              <div key={exp.id} className="p-3 rounded-lg bg-surface-200/40 border border-white/[0.04] text-xs space-y-1">
                <div className="flex justify-between font-semibold text-white">
                  <span>{exp.role}</span>
                  <span className="font-mono text-slate-400">{exp.duration}</span>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
