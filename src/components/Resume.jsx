import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiOutlineEye } from 'react-icons/hi';

const Resume = () => {
    return (
        <div id="resume" className="w-full py-20 text-slate-300">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2 underline underline-offset-8 decoration-blue-500">RESUME</h2>
                    <p className="text-slate-400 font-medium">Ready to work and contribute to exciting projects</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-12 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm text-center md:text-left shadow-2xl relative overflow-hidden group"
                >
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl font-bold text-white mb-4">Aman Kumar Pandey</h3>
                            <p className="text-blue-400 text-lg font-semibold mb-6">Computer Science Student & Aspiring Developer</p>
                            <p className="text-slate-400 text-base leading-relaxed mb-4">
                                Download my resume to know more about my skills, projects, and experience. 
                                I am currently focusing on Full Stack Web Development and Data Structures & Algorithms.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href="https://drive.google.com/file/d/1yluGnRHRrDKP5XOiKmdRouZOuJ8Rwu_n/preview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-700 hover:border-slate-600 shadow-lg"
                            >
                                <HiOutlineEye className="text-xl" /> View Resume
                            </a>
                            <a
                                href="https://drive.google.com/uc?export=download&id=1yluGnRHRrDKP5XOiKmdRouZOuJ8Rwu_n"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                            >
                                <HiDownload className="text-xl" /> Download
                            </a>
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;