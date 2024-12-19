import React from 'react';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative isolate bg-gradient-to-b from-gray-900 to-primary-dark py-24 px-6 sm:py-32 lg:px-8">
      <ContactHeader />
      <ContactForm />
    </section>
  );
};

export default Contact;