import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rahul.pariharia2025@lpu.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91-9082135895');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Top Divider */}
      <div className="w-full h-[1px] bg-white/10 mb-16 md:mb-24" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Massive Heading & Statement */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs text-[#E25822] tracking-widest uppercase"
          >
            06 — CONTACT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-[clamp(2.4rem,5.2vw,5.2rem)] tracking-[-0.03em] text-[#f4f4f6] leading-[1.05]"
          >
            LET'S BUILD<br />
            <span className="text-[#8e8e9b]">SOMETHING</span>
            <span className="text-[#E25822]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#9a9aa6] leading-relaxed max-w-xl font-light"
          >
            I'm learning, building and looking for opportunities to collaborate, freelance and gain real-world experience.
          </motion.p>

          {/* Large Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <a
              href="mailto:rahul.pariharia2025@lpu.in?subject=Collaboration%20Inquiry%20from%20Portfolio"
              className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-[#E25822] text-[#ffffff] font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold hover:bg-[#F06632] transition-colors group shadow-lg shadow-[#E25822]/20"
            >
              <span>GET IN TOUCH</span>
              <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Contact Channels Spec List */}
        <div className="lg:col-span-5 space-y-4 pt-4 lg:pt-0">
          
          {/* Email Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="editorial-card p-6 rounded-xl relative group"
          >
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-[#8e8e9b]">
              <span>EMAIL</span>
              <button
                onClick={handleCopyEmail}
                className="text-[#E25822] hover:underline cursor-pointer"
              >
                {copiedEmail ? 'COPIED ✓' : 'COPY EMAIL'}
              </button>
            </div>
            <a
              href="mailto:rahul.pariharia2025@lpu.in"
              className="font-mono text-xs sm:text-sm text-[#f4f4f6] hover:text-[#E25822] transition-colors break-all"
            >
              rahul.pariharia2025@lpu.in
            </a>
          </motion.div>

          {/* GitHub Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="editorial-card p-6 rounded-xl relative group"
          >
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-[#8e8e9b]">
              <span>GITHUB</span>
              <span className="text-[#8e8e9b] group-hover:text-[#f4f4f6]">CODE REPOSITORIES</span>
            </div>
            <a
              href="https://github.com/rp352"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm text-[#f4f4f6] hover:text-[#E25822] transition-colors flex items-center justify-between"
            >
              <span>github.com/rp352</span>
              <span className="text-[#E25822]">↗</span>
            </a>
          </motion.div>

          {/* LinkedIn Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="editorial-card p-6 rounded-xl relative group"
          >
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-[#8e8e9b]">
              <span>LINKEDIN</span>
              <span className="text-[#8e8e9b] group-hover:text-[#f4f4f6]">PROFESSIONAL NETWORK</span>
            </div>
            <a
              href="https://www.linkedin.com/in/rahul-pariharia/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm text-[#f4f4f6] hover:text-[#E25822] transition-colors flex items-center justify-between"
            >
              <span>linkedin.com/in/rahul-pariharia/</span>
              <span className="text-[#E25822]">↗</span>
            </a>
          </motion.div>

          {/* Phone Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="editorial-card p-6 rounded-xl relative group"
          >
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-[#8e8e9b]">
              <span>PHONE</span>
              <button
                onClick={handleCopyPhone}
                className="text-[#E25822] hover:underline cursor-pointer"
              >
                {copiedPhone ? 'COPIED ✓' : 'COPY'}
              </button>
            </div>
            <a
              href="tel:+919082135895"
              className="font-mono text-xs sm:text-sm text-[#f4f4f6] hover:text-[#E25822] transition-colors"
            >
              +91-9082135895
            </a>
          </motion.div>

          {/* Location footnote */}
          <div className="pt-4 font-mono text-xs text-[#8e8e9b] flex items-center justify-between">
            <span>BASED IN THANE, MH, INDIA</span>
            <span className="text-[#E25822]">OPEN FOR WORK</span>
          </div>

        </div>

      </div>

    </section>
  );
};
