import React from 'react';
import { profileData } from '../data/mock';
import '../styles/theme.css';

const About = () => {
  const profileImageUrl = "https://customer-assets.emergentagent.com/job_economist-profile/artifacts/7tq0zotf_ChatGPT%20Image%2018%20ene%202026%2C%2015_21_44.png";
  
  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          SOBRE MÍ
        </div>
        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          MI ENFOQUE
        </h2>
        
        {/* Profile Image Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '64px'
          }}
        >
          <div
            style={{
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '2px solid var(--border-color)',
              position: 'relative'
            }}
          >
            <img
              src={profileImageUrl}
              alt="Jerald Samuel Vega Bonilla"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </div>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          <div className="card">
            <div className="label-small" style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
              FILOSOFÍA
            </div>
            <div className="text-body" style={{ lineHeight: 1.8 }}>
              {profileData.about.description}
            </div>
          </div>
          
          <div className="card">
            <div className="label-small" style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
              OBJETIVO PROFESIONAL
            </div>
            <div className="text-body" style={{ lineHeight: 1.8 }}>
              {profileData.about.objective}
            </div>
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-white)',
            border: '1px solid var(--border-light)',
            padding: '48px',
            marginTop: '64px'
          }}
        >
          <div className="label" style={{ marginBottom: '32px' }}>
            HABILIDADES PUENTE
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px'
            }}
          >
            <div>
              <div className="text-regular" style={{ marginBottom: '12px' }}>
                Pensamiento Crítico
              </div>
              <div className="text-body" style={{ color: 'var(--text-secondary)' }}>
                Resolución de problemas complejos aplicando lógica y análisis riguroso
              </div>
            </div>
            <div>
              <div className="text-regular" style={{ marginBottom: '12px' }}>
                Atención al Detalle
              </div>
              <div className="text-body" style={{ color: 'var(--text-secondary)' }}>
                Precisión crucial tanto en modelos DCF como en limpieza de datasets
              </div>
            </div>
            <div>
              <div className="text-regular" style={{ marginBottom: '12px' }}>
                Comunicación Técnica
              </div>
              <div className="text-body" style={{ color: 'var(--text-secondary)' }}>
                Capacidad de explicar conceptos complejos a audiencias no técnicas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

