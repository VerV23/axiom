import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY');

interface EmailParams {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'info@axiomph.com',
        from_name: `${params.firstName} ${params.lastName}`,
        from_email: params.email,
        company: params.company,
        message: params.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};