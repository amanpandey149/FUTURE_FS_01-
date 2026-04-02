import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleClick = () => setNav(!nav);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
        return () => window.removeEventListener('scroll', handleShadow);
    }, []);

    const navLinks = [
        { title: 'Home', to: 'home' },
        { title: 'About', to: 'about' },
        { title: 'Skills', to: 'skills' },
        { title: 'Certificates', to: 'certificates' },
        { title: 'Projects', to: 'projects' },
        { title: 'Resume', to: 'resume' },
        { title: 'Contact', to: 'contact' },
    ];

    return (
        <header
            className={`fixed w-full h-20 z-[100] transition-all duration-300 ${shadow ? 'bg-[#0f172a]/80 backdrop-blur-md shadow-xl' : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
                <div>
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                        <h1 className="text-2xl font-bold text-gradient tracking-wider uppercase">AKP</h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    activeClass="text-blue-400 font-bold"
                                    className="nav-link text-sm uppercase"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <div onClick={handleClick} className="md:hidden cursor-pointer text-slate-200">
                    {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-[#0f172a]/95 transition-opacity duration-300'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1e293b] p-10 ease-in duration-500 shadow-2xl'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <h1 className="text-xl font-bold text-gradient">AKP</h1>
                            <div
                                onClick={handleClick}
                                className="rounded-full bg-[#0f172a] p-3 cursor-pointer hover:scale-105 transition-transform"
                            >
                                <HiX size={20} />
                            </div>
                        </div>
                        <div className="border-b border-gray-700 my-4">
                            <p className="py-4 text-blue-400">Let's build something great</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            {navLinks.map((link) => (
                                <li key={link.to} className="py-4 text-sm">
                                    <Link
                                        onClick={() => setNav(false)}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-80}
                                        className="cursor-pointer hover:text-blue-400"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
