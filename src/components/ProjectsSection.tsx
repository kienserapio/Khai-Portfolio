import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    number: '01',
    category: 'Real Estate',
    name: '27C Realty Estate Video',
    link: 'https://www.youtube.com/watch?v=bmEgQq8VoR8&ab_channel=27CRealty',
    images: {
      col1: [
        '/assets/project1.2.png',
        '/assets/project1.3.png',
      ],
      col2: '/assets/project1.1.png',
    },
  },
  {
    number: '02',
    category: 'Motion Video',
    name: '27C Insurance Agency',
    link: 'https://www.youtube.com/shorts/38RF5UIEJaE',
    images: {
      col1: [
        '/assets/project2.2.png',
        '/assets/project2.3.png',
      ],
      col2: '/assets/project2.1.png',
    },
  },
  {
    number: '03',
    category: 'Personal Shoot',
    name: 'Stylistic Cinematography',
    link: '',
    images: {
      col1: [
        '/assets/project3.2.png',
        '/assets/project3.3.png',
      ],
      col2: '/assets/project3.1.png',
    },
  },
];

const ProjectsSection: React.FC = () => {
  const totalCards = projects.length;

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="px-5 sm:px-8 md:px-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={totalCards}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="h-[85vh] sticky"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-0">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 8vw, 120px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-bold uppercase tracking-wide text-lg sm:text-xl md:text-2xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.link || '#'} />
        </div>

        {/* Image Grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 h-[calc(100%-100px)] sm:h-[calc(100%-120px)]">
          {/* Left Column - 40% */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.images.col1[0]}
              alt={`${project.name} - Image 1`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.col1[1]}
              alt={`${project.name} - Image 2`}
              className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right Column - 60% */}
          <div className="w-[60%]">
            <img
              src={project.images.col2}
              alt={`${project.name} - Main Image`}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
