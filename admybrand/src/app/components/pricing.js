'use client';

import React, { useState } from 'react';

const pricingData = [
  {
    title: 'Basic',
    price: '$11',
    period: '/mo',
    description: 'Best for solo creators',
    features: ['Data Visualization Tools', 'Data Exploration', 'Basic Reporting'],
    buttonText: 'Get Started',
  },
  {
    title: 'Premium',
    price: '$79',
    period: '/mo',
    description: 'Most popular plan',
    features: ['Priority Support', 'Advanced Data Visualization', 'Predictive Analytics', 'Custom Dashboards'],
    buttonText: 'Get Started',
  },
  {
    title: 'Enterprise',
    price: '$39',
    period: '/mo',
    description: 'Exclusively for teams',
    features: ['Real-Time Data Processing', 'Customizable APIs', 'Dedicated Account Management'],
    buttonText: 'Get Started',
  },
];

const PricingSection = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // default highlight on Premium

  return (
    <section style={styles.section}>
      <div style={styles.lightGlow}></div>
      <h2 style={styles.heading}>Flexible Plans for Every Need</h2>
      <p style={styles.subheading}>
        Choose a plan that fits your workflow — from solo creators to enterprise teams.
      </p>

      <div style={styles.cardContainer}>
        {pricingData.map((plan, index) => {
          const isSelected = selectedPlanIndex === index;

          return (
            <div
              key={index}
              onClick={() => setSelectedPlanIndex(index)}
              style={{
                ...styles.card,
                ...(isSelected ? styles.highlightCard : {}),
              }}
            >
              <div style={styles.topRightIcon}>↗</div>
              <h3 style={styles.planTitle}>{plan.title}</h3>
              <div style={styles.price}>
                <span style={styles.priceValue}>{plan.price}</span>
                <span style={styles.pricePeriod}>{plan.period}</span>
              </div>
              <p style={styles.description}>{plan.description}</p>
              <ul style={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={styles.featureItem}>✔ {feature}</li>
                ))}
              </ul>
              <button style={styles.button}>
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    background: 'black',
    color: '#fff',
    padding: '100px 20px 80px',
    textAlign: 'center',
    overflow: 'hidden',
    width: '96vw',
    marginLeft: '-8px'
  },
  lightGlow: {
    position: 'absolute',
    top: '-200px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '800px',
background: 'radial-gradient(circle at center, rgba(255, 94, 0, 0.9), transparent 60%)',
    zIndex: 0,
    filter: 'blur(150px)',
  },
  heading: {
    fontSize: '3.2rem',
    marginBottom: '12px',
    marginTop: '-30px',
    fontWeight: '700',
    zIndex: 1,
    position: 'relative',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#bbb',
    marginBottom: '50px',
    zIndex: 1,
    position: 'relative',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1,
  },
  card: {
    position: 'relative',
    width: '280px',
    minHeight: '350px',
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
    transition: 'all 0.3s ease',
    textAlign: 'left',
    cursor: 'pointer',
  },
  highlightCard: {
background: 'radial-gradient(circle at center, rgba(255, 94, 0, 0.9), transparent 80%)',
    color: '#fff',
    transform: 'scale(1.05)',
    boxShadow: '0 0 40px rgba(255, 125, 80, 0.6)',
  },
  planTitle: {
    fontSize: '1.1rem',
    opacity: 0.8,
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  price: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  priceValue: {
    fontSize: '2.2rem',
  },
  pricePeriod: {
    fontSize: '1rem',
    opacity: 0.7,
  },
  description: {
    fontSize: '0.9rem',
    color: '#ccc',
    marginBottom: '20px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '30px',
  },
  featureItem: {
    fontSize: '0.95rem',
    marginBottom: '10px',
    opacity: 0.9,
  },
  button: {
    width: '100%',
    padding: '12px 0',
    borderRadius: '999px',
    background: '#fff',
    color: '#000',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  },
  topRightIcon: {
    position: 'absolute',
    top: '-10px',
    right: '15px',
    fontSize: '3.5rem',
    opacity: 0.3,
  },
};

export default PricingSection;
