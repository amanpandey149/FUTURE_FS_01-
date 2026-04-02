import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaProjectDiagram
} from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const Skills = () => {
    const skillsList = [
        { name: 'C Programming', icon: <SiC />, color: 'hover:text-blue-500' },
        { name: 'Python', icon: <FaPython />, color: 'hover:text-blue-600' },
        { name: 'JavaScript', icon: <FaJs />, color: 'hover:text-yellow-400' },
        { name: 'HTML', icon: <FaHtml5 />, color: 'hover:text-orange-500' },
        { name: 'CSS', icon: <FaCss3Alt />, color: 'hover:text-blue-500' },
        { name: 'React.js', icon: <FaReact />, color: 'hover:text-blue-400' },
        { name: 'DSA', icon: <FaProjectDiagram />, color: 'hover:text-green-500' },
        { name: 'Git & GitHub', icon: <div className="flex gap-1"><FaGitAlt /><FaGithub /></div>, color: 'hover:text-white' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="w-full min-h-screen py-10">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-slate-100 uppercase tracking-wide">Skills</p>
                    <p className="py-6 text-slate-400">// These are the technologies I've worked with</p>
                </div>

                <motion.div
                    className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillsList.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`glass p-6 rounded-xl transition-all duration-300 ${skill.color} cursor-default`}
                        >
                            <div className="text-5xl flex justify-center mb-4">
                                {skill.icon}
                            </div>
                            <p className="my-2 font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Learning section or Progress bars could go here if requested, 
            but using clean cards as specified. */}
            </div>
        </div>
    );
};

export default Skills;
