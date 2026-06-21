import React from 'react';
import FadeIn from './FadeIn';

const CtaBanner: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Work with me
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={30}>
        <p
          className="text-[#D7E2EA] font-light text-center mt-8 sm:mt-10 md:mt-12 max-w-[700px]"
          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)' }}
        >
          Let&apos;s bring your ideas to life. Reach out and let&apos;s create something incredible together.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={30}>
        <a
          href="mailto:khaiserapio@gmail.com"
          className="inline-block rounded-full px-10 py-4 sm:px-12 sm:py-5 md:px-14 md:py-5 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-105 mt-10 sm:mt-12 md:mt-14"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, 0 0 0 2px white',
          }}
        >
          Contact Me
        </a>
      </FadeIn>
    </section>
  );
};

export default CtaBanner;
