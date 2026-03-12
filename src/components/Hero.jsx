import { motion } from 'framer-motion';
import { personal } from '../data/content';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/* ── Pipeline DAG background ── */
function PipelineBg() {
  // Intentionally asymmetric — sources at varying x/y, transforms offset
  const nodes = [
    [120, 155],  // s1 — top-left
    [210, 370],  // s2 — mid, shifted right
    [150, 610],  // s3 — bottom, shifted left
    [340, 370],  // s2 branch junction
    [590, 220],  // t1 — higher than centre
    [670, 500],  // t2 — lower, offset right
    [860, 355],  // merge junction — slightly above centre
    [1050, 355], // load
    [1360, 355], // output — slightly above centre
    [1050, 175], // side terminal — t1 monitoring stub
  ];

  const paths = [
    // s1 → t1
    { d: 'M 120 155 L 385 155 Q 400 155 400 170 L 400 205 Q 400 220 415 220 L 590 220', dur: '3.2s', begin: '0s' },
    // s2 → t1 (via junction, rise)
    { d: 'M 210 370 L 325 370 Q 340 370 340 355 L 340 235 Q 340 220 355 220 L 590 220', dur: '2.7s', begin: '0.9s' },
    // s2 → t2 (via junction, drop)
    { d: 'M 210 370 L 325 370 Q 340 370 340 385 L 340 485 Q 340 500 355 500 L 670 500', dur: '2.7s', begin: '1.6s' },
    // s3 → t2
    { d: 'M 150 610 L 405 610 Q 420 610 420 595 L 420 515 Q 420 500 435 500 L 670 500', dur: '3.4s', begin: '0.4s' },
    // t1 → load
    { d: 'M 590 220 L 795 220 Q 810 220 810 235 L 810 340 Q 810 355 825 355 L 1050 355', dur: '2.9s', begin: '1.3s' },
    // t2 → load
    { d: 'M 670 500 L 845 500 Q 860 500 860 485 L 860 370 Q 860 355 875 355 L 1050 355', dur: '2.9s', begin: '2.1s' },
    // load → output
    { d: 'M 1050 355 L 1360 355', dur: '1.7s', begin: '2.7s' },
    // t1 side stub
    { d: 'M 590 220 L 590 190 Q 590 175 605 175 L 1050 175', dur: '3.8s', begin: '1.8s' },
  ];

  return (
    <svg
      viewBox="0 0 1440 800"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none pipeline-bg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="currentColor" className="text-accent">
        {paths.map((p, i) => (
          <path key={i} d={p.d} strokeWidth="1" strokeLinecap="round" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x} cy={y}
            r={i === 8 ? 6 : i === 3 || i === 6 ? 3 : 5}
            fill="currentColor"
            stroke="none"
          />
        ))}
        {paths.map((p, i) => (
          <circle key={`pulse-${i}`} r="3" fill="currentColor" stroke="none">
            <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite" path={p.d} />
          </circle>
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  const nameParts = personal.name.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      <PipelineBg />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {personal.location}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl text-text-brown leading-tight"
            >
              {nameParts.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl sm:text-2xl text-muted font-light max-w-2xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-muted max-w-xl leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-cream font-semibold px-8 py-3.5 rounded-full hover:bg-opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5 duration-200"
            >
              Contact me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 border-2 border-text-brown text-text-brown font-semibold px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all duration-200"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
