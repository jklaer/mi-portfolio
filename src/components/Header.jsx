import React, { useState, useEffect } from 'react';
import '../styles/theme.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(242, 242, 242, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(35, 35, 35, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 0',
            minHeight: '80px'
          }}
        >
          <div
            className="header-logo"
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            JKlaer
          </div>

          <div
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}
          >
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '400',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'opacity 0.15s ease',
                padding: '8px 0'
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              SOBRE MÍ
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '400',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'opacity 0.15s ease',
                padding: '8px 0'
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              HABILIDADES
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '400',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'opacity 0.15s ease',
                padding: '8px 0'
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              PROYECTOS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-accent"
            >
              CONTACTO
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

