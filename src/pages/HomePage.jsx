import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 md:px-6">
                <section id="home">
                    <Home />
                </section>
                <section id="about" className="py-20">
                    <About />
                </section>
                <section id="skills" className="py-20">
                    <Skills />
                </section>
                <section id="certificates" className="py-20">
                    <Certificates />
                </section>
                <section id="projects" className="py-20">
                    <Projects />
                </section>
                <section id="resume" className="py-20">
                    <Resume />
                </section>
                <section id="contact" className="py-20">
                    <Contact />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HomePage
