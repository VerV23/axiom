import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { services } from '../data/services';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-primary-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We deliver transformative solutions that help organizations thrive in today's dynamic business environment.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center text-secondary hover:text-accent transition-colors"
              >
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;