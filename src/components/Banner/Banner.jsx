import React from 'react'

const Banner = () => {
  return (
   <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-[rgba(63,63,63,0.15)] bg-opacity-50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20  text-white px-4 sm:px-6 lg:px-8 ">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block">Oromo Tech</span>
            <span className="block">Innovation </span>
            <span className="block">OTIS </span>
          </h1>
        </div>

        {/* Description Text */}
        <div className="mb-8 ">
          <p className="text-lg sm:text-xl lg:text-2xl max-w-[50%] leading-relaxed font-light">
            Partner with Oromo Tech & Innovation Society on sustainable engineering solutions that equip 
            communities to thrive for generations.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/learn-more"
            className="inline-flex items-center px-8 py-4 border-white border hover:bg-primery text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            LEARN MORE
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
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
    </section>
  )
}

export default Banner