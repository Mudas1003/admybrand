import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer-container {
            background-color: black;
            color: #eaeaea;
            font-family: 'Montaga', sans-serif;
            padding: 50px 20px;
            width: 96vw;
            margin-left: -8px;
            margin-bottom: -10px;
          }

          .newsletter-box {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            color: #fff;
            border-radius: 20px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          @media (min-width: 768px) {
            .newsletter-box {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
          }

          .newsletter-box h2 {
            font-size: 26px;
            font-family: Montaga, sans-serif;
            margin-bottom: 10px;
          }

          .newsletter-box p {
            font-size: 14px;
            color: #ddd;
            max-width: 480px;
          }

          .newsletter-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }

          @media (min-width: 768px) {
            .newsletter-form {
              flex-direction: row;
              align-items: center;
              justify-content: flex-end;
              width: auto;
            }
          }

          .newsletter-input {
            padding: 12px 20px;
            border-radius: 40px;
            border: none;
            outline: none;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            width: 280px;
            backdrop-filter: blur(6px);
          }

          .subscribe-button {
            background-color: #1e3a8a;
            color: #fff;
            padding: 12px 26px;
            border-radius: 40px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .subscribe-button:hover {
            background-color: #153174;
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 40px;
            border-top: 1px solid #222;
            padding-top: 30px;
            
          }

          @media (min-width: 768px) {
            .footer-links {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-start;
            }
          }

          .brand-section {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .brand {
            font-size: 24px;
            font-weight: bold;
            color: #1e3a8a;
          }

          .brand-desc {
            font-size: 14px;
            color: #999;
          }

          .footer-columns {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          @media (min-width: 768px) {
            .footer-columns {
              flex-direction: row;
              gap: 60px;
            }
          }

          .footer-column {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-left: 60px;
          }

          .footer-column h4 {
            margin-bottom: 8px;
            font-weight: 600;
            color: #fff;
          }

          .footer-column ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-column li {
            font-size: 14px;
            color: #ccc;
            margin-bottom: 4px;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .footer-column li:hover {
            color: #1e3a8a;
          }
        `}
      </style>

      <div className="footer-container">
        <div className="newsletter-box">
          <div>
            <h2>Join Our Marketing AI Revolution</h2>
            <p>
              Subscribe to stay updated with the latest marketing automation tools, AI-driven insights, and branding strategies from ADmyBRAND AI Suite.
            </p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="brand-section">
            <div className="brand">ADmyBRAND</div>
            <p className="brand-desc">Redefining marketing with intelligent automation and analytics.</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li>AI Campaigns</li>
                <li>Ad Automation</li>
                <li>Media Planning</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Help Center</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Licensing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
