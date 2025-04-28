import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiHibernate, SiEclipseide, SiMysql, SiSpring, } from 'react-icons/si'; // Hibernate, Eclipse, Bootstrap
import {DiJava, DiReact, DiVisualstudio} from 'react-icons/di';
import { BiData } from 'react-icons/bi';
import SnowParticles from './SnowParticle';
const skills = [
  { 
    name: 'HTML', icon: <i className="devicon-html5-plain colored text-3xl sm:text-7xl" /> },
  { name: 'CSS', icon: <i className="devicon-css3-plain colored text-3xl sm:text-7xl" /> },
  { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored text-3xl sm:text-7xl" /> },
  { name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored text-3xl sm:text-7xl" /> },
  {
    name: 'React',
    icon: <DiReact className="text-3xl sm:text-6xl text-[#61DAFB]" />,
  },
  {
    name: 'Java',
    icon: <DiJava className="text-3xl sm:text-6xl text-[#ED8B00]" />,
  },
  {
    name: 'SQL',
    icon: <BiData className="text-3xl sm:text-6xl text-[#00758F]" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-3xl sm:text-6xl text-[#00758F]" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpring className="text-3xl sm:text-6xl text-[#6DB33F]" />, // You can use same icon for Boot too
  },
  {
    name: 'GitHub',
    icon: <i className="devicon-github-original colored text-3xl sm:text-7xl" />,
  },
  {
    name: 'VS Code',
    icon: <DiVisualstudio className="text-3xl sm:text-6xl text-[#007ACC]" />, // Official VS Code blue
  },
  {
    name: 'Hibernate',
    icon: <SiHibernate className="text-3xl sm:text-6xl text-[#59666C]" />, // Hibernate gray color
  },
  {
    name: 'Eclipse',
    icon: <SiEclipseide className="text-3xl sm:text-6xl text-[#2C2255]" />, // Eclipse dark blue
  },
  {
    name: 'EditPlus',
    icon: <DiVisualstudio className="text-3xl sm:text-6xl text-[#00ADEF]" />, // Similar blue icon (no EditPlus icon available)
  },
  {
    name: 'Spring Tool Suite',
    icon: <SiSpring className="text-3xl sm:text-6xl text-[#6DB33F]" />, // Use Spring icon again (STS is just Spring customized)
  },

  
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
