import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SnowParticles from './SnowParticle';

// ── Correct react-icons imports (copy-paste this) ──────────────────────
import { DiJava, DiPython, DiReact, DiVisualstudio } from 'react-icons/di';
import {
  SiSpringboot,      // ← correct name (lowercase "b")
  SiHibernate,
  SiMysql,
  SiEclipseide,
  SiSelenium,
  SiPostman,
  SiGithub,
} from 'react-icons/si';

import { TbRobot } from 'react-icons/tb';
import { MdOutlinePlaylistAddCheckCircle } from 'react-icons/md';
import { BiData } from 'react-icons/bi';

// Font Awesome icons (cleaner than devicon classes)
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGithub } from 'react-icons/fa';
// ─────────────────────────────────────────────────────────────────────── 
const skills = [
  { name: 'Java',          icon: <DiJava className="text-3xl sm:text-6xl text-[#ED8B00]" /> },
  { name: 'SQL',           icon: <BiData className="text-3xl sm:text-6xl text-[#00758F]" /> },
  { name: 'Selenium',      icon: <SiSelenium className="text-3xl sm:text-6xl text-[#43B02A]" /> },
  { name: 'Automation Testing', icon: <TbRobot className="text-3xl sm:text-6xl text-[#FF6B6B]" /> },
  { name: 'Manual Testing',     icon: <MdOutlinePlaylistAddCheckCircle className="text-3xl sm:text-6xl text-[#4ECDC4]" /> },
  { name: 'TestNG',        icon: <SiPostman className="text-3xl sm:text-6xl text-[#E33332]" /> }, // placeholder (no official TestNG icon)
  { name: 'Postman',       icon: <SiPostman className="text-3xl sm:text-6xl text-[#FF6C37]" /> },
  { name: 'HTML',          icon: <FaHtml5 className="text-3xl sm:text-6xl text-[#E34F26]" /> },
  { name: 'CSS',           icon: <FaCss3Alt className="text-3xl sm:text-6xl text-[#1572B6]" /> },
  { name: 'JavaScript',    icon: <FaJsSquare className="text-3xl sm:text-6xl text-[#F7DF1E]" /> },
  { name: 'Bootstrap',     icon: <FaBootstrap className="text-3xl sm:text-6xl text-[#7952B3]" /> },
  { name: 'React',         icon: <DiReact className="text-3xl sm:text-6xl text-[#61DAFB]" /> },
  { name: 'MySQL',         icon: <SiMysql className="text-3xl sm:text-6xl text-[#00758F]" /> },
  { name: 'Spring Boot',   icon: <SiSpringboot className="text-3xl sm:text-6xl text-[#6DB33F]" /> },
  { name: 'Hibernate',     icon: <SiHibernate className="text-3xl sm:text-6xl text-[#59666C]" /> },
  { name: 'GitHub',        icon: <SiGithub className="text-3xl sm:text-6xl" /> },
  { name: 'VS Code',       icon: <DiVisualstudio className="text-3xl sm:text-6xl text-[#007ACC]" /> },
  { name: 'Eclipse',       icon: <SiEclipseide className="text-3xl sm:text-6xl text-[#2C2255]" /> },
  { name: 'Python',        icon: <DiPython className="text-3xl sm:text-6xl text-[#3776AB]" /> },
];

export default function Skills() {
  return (
    <section id="Skills" className="relative py-20 px-6 min-h-screen overflow-hidden bg-[#0B2447] text-white">
      <SnowParticles />

      <div className="max-w-7xl w-full mx-auto px-4">
        <motion.h2
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className=" text-3xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text pulse-glow"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: '-50px 0px', amount: 0.5 });

            return (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center justify-center p-4 h-[120px] w-[100px] sm:h-[160px] sm:w-[220px] rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-cyan-500/20 transition-all overflow-hidden"
              >
                
                <div className="absolute w-40 h-40 bg-cyan-500/10 blur-[80px] opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10" />

                <motion.div
                  className="mb-3 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-md font-semibold text-white/80 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </h3>

                <div ref={ref} className="w-full h-1 mt-2 bg-[#205295]/20 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="h-full  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] origin-left"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
