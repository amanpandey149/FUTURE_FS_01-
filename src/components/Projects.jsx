import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Mini CRM System',
            description: 'A web-based application used to manage client leads, including features like lead tracking, status updates (new, contacted, converted), and notes management.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
            github: 'https://github.com/amankumarpandey0543-max',
            demo: '#',
        },
        {
            title: 'Surat Gym Center Website',
            description: 'A modern and responsive website designed for a local gym business, focusing on clean UI/UX, smooth navigation, and user-friendly design.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/amankumarpandey0543-max',
            demo: '#',
        },
        {
            title: 'Lost & Found System',
            description: 'A web platform that allows users to report lost or found items and helps connect them with their rightful owners.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/amankumarpandey0543-max',
            demo: '#',
        }
    ];

    return (
        <div className="w-full min-h-screen py-10">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-slate-100 uppercase tracking-wide">Projects</p>
                    <p className="py-6 text-slate-400">// Check out some of my recent work</p>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-slate-700/50"
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-900/40 to-slate-800 p-6 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-slate-100 text-center">{project.title}</h3>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] rounded-md font-medium uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        onClick={(e) => project.github === '#' && e.preventDefault()}
                                        className={`flex items-center gap-2 font-medium transition-all duration-300 ${project.github === '#' ? 'text-slate-500 cursor-not-allowed' : 'text-slate-300 hover:text-blue-400 hover:scale-105'}`}
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        onClick={(e) => project.demo === '#' && e.preventDefault()}
                                        className={`flex items-center gap-2 font-medium transition-all duration-300 ${project.demo === '#' ? 'text-slate-500 cursor-not-allowed' : 'text-slate-300 hover:text-blue-400 hover:scale-105'}`}
                                    >
                                        Live Demo <FaExternalLinkAlt size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
