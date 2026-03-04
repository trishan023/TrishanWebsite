import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/content';

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-surface rounded-2xl p-7 border border-transparent hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5 transition-all cursor-default"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display font-bold text-2xl text-text-brown group-hover:text-accent transition-colors">
            {project.titleUrl ? (
              <a href={project.titleUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="text-accent text-sm font-semibold mt-0.5">{project.subtitle}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="text-xs font-medium text-muted">{project.company}</span>
          <p className="text-xs text-muted mt-0.5 italic">{project.role}</p>
        </div>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-5">{project.description}</p>

      <ul className="space-y-2 mb-5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-text-brown">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium bg-cream text-muted px-2.5 py-1 rounded-full border border-cream group-hover:border-accent/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12"
        >
          <motion.p variants={sectionFade} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Projects
          </motion.p>
          <motion.h2 variants={sectionFade} className="font-display font-bold text-4xl sm:text-5xl text-text-brown">
            Selected work.
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
