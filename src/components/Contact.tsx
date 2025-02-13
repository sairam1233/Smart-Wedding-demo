import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: [
        '+1 (555) 123-4567 - Sarah',
        '+1 (555) 765-4321 - Michael'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: [
        'sarah@email.com',
        'michael@email.com'
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Wedding Planner',
      details: [
        'Emma Thompson',
        '+1 (555) 987-6543',
        'emma@weddingplanner.com'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Requested By',
      details: [
        'November 30, 2024',
        'Please RSVP before this date'
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch for any questions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center text-primary-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">{item.title}</h3>
              <div className="space-y-2">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">
            For any additional questions or concerns, please don't hesitate to reach out.
            We're here to help make our celebration perfect!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;