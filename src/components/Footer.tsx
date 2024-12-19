import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              AXIOM
            </Link>
            <p className="text-gray-400 max-w-md">
              Axiom Innovation Management Corporation is a global leader in business transformation and innovation consulting.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">info@axiomph.com</li>
              <li className="text-gray-400">+63 917 5457423</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Axiom Innovation Management Corporation. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;