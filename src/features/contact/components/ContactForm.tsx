import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-white">
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-white">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
            Company
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="block w-full rounded-full bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-secondary/30 hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : "Let's Connect"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;