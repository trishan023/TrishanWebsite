import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../data/content';
import CopyEmailButton from './CopyEmailButton';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-text-brown mb-6">
            Let's connect.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-muted mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you want to talk data pipelines, swap travel tips, debate the best cycling routes in Sydney, or just geek out over the latest in tech — I'm always up for a good conversation.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CopyEmailButton
              className="inline-flex items-center gap-3 bg-accent text-cream font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5 duration-200 w-full sm:w-auto justify-center cursor-pointer"
              label={
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 4.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 6l-7.5 5.25L1.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {personal.email}
                </>
              }
            />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-text-brown text-text-brown font-semibold px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5H3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 15 1.5zM6 13.5V7.5M6 5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM12 13.5v-3.375A1.875 1.875 0 0 0 10.125 8.25h0A1.875 1.875 0 0 0 8.25 10.125V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
