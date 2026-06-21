import React from 'react';

const row1Images = [
  '/assets/project1.1.png',
  '/assets/project1.2.png',
  '/assets/project1.3.png',
  '/assets/project3.1.png',
  '/assets/project3.2.png',
  '/assets/photo1.jpg',
  '/assets/photo2.jpg',
];

const row2Images = [
  '/assets/video.gif',
  '/assets/video2.gif',
  '/assets/project1.2.png',
  '/assets/project3.2.png',
  '/assets/project3.3.png',
];

const MarqueeSection: React.FC = () => {
  const doubledRow1 = [...row1Images, ...row1Images];
  const doubledRow2 = [...row2Images, ...row2Images];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="flex flex-col gap-3 overflow-hidden">
        {/* Row 1 - scrolls right */}
        <div className="marquee-track marquee-right">
          {doubledRow1.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt={`Gallery image ${(i % row1Images.length) + 1}`}
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
              loading="lazy"
            />
          ))}
        </div>

        {/* Row 2 - scrolls left */}
        <div className="marquee-track marquee-left">
          {doubledRow2.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt={`Gallery image ${(i % row2Images.length) + 1}`}
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
