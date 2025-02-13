import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Couple = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = {
    bride: {
      instagram: '#',
      facebook: '#',
      linkedin: '#'
    },
    groom: {
      instagram: '#',
      facebook: '#',
      linkedin: '#'
    }
  };

  return (
    <section id="couple" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Bride & Groom</h2>
          <p className="text-gray-600">The happy couple</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="relative mb-6 inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Sarah Johnson</h3>
            <p className="text-gray-600 mb-4">The Bride</p>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Sarah is a dedicated pediatrician who loves helping children. In her free time,
              she enjoys painting, yoga, and spending time with her family.
            </p>
            <div className="flex justify-center space-x-4">
              <a href={socialLinks.bride.instagram} className="text-gray-400 hover:text-primary-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href={socialLinks.bride.facebook} className="text-gray-400 hover:text-primary-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href={socialLinks.bride.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="relative mb-6 inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                  alt="Michael Smith"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Michael Smith</h3>
            <p className="text-gray-600 mb-4">The Groom</p>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Michael is a software engineer with a passion for technology and innovation.
              He loves hiking, photography, and trying new restaurants with Sarah.
            </p>
            <div className="flex justify-center space-x-4">
              <a href={socialLinks.groom.instagram} className="text-gray-400 hover:text-primary-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href={socialLinks.groom.facebook} className="text-gray-400 hover:text-primary-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href={socialLinks.groom.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;