import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const videos = [
  { id: '1FYAoo8DtNV8N1NVVXmd5mz45ZYShNhLa', title: 'Cinematography 1' },
  { id: '1Afec9-hBhH8MDh1kvvmn1kySH7drPdh4', title: 'Cinematography 2' },
  { id: '1WLiGtJgodvyuycmIG5BzD510wtUSZ9er', title: 'Cinematography 3' },
  { id: '1sWJMyCm29I0krWJ8tEgNDgIt_zBeap2c', title: 'Cinematography 4' },
  { id: '1UwfiMgzJXDqrq2wNaCbEBaH_tEnP43C_', title: 'Cinematography 5' },
  { id: '1COMlWuE2kDELZniOzZ4MNwgSnda8gCQw', title: 'Cinematography 6' },
];

const CinematographyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0C0C] min-h-screen font-jakarta">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#D7E2EA] hover:text-white transition-colors duration-300 mb-8 sm:mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium uppercase tracking-wider text-sm">Back to Portfolio</span>
        </button>

        <h2
          className="hero-heading font-black uppercase text-center mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          Cinematography
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]"
            >
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={`https://drive.google.com/file/d/${video.id}/preview`}
                  title={video.title}
                  allow="autoplay"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CinematographyPage;
