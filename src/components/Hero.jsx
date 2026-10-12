import React from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { profile } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-enchanted-blush/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] bg-enchanted-lavender/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-enchanted-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/75 border border-enchanted-rose/40 shadow-sm mb-7">
            <Cpu className="w-4 h-4 text-enchanted-roseDark" />
            <span className="text-xs uppercase tracking-widest font-semibold text-enchanted-plum/80">
              {profile.title}
            </span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-tight text-enchanted-plum leading-[1.05] mb-5">
            {profile.name}
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-enchanted-roseDark mb-6 max-w-2xl leading-relaxed">
            {profile.subtitle}
          </p>

          <p className="text-base sm:text-lg text-enchanted-plum/80 max-w-xl leading-relaxed mb-8">
            {profile.shortBio}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-enchanted-rose to-enchanted-roseDark text-white font-medium text-sm shadow-enchanted-md hover:shadow-glow hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              View my projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="px-7 py-3.5 rounded-full bg-white/80 text-enchanted-plum font-medium text-sm border border-enchanted-rose/40 shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Download résumé
              <Download className="w-4 h-4 text-enchanted-roseDark" />
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 text-sm text-enchanted-plum/70 hover:text-enchanted-roseDark transition-colors"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-enchanted-blush via-white to-enchanted-lavender blur-xl" />
            <div className="relative p-7 sm:p-9 rounded-[2rem] bg-white/80 backdrop-blur-md border border-white shadow-enchanted-lg">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-enchanted-blush to-enchanted-lavender flex items-center justify-center text-enchanted-plum font-serif text-3xl shadow-sm mb-7">
                LS
              </div>
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-enchanted-roseDark mb-3">
                Areas of interest
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-enchanted-plum mb-6">
                Building thoughtful technology.
              </h2>
              <ul className="space-y-3">
                {['VLSI Design', 'Embedded Systems', 'IoT Applications'].map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-enchanted-cream/75 border border-enchanted-rose/15 text-sm font-medium text-enchanted-plum"
                  >
                    <span className="w-7 h-7 rounded-xl bg-white flex items-center justify-center text-enchanted-roseDark">
                      <Cpu className="w-4 h-4" />
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-enchanted-rose/20 text-sm text-enchanted-plum/65">
                {profile.location}
              </p>
              <span className="absolute -top-3 -right-2 text-3xl text-enchanted-gold">✦</span>
              <span className="absolute -bottom-3 -left-2 text-2xl text-enchanted-rose">✧</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
