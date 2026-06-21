import React from 'react';
import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: 'Production',
    description: 'Executes professional RAW image and video acquisition using advanced composition, high-dynamic-range lighting, and commercial-grade configurations.',
  },
  {
    number: '02',
    name: 'Short-Form Content',
    description: 'Produces high-retention vertical video utilizing rapid pacing, kinetic typography, and strategic hook mechanics engineered for algorithmic engagement.',
  },
  {
    number: '03',
    name: 'Long-Form Post-Production',
    description: 'Manages advanced multi-camera NLE workflows, narrative pacing, technical color grading, and broadcast-ready audio mastering to deliver polished cinematic narratives.',
  },
  {
    number: '04',
    name: 'Motion Design & VFX',
    description: 'Integrates dynamic 2D/3D kinetic assets and seamless compositing to elevate brand storytelling and maintain complex visual continuity across digital media.',
  },
  {
    number: '05',
    name: 'Graphic Design',
    description: 'Engineers high-fidelity vector assets, scalable brand architectures, and cross-platform layouts optimized for digital and print deployment.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30}>
            <div
              className="flex flex-col sm:flex-row py-8 sm:py-10 md:py-12 border-b"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] mb-4 sm:mb-0 sm:mr-8 md:mr-12"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] mb-4"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
