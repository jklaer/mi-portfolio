import React, { useState } from 'react';
import { skillsData } from '../data/mock';
import '../styles/theme.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('dataAnalysis');

  const renderSkillCategory = (category) => (
    <div key={category.name} style={{ marginBottom: '48px' }}>
      <div className="label" style={{ marginBottom: '24px', color: 'var(--accent-primary)' }}>
        {category.name}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}
      >
        {category.skills.map((skill, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              padding: '24px',
              transition: 'all 0.2s ease'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}
            >
              <div className="text-regular">{skill.name}</div>
              <div
                className="label-small"
                style={{
                  background: 'var(--accent-primary)',
                  color: 'var(--accent-foreground)',
                  padding: '4px 12px'
                }}
              >
                {skill.level}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skill.details.map((detail, detailIdx) => (
                <span
                  key={detailIdx}
                  className="label-small"
                  style={{
                    background: 'var(--color-background)',
                    padding: '6px 12px',
                    display: 'inline-block'
                  }}
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          EXPERTISE
        </div>
        <h2 className="title-big" style={{ marginBottom: '64px' }}>
          HABILIDADES
        </h2>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '64px',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '16px'
          }}
        >
          <button
            onClick={() => setActiveTab('dataAnalysis')}
            style={{
              background: activeTab === 'dataAnalysis' ? 'var(--text-primary)' : 'transparent',
              color: activeTab === 'dataAnalysis' ? 'var(--bg-white)' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: 0,
              padding: '12px 24px',
              fontSize: '12px',
              fontWeight: '400',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '0.05em'
            }}
          >
            ANÁLISIS DE DATOS
          </button>
          <button
            onClick={() => setActiveTab('finance')}
            style={{
              background: activeTab === 'finance' ? 'var(--text-primary)' : 'transparent',
              color: activeTab === 'finance' ? 'var(--bg-white)' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: 0,
              padding: '12px 24px',
              fontSize: '12px',
              fontWeight: '400',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '0.05em'
            }}
          >
            FINANZAS
          </button>
        </div>

        <div>
          {activeTab === 'dataAnalysis' &&
            skillsData.dataAnalysis.categories.map((category) => renderSkillCategory(category))}
          {activeTab === 'finance' &&
            skillsData.finance.categories.map((category) => renderSkillCategory(category))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
