import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/theme.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--text-primary)',
        color: 'var(--bg-white)',
        padding: '48px 0',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <div
              className="header-logo"
              style={{
                color: 'var(--bg-white)',
                marginBottom: '16px'
              }}
            >
              JSVB
            </div>
            <div className="text-body" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Economista & Analista de Datos
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="label-small" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '12px' }}>
              LA VERDAD NO SE NEGOCIA, SE CALCULA
            </div>
            <div className="text-body" style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '12px' }}>
              © {currentYear} Jerald Samuel Vega Bonilla. Todos los derechos reservados.
            </div>
            <Link
              to="/privacy-policy"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '12px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.9)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.5)')}
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

