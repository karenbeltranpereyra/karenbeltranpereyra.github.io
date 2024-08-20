const experienceData = {
  en: [
    {
      "company": "BNN – THE DIGITAL PARTNER",
      "period": "2022 - PRESENT",
      "position": "PROJECT MANAGER",
      "activities": [
        "Coordination of media activities",
        "Internal communication",
        "Project organization",
        "Specify the quality of each deliverable part",
        "Estimate resources and timelines needed",
        "Develop and implement a plan and processes for the project",
        "Risk management, issues and changes in the project",
        "Monitor progress and processes",
        "Maintain continuous communication with stakeholders",
        "Supplier management"
      ]
    },
    {
      "company": "COCO MARKETING",
      "period": "2019-2022",
      "position": "ACCOUNT EXECUTIVE | PROJECT MANAGER",
      "activities": [
        "Management of premium projects",
        "Social media containment",
        "Content supervision",
        "Style correction",
        "Communication plans and strategies as well as participation in their development",
        "Recording and editing management",
        "Management and follow-up of website development (small, medium, and large)",
        "Email campaign management and participation in the process",
        "Direct client interaction",
        "Organization and supervision of the agency's internal team",
        "Supervision and activation of social media campaigns (Facebook Ads, Google AdWords)",
        "Decision-making, task schemes, timetable with client, internal team and implementation of solutions",
        "Development of reports and analysis of monthly or project metrics"
      ]
    },
    {
      "company": "LATENTE STUDIO",
      "period": "2019",
      "position": "ACCOUNT EXECUTIVE | PROJECT MANAGER",
      "activities": [
        "Media and social media positioning strategy",
        "Coordination of media activities and advertising",
        "Internal communication: text writing, style correction, content design",
        "Event organization (conferences, workshops, presentations, etc.)",
        "Social media strategy and updates: AdWords and Google Analytics",
        "Ad design and publishing",
        "Public relations",
        "Organization and direction of photo shoots"
      ]
    },
    {
      "company": "PAUTA CREATIVA MARKETING AGENCY",
      "period": "2018-2019",
      "position": "COMMUNITY MANAGER",
      "activities": [
        "Media and social media positioning strategy",
        "Coordination of media activities and advertising",
        "Internal communication: text writing, style correction, content design",
        "Event organization (conferences, workshops, presentations, etc.)",
        "Social media strategy and updates: AdWords and Google Analytics",
        "Ad design and publishing",
        "Public relations",
        "Organization and direction of photo shoots"
      ]
    },
    {
      "company": "ROEL COMERCIALIZADORA",
      "period": "2015-2017",
      "position": "COMMUNITY MANAGER",
      "activities": [
        "Account management for brands like Canson, Cretacolor, Milan, Acrilex, Pintart, Estambres Circulo, Indart, Condor",
        "Client follow-up",
        "Creation and monitoring of advertising campaigns",
        "Social media containment",
        "Report generation",
        "Video recording for content",
        "Management and direction of online broadcasts"
      ]
    }
  ],
  es: [
    {
      "company": "BNN – THE DIGITAL PARTNER",
      "period": "2022 - PRESENTE",
      "position": "PROJECT MANAGER",
      "activities": [
        "Coordinación de actividades de medios",
        "Comunicación interna",
        "Organización de proyectos",
        "Especificar la calidad de cada parte entregable",
        "Estimación de recursos y tiempos necesarios",
        "Desarrollar e implementar un plan y procesos para el proyecto",
        "Gestión de riesgos, problemas y cambios en el proyecto",
        "Monitorear el progreso y los procesos",
        "Mantener comunicación continua con las partes interesadas",
        "Gestión de proveedores"
      ]
    },
    {
      "company": "COCO MARKETING",
      "period": "2019-2022",
      "position": "EJECUTIVO DE CUENTAS | PROJECT MANAGER",
      "activities": [
        "Gestión de proyectos premium",
        "Contención en redes sociales",
        "Supervisión de contenido",
        "Corrección de estilo",
        "Planes de comunicación y estrategias, así como participación en su desarrollo",
        "Gestión de grabación y edición",
        "Gestión y seguimiento del desarrollo de sitios web (pequeños, medianos y grandes)",
        "Gestión de campañas de correo electrónico y participación en el proceso",
        "Interacción directa con el cliente",
        "Organización y supervisión del equipo interno de la agencia",
        "Supervisión y activación de campañas en redes sociales (Facebook Ads, Google AdWords)",
        "Toma de decisiones, esquemas de tareas, cronograma con el cliente, equipo interno y implementación de soluciones",
        "Desarrollo de informes y análisis de métricas mensuales o de proyectos"
      ]
    },
    {
      "company": "LATENTE STUDIO",
      "period": "2019",
      "position": "EJECUTIVO DE CUENTAS | PROJECT MANAGER",
      "activities": [
        "Estrategia de posicionamiento en medios y redes sociales",
        "Coordinación de actividades de medios y publicidad",
        "Comunicación interna: redacción de textos, corrección de estilo, diseño de contenido",
        "Organización de eventos (conferencias, talleres, presentaciones, etc.)",
        "Estrategia y actualizaciones en redes sociales: AdWords y Google Analytics",
        "Diseño y publicación de anuncios",
        "Relaciones públicas",
        "Organización y dirección de sesiones fotográficas"
      ]
    },
    {
      "company": "PAUTA CREATIVA AGENCIA DE MARKETING",
      "period": "2018-2019",
      "position": "COMMUNITY MANAGER",
      "activities": [
        "Estrategia de posicionamiento en medios y redes sociales",
        "Coordinación de actividades de medios y publicidad",
        "Comunicación interna: redacción de textos, corrección de estilo, diseño de contenido",
        "Organización de eventos (conferencias, talleres, presentaciones, etc.)",
        "Estrategia y actualizaciones en redes sociales: AdWords y Google Analytics",
        "Diseño y publicación de anuncios",
        "Relaciones públicas",
        "Organización y dirección de sesiones fotográficas"
      ]
    },
    {
      "company": "ROEL COMERCIALIZADORA",
      "period": "2015-2017",
      "position": "COMMUNITY MANAGER",
      "activities": [
        "Gestión de cuentas para marcas como Canson, Cretacolor, Milan, Acrilex, Pintart, Estambres Circulo, Indart, Condor",
        "Seguimiento al cliente",
        "Creación y monitoreo de campañas publicitarias",
        "Contención en redes sociales",
        "Generación de reportes",
        "Grabación de video para contenido",
        "Gestión y dirección de transmisiones en línea"
      ]
    }
  ]
};

function generateExperienceHTML(language = 'es') {
  const container = document.getElementById('experience');
  container.innerHTML = ''; 

  const data = experienceData[language];

  const isSmallScreen = window.matchMedia('(max-width: 750px)').matches;

  data.forEach(item => {
    const section = document.createElement('section');
    section.classList.add('experience-item');

    const company = document.createElement('h3');
    company.textContent = item.company;

    const period = document.createElement('p');
    period.textContent = item.period;

    const position = document.createElement('p');
    position.textContent = `${language === 'en' ? 'Position' : 'Puesto'}: ${item.position}`;

    const activities = document.createElement('ul');
    item.activities.forEach(activity => {
      const li = document.createElement('li');
      li.textContent = activity;
      activities.appendChild(li);
    });

    section.appendChild(company);
    section.appendChild(period);
    section.appendChild(position);
    section.appendChild(activities);
    container.appendChild(section);

    const toggleDiv = document.createElement('div');
    toggleDiv.classList.add('toggle-arrow');
    toggleDiv.innerHTML = '▼';

    section.appendChild(toggleDiv);

    activities.style.display = isSmallScreen ? 'none' : 'block';
    toggleDiv.style.display = isSmallScreen && item.activities[0] ? 'block' : 'none';

    toggleDiv.addEventListener('click', () => {
      if (activities.style.display === 'none') {
        activities.style.display = 'block';
        toggleDiv.innerHTML = '▲'; 
      } else {
        activities.style.display = 'none';
        toggleDiv.innerHTML = '▼'; 
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateExperienceHTML(); 

  document.getElementById('navbar-container').addEventListener('click', (event) => {
    if (event.target.id === 'language-toggle') {
      const newLanguage = event.target.textContent === 'Español' ? 'es' : 'en';
      generateExperienceHTML(newLanguage);
    }
  });

  window.addEventListener('resize', () => {
    generateExperienceHTML(); 
  });
});
