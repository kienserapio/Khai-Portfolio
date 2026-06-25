import React from 'react';
import { Link } from 'react-router-dom';

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href = '#', className = '' }) => {
  const classes = `inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:scale-105 ${className}`;

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={classes}>
        Live Project
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      Live Project
    </a>
  );
};

export default LiveProjectButton;
