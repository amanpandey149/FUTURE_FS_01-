import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
            console.error('EmailJS credentials are missing or placeholders. Please check your .env file.');
            setStatus('ERROR');
            setLoading(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setStatus('SUCCESS');
                form.current.reset();
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus('ERROR');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="w-full min-h-screen py-10">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-slate-100 uppercase tracking-wide">Contact</p>
                    <p className="py-6 text-slate-400">// Submit the form below to get in touch</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-4">Contact Information</h3>
                        <p className="text-slate-400">Feel free to reach out to me for any inquiries or collaboration opportunities. I'm always open to discussing new projects and ideas.</p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                                    <HiOutlineMail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                                    <a 
                                        href="mailto:amankumarpandey0543@gmail.com" 
                                        className="font-medium text-slate-200 hover:text-blue-400 transition-colors block text-sm sm:text-base"
                                    >
                                        amankumarpandey0543@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                                    <HiPhone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Phone</p>
                                    <a 
                                        href="tel:+918471012563" 
                                        className="font-bold text-slate-200 hover:text-blue-400 hover:underline transition-all duration-300 block text-lg"
                                    >
                                        +91 8471012563
                                    </a>
                                    <p className="text-[11px] text-blue-500/80 font-medium italic mt-0.5">Call for quick response</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-blue-900/30 rounded-lg text-green-500">
                                    <FaWhatsapp size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">WhatsApp</p>
                                    <a 
                                        href="https://wa.me/918471012563" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-slate-200 hover:text-green-500 hover:underline transition-all duration-300 block text-lg"
                                    >
                                        +91 8471012563
                                    </a>
                                    <p className="text-[11px] text-green-500/80 font-medium italic mt-0.5">Message for details</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                                    <HiOutlineLocationMarker size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</p>
                                    <p className="font-medium">Surat, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                            <input
                                className="bg-[#1e293b] text-slate-100 p-4 rounded-xl border border-slate-700/50 focus:border-blue-500 outline-none transition-colors"
                                type="text"
                                placeholder="Name"
                                name="user_name"
                                required
                            />
                            <input
                                className="bg-[#1e293b] text-slate-100 p-4 rounded-xl border border-slate-700/50 focus:border-blue-500 outline-none transition-colors"
                                type="email"
                                placeholder="Email"
                                name="user_email"
                                required
                            />
                            <textarea
                                className="bg-[#1e293b] text-slate-100 p-4 rounded-xl border border-slate-700/50 focus:border-blue-500 outline-none transition-colors"
                                name="message"
                                rows="6"
                                placeholder="Message"
                                required
                            ></textarea>

                            <button 
                                type="submit"
                                disabled={loading}
                                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'SUCCESS' && (
                                <p className="text-green-500 text-center font-medium mt-2">Message sent successfully!</p>
                            )}
                            {status === 'ERROR' && (
                                <p className="text-red-500 text-center font-medium mt-2">Something went wrong. Please try again.</p>
                            )}
                            {status === '' && (
                                <p className="text-xs text-slate-500 text-center italic mt-2">
                                    * Integration requires EmailJS configuration
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
