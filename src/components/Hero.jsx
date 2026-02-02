import React from 'react';
import { profileData } from '../data/mock';
import '../styles/theme.css';

const Hero = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px'
      }}
    >
      <div className="grid-background"></div>
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div className="label" style={{ marginBottom: '24px', opacity: 0.7 }}>
            ECONOMISTA & ANALISTA DE DATOS
          </div>
          <h1
            className="hero-title"
            style={{
              marginBottom: '48px',
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            JERALD<br />SAMUEL<br />VEGA<br />BONILLA
          </h1>
          <div
            className="text-big"
            style={{
              marginBottom: '48px',
              maxWidth: '900px',
              margin: '0 auto 48px',
              opacity: 0.9,
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
            }}
          >
            {profileData.tagline}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
            }}
          >
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="btn-accent"
            >
              EXPLORAR MI TRABAJO
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              CONTACTAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;