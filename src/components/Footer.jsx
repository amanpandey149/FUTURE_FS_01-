import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0f172a] py-12 border-t border-slate-800/50">
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-gradient mb-8 uppercase tracking-widest leading-none">AKP</h2>

                <div className="flex gap-8 mb-8">
                    <a
                        href="https://github.com/amankumarpandey0543-max"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aman-kumar-pandey-4757b73a1"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="mailto:amankumarpandey0543@gmail.com"
                        className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>

                <p className="text-slate-500 text-sm text-center">
                    &copy; {year} Aman Kumar Pandey. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2 uppercase tracking-[0.2em] font-medium">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
