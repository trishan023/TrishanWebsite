import { useRef, Fragment } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '../data/content';

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function extractYearRange(period) {
  const [start, end] = period.split('–').map(s => s.trim());
  const startYear = start.match(/\d{4}/)?.[0] ?? '';
  const endYear = end?.toLowerCase().includes('present') ? 'Now' : (end?.match(/\d{4}/)?.[0] ?? '');
  const startNum = parseInt(startYear, 10);
  const endNum = endYear === 'Now' ? new Date().getFullYear() : parseInt(endYear, 10);
  const years = endNum - startNum;
  const durationLabel = years <= 0 ? '<1 yr' : years === 1 ? '1 yr' : `${years} yrs`;
  return { startYear, endYear, label: `${startYear} – ${endYear}`, durationLabel };
}

/* ── Card ── */
function WorkCard({ entry }) {
  return (
    <motion.div whileHover={{ scale: 1.015, transition: { duration: 0.25 } }} className="bg-surface rounded-2xl p-4 sm:p-6 border border-transparent hover:border-accent/20 transition-colors duration-300">
      <div className="mb-3">
        <h3 className="font-display font-bold text-xl text-text-brown leading-snug">{entry.role}</h3>
        {entry.detail && <p className="text-sm text-muted italic mt-0.5">{entry.detail}</p>}
        {entry.companyUrl ? (
          <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer"
            className="text-accent font-semibold text-sm mt-0.5 hover:underline inline-block">
            {entry.company}
          </a>
        ) : (
          <p className="text-accent font-semibold text-sm mt-0.5">{entry.company}</p>
        )}
        <p className="text-xs text-muted mt-1">{entry.location}</p>
      </div>
      <ul className="space-y-2 mb-4">
        {entry.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      {entry.subRoles && (
        <div className="mt-4 pt-4 border-t border-cream">
          {entry.subRoles.map((sub, i) => (
            <div key={i} className="text-sm">
              <span className="font-semibold text-text-brown">{sub.role}</span>
              <span className="text-muted"> — {sub.client} • {sub.period}</span>
              <p className="text-muted mt-1 leading-relaxed">{sub.description}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {entry.tags.map(tag => (
          <span key={tag} className="text-xs font-medium bg-cream text-muted px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Interlude badge ── */
function InterludeBadge({ label, period }) {
  return (
    <div className="hidden md:flex justify-center -mt-4 mb-14 relative z-10">
      <a href="#education" className="bg-cream border border-accent/25 rounded-full px-5 py-2 flex items-center gap-2.5 shadow-sm hover:border-accent/60 hover:shadow-md transition-all duration-200">
        <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
        <span className="text-xs font-semibold text-accent tracking-wide">{label}</span>
        <span className="text-xs text-muted">· {period}</span>
      </a>
    </div>
  );
}

/* ── Desktop timeline row ── */
function TimelineRow({ entry, visualIndex }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = visualIndex % 2 === 0;
  const { startYear, endYear, durationLabel } = extractYearRange(entry.period);
  const dotClass = 'mt-5 w-3.5 h-3.5 rounded-full bg-accent border-[3px] border-cream z-10 flex-shrink-0 shadow-sm';

  return (
    <div ref={ref} className="hidden md:grid grid-cols-[1fr_48px_1fr] mb-14 last:mb-0 items-start">

      {/* Left column */}
      <div className="pr-10">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <WorkCard entry={entry} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-end pt-5 pr-1"
          >
            <span className="font-display font-semibold text-xl text-accent leading-none">{startYear} – {endYear}</span>
            <span className="text-xs text-muted mt-1.5">{durationLabel}</span>
          </motion.div>
        )}
      </div>

      {/* Centre dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.1, type: 'spring', stiffness: 300 }}
          className={dotClass}
        />
      </div>

      {/* Right column */}
      <div className="pl-10">
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <WorkCard entry={entry} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-start pt-5 pl-1"
          >
            <span className="font-display font-semibold text-xl text-accent leading-none">{startYear} – {endYear}</span>
            <span className="text-xs text-muted mt-1.5">{durationLabel}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Mobile row ── */
function MobileRow({ entry }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { label, durationLabel } = extractYearRange(entry.period);
  const dotClass = 'absolute left-0 top-5 w-3 h-3 rounded-full bg-accent border-2 border-cream z-10';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden relative pl-6 sm:pl-8 pb-10 sm:pb-12 last:pb-0"
    >
      <div className={dotClass} />
      <p className="text-xs font-semibold text-accent mb-2">{label} <span className="text-muted font-normal">· {durationLabel}</span></p>
      <WorkCard entry={entry} />
    </motion.div>
  );
}

export default function Timeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.p variants={sectionFade} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Experience
          </motion.p>
          <motion.h2 variants={sectionFade} className="font-display font-bold text-4xl sm:text-5xl text-text-brown">
            Where I've worked.
          </motion.h2>
        </motion.div>

        {/* ── Desktop ── */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/50 to-accent/10" />
          {timeline.map((entry, i) => (
            <Fragment key={entry.id}>
              <TimelineRow entry={entry} visualIndex={i} />
              {entry.interlude && <InterludeBadge {...entry.interlude} />}
            </Fragment>
          ))}
        </div>

        {/* ── Mobile ── */}
        <div className="relative md:hidden">
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/50 to-accent/10" />
          {timeline.map(entry => (
            <Fragment key={entry.id}>
              <MobileRow entry={entry} />
              {entry.interlude && (
                <div className="pl-6 sm:pl-8 mt-2 mb-8">
                  <a href="#education" className="inline-flex items-center gap-2 bg-cream border border-accent/25 rounded-full px-4 py-1.5 shadow-sm hover:border-accent/60 hover:shadow-md transition-all duration-200">
                    <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    <span className="text-xs font-semibold text-accent tracking-wide">{entry.interlude.label}</span>
                    <span className="text-xs text-muted">· {entry.interlude.period}</span>
                  </a>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
