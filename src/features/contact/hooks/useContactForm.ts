import { useState } from 'react';
import { sendEmail } from '../services/emailService';
import { FormData } from '../types';
import { toast } from 'react-hot-toast';

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  message: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Failed to send message. Please try again or email us directly.');
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};