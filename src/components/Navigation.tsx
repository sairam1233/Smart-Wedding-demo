import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Music, PauseCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.muted = false; // Unmute before playing
      audioRef.current.play().catch((error) => console.error('Playback failed:', error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className={`font-serif text-2xl ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            S & M
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Music Button beside Gallery */}
            <button
              onClick={togglePlay}
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? <PauseCircle size={24} /> : <Music size={24} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/exciting-day-inspiring-piano-176148.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </nav>
  );
};

export default Navigation;
