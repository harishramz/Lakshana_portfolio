import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Sparkles from './components/Sparkles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Journey from './components/Journey';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-enchanted-cream text-enchanted-plum selection:bg-enchanted-blush selection:text-enchanted-plum font-sans">
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-white border border-enchanted-rose text-enchanted-plum rounded-lg"
      >
        Skip to main content
      </a>

      {/* Opening Magical Loading Sequence */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Persistent Ambient Particles & Stars */}
      <Sparkles isAmbientActive={true} />

      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-20">
        <Hero />
        <About />
        <Interests />
        <Journey />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
