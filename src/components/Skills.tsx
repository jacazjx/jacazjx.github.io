import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js',
  'Express', 'MongoDB', 'GraphQL', 'Git', 'Docker', 'AWS'
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="my-16"
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;