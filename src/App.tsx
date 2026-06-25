import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import CtaBanner from './components/CtaBanner';
import VideosPage from './components/VideosPage';
import CinematographyPage from './components/CinematographyPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ overflowX: 'clip' }}>
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <CtaBanner />
          </div>
        }
      />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/cinematography" element={<CinematographyPage />} />
    </Routes>
  );
}

export default App;
