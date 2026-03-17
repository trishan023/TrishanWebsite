import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personal, skills } from '../data/content';
import CopyEmailButton from './CopyEmailButton';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Full-width header */}
          <motion.p variants={fadeUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-text-brown mb-12">
            Building the data layer<br className="hidden sm:block" /> that powers decisions.
          </motion.h2>

          {/* Two-column body — both columns start at the same level */}
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Left: Bio + links */}
            <motion.div variants={fadeUp} className="md:col-span-2">
              <p className="text-text-brown text-lg leading-relaxed">
                {personal.bio}
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  LinkedIn
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <CopyEmailButton
                  label={
                    <>
                      Email
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  }
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline cursor-pointer"
                />
              </div>

              {/* Company names */}
              <div className="mt-10 pt-8 border-t border-surface">
                <p className="text-xs text-muted tracking-widest uppercase mb-4">Experience at</p>
                <div className="flex flex-col gap-4">
                  {[
                    { name: 'Pacific National',               industry: 'Freight & Logistics',   href: 'https://www.pacificnational.com.au/' },
                    { name: 'Deloitte',                       industry: 'Management Consulting', href: 'https://www.deloitte.com/au/' },
                    { name: 'Commonwealth Bank of Australia', industry: 'Banking & Finance',     href: 'https://www.commbank.com.au/' },
                  ].map(co => (
                    <a
                      key={co.name}
                      href={co.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <span className="block text-sm font-medium text-text-brown group-hover:text-accent transition-colors duration-200">{co.name}</span>
                      <span className="block text-xs text-muted mt-0.5">{co.industry}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Toolkit */}
            <motion.div variants={fadeUp} className="md:col-span-3">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Toolkit</p>
              <div className="space-y-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
                    className="bg-surface rounded-xl p-4 border border-transparent hover:border-accent/20 transition-colors duration-300"
                  >
                    <p className="text-xs font-semibold text-text-brown mb-2">{skill.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs bg-cream text-muted border border-surface px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
