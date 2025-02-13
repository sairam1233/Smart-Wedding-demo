import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Shirt, CalendarPlus, Save } from 'lucide-react';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: 'Wedding Ceremony',
      date: 'December 31, 2024',
      time: '4:00 PM',
      venue: 'St. Patrick\'s Cathedral',
      address: '5th Avenue, New York, NY',
      dressCode: 'Formal - Black Tie',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
    },
    {
      title: 'Cocktail Hour',
      date: 'December 31, 2024',
      time: '5:30 PM',
      venue: 'The Plaza Hotel - Terrace Room',
      address: 'Fifth Avenue at Central Park South',
      dressCode: 'Cocktail Attire',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80'
    },
    {
      title: 'Reception',
      date: 'December 31, 2024',
      time: '7:00 PM',
      venue: 'The Plaza Hotel - Grand Ballroom',
      address: 'Fifth Avenue at Central Park South',
      dressCode: 'Black Tie',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Wedding Events</h2>
          <p className="text-gray-600">Join us in celebrating our special day</p>
          <button className="mt-6 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors duration-300">
            <Save size={20} />
            <span>Save the Date</span>
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-4">{event.title}</h3>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{event.venue}</div>
                      <div className="text-sm">{event.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Shirt size={18} />
                    <span>{event.dressCode}</span>
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-100 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded-md transition-colors duration-300">
                  <CalendarPlus size={18} />
                  <span>Add to Calendar</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;