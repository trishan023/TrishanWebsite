import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/content';

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function SkillCard({ category, tags, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-surface rounded-2xl p-6 border border-transparent hover:border-accent/20 transition-colors"
    >
      <h3 className="font-semibold text-text-brown mb-4">{category}</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <motion.span
            key={tag}
            variants={tagVariant}
            className="text-xs font-medium bg-cream text-muted border border-surface px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-accent transition-colors cursor-default"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={sectionFade} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Skills
          </motion.p>
          <motion.h2 variants={sectionFade} className="font-display font-bold text-4xl sm:text-5xl text-text-brown mb-12">
            The toolkit.
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
