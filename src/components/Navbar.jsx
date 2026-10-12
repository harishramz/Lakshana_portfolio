import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-enchanted-sm border-b border-enchanted-rose/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose rounded-lg"
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-enchanted-blush via-enchanted-rose to-enchanted-lavender flex items-center justify-center text-enchanted-plum font-serif text-sm font-bold shadow-sm">
              LS
            </span>
            <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-enchanted-plum">
              {portfolioData.profile.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-2 lg:gap-5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 px-2 text-sm font-medium text-enchanted-plum/75 hover:text-enchanted-roseDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg text-enchanted-plum hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-3 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-enchanted-rose/30 shadow-enchanted-lg"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-enchanted-plum hover:bg-enchanted-blush/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
