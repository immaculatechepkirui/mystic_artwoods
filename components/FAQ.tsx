'use client';

import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: "What materials do you use?",
    answer: "We use high-quality, responsibly sourced wood, ensuring all materials are eco-friendly and highlight the wood's natural beauty."
  },
  {
    id: 2,
    question: "Can I request custom furniture designs?",
    answer: "Yes! We specialize in custom designs tailored to your style and space. Just contact us to discuss your ideas."
  },
  {
    id: 3,
    question: "What is the turnaround time for custom orders?",
    answer: "Custom pieces typically take 4 to 8 weeks, depending on complexity. We'll provide a timeline when you place your order."
  },
  {
    id: 4,
    question: "Do you offer restoration services?",
    answer: "Yes, we provide furniture restoration and refinishing to restore the beauty and functionality of your cherished pieces."
  },
  {
    id: 5,
    question: "How do I care for my wooden items?",
    answer: "Avoid direct sunlight, use coasters, and polish with a soft cloth. Specific care instructions will be given upon purchase."
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, mobile money, and bank transfers. Let us know your preference!"
  },
  {
    id: 7,
    question: "Can I visit your workshop?",
    answer: "Yes! Visit us at the Rubis petrol station, Loresho Ridge Road. It's best to schedule an appointment for a dedicated experience."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#fdfdfd] min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* FAQ Title */}
          <div className="md:col-start-4 md:col-span-6 mb-8">
            <div className="text-center pb-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1659c7] relative inline-block">
                FAQ
                <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[60px] h-1 bg-[#1659c7]"></span>
              </h2>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="md:col-start-4 md:col-span-6">
            <div className="bg-white rounded-lg shadow-md" style={{ boxShadow: '0 2px 48px 0 rgba(0, 0, 0, 0.06)' }}>
              {faqItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`border-b border-dashed border-[#CEE1F8] ${
                    index === faqItems.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  {/* Card Header */}
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-6 md:px-8 py-5 text-left flex items-center gap-4 hover:bg-[rgba(22,89,199,0.1)] transition-all duration-300 focus:outline-none group"
                  >
                    {/* Badge */}
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1659c7] text-white text-xs font-semibold flex-shrink-0">
                      {item.id}
                    </span>

                    {/* Question Text */}
                    <h5 className="text-base md:text-lg font-normal text-[#3B566E] flex-grow group-hover:text-[#1659c7] transition-colors duration-300">
                      {item.question}
                    </h5>
                  </button>

                  {/* Card Body - Collapsible */}
                  {openId === item.id && (
                    <div className="px-6 md:px-8 pb-5 border-t border-[#F3F8FF] bg-white">
                      <p className="text-base md:text-lg text-[#6F8BA4] font-normal leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}