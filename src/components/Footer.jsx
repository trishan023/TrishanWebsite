import { personal, navLinks } from '../data/content';
import CopyEmailButton from './CopyEmailButton';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-cream py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          <div>
            <span className="font-display font-bold text-2xl">TT</span>
            <p className="text-sm text-cream/50 mt-1">{personal.title}</p>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {year} {personal.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <CopyEmailButton
              className="text-xs text-cream/40 hover:text-accent transition-colors cursor-pointer"
            />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/40 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
