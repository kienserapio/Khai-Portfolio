import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const VIDEO_URL = 'https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8';

const HeroSection: React.FC = () => {
  const navLinks = ['About', 'Price', 'Projects', 'Contact'];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_URL;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(VIDEO_URL);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, []);

  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-[#0C0C0C]/60 z-0" />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 w-full z-0 pointer-events-none"
        style={{
          height: '55%',
          background: 'linear-gradient(to bottom, #0C0C0C 0%, #0C0C0C 25%, transparent 100%)',
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none"
        style={{
          height: '35%',
          background: 'linear-gradient(to top, #0C0C0C 0%, transparent 100%)',
        }}
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="flex-1 flex items-start justify-center pt-8 sm:pt-12 md:pt-16 relative z-10">
        <div className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, I&apos;m Khai!
          </h1>
        </div>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            Award-winning multimedia professional with 3+ years of expertise
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
