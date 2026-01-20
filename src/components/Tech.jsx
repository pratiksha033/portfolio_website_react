import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { FaGithub, FaLinkedin,  FaHackerrank, FaCode,FaEnvelope } from "react-icons/fa";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
     <div className="w-full flex flex-col items-center text-center mt-10">
  <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>My accounts</p>
    <h2 className={`${styles.sectionHeadText}`}>Social Links</h2>
  </motion.div>

  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
  >
    Connect with me on social media to explore my latest projects, collaborate on exciting ideas,  
    or just have a tech discussion! Feel free to reach out—I'd love to connect.
  </motion.p>
</div>


      {/* 🚀 Social Links Section */}
      {/* 🚀 Social Links Section */}
<div className="mt-20 flex flex-wrap justify-center gap-6">
  <a
    href="https://github.com/pratiksha033"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition duration-300"
  >
    <FaGithub className="text-white text-2xl" />
    <span className="text-white text-lg font-medium">GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/pratiksha033/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 bg-gray-800 hover:bg-blue-700 px-4 py-3 rounded-lg transition duration-300"
  >
    <FaLinkedin className="text-white text-2xl" />
    <span className="text-white text-lg font-medium">LinkedIn</span>
  </a>

 

  <a
    href="https://codolio.com/profile/pratiksha"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 bg-gray-800 hover:bg-blue-500 px-4 py-3 rounded-lg transition duration-300"
  >
    < FaCode className="text-white text-2xl" />
    <span className="text-white text-lg font-medium">Codolio</span>
  </a>

  <a
    href="mailto:pratikshaparihar679@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 bg-gray-800 hover:bg-blue-500 px-4 py-3 rounded-lg transition duration-300"
  >
    < FaEnvelope className="text-white text-2xl" />
    <span className="text-white text-lg font-medium">G-mail</span>
  </a>

  <a
    href="https://leetcode.com/u/pratikshaparihar488/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 bg-gray-800 hover:bg-blue-500 px-4 py-3 rounded-lg transition duration-300"
  >
    < FaCode className="text-white text-2xl" />
    <span className="text-white text-lg font-medium">LeetCode</span>
  </a>
</div>

    </>
  );
};

export default Tech;

