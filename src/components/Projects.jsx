import React from 'react';
import { projectsData } from '../data/mock';
import '../styles/theme.css';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="grid-background"></div>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          PORTFOLIO
        </div>
        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          PROYECTOS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}
        >
          {projectsData && projectsData.map((project, index) => (
            <div
              key={project.id}
              className="card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div>
                <div
                  className="label-small"
                  style={{
                    marginBottom: '12px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {project.category}
                </div>
                <div className="text-regular" style={{ marginBottom: '16px' }}>
                  {project.title}
                </div>
                <div
                  className="text-body"
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}
                >
                  {project.description}
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div className="label-small" style={{ marginBottom: '12px' }}>
                  TECNOLOGÍAS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {project.technologies && project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="label-small"
                      style={{
                        border: '1px solid var(--border-light)',
                        padding: '6px 12px',
                        display: 'inline-block'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    background: 'var(--accent-primary)',
                    color: 'var(--accent-foreground)',
                    padding: '12px 16px',
                    marginTop: '16px'
                  }}
                >
                  <div className="label-small">IMPACTO</div>
                  <div className="text-body" style={{ marginTop: '8px' }}>
                    {project.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;