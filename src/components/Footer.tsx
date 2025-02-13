import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    instagram: '#',
    facebook: '#',
    twitter: '#'
  };

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Sarah & Michael</h3>
            <p className="text-primary-200">
              Thank you for being part of our special day. We can't wait to celebrate with you!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-primary-200 hover:text-white transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#events" className="text-primary-200 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-200 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-200 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.instagram}
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={socialLinks.facebook}
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={socialLinks.twitter}
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-primary-200">
            Made with <Heart size={16} className="text-red-400" /> by Sarah & Michael
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;