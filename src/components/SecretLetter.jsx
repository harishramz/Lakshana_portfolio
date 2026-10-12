import React, { useState, useEffect } from 'react';
import { X, Heart, Sparkles, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SecretLetter = ({ isOpen, onClose }) => {
  const { secretLetter } = portfolioData;
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  // Reset or initialize state on open
  useEffect(() => {
    if (isOpen) {
      setIsEnvelopeOpened(false);
      // Auto open envelope after a gentle delay
      const timer = setTimeout(() => setIsEnvelopeOpened(true), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-enchanted-plum/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="A Secret Little Letter"
    >
      <div
        className="relative max-w-xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Sparkles & Hearts around the letter */}
        <div className="absolute -top-8 left-10 pointer-events-none animate-float-slow text-enchanted-rose">
          <Heart className="w-6 h-6 fill-enchanted-blush" />
        </div>
        <div className="absolute -top-6 right-12 pointer-events-none animate-float-medium text-enchanted-gold">
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute -bottom-6 left-16 pointer-events-none animate-float-fast text-enchanted-roseDark">
          <Heart className="w-5 h-5 fill-enchanted-rose/30" />
        </div>
        <div className="absolute -bottom-8 right-20 pointer-events-none animate-float-slow text-enchanted-lavenderDark">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/80 hover:bg-white text-enchanted-plum hover:text-enchanted-roseDark shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose z-50"
          aria-label="Close letter"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The Animated Envelope Container */}
        <div className="w-full relative flex flex-col items-center">
          {/* Unfolded Letter Parchment */}
          <div
            className={`w-full bg-[#FFFDF9] diary-paper p-6 sm:p-10 rounded-3xl shadow-2xl border border-enchanted-rose/30 transition-all duration-700 transform ${
              isEnvelopeOpened
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-12 scale-90 opacity-0'
            }`}
          >
            {/* Top Washi Tape */}
            <div className="washi-tape washi-tape-gold -top-3.5 left-1/2 -translate-x-1/2 w-28" />

            {/* Letter Header */}
            <div className="flex items-center justify-between border-b border-enchanted-rose/20 pb-4 mb-6">
              <div>
                <p className="font-cursive text-sm text-enchanted-roseDark">
                  {secretLetter.recipientPrompt}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-enchanted-plum">
                  {secretLetter.title}
                </h3>
              </div>
              <span className="font-serif text-xs text-enchanted-plum/60 italic bg-enchanted-blush/40 px-3 py-1 rounded-full">
                {secretLetter.dateStamp}
              </span>
            </div>

            {/* Letter Body Paragraphs */}
            <div className="space-y-4 font-cursive text-lg sm:text-xl text-enchanted-plum/90 leading-relaxed">
              {secretLetter.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Signature & Closing */}
            <div className="mt-8 pt-4 flex items-center justify-between border-t border-enchanted-rose/20">
              <span className="font-cursive text-2xl text-enchanted-roseDark font-bold">
                {secretLetter.signature}
              </span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-enchanted-rose to-enchanted-lavender flex items-center justify-center text-white shadow-sm">
                <Heart className="w-4 h-4 fill-white" />
              </div>
            </div>

            {/* Post Script */}
            <p className="mt-4 font-sans text-xs text-enchanted-plum/70 italic border-l-2 border-enchanted-rose pl-3">
              {secretLetter.postScript}
            </p>

            {/* Action inside letter */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-enchanted-rose/20 hover:bg-enchanted-rose/40 text-enchanted-plum text-xs font-medium uppercase tracking-wider transition-colors"
              >
                Fold Back Letter & Keep Exploring ✦
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretLetter;
