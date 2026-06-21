import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedCharProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({ char, index, totalChars, scrollYProgress }) => {
  const start = index / totalChars;
  const end = start + (1 / totalChars);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  
  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p ref={ref} className={className} style={style}>
      {text.split('').map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          totalChars={text.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
