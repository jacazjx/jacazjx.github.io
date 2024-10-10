import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="my-16"
    >
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <div className="bg-gray-700 rounded-lg p-8">
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 mr-4" />
          <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
            jacazjx@foxmail.com
          </a>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 mr-4" />
          <span>+1 (123) 456-7890</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-4" />
          <span>Shenyang, CN</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;