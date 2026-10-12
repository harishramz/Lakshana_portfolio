import React from 'react';
import { Activity, Cpu, HeartPulse } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = { Activity, Cpu, HeartPulse };

export const Gallery = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark mb-3">
            <span>❀</span>
            <span>Selected academic work</span>
            <span>❀</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-enchanted-plum font-normal mb-4">
            Engineering Projects
          </h2>
          <p className="text-enchanted-plum/70 leading-relaxed">
            Projects from healthcare monitoring, IoT, and digital memory systems.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || Cpu;
            return (
              <article
                key={project.id}
                className="group flex flex-col p-6 sm:p-7 rounded-3xl bg-white border border-enchanted-rose/20 shadow-enchanted-sm hover:shadow-enchanted-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="font-serif text-4xl text-enchanted-rose/50">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-enchanted-blush to-enchanted-lavender/70 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-enchanted-roseDark" />
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-enchanted-roseDark mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-enchanted-plum mb-4 group-hover:text-enchanted-roseDark transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-enchanted-plum/75 leading-relaxed">
                  {project.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
