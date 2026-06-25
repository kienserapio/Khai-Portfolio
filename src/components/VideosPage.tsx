import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Video {
  type: 'youtube' | 'drive';
  id: string;
  title: string;
}

const videos: Video[] = [
  { type: 'youtube', id: 'FOXd5_MCrUs', title: 'Stylistic Cinematography 1' },
  { type: 'youtube', id: 'K3t_ZuJL5gg', title: 'Stylistic Cinematography 2' },
  { type: 'youtube', id: '5FKxwHhyNcI', title: 'Stylistic Cinematography 3' },
  { type: 'youtube', id: 'GvvcZuod8SY', title: 'Stylistic Cinematography 4' },
  { type: 'youtube', id: 'wJK0yCov4vY', title: 'Stylistic Cinematography 5' },
  { type: 'youtube', id: 'aKA1V8PYvik', title: 'Short Film 1' },
  { type: 'youtube', id: 'cw1ooFSMQiI', title: 'Short Film 2' },
  { type: 'youtube', id: '38RF5UIEJaE', title: 'Short Film 3' },
  { type: 'youtube', id: 'PP0GNx_ff2U', title: 'Short Film 4' },
  { type: 'drive', id: '13VF1VPrBa8yPebkxW8OO95UGPwqBfc1n', title: 'Motion Extra' },
];

const VideosPage: React.FC = () => {
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
          Motion Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]"
            >
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                {video.type === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                ) : (
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    title={video.title}
                    allow="autoplay"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
