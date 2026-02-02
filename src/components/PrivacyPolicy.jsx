import React from 'react';
import '../styles/theme.css';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-white)' }}>
      <div className="grid-background"></div>
      
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-light)'
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
              onClick={() => navigate('/')}
            >
              JSVB
            </div>
            <button
              onClick={() => navigate('/')}
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <ArrowLeft size={16} />
              VOLVER AL INICIO
            </button>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="label" style={{ marginBottom: '24px' }}>
              LEGAL
            </div>
            <h1 className="title-big" style={{ marginBottom: '48px' }}>
              POLÍTICA DE PRIVACIDAD
            </h1>

            <div className="text-body" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div style={{ lineHeight: 1.8 }}>
              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  1. Introducción
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Jerald Samuel Vega Bonilla ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información personal cuando visita nuestro sitio web profesional.
                </div>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  2. Información que Recopilamos
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Este sitio web es de naturaleza informativa y no recopila activamente información personal de los visitantes. Sin embargo, podemos recopilar:
                </div>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    <strong>Información de uso:</strong> Datos anónimos sobre cómo los visitantes interactúan con el sitio (páginas visitadas, tiempo de permanencia, navegador utilizado).
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    <strong>Información de contacto:</strong> Cuando usted decide contactarnos voluntariamente a través de nuestros canales oficiales (Telegram, Instagram).
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  3. Cómo Usamos su Información
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Utilizamos la información recopilada para:
                </div>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Mejorar la experiencia de usuario en nuestro sitio web
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Responder a consultas y solicitudes de contacto
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Analizar patrones de uso para optimizar el contenido del sitio
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Mantener la seguridad y prevenir fraudes
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  4. Cookies y Tecnologías Similares
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Este sitio web puede utilizar cookies básicas para mejorar la funcionalidad y experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Usted puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
                </div>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  5. Compartir Información con Terceros
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, excepto en los siguientes casos:
                </div>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Cuando sea requerido por ley o proceso legal
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Para proteger nuestros derechos, propiedad o seguridad
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Con proveedores de servicios que nos ayudan a operar el sitio (hosting, analytics)
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  6. Enlaces Externos
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Nuestro sitio web contiene enlaces a plataformas externas (Telegram, Instagram). No somos responsables de las prácticas de privacidad de estos sitios externos. Le recomendamos revisar las políticas de privacidad de cada plataforma que visite.
                </div>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  7. Seguridad de Datos
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Implementamos medidas de seguridad razonables para proteger su información contra acceso no autorizado, alteración o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
                </div>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  8. Sus Derechos
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Usted tiene derecho a:
                </div>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Acceder a la información personal que tenemos sobre usted
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Solicitar la corrección de información inexacta
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Solicitar la eliminación de su información personal
                  </li>
                  <li className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Oponerse al procesamiento de sus datos
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  9. Menores de Edad
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Este sitio web no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de menores.
                </div>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  10. Cambios a esta Política
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en esta página. Le recomendamos revisar periódicamente esta política.
                </div>
              </section>

              <section style={{ marginBottom: '48px' }}>
                <h2 className="text-regular" style={{ marginBottom: '24px' }}>
                  11. Contacto
                </h2>
                <div className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos a través de:
                </div>
                <div
                  className="card"
                  style={{
                    padding: '24px',
                    background: 'var(--color-background)',
                    marginTop: '24px'
                  }}
                >
                  <div className="text-body" style={{ marginBottom: '12px' }}>
                    <strong>Telegram:</strong> @Jk_laer
                  </div>
                  <div className="text-body">
                    <strong>Instagram:</strong> @jk_laer
                  </div>
                </div>
              </section>

              <div
                style={{
                  background: 'var(--accent-primary)',
                  color: 'var(--accent-foreground)',
                  padding: '24px',
                  marginTop: '48px'
                }}
              >
                <div className="label-small" style={{ marginBottom: '12px' }}>
                  COMPROMISO CON LA PRIVACIDAD
                </div>
                <div className="text-body">
                  Nos tomamos en serio la protección de su privacidad y manejamos sus datos con el mismo rigor y transparencia que aplicamos a nuestro trabajo profesional.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
