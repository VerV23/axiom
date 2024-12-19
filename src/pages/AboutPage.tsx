import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PageHeader from '../components/common/PageHeader';

const AboutPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <MainLayout>
      <PageHeader
        title="About Axiom Innovation"
        subtitle="Transforming businesses through innovative solutions and strategic excellence"
      />

      <div className="prose prose-lg prose-invert mx-auto">
        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <p>
              Founded by visionary leaders with extensive experience in global consulting and innovation management,
              Axiom Innovation Management Corporation emerged from a shared vision to transform how organizations
              approach innovation and business transformation in the digital age.
            </p>
            <p className="mt-4">
              Today, we stand as a beacon of innovation excellence, partnering with forward-thinking organizations
              across the globe to drive meaningful change and create lasting value. Our approach combines cutting-edge
              methodologies with deep industry expertise, enabling our clients to navigate complexity and emerge
              stronger in an ever-evolving business landscape.
            </p>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <p>
              To empower organizations with innovative solutions and strategic insights that drive sustainable growth
              and create meaningful impact in an increasingly complex world. We are committed to:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span>
                Driving transformative change through innovation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span>
                Fostering sustainable business practices
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span>
                Building lasting partnerships with our clients
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span>
                Developing future-ready solutions
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Innovation Excellence</h3>
              <p>
                We constantly push boundaries and embrace new ideas to deliver cutting-edge solutions that create
                real value for our clients.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Client Partnership</h3>
              <p>
                We build deep, lasting relationships with our clients, becoming trusted advisors in their
                transformation journey.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Global Perspective</h3>
              <p>
                Our diverse team brings global insights and local expertise to solve complex challenges across
                markets and industries.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Sustainable Impact</h3>
              <p>
                We prioritize solutions that create lasting positive impact for our clients, their stakeholders,
                and the broader community.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help you drive innovation and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-secondary/30 hover:bg-primary-light transition-all"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                Explore Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;