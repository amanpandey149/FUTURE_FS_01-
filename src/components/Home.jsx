import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center py-20 md:py-0 pt-32 md:pt-0">
            <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row">
                <div className="flex flex-col items-center md:items-start text-center md:text-left order-last md:order-first">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="uppercase text-sm tracking-widest text-blue-400"
                    >
                        LET'S BUILD SOMETHING TOGETHER
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="py-4 text-slate-100 text-5xl md:text-7xl font-bold"
                    >
                        Hi, I'm <span className="text-gradient">Aman Kumar Pandey</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="py-2 text-slate-300 text-2xl md:text-4xl font-bold"
                    >
                        Computer Science Student | Aspiring Full Stack Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="py-6 text-slate-400 max-w-[500px] text-lg leading-relaxed"
                    >
                        I'm a Computer Science & Engineering student at P P Savani University, Surat. Passionate about building digital experiences, solving complex problems, and mastering the modern web ecosystem. Open to internships and freelance opportunities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                    >
                        <Link to="projects" smooth={true} duration={500} offset={-80}>
                            <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-lg font-semibold">
                                View Projects
                                <span className="group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight className="ml-3" size={20} />
                                </span>
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-80}>
                            <button className="px-6 py-3 my-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent transition-all duration-300 rounded-lg font-semibold">
                                Contact Me
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center order-first md:order-last mb-10 md:mb-0"
                >
                    <div className="relative group w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px]">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full border-[6px] border-[#0f172a] shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-500 bg-slate-800 flex items-center justify-center">
                            <img
                                src="/profile.jpg"
                                alt="Aman Kumar Pandey"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
