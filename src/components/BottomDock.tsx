import React from 'react';
import {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Award,
  Film,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';
import { scrollToTarget } from '../lib/scroll';

interface BottomDockProps {
  onOpenResume?: () => void;
}

export const BottomDock: React.FC<BottomDockProps> = () => {
  const scrollTo = (target: string | number) => {
    scrollToTarget(target, { offset: -50 });
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto">
        <Dock
          magnification={68}
          distance={130}
          panelHeight={54}
          spring={{ mass: 0.1, stiffness: 200, damping: 15 }}
          className="bg-[#0e0e12]/92 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-md px-3 py-2 rounded-2xl transform-gpu"
        >
          {/* Home */}
          <DockItem onClick={() => scrollTo(0)}>
            <DockLabel>HOME</DockLabel>
            <DockIcon>
              <Home className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* About */}
          <DockItem onClick={() => scrollTo('#about')}>
            <DockLabel>ABOUT</DockLabel>
            <DockIcon>
              <User className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* Academics / Education */}
          <DockItem onClick={() => scrollTo('#education')}>
            <DockLabel>ACADEMICS</DockLabel>
            <DockIcon>
              <GraduationCap className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* Projects / Work */}
          <DockItem onClick={() => scrollTo('#work')}>
            <DockLabel>PROJECTS</DockLabel>
            <DockIcon>
              <FolderGit2 className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* Certificates */}
          <DockItem onClick={() => scrollTo('#certificates')}>
            <DockLabel>CERTIFICATES</DockLabel>
            <DockIcon>
              <Award className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* Experience */}
          <DockItem onClick={() => scrollTo('#experience')}>
            <DockLabel>EXPERIENCE</DockLabel>
            <DockIcon>
              <Film className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* Contact */}
          <DockItem onClick={() => scrollTo('#contact')}>
            <DockLabel>CONTACT</DockLabel>
            <DockIcon>
              <Mail className="w-5 h-5 group-hover:text-[#E25822] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-white/10 my-auto mx-0.5" />

          {/* GitHub */}
          <DockItem
            onClick={() => window.open('https://github.com/rp352', '_blank')}
          >
            <DockLabel>GITHUB</DockLabel>
            <DockIcon>
              <Github className="w-5 h-5 group-hover:text-[#f4f4f6] transition-colors" />
            </DockIcon>
          </DockItem>

          {/* LinkedIn */}
          <DockItem
            onClick={() =>
              window.open('https://www.linkedin.com/in/rahul-pariharia/', '_blank')
            }
          >
            <DockLabel>LINKEDIN</DockLabel>
            <DockIcon>
              <Linkedin className="w-5 h-5 group-hover:text-[#f4f4f6] transition-colors" />
            </DockIcon>
          </DockItem>
        </Dock>
      </div>
    </div>
  );
};

export default BottomDock;
