import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import MainLayout from '../layouts/MainLayout';
import PageHeader from '../components/common/PageHeader';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <MainLayout>
      <PageHeader
        title={service.title}
        subtitle={service.description}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="prose prose-lg prose-invert mx-auto"
      >
        <div className="text-6xl mb-8 text-center">{service.icon}</div>
        <div className="whitespace-pre-line">{service.fullDescription}</div>
        
        <h3 className="text-2xl font-bold mt-12 mb-6">Key Benefits</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-secondary">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-8">
            Let's discuss how {service.title} can drive value for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-secondary/30 hover:bg-primary-light transition-all w-full sm:w-auto"
            >
              Schedule a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Meet Our Experts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400"
        >
          <Link to="/blog" className="hover:text-white transition-colors">
            Read Success Stories
          </Link>
          <span>•</span>
          <Link to="/industries" className="hover:text-white transition-colors">
            Explore Industries
          </Link>
          <span>•</span>
          <Link to="/services" className="hover:text-white transition-colors">
            View All Services
          </Link>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default ServiceDetailPage;