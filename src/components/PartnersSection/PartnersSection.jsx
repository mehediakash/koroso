import React from "react";

const logos = [
  { src: "https://th.bing.com/th/id/R.16597b58fb4d4fa8ebcf5a013fc19b0a?rik=a0DcRRp3bMzLow&pid=ImgRaw&r=0", alt: "Google" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png?20230221160917", alt: "Microsoft" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Minnesota_Logo.svg/512px-University_of_Minnesota_Logo.svg.png?20200121234844", alt: "University of Minnesota" },
  { src: "https://corporate.target.com/getmedia/890f3192-ce35-496a-a3cf-15fc0a8105d0/Target_Bullseye-Logo_Red.jpg?width=620", alt: "Target" },
  { src: "https://th.bing.com/th/id/R.faa7839e38cd5e4bdac97b7fe5b8b73f?rik=L6rs5XbKXFTnWQ&pid=ImgRaw&r=0", alt: "Medtronic" },
];

const PartnersSection = () => {
  return (
    <section
      id="Partners"
      className="relative scroll-mt-24 bg-primery from-blue-50 via-white to-blue-50 py-16 px-4"
      aria-labelledby="partners-title"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          id="partners-title"
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
        >
          Partners &amp; Sponsors
        </h2>
        <p className="mt-4 text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
          Progressive corporate, government, nonprofit, and higher education
          partners have been vital to OTIS’s mission. We collaborate with
          organizations that value diversity, equity, and inclusion — and
          understand OTIS’s role in advancing DEI in tech, innovation, and STEM.
        </p>

        {/* Logo Slider */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex animate-slide space-x-12 md:space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-primery via-primery/70 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-primery via-primery/70 to-transparent" />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="mailto:info@otis.org?subject=Partner%20with%20OTIS"
            className="inline-block px-8 py-3 bg-red text-white rounded-full shadow-lg hover:scale-105 hover:bg-red transition-transform duration-300"
          >
            Email Partnerships
          </a>
        </div>
      </div>

      {/* Custom keyframes & animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
