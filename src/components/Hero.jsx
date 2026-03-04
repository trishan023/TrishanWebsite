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

export default function Hero() {
  const nameParts = personal.name.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Blob backgrounds */}
      <div
        className="absolute top-[-8%] right-[-12%] w-[55vw] max-w-[640px] aspect-square bg-accent opacity-10 blob-animate"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[45vw] max-w-[520px] aspect-square bg-surface opacity-60 blob-animate-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] left-[5%] w-[22vw] max-w-[260px] aspect-square bg-accent opacity-5 blob-animate"
        style={{ animationDelay: '-3s' }}
        aria-hidden="true"
      />

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
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-text-brown text-text-brown font-semibold px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all duration-200"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — absolute relative to the full-screen section */}
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
