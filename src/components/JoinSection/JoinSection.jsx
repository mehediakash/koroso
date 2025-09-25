import React from "react";

export default function JoinSection() {
  return (
    <section
      id="join"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="join-title"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2
          id="join-title"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4"
        >
          Join Oromo Tech &amp; Innovation Society (OTIS)
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 text-center mb-10">
          Students, professionals, elders, and allies — add your info and we’ll
          follow up with next steps.
        </p>

        {/* Embedded Google Form */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <iframe
            title="Join OTIS Form"
            src="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full"
          >
            Loading…
          </iframe>
        </div>

        {/* Fallback Button */}
        <div className="flex justify-center mt-6">
          <a
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/1mKvxfHgPeit87d_Ua86cI2kMbb6FoePejt2pVjBd0P8/viewform"
          >
            Open form in a new tab
          </a>
        </div>
      </div>
    </section>
  );
}
