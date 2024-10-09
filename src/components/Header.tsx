import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 py-6"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold"
        >
          Your Name
        </motion.h1>
        <nav>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;