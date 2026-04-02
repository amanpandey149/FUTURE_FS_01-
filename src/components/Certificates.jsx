import React from 'react';

const Certificates = () => {
    const certs = [
        {
            title: 'Getting Started with Cisco Packet Tracer',
            org: 'Cisco Networking Academy',
            date: 'February 2026',
            description: 'Basics of networking and Packet Tracer simulation'
        },
        {
            title: 'Exploring Networking with Cisco Packet Tracer',
            org: 'Cisco Networking Academy',
            date: 'March 2026',
            description: 'Network design and simulation concepts'
        },
        {
            title: 'MindForge Participation Certificate',
            org: 'Unstop',
            date: '2026',
            description: 'Problem-solving and teamwork competition'
        },
        {
            title: 'SCETATHON Hackathon – Idea Pitching Round',
            org: 'Sarvajanik College of Engineering & Technology (SCET), Surat',
            date: 'March 2026',
            description: 'Participated in a 24-hour hackathon (SCETATHON) and presented an idea in the pitching round.'
        },
        {
            title: 'Bitwars 3.0 Coding Event Participation',
            org: 'Vellore Institute of Technology (VIT), Chennai via Unstop',
            date: '2026',
            description: 'Participated in a competitive coding event focused on problem-solving and algorithmic skills.'
        },
        {
            title: 'Hyperspace Innovation Hackathon',
            org: 'IPEC / Technest',
            date: 'February 2026',
            description: 'Participated in an innovation hackathon, presenting ideas in domains like AI, Space Tech, and Drone Tech.'
        },
        {
            title: 'Introduction to Modern AI',
            org: 'Cisco Networking Academy',
            date: 'March 2026',
            description: 'Learned core concepts of AI, machine learning, prompt engineering, and real-world applications.'
        },
        {
            title: 'JavaScript Essentials 1',
            org: 'Cisco Networking Academy (OpenEDG JS Institute)',
            date: 'March 2026',
            description: 'Fundamentals of JavaScript including variables, data types, control flow, and basic programming concepts.'
        },
        {
            title: 'Software Engineering: Modeling Software Systems using UML',
            org: 'Coursera (HKUST)',
            date: 'July 2025',
            description: 'Learned object-oriented modeling using UML, including requirements analysis and architectural design.'
        },
        {
            title: 'Software Engineering: Implementation and Testing',
            org: 'Coursera (HKUST)',
            date: 'July 2025',
            description: 'Explored software implementation best practices and various testing methodologies for robust software.'
        },
        {
            title: 'Software Engineering: Software Design and Project Management',
            org: 'Coursera (HKUST)',
            date: 'July 2025',
            description: 'Focused on software design patterns, project planning, and agile project management techniques.'
        },
        {
            title: 'Machine Learning for Data Science Projects',
            org: 'IBM SkillsBuild',
            date: 'September 2025',
            description: 'Applied machine learning algorithms to real-world data science projects, covering data preprocessing and evaluation.'
        }
    ];

    return (
        <div id="certificates" className="w-full py-16 text-slate-300">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2 underline underline-offset-8 decoration-blue-500">Certifications</h2>
                    <p className="text-slate-400 font-medium">Professional development and achievements.</p>
                </div>

                <div className="grid gap-8 max-w-4xl mx-auto">
                    {certs.map((cert, index) => (
                        <div key={index} className="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-blue-400 text-base font-semibold mb-3">{cert.org}</p>
                                    <p className="text-slate-400 text-base mb-2 leading-relaxed max-w-2xl">{cert.description}</p>
                                </div>
                                <div className="md:text-right flex-shrink-0">
                                    <span className="px-3 py-1 bg-slate-800 text-slate-400 text-sm font-mono rounded-md border border-slate-700">
                                        Date: {cert.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
