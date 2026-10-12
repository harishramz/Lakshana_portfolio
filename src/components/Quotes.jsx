import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Quotes = () => {
  const { quotes } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const currentQuote = quotes[currentIndex];

  return (
    <section id="quotes" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-enchanted-lavender/25 to-transparent">
      {/* Background Soft Floral SVG Patterns */}
      <div className="absolute top-10 left-1/4 w-72 h-72 text-enchanted-rose/10 pointer-events-none -z-10 animate-float-slow">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge: "A thought to keep" */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-enchanted-rose/30 shadow-sm mb-8">
          <Sparkles className="w-3.5 h-3.5 text-enchanted-gold" />
          <span className="text-xs uppercase tracking-widest font-semibold text-enchanted-plum font-sans">
            A thought to keep
          </span>
          <span className="text-enchanted-roseDark">✦</span>
        </div>

        {/* Oversized Elegant Quotation Mark */}
        <div className="font-serif text-8xl sm:text-9xl text-enchanted-rose/40 leading-none select-none h-16 sm:h-20 flex items-center justify-center -mb-4">
          “
        </div>

        {/* Dynamic Quote Display */}
        <div className="relative min-h-[160px] sm:min-h-[180px] flex flex-col items-center justify-center px-4">
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-enchanted-plum leading-relaxed max-w-3xl transition-opacity duration-500 font-normal">
            {currentQuote.quote}
          </blockquote>

          <div className="mt-6 flex flex-col items-center">
            <cite className="font-cursive text-xl text-enchanted-roseDark font-semibold not-italic">
              — {currentQuote.author}
            </cite>
            <span className="text-xs uppercase tracking-wider text-enchanted-plum/60 font-sans mt-1">
              Theme: {currentQuote.tag}
            </span>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-10 flex items-center justify-center space-x-6">
          <button
            onClick={prevQuote}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-enchanted-plum border border-enchanted-rose/30 shadow-sm hover:shadow-enchanted-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5 text-enchanted-plum" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center space-x-2">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === idx
                    ? 'w-7 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender'
                    : 'w-2.5 bg-enchanted-rose/30 hover:bg-enchanted-rose/60'
                }`}
                aria-label={`Go to quote ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-enchanted-plum border border-enchanted-rose/30 shadow-sm hover:shadow-enchanted-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-enchanted-rose"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5 text-enchanted-plum" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
