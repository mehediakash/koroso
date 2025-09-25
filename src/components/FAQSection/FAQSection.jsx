import React, { useState } from "react";

const faqs = [
  {
    question: "How can universities partner with OTIS?",
    answer:
      "Co-host events, provide internship pathways, and sponsor scholarships or research opportunities.",
  },
  {
    question: "How do companies sponsor or recruit?",
    answer:
      "Select a tier above, host panels, and participate in our Summit career fair. We’ll match you with talent.",
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      "We’re incorporating in Minnesota and pursuing 501(c)(3). We’ll share status updates in our sponsor packet.",
  },
  {
    question: "Can I start a chapter?",
    answer: (
      <>
        Yes — we offer a starter kit, training, and ongoing support. Email{" "}
        <a
          href="mailto:otisociety+chapters@gmail.com"
          className="text-blue-600 hover:underline"
        >
          otisociety+chapters@gmail.com
        </a>
        .
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

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section
      id="faq"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="faq-title"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
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
                <span className="text-lg font-medium text-gray-800">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  } text-2xl text-gray-500`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 text-base">
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
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
