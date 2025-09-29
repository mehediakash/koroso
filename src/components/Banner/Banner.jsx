import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
const words = [
    "Innovation",
    "Oromo",
    "Thrive",
    "Leadership",
    "Entrepreneurship",
    "Lead",
    "Learn",
    "Thrive",
  ];
   const [index, setIndex] = useState(0);

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change word every 2s
    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ewb-usa.org/files/galleries/Copy_of_BRoll_for_Website-ULTRA_Shortened_720p_Made_with_Clipchamp_(1)_(1)_(1).mp4" type="video/mp4" />
          {/* <source src="/videos/hero-banner.webm" type="video/webm" /> */}
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://ewb-usa.org/files/galleries/EWBUSAHomepage.png?resize=1280x0" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(8,7,56,0.22)] bg-opacity-50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20  text-white px-4 sm:px-6 lg:px-8 ">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block">Oromo Tech &</span>
            <span className="block">Innovation Society</span>
            {/* Replase this (OTIS) and i want to this word to animation  Innovation Oromo Thrive Innovation Leadership Entrepreneurship Lead Learn Thrive */}
            <span className="block h-20 mt-2 text-red">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red tracking-wide"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>

          </h1>
        </div>

        {/* Description Text */}
        <div className="mb-8 ">
          <p className="text-lg sm:text-xl lg:text-2xl md:max-w-[50%] w-auto leading-relaxed font-light">
            Partner with Oromo Tech & Innovation Society on sustainable engineering solutions that equip 
            communities to thrive for generations.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform"
            className="inline-flex items-center px-8 py-4 border-red border hover:bg-red text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
           Donate Now
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primery via-transparent to-transparent z-10"></div>
    </section>
  )
}

export default Banner