import React, { useState } from 'react';
import { Heart, Music, BookOpen, MapPin, Sparkles, Disc, Play, Pause } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Moodboard = () => {
  const { moodboard } = portfolioData;
  const [playingSong, setPlayingSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="moodboard" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -right-16 w-96 h-96 bg-enchanted-blush/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-16 w-96 h-96 bg-enchanted-lavender/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-enchanted-roseDark font-sans mb-3">
            <span>✧</span>
            <span>Scrapbook Mood Board</span>
            <span>✧</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-enchanted-plum font-normal mb-4">
            {moodboard.title}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-enchanted-plum/70 font-light">
            “{moodboard.subtitle}”
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-enchanted-rose to-enchanted-lavender mx-auto rounded-full mt-4" />
        </div>

        {/* Editorial Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: Favorite Colors Palette (4 cols) */}
          <div className="md:col-span-4 relative group">
            <div className="washi-tape washi-tape-gold -top-3 left-10 w-24 rotate-[-2deg]" />
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-enchanted-rose/30 shadow-enchanted-sm hover:shadow-enchanted-md transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-medium text-enchanted-plum">
                    Beloved Color Palette
                  </h3>
                  <span className="font-cursive text-enchanted-roseDark text-sm">hues of dreams</span>
                </div>
                <div className="space-y-3">
                  {moodboard.colors.map((c) => (
                    <div key={c.name} className="flex items-center space-x-3 group/color">
                      <div
                        className="w-10 h-10 rounded-xl shadow-inner border border-black/10 shrink-0 group-hover/color:scale-110 transition-transform"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-sm font-semibold text-enchanted-plum truncate">
                            {c.name}
                          </span>
                          <span className="font-mono text-[10px] text-enchanted-plum/50">
                            {c.hex}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-enchanted-plum/70 truncate">
                          {c.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-enchanted-rose/20 text-center">
                <span className="font-cursive text-sm text-enchanted-roseDark">
                  “softness is my chosen strength”
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Midnight Melody Player (4 cols) */}
          <div className="md:col-span-4 relative group">
            <div className="washi-tape washi-tape-lavender -top-3 right-8 w-24 rotate-[2deg]" />
            <div className="bg-gradient-to-br from-enchanted-cream via-white to-enchanted-blush/40 backdrop-blur-md p-6 rounded-3xl border border-enchanted-rose/30 shadow-enchanted-sm hover:shadow-enchanted-md transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-medium text-enchanted-plum flex items-center space-x-2">
                    <Music className="w-4 h-4 text-enchanted-roseDark" />
                    <span>Midnight Melodies</span>
                  </h3>
                  <span className="font-cursive text-enchanted-roseDark text-sm">in her headphones</span>
                </div>

                {/* Spinning Vinyl Simulation */}
                <div className="bg-white/80 p-4 rounded-2xl border border-enchanted-rose/20 mb-4 flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-enchanted-plum flex items-center justify-center text-enchanted-gold border-2 border-enchanted-gold shrink-0 ${
                      isPlaying ? 'animate-spin-slow' : ''
                    }`}
                  >
                    <Disc className="w-8 h-8 opacity-80" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-semibold text-enchanted-plum truncate">
                      {moodboard.songs[playingSong].title}
                    </p>
                    <p className="font-sans text-xs text-enchanted-roseDark truncate">
                      {moodboard.songs[playingSong].artist}
                    </p>
                    <p className="font-cursive text-[11px] text-enchanted-plum/60 truncate mt-0.5">
                      {moodboard.songs[playingSong].mood}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-9 h-9 rounded-full bg-enchanted-rose text-white flex items-center justify-center shadow-sm hover:bg-enchanted-roseDark transition-colors shrink-0"
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                </div>

                {/* Song Selection List */}
                <div className="space-y-2">
                  {moodboard.songs.map((song, idx) => (
                    <button
                      key={song.title}
                      onClick={() => {
                        setPlayingSong(idx);
                        setIsPlaying(true);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        playingSong === idx
                          ? 'bg-enchanted-rose/20 text-enchanted-plum font-semibold border border-enchanted-rose/40'
                          : 'hover:bg-white/60 text-enchanted-plum/70'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className="font-serif text-sm mr-2">{idx + 1}.</span>
                        <span>{song.title}</span> — <span className="opacity-75">{song.artist}</span>
                      </div>
                      <span className="text-[10px] text-enchanted-roseDark font-cursive shrink-0">
                        {playingSong === idx && isPlaying ? '♪ playing' : 'play'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-enchanted-rose/20 text-xs text-center text-enchanted-plum/60 font-sans">
                Curated playlist for quiet evenings and warm tea.
              </div>
            </div>
          </div>

          {/* Card 3: Cherished Books & Poetry (4 cols) */}
          <div className="md:col-span-4 relative group">
            <div className="washi-tape washi-tape-gold -top-3 left-12 w-24 rotate-[1deg]" />
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-enchanted-rose/30 shadow-enchanted-sm hover:shadow-enchanted-md transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-medium text-enchanted-plum flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-enchanted-roseDark" />
                    <span>Dog-Eared Books</span>
                  </h3>
                  <span className="font-cursive text-enchanted-roseDark text-sm">antique shelves</span>
                </div>

                <div className="space-y-3.5">
                  {moodboard.books.map((b) => (
                    <div
                      key={b.title}
                      className="p-3.5 rounded-2xl bg-enchanted-cream/50 border border-enchanted-rose/15 hover:border-enchanted-rose/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-serif text-sm font-semibold text-enchanted-plum">
                          {b.title}
                        </h4>
                        <span className="text-[11px] text-enchanted-plum/60 font-sans">
                          {b.author}
                        </span>
                      </div>
                      <p className="font-cursive text-xs text-enchanted-roseDark italic leading-snug">
                        “{b.quote}”
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-enchanted-rose/20 text-center font-cursive text-sm text-enchanted-roseDark">
                “A room without books is like a body without a soul.”
              </div>
            </div>
          </div>

          {/* Card 4: Botanical Flowers & Meanings (6 cols) */}
          <div className="md:col-span-6 relative group">
            <div className="washi-tape washi-tape-lavender -top-3 left-16 w-28 rotate-[-1deg]" />
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-enchanted-rose/30 shadow-enchanted-sm hover:shadow-enchanted-md transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-enchanted-plum">
                    Beloved Botanical Blooms
                  </h3>
                  <p className="font-sans text-xs text-enchanted-plum/60 mt-0.5">
                    Victorian floriography & symbolic garden flowers
                  </p>
                </div>
                <span className="text-2xl text-enchanted-rose">❀</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {moodboard.flowers.map((fl) => (
                  <div key={fl.name} className="flex flex-col items-center text-center group/fl">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-2.5 shadow-sm border border-enchanted-rose/20 relative">
                      <img
                        src={fl.image}
                        alt={fl.name}
                        className="w-full h-full object-cover filter saturate-[1.05] group-hover/fl:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-enchanted-plum">
                      {fl.name}
                    </h4>
                    <p className="font-cursive text-[11px] text-enchanted-roseDark leading-tight mt-0.5">
                      {fl.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Dream Destinations & Secret Places (6 cols) */}
          <div className="md:col-span-6 relative group">
            <div className="washi-tape washi-tape-gold -top-3 right-16 w-28 rotate-[2deg]" />
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-enchanted-rose/30 shadow-enchanted-sm hover:shadow-enchanted-md transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-enchanted-plum">
                    Places Where Time Stands Still
                  </h3>
                  <p className="font-sans text-xs text-enchanted-plum/60 mt-0.5">
                    Sanctuaries that inspire dreamscapes and poetry
                  </p>
                </div>
                <MapPin className="w-5 h-5 text-enchanted-roseDark" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {moodboard.places.map((place) => (
                  <div
                    key={place.name}
                    className="p-3.5 rounded-2xl bg-gradient-to-br from-enchanted-blush/30 to-enchanted-lavender/30 border border-white shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-sm font-semibold text-enchanted-plum">
                          {place.name}
                        </span>
                        <span className="text-[10px] uppercase font-sans font-bold text-enchanted-roseDark bg-white/70 px-2 py-0.5 rounded-full">
                          {place.country}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-enchanted-plum/70 font-light leading-snug">
                        {place.vibe}
                      </p>
                    </div>
                    <div className="text-right mt-2">
                      <span className="text-xs text-enchanted-gold font-serif">✦</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moodboard;
