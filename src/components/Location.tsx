import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Car, Train } from 'lucide-react';

const Location = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transportOptions = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'By Car',
      description: 'Valet parking available at The Plaza Hotel. Multiple parking garages within walking distance.'
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: 'By Train',
      description: 'Grand Central Terminal is a 15-minute walk. Take the 4, 5, 6, N, R, or W trains to 59th Street.'
    },
  ];

  return (
    <section id="location" className="py-20 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-4">Location</h2>
          <p className="text-primary-600">How to reach our wedding venue</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1844732781875!2d-73.97650502427994!3d40.76427057138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61b7740f8e0cd2d5!2sThe%20Plaza!5e0!3m2!1sen!2sus!4v1708632000000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Venue Address</h3>
                  <p className="text-gray-600">The Plaza Hotel</p>
                  <p className="text-gray-600">Fifth Avenue at Central Park South</p>
                  <p className="text-gray-600">New York, NY 10019</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {transportOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary-600">{option.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;