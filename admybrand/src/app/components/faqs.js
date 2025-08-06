'use client';

import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

const faqs = [
  {
    question: "Q. What is ADmyBRAND AI Suite?",
    answer:
      "ADmyBRAND AI Suite is an all-in-one marketing automation and branding platform powered by AI, designed to help businesses optimize campaigns, manage media, and analyze data effortlessly.",
  },
  {
    question: "Q. Who can benefit from using ADmyBRAND?",
    answer:
      "Startups, SMEs, marketing agencies, and large enterprises looking for intelligent campaign management and real-time analytics can benefit from our suite.",
  },
  {
    question: "Q. What features are included in the platform?",
    answer:
      "It includes media planning, influencer outreach, AI ad generation, real-time campaign analytics, budget tracking, and centralized brand asset management.",
  },
  {
    question: "Q. Is technical knowledge required?",
    answer:
      "No. ADmyBRAND offers an intuitive dashboard with drag-and-drop functionality, making it easy to use for marketers with or without technical backgrounds.",
  },
  {
    question: "Q. Do you offer custom plans or trials?",
    answer:
      "Yes. You can request a free demo or opt for a custom subscription plan tailored to your organization's needs.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [typingText, setTypingText] = useState("");
  const typingPrompt = "Ask a question about ADmyBRAND...";
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let i = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (inputValue !== "") return;
      if (forward) {
        setTypingText(typingPrompt.slice(0, i + 1));
        i++;
        if (i === typingPrompt.length) forward = false;
      } else {
        setTypingText(typingPrompt.slice(0, i - 1));
        i--;
        if (i === 0) forward = true;
      }
    }, 120);
    return () => clearInterval(interval);
  }, [inputValue]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-input-container">
        <input
          type="text"
          className="faq-input"
          placeholder={typingText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="send-btn">
          <FaPaperPlane />
          Send
        </button>
      </div>

      <style>{`
        .faq-section {
          padding: 80px 20px;
          background: black;
          font-family: 'Montaga', sans-serif;
          color: #fff;
          margin: 0 auto;
          width: 96vw;
                   margin-left: -8px

        }

        .faq-title {
          text-align: center;
          font-size: 3.4rem;
          margin-bottom: 50px;
          color: #ffffff;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .faq-item {
          background: rgba(255, 45, 85, 0.1);
          backdrop-filter: blur(14px);
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 45, 85, 0.25);
          box-shadow: 0 0 15px rgba(255, 45, 85, 0.2);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
          color: #fff;
        }

        .faq-toggle {
          font-size: 1.8rem;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.3s ease;
          margin-top: 0;
        }

        .faq-item.active .faq-answer {
          max-height: 400px;
          opacity: 1;
          margin-top: 14px;
        }

        .faq-answer p {
          font-size: 1rem;
          line-height: 1.6;
          color: #f0f0f0;
        }

        .faq-input-container {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .faq-input {
          width: 600px;
          padding: 16px 20px;
          font-size: 1rem;
          border-radius: 40px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(10px);
          color: #fff;
          transition: box-shadow 0.3s ease;
          padding-right: 60px;
        }

        .faq-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .faq-input:focus {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .send-btn {
          position: absolute;
          right: calc(50% - 300px - 25px);
          background: #ff2d55;
          border: none;
          padding: 10px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          color: white;
          font-size: 0.95rem;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease;
          margin-left: 20px;
        }

        .send-btn:hover {
          background-color: #e0264a;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .faq-title {
            font-size: 2.2rem;
          }

          .faq-input {
            width: 90%;
            padding-right: 50px;
          }

          .send-btn {
            right: 10%;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
