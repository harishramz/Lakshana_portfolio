import React from 'react';
import { Languages, MapPin, Sparkles, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { profile, languages, achievements } = portfolioData;
  const award = achievements[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-enchanted-blush/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark mb-3">
            <span>✦</span>
            <span>A little about me</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-enchanted-plum font-normal mb-4">
            Curious about how things work
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md p-7 sm:p-10 rounded-3xl border border-white shadow-enchanted-sm">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-enchanted-blush to-enchanted-lavender flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-enchanted-roseDark" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-enchanted-plum mb-5">
              Hello, I’m {profile.name}.
            </h3>
            <div className="space-y-4 text-enchanted-plum/80 leading-relaxed">
              <p>{profile.aboutIntro}</p>
              <p>{profile.detailedBio}</p>
            </div>
            <div className="mt-7 pt-6 border-t border-enchanted-rose/20 flex items-center gap-2 text-sm text-enchanted-plum/70">
              <MapPin className="w-4 h-4 text-enchanted-roseDark" />
              {profile.location}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-gradient-to-br from-enchanted-blush/60 to-enchanted-lavender/50 p-6 sm:p-7 rounded-3xl border border-white shadow-enchanted-sm">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-enchanted-roseDark" />
                <span className="text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark">
                  Highlight
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-enchanted-plum mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-enchanted-plum/75 leading-relaxed">
                {award.detail}
              </p>
              <p className="mt-3 text-xs font-semibold text-enchanted-roseDark">
                {award.organization} · {award.date}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white shadow-enchanted-sm">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-5 h-5 text-enchanted-roseDark" />
                <h3 className="font-serif text-xl text-enchanted-plum">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1.5 rounded-full bg-enchanted-cream text-sm text-enchanted-plum/80 border border-enchanted-rose/20"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
