const data = {
  en: [
    {
      title: "Project Leadership",
      content: [
        "Leadership of multidisciplinary teams: Creative, UX, IT, Social, Production",
        "End-to-end project planning and Agile (Scrum) execution",
        "Resource allocation and timeline tracking across projects",
        "Budget control and scope management",
        "Client communication and stakeholder alignment"
      ],
      imageUrl: "assets/computer.svg"
    },
    {
      title: "Digital Operations",
      content: [
        "Coordination of large and small-scale digital productions",
        "Website development and continuous improvements",
        "Social media content coordination across major platforms",
        "App project coordination and cross-team execution",
        "Planning and management of on-site event coverage"
      ],
      imageUrl: "assets/play.svg"
    },
    {
      title: "Tools Analytics",
      content: [
        "macOS and Windows environments",
        "Project tools: Jira, Asana, Monday, Trello, Notion",
        "Analytics tools: Google Analytics, Kissmetrics",
        "Marketing tools: MailChimp, Meta Business",
        "Process optimization and performance tracking"
      ],
      imageUrl: "assets/tablet.svg"
    }
  ],

  es: [
    {
      title: "Liderazgo Proyectos",
      content: [
        "Liderazgo de equipos multidisciplinarios: Creativo, UX, TI, Social, Producción",
        "Planeación y ejecución de proyectos bajo metodologías ágiles (Scrum)",
        "Asignación de recursos y seguimiento de cronogramas",
        "Control de presupuestos y alcance de proyectos",
        "Comunicación con clientes y alineación con stakeholders"
      ],
      imageUrl: "assets/computer.svg"
    },
    {
      title: "Operación Digital",
      content: [
        "Coordinación de producciones digitales de diferentes escalas",
        "Gestión de desarrollo web y mejoras continuas",
        "Coordinación de contenido para redes sociales",
        "Coordinación de proyectos de aplicaciones",
        "Planeación y gestión de coberturas presenciales"
      ],
      imageUrl: "assets/play.svg"
    },
    {
      title: "Herramientas Datos",
      content: [
        "Entornos macOS y Windows",
        "Herramientas: Jira, Asana, Monday, Trello, Notion",
        "Analítica: Google Analytics, Kissmetrics",
        "Marketing: MailChimp, Meta Business",
        "Optimización de procesos y seguimiento de desempeño"
      ],
      imageUrl: "assets/tablet.svg"
    }
  ]
};

function generateCardsHTML(language = 'es') {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const selectedData = data[language];
    selectedData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;

        const title = document.createElement('h3');
        title.textContent = item.title;

        const content = document.createElement('div');
        item.content.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            content.appendChild(p);
            const br = document.createElement('br');
            content.appendChild(br);
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(content);

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateCardsHTML();


    document.getElementById('navbar-container').addEventListener('click', (event) => {
        if (event.target.id === 'language-toggle') {
            const newLanguage = event.target.textContent === 'Español' ? 'es' : 'en';
            generateCardsHTML(newLanguage);
        }
    });
});
