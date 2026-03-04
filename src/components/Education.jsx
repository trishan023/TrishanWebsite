import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, leadership } from '../data/content';

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' });

  return (
    <section id="education" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12"
        >
          <motion.p variants={sectionFade} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Education & Credentials
          </motion.p>
          <motion.h2 variants={sectionFade} className="font-display font-bold text-4xl sm:text-5xl text-text-brown">
            Background.
          </motion.h2>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="font-semibold text-text-brown mb-4 text-sm tracking-widest uppercase text-muted">Degrees</h3>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-surface rounded-2xl p-6 border border-transparent hover:border-accent/20 transition-colors"
                >
                  <p className="font-semibold text-text-brown">{ed.degree}</p>
                  {ed.institutionUrl ? (
                    <a href={ed.institutionUrl} target="_blank" rel="noopener noreferrer"
                      className="text-accent text-sm font-medium mt-0.5 hover:underline inline-block">
                      {ed.institution}
                    </a>
                  ) : (
                    <p className="text-accent text-sm font-medium mt-0.5">{ed.institution}</p>
                  )}
                  <div className="flex gap-3 mt-2">
                    <span className="text-xs text-muted">{ed.period}</span>
                    {ed.location && (
                      <>
                        <span className="text-muted text-xs">·</span>
                        <span className="text-xs text-muted">{ed.location}</span>
                      </>
                    )}
                    {ed.detail && (
                      <>
                        <span className="text-muted text-xs">·</span>
                        <span className="text-xs text-muted">{ed.detail}</span>
                      </>
                    )}
                  </div>
                  {ed.highlights && (
                    <ul className="space-y-2 mt-4">
                      {ed.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {ed.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {ed.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium bg-cream text-muted px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>

          {/* Leadership */}
          <div>
            <h3 className="font-semibold text-text-brown mb-4 text-sm tracking-widest uppercase text-muted">Leadership & Mentoring</h3>
            <div className="space-y-4">
              {leadership.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="bg-surface rounded-2xl p-6 border border-transparent hover:border-accent/20 transition-colors"
                >
                  <p className="font-semibold text-text-brown">{item.title}</p>
                  <p className="text-accent text-sm font-medium mt-0.5">{item.org}</p>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
