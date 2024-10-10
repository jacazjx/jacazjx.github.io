import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-16"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
          alt="Your Name"
          className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-8"
        />
        <div>
          <p className="text-xl mb-4">
            感谢你访问我的主页！我是张家鑫，一名AI研究员。研究方向包括但不限于：深度学习、联邦学习、边缘计算、大模型......。
            目前正
          </p>
          <p className="text-xl">
            {/*这里修改自我介绍描述*/}
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying the great outdoors.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;