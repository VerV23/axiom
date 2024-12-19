import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary via-primary-dark to-gray-900">
      <div className="absolute inset-0">
        <img src="/hero-pattern.svg" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      
      <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="absolute -top-4 left-0 w-24 h-24 bg-gradient-radial from-secondary/30 to-transparent blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Transforming Business Through{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                    Innovation
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Axiom Innovation Management Corporation partners with global leaders to drive transformative change and create lasting value through strategic innovation and digital transformation.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all"
                >
                  Transform Your Business
                </Link>
                <Link
                  to="/services"
                  className="text-sm font-semibold leading-6 text-white hover:text-accent transition-colors px-4 py-3.5"
                >
                  Explore Our Services <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default Hero;