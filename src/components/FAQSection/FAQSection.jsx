import React, { useState } from "react";

const faqs = [
  {
    question: "How can I join OTIS as a student?",
    answer:
      "Use the Join form to connect with programs, mentors, and events.",
  },
  {
    question: "Can professionals get involved?",
    answer:
      "Yes—mentor, join panels, or partner on recruiting and projects. ",
  },
  {
    question: "How do companies sponsor or recruit?",
    answer:
      "Contact us via Partnerships/Contact to collaborate on recruiting and sponsorship. ",
  },
  {
    question: "Is OTIS only for Oromo people?",
    answer:
      "No—centered on Oromo community, welcoming to all allies and collaborators.",
  },
  {
    question: "How can I start a local chapter? ",
    answer:
      " Submit an interest form; we’ll share guidelines upon approval.",
  },
  {
    question: "What programs does OTIS offer?  ",
    answer:
      " Mentorship, scholarships, leadership, career fairs, tech workshops, hackathons, wellness. ",
  },
  {
    question: "How do I volunteer or mentor?",
    answer: (
      <>
         Use the Join form and select your interest; we’ll follow up. 

        <a
          href="mailto:info@otis.org"
          className="text-green hover:underline"
        >{" "}
           info@otis.org
        </a>
        
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section
      id="faq"
      className="py-16 bg-primery from-gray-50 to-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="faq-title"
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10"
        >
          FAQs
        </h2>

        <div className="space-y-4">
          {displayedFaqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  } text-2xl text-white`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-white text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {faqs.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-red text-white rounded-lg hover:bg-red transition-colors duration-300 shadow-md"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
