import { FC } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BlogSummary from '../components/BlogSummary';
import Contact from '../components/Contact';

const HomePage: FC = () => {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-primary-dark">
      <Hero />
      <Services />
      <BlogSummary />
      <Contact />
    </main>
  );
};

export default HomePage;