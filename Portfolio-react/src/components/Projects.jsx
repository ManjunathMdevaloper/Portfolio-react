import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import sms from "../assets/sms.png";
import cda from "../assets/cda.png";
import library from "../assets/library management system.jpg";
import ems from "../assets/ems.png";
import mmt from "../assets/flight-automation.jpg";
import school from "../assets/school.jpg";
import { Reveal } from "./Reveal";

const projects = [
    {
        title: "Library Management System",
        subtitle: "using React JS and JSON Server",
        year: "2024",
        description: "Books Management System: Developed a ReactJS application to manage book records (add, view, edit, delete) with responsive UI, React Hooks for state management, and React Router for navigation.",
        image: library,
        github: "https://github.com/ManjunathMdevaloper/ReactMainProject",
        tech: ["JSON Server", "React js", "CSS"],
        color: "#00FF00"
    },
    {
        title: "College Directory Application",
        subtitle: "using Spring boot and MYSQL ",
        year: "2025",
        description: "Built a Spring Boot backend with REST APIs and MySQL database to manage students, faculty, courses, and departments. Implemented CRUD operations, basic authentication, and clean architecture for maintainable code.",
        image: cda,
        github: "https://github.com/ManjunathMdevaloper/CollegeDirectoryApplication",
        tech: ["Spring Boot", "MYSQL", "JAVA"],
        color: "#00CC9A"
    },
    {
        title: "Student Information Management Portal",
        subtitle: "Students data like educations and adresses",
        year: "2024",
        description: "Built a Spring MVC and MySQL-based backend to perform CRUD operations on student records. Designed clean MVC architecture, integrated database connectivity, and implemented validation and exception handling.",
        github: "https://github.com/ManjunathMdevaloper/sringmvcproject",
        image: sms,
        tech: ["Spring MVC", "MYSQL", "JSP"],
        color: "#FFD700"
    },
    {
        title: "EventPlannerPro",
        subtitle: "using Spring Boot, MYSQL and React JS",
        year: "2025",
        description: "The Event Management System simplifies the process of planning and tracking events, making it an invaluable tool for organizers, businesses, or anyone hosting multiple events. Its intuitive interface and powerful backend API provide an efficient, scalable solution to manage events of any size.",
        github: "https://github.com/ManjunathMdevaloper/eventmanagementsystem",
        image: ems,
        tech: ["React", "Spring Boot", "MYSQL"],
        color: "#FF0000"
    },
    {
        title: "MakeMyTrip Flight Booking Automation",
        subtitle: "Round-Trip Automation using Selenium",
        year: "2025",
        description: "Automated the complete round-trip flight booking flow (Pune ↔ Hyderabad) on MakeMyTrip.com. Covered flight search, filters, passenger details, and payment page navigation. Implemented Page Object Model with explicit waits using XPath and CSS selectors. Executed 45+ positive, negative, and data-driven test cases using Excel. Generated TestNG HTML reports with screenshots on failure, reducing manual regression time from 4 hours to approximately 18 minutes.",
        image: mmt,
        github: "https://github.com/ManjunathMdevaloper/printflighttickets",
        tech: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Excel", "POM"],
        color: "#1E88E5"
    },
    {
        title: "School Application",
        subtitle: "School Management System using React & Vite",
        year: "2025",
        description: "Developed a comprehensive and responsive school management web application for Sri Sudha School. Implemented role-based access control with separate Admin and Faculty portals. Built modules for student management with Excel import, attendance tracking, marks entry with auto-grading, exam schedule management, and a digital outpass approval system with real-time notifications. Designed a futuristic UI with glassmorphism, theme toggling (light/dark), and full mobile responsiveness.",
        image: school,
        github: "https://github.com/ManjunathMdevaloper/School_Project",
        tech: [
            "React 19",
            "Vite",
            "React Router",
            "Context API",
            "Vanilla CSS",
            "XLSX",
            "jsPDF"
        ],
        color: "#2de9feff"
    }
];

export default function Projects() {
    return (
        <section id="Projects" className="bg-[#0B2447] text-white px-6 py-24 min-h-screen">
            <Reveal width="100%">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl sm:text-6xl pulse-glow font-bold mb-20 relative flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
                >
                    My Projects

                    {/* Glow underline pulse */}
                    <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-32 bg-gradient-to-r from-[#00c6ff] via-[#2C74B3] to-[#00c6ff] blur-sm animate-pulse rounded-full" />

                    {/* Soft neon reflection */}
                    <span className="absolute -bottom-6 left-1/2 w-40 h-6 blur-[40px] opacity-40 rounded-full -translate-x-1/2 bg-[#00c6ff]" />
                </motion.h2>
            </Reveal>

            <div className="space-y-20 max-w-6xl mx-auto">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-2xl group transition-transform duration-300 hover:scale-[1.01]"
                    >
                        {/* Left Glow Bar */}
                        <div
                            className="absolute left-0 top-0 h-full w-1.5 rounded-tr-lg rounded-br-lg animate-pulse"
                            style={{ backgroundColor: project.color }}
                        />

                        {/* Glow Aura on Hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 blur-[90px] rounded-2xl -z-10"
                            style={{ backgroundColor: project.color }}
                        />

                        {/* Card content */}
                        <div className="relative z-10 p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center">
                            {/* Text Section */}
                            <div className="flex-1">
                                <Reveal>
                                    <h3 className="text-xl sm:text-3xl font-bold text-white">{project.title}</h3>
                                </Reveal>
                                <Reveal>
                                    <p
                                        className="text-sm sm:text-base font-semibold mb-4"
                                        style={{ color: project.color }}
                                    >
                                        {project.subtitle} - {project.year}
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-white/90 mb-5 text-sm sm:text-lg">{project.description}</p>
                                </Reveal>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs sm:text-sm rounded-full font-medium border"
                                            style={{
                                                color: project.color,
                                                borderColor: `${project.color}60`,
                                                backgroundColor: `${project.color}10`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-6 text-lg">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 hover:text-cyan-400"
                                    >
                                        {/* <FaExternalLinkAlt /> Live Demo */}
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 hover:text-cyan-400"
                                    >
                                        <FaGithub /> Source Code
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full lg:w-[450px] aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain w-full h-full rounded-xl"
                                    style={{ objectPosition: "top center" }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
