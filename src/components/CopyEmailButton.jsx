import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/content';

function Toast({ visible }) {
  return createPortal(
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-8 inset-x-0 z-[9999] flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex items-center gap-2.5 bg-text-brown text-cream text-sm font-medium px-5 py-3 rounded-full shadow-xl"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Email copied to clipboard
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function CopyEmailButton({ label, className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <>
      <button onClick={handleCopy} className={className} type="button">
        {label ?? personal.email}
      </button>
      <Toast visible={copied} />
    </>
  );
}
