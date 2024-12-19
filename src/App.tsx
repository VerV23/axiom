import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import { useScrollToTop } from './hooks/useScrollToTop';

const App: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-gray-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;