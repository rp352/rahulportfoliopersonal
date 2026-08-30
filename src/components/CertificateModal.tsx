import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
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

  if (!certificate) return null;

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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#111115] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-[#f4f4f6]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs text-[#E25822] tracking-wider uppercase">
                VERIFIED CREDENTIAL
              </span>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#8e8e9b] hover:text-[#f4f4f6] hover:border-white/30 transition-all font-mono text-xs"
              >
                ✕
              </button>
            </div>

            {/* Certificate Header */}
            <div className="my-6">
              <span className="font-mono text-xs text-[#8e8e9b] block mb-1">
                {certificate.organization} • {certificate.issueDate}
              </span>
              <h3 className="font-display font-bold text-2xl text-[#f4f4f6] tracking-tight">
                {certificate.title}
              </h3>
              {certificate.grade && (
                <div className="mt-2 inline-block">
                  <span className="editorial-pill text-xs">
                    Grade: {certificate.grade}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-[#9a9aa6] leading-relaxed mb-6">
              {certificate.description}
            </p>

            {/* Skills Covered */}
            <div className="pt-4 border-t border-white/10 mb-6">
              <span className="font-mono text-[11px] text-[#8e8e9b] uppercase tracking-wider block mb-3">
                Competencies & Topics Covered
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsCovered.map((skill) => (
                  <span key={skill} className="editorial-tag px-3 py-1 rounded text-xs text-[#f4f4f6]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer details */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8e8e9b]">
              <span>ID: {certificate.credentialId || 'VERIFIED'}</span>
              <span className="text-[#E25822]">ISSUED TO RAHUL PARIHARIA</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
