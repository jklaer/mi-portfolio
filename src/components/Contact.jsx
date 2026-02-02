import React from 'react';
import { profileData } from '../data/mock';
import '../styles/theme.css';
import { Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="grid-background"></div>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '24px' }}>
            CONVERSEMOS
          </div>
          <h2 className="title-big" style={{ marginBottom: '32px' }}>
            CONTACTO
          </h2>
          <div
            className="text-big"
            style={{
              marginBottom: '64px',
              opacity: 0.9,
              lineHeight: 1.3
            }}
          >
            ¿Tienes un proyecto en mente? ¿Buscas rigor matemático aplicado a datos o finanzas?
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            <a
              href={`https://t.me/${profileData.contact.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: '32px',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer'
              }}
            >
              <Send size={32} style={{ color: 'var(--accent-primary)' }} />
              <div className="label-small" style={{ color: 'var(--text-secondary)' }}>
                TELEGRAM
              </div>
              <div className="text-regular">{profileData.contact.telegram}</div>
            </a>

            <a
              href={`https://instagram.com/${profileData.contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: '32px',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer'
              }}
            >
              <MessageCircle size={32} style={{ color: 'var(--accent-primary)' }} />
              <div className="label-small" style={{ color: 'var(--text-secondary)' }}>
                INSTAGRAM
              </div>
              <div className="text-regular">@{profileData.contact.instagram}</div>
            </a>
          </div>

          <div
            className="card"
            style={{
              padding: '48px',
              background: 'var(--text-primary)',
              color: 'var(--bg-white)',
              textAlign: 'left'
            }}
          >
            <div className="label" style={{ marginBottom: '24px', color: 'var(--accent-primary)' }}>
              MI COMPROMISO
            </div>
            <div className="text-body" style={{ lineHeight: 1.8, color: 'var(--bg-white)' }}>
              Trabajo con profesionales y organizaciones que valoran el rigor analítico y la toma de
              decisiones basada en evidencia. Si buscas transformar datos en insights accionables o
              necesitas análisis financiero de precisión, conversemos sobre cómo puedo ayudarte a
              alcanzar tus objetivos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
