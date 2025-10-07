import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Send,
  Heart,
  Shield,
  AlertTriangle
} from 'lucide-react';

import logo from "../../assets/logo/logo-white.png"
import { motion, AnimatePresence } from "framer-motion";

 
const Footer = () => {
const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission (replace with Netlify/Formspree handler)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setFormData({ name: "", email: "" });
    setSuccess(true);

    // Hide popup after 3s
    setTimeout(() => setSuccess(false), 3000);
  };


const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  handleLinkClick(); // closes mobile menu
};
  

  const footerSections = {
    contact: {
      title: "CONTACT US",
      content: (
        <>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white">300 Washington Ave, </p>
                <p className="text-white">Minneapolis, MN</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white flex-shrink-0" />
              <a href="tel:3037722723" className="text-white hover:text-white transition-colors duration-200">
                612-442-2126
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white flex-shrink-0" />
              <a href="mailto:info@otis.org" className="text-white hover:text-white transition-colors duration-200">
                info@otis.org 
              </a>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            Oromo Tech & Innovation Society (OTIS)
          </p>
        </>
      )
    },
    about: {
      title: "ABOUT US",
      links: [
        { name: "Terms", href: "/terms.html" },
        { name: "Privacy", href: "/privacy.html" },
        { name: "Programs", href: "#Programs" },
        { name: "Our Team", href: "#Team" },
        { name: "Get Involved", href: "https://docs.google.com/forms/d/e/1FAIpQLSdH3MdgvtnuJB5pbhGJmQS2AgfsybaZeLh6g-3OhYjHACAeww/viewform" },
        { name: "Donate", href: "https://donate.stripe.com/test_fZu6oHg30eyw4dtep367S00" },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "#FAQ" },
      ]
    },
    programs: {
      title: "PROGRAMS",
      links: [
        { name: "Students & Early Career", href: "#Programs" },
        { name: "Professionals & Employers", href: "#Programs", external: true },
        { name: "Community & Innovation", href: "#Programs" },

      ]
    },
    involvement: {
      title: "GET INVOLVED",
      links: [
        { name: "Volunteer", href: "/#" },
        { name: "Volunteer Registration", href: "https://docs.google.com/forms/d/e/1FAIpQLSdH3MdgvtnuJB5pbhGJmQS2AgfsybaZeLh6g-3OhYjHACAeww/viewform" },
        // { name: "Volunteer Village", href: "#", external: true },
      ]
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: "linkedin",
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      icon: "youtube",
      color: "hover:text-red-400"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: "instagram",
      color: "hover:text-pink-400"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/",
      icon: "tiktok",
      color: "hover:text-pink-400"
    }
  ];



  const SocialIcon = ({ icon, className }) => {
    const icons = {
      linkedin: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      youtube: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      instagram: (
       <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
      ),
      tiktok: (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" version="1.1">
<title>tiktok</title>
<path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
</svg>
      )
    };
    return icons[icon] || null;
  };

  return (
    <footer className="bg-primery text-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-95"></div> */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primery/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Contact Information - Full width on mobile, then 2 columns */}
            <div className="xl:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className='w-[30%]'>

                <img src={logo} alt="logo" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {footerSections.contact.content}
              </div>

              {/* Transparency Seal */}
            
            </div>

            {/* Navigation Links - Grid layout */}
            <div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* About Us */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-l-4 border-primery ">
                  {footerSections.about.title}
                </h4>
                <ul className="space-y-2">
                  {footerSections.about.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        onClick={(e) => link.href.startsWith("#") && handleSmoothScroll(e, link.href)}
                        className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                      >
                        <span className="w-1 h-1 bg-primery rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-l-4 border-primery ">
                  {footerSections.programs.title}
                </h4>
                <ul className="space-y-2">
                  {footerSections.programs.links.map((link, index) => (
                    <li key={index}>
                      {link.external ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primery rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ) : (
                        <Link 
                          to={link.href}
                          className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primery rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Involved */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-l-4 border-primery ">
                  {footerSections.involvement.title}
                </h4>
                <ul className="space-y-2">
                  {footerSections.involvement.links.map((link, index) => (
                    <li key={index}>
                      {link.external ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primery rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ) : (
                        <Link 
                          to={link.href}
                          className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primery rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="xl:col-span-1 space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-l-4 border-primery ">
                  STAY CONNECTED
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sign up for the OTIS newsletter to keep up on the latest.
                </p>
              </div>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    name="Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primery transition-all duration-200"
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primery transition-all duration-200"
                    required
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
          

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red to-blue-600 hover:from-blue-600 hover:to-primery text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Newsletter
                    </>
                  )}
                </button>
              </form>
              <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50"
            >
              Thank you! You’ve successfully subscribed.
            </motion.div>
          )}
        </AnimatePresence>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-300 text-sm mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <SocialIcon icon={social.icon} className="w-5 h-5" />
                      
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-center lg:text-left">
                <p className="text-white text-sm">
                  © Copyright 2025 Oromo Tech & Innovation Society, All Rights Reserved.
                
                </p>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;