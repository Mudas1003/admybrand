'use client';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <style>{`
        .hero-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #000;
          color: #fff;
          height: 100vh;
          padding: 0 5%;
          margin-left: -20px;
          margin-top: -10px;
          margin-bottom: -5px;
          width: 90vw;
          font-family: Montaga;
        }

        .hero-text {
          flex: 1;
          max-width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .hero-logo {
          width: 250px;
          height: auto;
          margin-top: -150px;
          margin-left: 250px
        }

.hero-title {
  font-size: 3.7rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: -6px;
  font-family: Montaga;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #FFA500; /* Orange typewriter cursor */
  width: 0;
  animation: typing 2s steps(30, end) forwards, blink 0.7s step-end infinite;
    text-shadow: 3px 3px 5px rgba(255, 165, 0, 0.4), 7px 7px 10px rgba(255, 140, 0, 0.3);

  position: relative;
}
  

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}




     .hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 45px;
  font-family: Montaga;
  margin-top: -7px;
  opacity: 0;
  transform: translateX(-50px);
  animation: slideIn 1s ease-out 3s forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}


        .hero-button {
          position: relative;
          width: 200px;
          display: inline-block;
          padding: 14px 28px;
          background: #0d0d0d;
          color: #ffffff;
          border: 3px solid #FFA500;
          border-radius: 999px;
          font-weight: 500;
          font-size: 1.2rem;
          font-family: Montaga;
          cursor: pointer;
          overflow: hidden;
          z-index: 0;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
          box-shadow: 0 0 20px #FF8C00, 0 0 25px #FF8C00, 0 0 50px #FF8C00;
           opacity: 0;
  transform: scale(0.8);
  animation: popUp 0.3s ease-out 4.2s forwards;
}

@keyframes popUp {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

        .hero-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          animation: pulse 2s infinite;
          z-index: -1;
          opacity: 0.7;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.6;
          }
        }

        .hero-button:hover {
          background: #FF8C00;
          color: white;
          box-shadow: 0 0 15px #FF8C00, 0 0 30px #FF8C00;
        }

        .hero-image {
          flex: 1;
          max-width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image img {
          width: 100%;
          height: 630px;
          transition: transform 0.5s ease, filter 0.5s ease;
          border-radius: 20px;
          margin-left: 240px;
        }

        @media (max-width: 1024px) {
          .hero-wrapper {
            flex-direction: column;
            text-align: center;
            padding: 40px 20px;
          }

          .hero-text, .hero-image {
            max-width: 100%;
            align-items: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-image img {
            max-width: 300px;
            margin-top: 30px;
          }

          .hero-logo {
            margin: 0 auto 20px auto;
          }
        }
      `}</style>

      <div className="hero-text">
        {/* 🔽 New Image above text */}
        <img src="/left.jpeg" alt="Brand Logo" className="hero-logo" />
        
        <h1 className="hero-title">ADmyBRAND AI Suite</h1>
        <p className="hero-subtitle">
          Transform your business with powerful AI tools crafted to optimize your marketing and branding.
        </p>
        <button className="hero-button">
          Get Started
        </button>
      </div>

      <div className="hero-image">
        <img src="/right.jpeg" alt="AI Illustration" />
      </div>
    </div>
  );
};

export default Hero;
