import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personal } from '../data/content';
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
          <motion.p variants={fadeUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-text-brown mb-12">
            Building the data layer<br className="hidden sm:block" /> that powers decisions.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp}>
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
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-6">
              {personal.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="bg-surface rounded-2xl p-6 border border-surface hover:border-accent/30 transition-colors"
                >
                  <div className="font-display font-bold text-5xl text-accent">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
