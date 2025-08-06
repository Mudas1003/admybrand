import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import { FiActivity } from 'react-icons/fi';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';
import { MdOutlineDevices } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';

const featuresData = [
  {
    title: 'Smart Campaigns',
    description: 'Boost ad ROI with precision targeting powered by AI. Reach exactly the right audience with smarter segmentation, predictive analytics, and continuous improvements.',
    icon: <AiOutlineRobot />
  },
  {
    title: 'Realtime Analytics',
    description: 'Track campaign performance with live insights. Make instant decisions and pivot with up-to-date data dashboards and engagement trends.',
    icon: <FiActivity />
  },
  {
    title: 'Automated Reports',
    description: 'Daily summaries delivered directly to your inbox. Stay informed with easy-to-read visuals and performance breakdowns across every channel.',
    icon: <BsFileEarmarkBarGraph />
  },
  {
    title: 'Omnichannel Reach',
    description: 'Advertise seamlessly across platforms and devices. From social to search, keep your brand presence strong everywhere with AI-backed targeting.',
    icon: <MdOutlineDevices />
  },
  {
    title: 'Smart Budgeting',
    description: 'Optimize spend and reduce cost per lead with automation. Let AI make real-time adjustments for cost-effective performance.',
    icon: <RiMoneyDollarCircleLine />
  },
  {
    title: '24/7 Optimization',
    description: 'Campaigns improve continuously—even while you sleep. Algorithms analyze performance and adjust to get you the best results automatically.',
    icon: <BiTimeFive />
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Next-Gen Marketing Features</h2>
        <p>
          Everything you need to run high-performance ad campaigns powered by AI.
          Automate, analyze, and accelerate your growth in one unified suite.
        </p>
<button className="checkout-button">Checkout All Features</button>
      </div>

      <div className="spotlight-bg">
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="card-container" key={index}>
              <div className="feature-card">
                <div className="card-front">
                  <div className="arrow">↗</div>
                  <div className="card-header">
                    <span className="card-icon">{feature.icon}</span>
                    <span className="label">AI Features</span>
                    <h3>{feature.title}</h3>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-back-content">
                    <p>{feature.description}</p>
                    <button className="explore-button">Explore More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montaga&display=swap');

        * {
          font-family: 'Montaga', serif;
        }

        .features-section {
          padding: 100px 30px;
          background: black;
          color: white;
          text-align: center;
          overflow: hidden;
          width: 95vw;
          margin-left: -15px;

        }

        .features-header h2 {
          font-size: 55px;
          font-weight: 700;
          margin-bottom: 20px;
          margin-top: -30px;
        }

        .features-header p {
          font-size: 16px;
          color: #aaa;
          max-width: 700px;
          margin: 0 auto 30px;
        }

        .checkout-button {
  position: relative;
  width: 230px;
  display: inline-block;
  padding: 14px 28px;
  background: transparent;
  color: #ffffff;
  border: 3px solid #9b59b6; /* Purple border */
  border-radius: 999px;
  font-weight: 500;
  font-size: 1.0rem;
  font-family: Montaga;
  cursor: pointer;
  overflow: hidden;
  z-index: 0;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
  box-shadow: 0 0 20px #9b59b6, 0 0 25px #9b59b6, 0 0 50px #9b59b6;
  opacity: 0;
  transform: scale(0.8);
  animation: popUp 0.3s ease-out 4.2s forwards;
  margin-bottom: 30px;
}

@keyframes popUp {
  to {
    opacity: 1;
    transform: scale(1);
  }
}


        .spotlight-bg {
          position: relative;
        }

        .spotlight-bg::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(128, 0, 255, 0.2), transparent 70%);
          z-index: 0;
        }

        .features-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 70px;
          justify-items: center;
          z-index: 1;
        }

        .card-container {
          perspective: 1500px;
          width: 100%;
          max-width: 300px;
          height: 340px;
        }

        .feature-card {
          width: 100%;
          height: 350px;
          border-radius: 20px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        .card-container:hover .feature-card {
          transform: rotateY(180deg);
        }

       .card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  backface-visibility: hidden;

  background: 
    linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), 
    url('/feature.jpeg');
  background-size: cover;
  background-position: center;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 40px rgba(128, 0, 255, 0.15),
              inset 0 0 30px rgba(255, 255, 255, 0.04);
  z-index: 1;
}

        .card-icon {
          font-size: 70px;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        .label {
          font-size: 12px;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .arrow {
          position: absolute;
          top: -5px;
          right: 20px;
          font-size: 70px;
          opacity: 0.5;
        }

        .card-front h3 {
          font-size: 30px;
          font-weight: 500;
          margin-top: 100px;
          margin-bottom: -90px;

        }

        .card-back {
          transform: rotateY(180deg);
          margin-left: -45px;
        }

        .card-back-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          text-align: center;
        }

        .card-back-content p {
          font-size: 14px;
          color: #ccc;
          margin-bottom: 20px;
        }

        .explore-button {
          background: rgba(255,255,255,0.08);
          border: none;
          padding: 10px 16px;
          border-radius: 20px;
          color: white;
          cursor: pointer;
          font-size: 13px;
          position: relative;
          overflow: hidden;
        }

        .explore-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: all 0.5s ease;
        }

        .explore-button:hover::after {
          left: 100%;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .features-header h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
