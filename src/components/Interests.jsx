import React from 'react';
import { Code2, Cpu, Layers, Radio, Users, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = { Cpu, Code2, Radio, Wrench, Layers, Users };

export const Interests = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-enchanted-blush/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark mb-3">
            <span>❀</span>
            <span>Technical toolkit</span>
            <span>❀</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-enchanted-plum font-normal mb-4">
            Skills &amp; Areas of Knowledge
          </h2>
          <p className="text-enchanted-plum/70 leading-relaxed">
            A snapshot of the technologies, tools, and strengths I’ve developed through coursework and projects.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] || Cpu;
            return (
              <article
                key={skill.id}
                className="p-5 sm:p-6 rounded-3xl bg-white/85 border border-white shadow-enchanted-sm hover:shadow-enchanted-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-enchanted-blush to-enchanted-lavender/70 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-enchanted-roseDark" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-enchanted-plum mb-2">
                  {skill.title}
                </h3>
                <p className="text-xs text-enchanted-plum/65 leading-relaxed mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full bg-enchanted-cream text-[11px] font-medium text-enchanted-plum/80 border border-enchanted-rose/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
