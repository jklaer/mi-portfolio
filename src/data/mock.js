// Mock data for Jerald Samuel Vega Bonilla's portfolio

export const profileData = {
  name: "JERALD SAMUEL VEGA BONILLA",
  title: "ECONOMISTA & ANALISTA DE DATOS",
  tagline: "La verdad no se negocia, se calcula",
  about: {
    description: "Soy economista. No tengo talentos especiales, solo la convicción de que la verdad no se negocia, se calcula. Mi proyecto: infiltrar el rigor matemático en el debate público. El trabajo duro es mi único algoritmo.",
    objective: "Mi objetivo es aplicar el rigor matemático y el análisis de datos para transformar el debate público y la toma de decisiones estratégicas, combinando expertise en finanzas corporativas con capacidades avanzadas de análisis cuantitativo."
  },
  contact: {
    telegram: "@Jk_laer",
    instagram: "jk_laer"
  }
};

export const skillsData = {
  dataAnalysis: {
    title: "ANÁLISIS DE DATOS",
    categories: [
      {
        name: "Gestión y Manipulación de Datos",
        skills: [
          {
            name: "Excel/Google Sheets",
            level: "Avanzado",
            details: ["XLOOKUP", "INDEX/MATCH", "Tablas dinámicas", "Power Query", "Macros y VBA"]
          },
          {
            name: "SQL",
            level: "Fundamental",
            details: ["JOINS complejos", "CTEs", "Funciones de ventana", "MySQL, PostgreSQL, BigQuery"]
          }
        ]
      },
      {
        name: "Programación y Análisis Estadístico",
        skills: [
          {
            name: "Python",
            level: "Avanzado",
            details: ["Pandas y NumPy", "Matplotlib, Seaborn, Plotly", "Scikit-learn", "Jupyter Notebooks"]
          },
          {
            name: "R",
            level: "Intermedio",
            details: ["tidyverse (dplyr, ggplot2)", "Análisis estadístico inferencial"]
          }
        ]
      },
      {
        name: "Visualización y Business Intelligence",
        skills: [
          {
            name: "Tableau / Power BI",
            level: "Avanzado",
            details: ["Dashboards interactivos", "DAX", "LOD calculations", "Storytelling con datos"]
          }
        ]
      },
      {
        name: "Fundamentos Esenciales",
        skills: [
          {
            name: "Estadística",
            level: "Avanzado",
            details: ["Descriptiva e inferencial", "Pruebas de hipótesis", "Intervalos de confianza"]
          },
          {
            name: "Data Cleaning",
            level: "Avanzado",
            details: ["Valores faltantes", "Outliers", "Datos inconsistentes"]
          }
        ]
      }
    ]
  },
  finance: {
    title: "FINANZAS",
    categories: [
      {
        name: "Análisis Financiero y Contable",
        skills: [
          {
            name: "Estados Financieros",
            level: "Avanzado",
            details: ["Balance General", "Estado de Resultados", "Flujo de Efectivo"]
          },
          {
            name: "Ratios Financieros",
            level: "Avanzado",
            details: ["Liquidez", "Endeudamiento", "Rentabilidad (ROE, ROA)", "Eficiencia"]
          },
          {
            name: "Valuación de Empresas",
            level: "Avanzado",
            details: ["DCF (Flujo de Caja Descontado)", "Análisis Comparables", "Transacciones Precedentes"]
          }
        ]
      },
      {
        name: "Finanzas Cuantitativas",
        skills: [
          {
            name: "Valoración de Activos",
            level: "Avanzado",
            details: ["CAPM", "Costo de Capital"]
          },
          {
            name: "Análisis de Riesgo",
            level: "Avanzado",
            details: ["VaR (Value at Risk)", "Volatilidad", "Beta"]
          }
        ]
      },
      {
        name: "Modelización Financiera",
        skills: [
          {
            name: "Excel Financiero",
            level: "Experto",
            details: ["Modelo de 3 Estados", "Forecasting", "Análisis de sensibilidad", "Goal Seek"]
          },
          {
            name: "Herramientas Especializadas",
            level: "Intermedio",
            details: ["Bloomberg Terminal", "Capital IQ"]
          }
        ]
      },
      {
        name: "Áreas Específicas",
        skills: [
          {
            name: "Finanzas Corporativas",
            level: "Avanzado",
            details: ["VAN, TIR", "Estructura de capital", "Política de dividendos"]
          },
          {
            name: "M&A",
            level: "Intermedio",
            details: ["Fusiones y adquisiciones", "Análisis de sinergias"]
          }
        ]
      }
    ]
  }
};

export const projectsData = [
  {
    id: 1,
    title: "Dashboard Financiero Corporativo",
    category: "Business Intelligence",
    description: "Desarrollo de dashboard interactivo en Power BI para análisis de estados financieros con métricas clave de rentabilidad y liquidez.",
    technologies: ["Power BI", "DAX", "SQL", "Excel"],
    impact: "Reducción del 60% en tiempo de análisis financiero"
  },
  {
    id: 2,
    title: "Modelo de Valuación DCF",
    category: "Finanzas Corporativas",
    description: "Construcción de modelo de valuación por flujo de caja descontado con análisis de sensibilidad y escenarios múltiples.",
    technologies: ["Excel", "VBA", "Modelización Financiera"],
    impact: "Precisión del 95% en proyecciones de valor empresarial"
  },
  {
    id: 3,
    title: "Sistema de Análisis Predictivo",
    category: "Data Science",
    description: "Implementación de algoritmos de machine learning para predicción de tendencias económicas y análisis de riesgo.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    impact: "Mejora del 40% en precisión de forecasting"
  },
  {
    id: 4,
    title: "Automatización de Reportes SQL",
    category: "Data Engineering",
    description: "Desarrollo de queries complejas con CTEs y funciones de ventana para automatización de reportes financieros diarios.",
    technologies: ["SQL", "PostgreSQL", "Python"],
    impact: "Automatización de 15 horas semanales de trabajo manual"
  }
];

export const achievementsData = [
  {
    id: 1,
    year: "2024",
    title: "Certificación Financial Modeling & Valuation Analyst (FMVA)",
    description: "Certificación profesional en modelización financiera y valuación de empresas"
  },
  {
    id: 2,
    year: "2024",
    title: "Google Data Analytics Professional Certificate",
    description: "Certificación en análisis de datos y visualización con enfoque en toma de decisiones"
  },
  {
    id: 3,
    year: "2023",
    title: "Implementación de Sistema BI Corporativo",
    description: "Liderazgo en la implementación de sistema de Business Intelligence que incrementó la eficiencia en reportes financieros en 65%"
  },
  {
    id: 4,
    year: "2023",
    title: "Análisis Económico Publicado",
    description: "Publicación de análisis económico con rigor matemático en medios especializados, contribuyendo al debate público informado"
  }
];
