import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import hero from "../assets/hero.jpg";
import { TypeAnimation } from 'react-type-animation';
import { IoIosArrowDown } from "react-icons/io";
import MagneticButton from "./MagneticButton";

function Hero() {
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [0, 1], [10, -10]);
    const rotateY = useTransform(x, [0, 1], [-10, 10]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const bounds = containerRef.current.getBoundingClientRect();
            const xVal = (e.clientX - bounds.left) / bounds.width;
            const yVal = (e.clientY - bounds.top) / bounds.height;
            x.set(xVal);
            y.set(yVal);
        };

        const el = containerRef.current;
        el.addEventListener("mousemove", handleMouseMove);
        return () => el.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div
            ref={containerRef}

            className="modern-gradient relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 text-center lg:text-left overflow-hidden gap-20 pt-20 sm:pt-24"
        >

            {/* Text Section */}
            <div className="flex flex-col items-center lg:items-start gap-4 z-10">
                <div className="text-xl sm:text-2xl mb-1 text-gray-300">
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'Test Engineer',
                            2000,
                            'React JS Developer',
                            2000,
                            'Problem Solver',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-medium"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Hello!, I&apos;m <br />
                        <span className="gradient-text-hero pulse-glow glitch" data-text="Manke Manjunath">Manke Manjunath</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
                        Specializing in Front-end & Back-end development with React & Spring Boot, and ensuring software quality through Manual & Automation Testing with Selenium.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <MagneticButton
                            href="#About1"
                            className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all inline-block"
                        >
                            Contact Me
                        </MagneticButton>
                        <MagneticButton
                            href="#Projects"
                            className="backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-all inline-block"
                        >
                            View Work
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>

            {/* Profile + Glow + 3D Tilt */}
            <motion.div
                className="relative z-10"
                style={{ rotateX, rotateY }}
            >
                {/* Glowing layers */}
                <div className="absolute -inset-20 rounded-full bg-[#00FFFF] blur-[100px] opacity-40 animate-pulse z-0" />
                <div className="absolute -inset-28 rounded-full bg-[#2C74B3] blur-[120px] opacity-30 animate-pulse-slow z-0" />
                <div className="absolute -inset-36 rounded-full bg-[#7F00FF] blur-[160px] opacity-20 animate-pulse-slow z-0" />

                {/* Spinning aura ring */}
                <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-gradient3 via-gradient2 to-gradient1 blur-2xl opacity-70 animate-spin-slow z-0" />

                {/* Profile image */}
                <motion.img
                    src={hero}
                    alt="Profile Pic"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full object-cover relative z-10 hover-lift shadow-2xl border-4 border-white/10"
                />
            </motion.div>

            {/* Scroll icon */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a href="#About" className="text-white cursor-pointer hover:scale-110 transition-transform">
                    <IoIosArrowDown size={24} />
                </a>
            </motion.div>

        </div>
    );
}

export default Hero;
