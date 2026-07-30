import React, { useEffect, useState } from 'react';
import { VSL_CONFIG } from './config.ts';
import { useVSLPlayer } from './hooks/useVSLPlayer.ts';
import { VslPlayerProvider } from './context/VslPlayerContext.tsx';

import { Header } from './components/Header.tsx';
import { VideoIntro } from './components/VideoIntro.tsx';
import { PainSection } from './components/PainSection.tsx';
import { MechanismSection } from './components/MechanismSection.tsx';
import { SelfDiagnostic } from './components/SelfDiagnostic.tsx';
import { AuthorBio } from './components/AuthorBio.tsx';
import { ModulesSection } from './components/ModulesSection.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { LockedSection } from './components/LockedSection.tsx';
import { OfferSection } from './components/OfferSection.tsx';
import { Guarantee } from './components/Guarantee.tsx';
import { FAQ } from './components/FAQ.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyMobileCTA } from './components/StickyMobileCTA.tsx';

const App: React.FC = () => {
  const player = useVSLPlayer(VSL_CONFIG);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      setShowSticky(window.scrollY > 500 && !isNearBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
    reveal();
    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', reveal);
    };
  }, []);

  return (
    <VslPlayerProvider value={{ isUnlocked: player.hasUnlocked, fakeProgress: player.fakeProgress }}>
      <div className="min-h-screen flex flex-col bg-offWhite selection:bg-amber/30">
        <Header />

        <VideoIntro
          containerRef={player.containerRef}
          isReady={player.isReady}
          isPlaying={player.isPlaying}
          fakeProgress={player.fakeProgress}
          togglePlay={player.togglePlay}
        />

        <div className="reveal">
          <PainSection />
        </div>

        <div className="reveal">
          <MechanismSection />
        </div>

        <div className="reveal">
          <SelfDiagnostic />
        </div>

        <div className="reveal">
          <AuthorBio />
        </div>

        <div className="reveal">
          <ModulesSection />
        </div>

        <div className="reveal">
          <Testimonials />
        </div>

        <div className="reveal">
          <LockedSection>
            <OfferSection />
          </LockedSection>
        </div>

        <div className="reveal">
          <LockedSection>
            <Guarantee />
          </LockedSection>
        </div>

        <div className="reveal">
          <LockedSection>
            <FAQ />
          </LockedSection>
        </div>

        <div className="reveal">
          <LockedSection>
            <FinalCTA />
          </LockedSection>
        </div>

        <Footer />

        <StickyMobileCTA visible={showSticky} />
      </div>
    </VslPlayerProvider>
  );
};

export default App;
