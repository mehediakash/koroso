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
 
const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerSections = {
    contact: {
      title: "CONTACT US",
      content: (
        <>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white">1031 33rd Street</p>
                <p className="text-white">Denver, Colorado 80205</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:3037722723" className="text-white hover:text-primary transition-colors duration-200">
                303-772-2723
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="mailto:info@OTIS.org" className="text-white hover:text-primary transition-colors duration-200">
                info@OTIS.org
              </a>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            Engineers Without Borders USA is a 501(c)3 organization and a member of Engineers Without Borders International.
          </p>
        </>
      )
    },
    about: {
      title: "ABOUT US",
      links: [
        { name: "Mission & Vision", href: "/about-us" },
        { name: "Financials", href: "/financials" },
        { name: "Our Team", href: "/our-team" },
        { name: "Commitment to DEI", href: "/dei" },
        { name: "FAQs", href: "/faqs" },
        { name: "Impactful Investors", href: "/investors" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    programs: {
      title: "PROGRAMS",
      links: [
        { name: "International Community Program", href: "/international-program" },
        { name: "Community Engineering Corps", href: "https://www.communityengineeringcorps.org", external: true },
        { name: "Engineering Climate Resilience", href: "/climate-resilience" },
        { name: "Community Health", href: "/community-health" },
        { name: "Request Engineering Services", href: "/request-services" }
      ]
    },
    involvement: {
      title: "GET INVOLVED",
      links: [
        { name: "Volunteer", href: "/volunteer" },
        { name: "Volunteer Registration", href: "/volunteer-registration" },
        { name: "Volunteer Village", href: "https://volunteer.OTIS.org", external: true },
        { name: "Find a Chapter", href: "/find-chapter" },
        { name: "Corporate Engagement", href: "/corporate-engagement" }
      ]
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/OTIS",
      icon: "linkedin",
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCQV_s3TIzi3XuD6amswmiLw",
      icon: "youtube",
      color: "hover:text-red-400"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ewbusa/",
      icon: "instagram",
      color: "hover:text-pink-400"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setFormData({ firstName: '', lastName: '', email: '' });
    // Here you would typically make an API call to your newsletter service
  };

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
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.25 14.816 3.76 13.665 3.76 12.368s.49-2.448 1.366-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.366 2.026 1.366 3.323s-.491 2.448-1.366 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-10.966c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm1.95 10.966c-1.366 0-2.448-1.082-2.448-2.448v-6.104c0-1.366 1.082-2.448 2.448-2.448h6.104c1.366 0 2.448 1.082 2.448 2.448v6.104c0 1.366-1.082 2.448-2.448 2.448h-6.104z"/>
        </svg>
      )
    };
    return icons[icon] || null;
  };

  return (
    <footer className="bg-primery text-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-95"></div> */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      
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
                <h4 className="text-lg font-semibold text-white border-l-4 border-primary pl-3">
                  {footerSections.about.title}
                </h4>
                <ul className="space-y-2">
                  {footerSections.about.links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-primary transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-l-4 border-primary pl-3">
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
                          className="text-gray-300 hover:text-primary transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ) : (
                        <Link 
                          to={link.href}
                          className="text-gray-300 hover:text-primary transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Involved */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-l-4 border-primary pl-3">
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
                          className="text-gray-300 hover:text-primary transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ) : (
                        <Link 
                          to={link.href}
                          className="text-gray-300 hover:text-primary transition-all duration-200 transform hover:translate-x-1 flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
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
                <h4 className="text-lg font-semibold text-white border-l-4 border-primary pl-3">
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
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-200"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-200"
                    required
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
          

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SUBSCRIBE
                    </>
                  )}
                </button>
              </form>

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
                  © Copyright 2025 Engineers Without Borders USA, All Rights Reserved.
                
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