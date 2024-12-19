import { motion } from 'framer-motion';
import Contact from '../features/contact';

const ContactPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Contact />
    </motion.main>
  );
};

export default ContactPage;