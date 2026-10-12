import React from 'react';
import { BriefcaseBusiness, Calendar, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Journey = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark mb-3">
            <span>✦</span>
            <span>Learning &amp; experience</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-enchanted-plum font-normal mb-4">
            Education &amp; Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="flex items-center gap-3 font-serif text-2xl text-enchanted-plum mb-5">
              <BriefcaseBusiness className="w-5 h-5 text-enchanted-roseDark" />
              Internship
            </h3>
            <div className="space-y-4">
              {experience.map((item) => (
                <article
                  key={item.title}
                  className="p-6 rounded-3xl bg-white/85 border border-white shadow-enchanted-sm"
                >
                  <div className="flex flex-wrap justify-between gap-2 items-start mb-3">
                    <h4 className="font-serif text-xl font-semibold text-enchanted-plum">
                      {item.title}
                    </h4>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-enchanted-blush/60 text-xs font-semibold text-enchanted-roseDark">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-enchanted-roseDark mb-3">
                    {item.organization}
                  </p>
                  <p className="text-sm text-enchanted-plum/75 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 font-serif text-2xl text-enchanted-plum mb-5">
              <GraduationCap className="w-6 h-6 text-enchanted-roseDark" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <article
                  key={item.qualification}
                  className="p-6 rounded-3xl bg-white/85 border border-white shadow-enchanted-sm"
                >
                  <div className="flex flex-wrap justify-between gap-2 items-start mb-2">
                    <h4 className="font-serif text-xl font-semibold text-enchanted-plum">
                      {item.qualification}
                    </h4>
                    <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-enchanted-lavender/50 text-xs font-semibold text-enchanted-plum/80">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-enchanted-plum/75 leading-relaxed mb-3">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap justify-between gap-2 pt-3 border-t border-enchanted-rose/15 text-xs text-enchanted-plum/65">
                    <span>{item.board}</span>
                    <span className="font-semibold text-enchanted-roseDark">{item.result}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
