import React, { useState, useEffect } from "react";

const events = [
  {
    title: "OTIS Summit",
    description:
      "Annual career fair + tech summit + cultural night in Minneapolis (rotates in future).",
  },
  {
    title: "Industry Nights",
    description:
      "Quarterly panels with leaders in technology, healthcare, business, and education.",
  },
  {
    title: "Hack for Community",
    description:
      "Weekend hackathons building real tools for language, jobs, and services.",
  },
];

const testimonials = [
  {
    quote:
      "“OTIS connected our CS students with mentors and internships we couldn’t reach before.”",
    author: "— University Partner",
  },
  {
    quote:
      "“We hired two interns through the OTIS fair — talented and community-minded.”",
    author: "— Employer Partner",
  },
  {
    quote:
      "“As a first-gen student, my mentor helped me land my first data role.”",
    author: "— Student Member",
  },
];

const EventsSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="events"
      className="relative bg-primery from-white to-blue-50 py-16 px-4"
      aria-labelledby="events-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          id="events-title"
          className="text-3xl md:text-4xl font-extrabold text-center text-white tracking-tight"
        >
          Flagship Events
        </h2>

        {/* Event Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {events.map((event, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start transform hover:-translate-y-1 hover:shadow-2xl transition duration-500"
            >
              <h4 className="text-xl font-semibold text-green">
                {event.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {event.description}
              </p>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white">
            What Partners &amp; Members Say
          </h3>

          <div className="relative mt-8 max-w-3xl mx-auto">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <p className="text-lg md:text-xl text-white italic">
                  {t.quote}
                </p>
                <span className="mt-3 block text-sm md:text-base text-white">
                  {t.author}
                </span>
              </div>
            ))}

            {/* Slider dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                    current === index ? "bg-red" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
