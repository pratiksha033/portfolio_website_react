import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaDownload, FaEye } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pratiksha</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-gray-100`}>
            I’m a full-stack developer <br className="sm:block hidden" />
            who enjoys building web applications and backend APIs.
          </p>

          <p className="mt-4 text-secondary text-[19px] max-w-3xl leading-[35px]">
            I’m a full-stack developer with hands-on experience in building web
            applications using the MERN stack. I enjoy working on backend logic,
            APIs, and integrating them with clean and responsive frontends. I
            like solving real-world problems through code and continuously
            improving my skills by building projects and learning new
            technologies.
          </p>

          {/* Resume Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/pratiksha_resume.pdf"
              download
              className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7b4fe0] text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="/pratiksha_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <FaEye />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
