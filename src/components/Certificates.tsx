import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="relative py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="pb-12 border-b border-white/10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs text-[#E25822] tracking-widest uppercase mb-4"
          >
            04 — LEARNING
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#f4f4f6]"
          >
            ALWAYS LEARNING.
          </motion.h2>
        </div>

        <p className="font-mono text-xs text-[#8e8e9b] max-w-xs">
          Structured coursework, vocational diplomas & self-driven technical certifications.
        </p>
      </div>

      {/* Horizontally Arranged / Responsive Grid of Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedCert(cert)}
            className="editorial-card rounded-xl p-6 sm:p-8 cursor-pointer group flex flex-col justify-between transform-gpu will-change-transform"
          >
            <div>
              {/* Header Spec */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <span className="text-[#E25822]">
                  0{index + 1}
                </span>
                <span className="text-[#8e8e9b]">
                  {cert.issueDate}
                </span>
              </div>

              {/* Title & Organization */}
              <div className="mt-6 mb-4">
                <span className="font-mono text-xs text-[#8e8e9b] uppercase tracking-wider block mb-1">
                  {cert.organization}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#f4f4f6] tracking-tight group-hover:text-[#E25822] transition-colors">
                  {cert.title}
                </h3>
              </div>

              {/* Description snippet */}
              <p className="font-sans text-xs sm:text-sm text-[#9a9aa6] leading-relaxed line-clamp-3 mb-6">
                {cert.description}
              </p>
            </div>

            {/* Bottom Card Row */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              {cert.grade ? (
                <span className="editorial-pill text-[10px]">
                  {cert.grade}
                </span>
              ) : (
                <span className="text-[#8e8e9b] text-[11px]">
                  {cert.skillsCovered[0]}
                </span>
              )}

              <span className="text-[#8e8e9b] group-hover:text-[#E25822] transition-colors flex items-center gap-1 text-[11px]">
                <span>VIEW CREDENTIAL</span>
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </span>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />

    </section>
  );
};
