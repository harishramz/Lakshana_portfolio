import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-enchanted-rose/20 bg-gradient-to-b from-white/30 to-enchanted-blush/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-enchanted-blush via-enchanted-rose to-enchanted-lavender flex items-center justify-center text-enchanted-plum font-serif font-bold">
            LS
          </span>
          <div>
            <p className="font-serif text-lg text-enchanted-plum">{profile.name}</p>
            <p className="text-xs text-enchanted-plum/60">{profile.title}</p>
          </div>
        </div>
        <p className="text-xs text-enchanted-plum/55">
          © {currentYear} {profile.name}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-enchanted-plum text-xs font-medium border border-enchanted-rose/30 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose"
          aria-label="Back to top of page"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5 text-enchanted-roseDark group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
