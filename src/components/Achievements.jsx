import React from 'react';
import '../styles/theme.css';

const Achievements = () => {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          TRAYECTORIA
        </div>
        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          LOGROS
        </h2>
        
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '60px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border-light)'
            }}
          />
          
          {/* Logro 1 */}
          <div style={{ display: 'flex', gap: '48px', marginBottom: '64px', position: 'relative' }}>
            <div style={{ minWidth: '120px', textAlign: 'right', position: 'relative' }}>
              <div className="label" style={{ background: 'var(--accent-primary)', color: 'var(--accent-foreground)', padding: '8px 16px', display: 'inline-block' }}>
                2024
              </div>
              <div style={{ position: 'absolute', right: '-54px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', background: 'var(--accent-primary)', border: '2px solid var(--bg-white)', zIndex: 1 }} />
            </div>
            <div className="card" style={{ flex: 1, padding: '32px' }}>
              <div className="text-regular" style={{ marginBottom: '16px' }}>
                Certificación Financial Modeling & Valuation Analyst (FMVA)
              </div>
              <div className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Certificación profesional en modelización financiera y valuación de empresas
              </div>
            </div>
          </div>
          
          {/* Logro 2 */}
          <div style={{ display: 'flex', gap: '48px', marginBottom: '64px', position: 'relative' }}>
            <div style={{ minWidth: '120px', textAlign: 'right', position: 'relative' }}>
              <div className="label" style={{ background: 'var(--accent-primary)', color: 'var(--accent-foreground)', padding: '8px 16px', display: 'inline-block' }}>
                2024
              </div>
              <div style={{ position: 'absolute', right: '-54px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', background: 'var(--accent-primary)', border: '2px solid var(--bg-white)', zIndex: 1 }} />
            </div>
            <div className="card" style={{ flex: 1, padding: '32px' }}>
              <div className="text-regular" style={{ marginBottom: '16px' }}>
                Google Data Analytics Professional Certificate
              </div>
              <div className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Certificación en análisis de datos y visualización con enfoque en toma de decisiones
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;