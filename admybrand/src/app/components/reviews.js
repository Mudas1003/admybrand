'use client';
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    text: "ADmyBRAND AI Suite made our campaigns 10x more effective. The AI insights helped optimize every single campaign parameter and our ROI increased drastically.",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Isha Patel",
    text: "Marketing automation has never been this smooth and smart. I was able to automate A/B testing and content generation seamlessly.",
    userImg: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Rohan Verma",
    text: "This suite is a powerhouse for agencies like ours! ADmyBRAND’s analytics dashboard alone saved us 20+ hours of reporting work every week.",
    userImg: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Neha Singh",
    text: "Transformed our entire workflow using ADmyBRAND AI tools. The integration with our CRM and real-time reporting is just brilliant.",
    userImg: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Dev Mehra",
    text: "A game changer in intelligent media planning. Highly accurate targeting and prediction models helped us grow our conversions rapidly.",
    userImg: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Ritika Desai",
    text: "Loved the AI insights! Perfect for brand management and competitor analysis. I’ve never seen anything this efficient before.",
    userImg: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4.85,
  },
];

const TestimonialCarousel = () => {
  const doubled = [...testimonials, ...testimonials];

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
  };

  return (
    <div className="carousel-wrapper">
      <style>{`
        .carousel-wrapper {
          background: #000;
          padding: 100px 5%;
          font-family: Montaga;
          color: #fff;
          overflow: hidden;
          width: 89.1vw;
         margin-left: -8px

        }

        .carousel-heading {
          text-align: center;
          margin-bottom: 30px;
          font-size: 3.4rem;
          margin-top: -20px;
        }

        .carousel-subheading {
          text-align: center;
          margin-bottom: 60px;
          font-size: 1.2rem;
          color: #ccc;
          max-width: 700px;
          margin: 0 auto;
        }

        .carousel-track {
        margin-top: 80px;
          display: flex;
          gap: 40px;
          animation: scrollLoop 40s linear infinite;
          width: max-content;
        }

        @keyframes scrollLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
.carousel-card {
  width: 300px;
  height: 420px;
  border-radius: 20px;

  /* Background image with translucent overlay */
  background: 
    linear-gradient(rgba(0, 255, 255, 0.08), rgba(0, 255, 255, 0.08)), 
    url('/card.jpeg'); /* ✅ Set your image path here */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Glassmorphism effect */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Teal glow and styling */
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
  opacity: 0.95;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Optional gradient overlay on top section */
.carousel-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: radial-gradient(ellipse at top, rgba(0, 255, 255, 0.1), transparent);
  pointer-events: none;
  z-index: 0;
}

/* Hover animation */
.carousel-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.4);
}




        .carousel-user {
          position: absolute;
          top: 15px;
          left: 15px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid rgba(0, 255, 255, 0.08);
          object-fit: cover;
          box-shadow: 0 0 10px #FFA500;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 12px;
          font-weight: 500;

        }

        .testimonial-rating {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }

        .stars {
          color: white;
          font-size: 1.2rem;
        }

        .rating-score {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .testimonial-name {
          text-align: right;
          font-size: 1rem;
          font-weight: bold;
          color: #FFA500;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .carousel-track {
            gap: 20px;
          }

          .carousel-card {
            width: 260px;
            height: 380px;
          }

          .carousel-user {
            width: 50px;
            height: 50px;
          }

          .carousel-heading {
            font-size: 2rem;
          }

          .carousel-subheading {
            font-size: 1rem;
            padding: 0 10px;
          }
        }
      `}</style>

      <h2 className="carousel-heading">What Our Users Say</h2>
      <p className="carousel-subheading">
        Discover how ADmyBRAND AI Suite is empowering marketers, brands, and businesses with intelligence, speed, and innovation.
      </p>

      <div className="carousel-container">
        <div className="carousel-track">
          {doubled.map((t, index) => (
            <div className="carousel-card" key={index}>
              <img src={t.userImg} alt={t.name} className="carousel-user" />
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-rating">
                <div className="stars">{getStars(t.rating)}</div>
                <div className="rating-score">{t.rating.toFixed(1)}</div>
              </div>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
