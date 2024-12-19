import emailjs from '@emailjs/browser';
import { FormData } from '../types';

const EMAIL_SERVICE_ID = 'service_axiom';
const EMAIL_TEMPLATE_ID = 'template_axiom';
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

emailjs.init(EMAIL_PUBLIC_KEY);

export const sendEmail = async (formData: FormData) => {
  try {
    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      {
        to_email: 'info@axiomph.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
      },
      EMAIL_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};