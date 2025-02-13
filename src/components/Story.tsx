import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

const Story: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const storyTimeline = [
    {
      date: 'May 15, 2020',
      title: 'First Meeting',
      description: 'We first met at a local coffee shop. Sarah was reading her favorite book, and Michael couldn\'t help but strike up a conversation.',
      image: 'https://images.unsplash.com/photo-1442544213729-6a15f1611937?auto=format&fit=crop&q=80',
    },
    {
      date: 'December 24, 2021',
      title: 'The Proposal',
      description: 'During a snowy evening in Central Park, Michael got down on one knee and asked the most important question of his life.',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    },
    {
      date: 'December 31, 2024',
      title: 'The Wedding',
      description: 'We invite you to join us as we celebrate our love and begin our journey together.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="story" className="py-20 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-4">Our Story</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-px w-12 bg-primary-300"></div>
            <Heart className="text-primary-400" size={24} />
            <div className="h-px w-12 bg-primary-300"></div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {storyTimeline.map((event, index) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="text-primary-600 font-medium mb-2">{event.date}</div>
                <h3 className="text-2xl font-serif text-primary-900 mb-4">{event.title}</h3>
                <p className="text-primary-700 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;