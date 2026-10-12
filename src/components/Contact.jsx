import React from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { profile } = portfolioData;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark mb-3">
            <span>✦</span>
            <span>Get in touch</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-enchanted-plum font-normal mb-4">
            Let’s connect
          </h2>
          <p className="text-enchanted-plum/70 leading-relaxed">
            I’m happy to connect about engineering opportunities, internships, or collaborations.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender mx-auto rounded-full mt-5" />
        </div>

        <div className="bg-white/85 backdrop-blur-md p-7 sm:p-10 rounded-3xl border border-white shadow-enchanted-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="p-5 rounded-2xl bg-enchanted-cream/70 border border-enchanted-rose/20 hover:bg-enchanted-blush/40 transition-colors"
            >
              <Mail className="w-5 h-5 text-enchanted-roseDark mb-3" />
              <span className="block text-xs uppercase tracking-wider text-enchanted-plum/60 mb-1">
                Email
              </span>
              <span className="text-sm font-medium text-enchanted-plum break-all">
                {profile.email}
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="p-5 rounded-2xl bg-enchanted-cream/70 border border-enchanted-rose/20 hover:bg-enchanted-blush/40 transition-colors"
            >
              <Phone className="w-5 h-5 text-enchanted-roseDark mb-3" />
              <span className="block text-xs uppercase tracking-wider text-enchanted-plum/60 mb-1">
                Phone
              </span>
              <span className="text-sm font-medium text-enchanted-plum">
                {profile.phone}
              </span>
            </a>
            <div className="p-5 rounded-2xl bg-enchanted-cream/70 border border-enchanted-rose/20">
              <MapPin className="w-5 h-5 text-enchanted-roseDark mb-3" />
              <span className="block text-xs uppercase tracking-wider text-enchanted-plum/60 mb-1">
                Location
              </span>
              <span className="text-sm font-medium text-enchanted-plum">
                {profile.location}
              </span>
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-enchanted-rose to-enchanted-lavender text-enchanted-plum font-semibold text-sm shadow-enchanted-sm hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <Download className="w-4 h-4" />
              Download my résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
