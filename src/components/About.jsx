import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="w-full md:h-[600px] flex items-center">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-slate-100">About Me</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 w-full mt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="sm:text-right text-3xl font-bold text-slate-200"
                    >
                        <p>I'm <span className="text-blue-400">Aman Kumar Pandey</span>, a Computer Science student based in Surat, India.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-slate-400 leading-relaxed text-lg"
                    >
                        <p className="mb-4">
                            Currently pursuing my **B.Tech in Computer Science & Engineering** at
                            <span className="text-blue-400 font-semibold px-1">P P Savani University, Surat</span> (2024 – 2028).
                        </p>
                        <p className="mb-4 text-slate-200 font-semibold">
                            Full Stack Development Learner (2024 – Present)
                        </p>
                        <p className="mb-4">
                            Building projects using HTML, CSS, JavaScript, React, C, and Python while improving problem-solving and coding skills. I enjoy building applications that solve real-world problems while maintaining clean and efficient code.
                        </p>
                        <p>
                            I am always eager to learn new technologies and I'm currently **open to internships and freelance opportunities**.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { label: 'University', value: 'P P Savani University' },
                        { label: 'Location', value: 'Surat, India' },
                        { label: 'Degree', value: 'B.Tech CSE' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="glass p-6 rounded-xl text-center"
                        >
                            <h3 className="text-blue-400 font-bold mb-1 uppercase text-xs tracking-widest">{item.label}</h3>
                            <p className="text-slate-200 font-medium">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
