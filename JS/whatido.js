const data = {
    en: [
        {
            title: "Strategy development",
            content: [
                "Team Leadership: Creative, UX, IT, Infrastructure, Social, Production",
                "Project Management",
                "Project Planning",
                "Resource Management and Allocation",
                "Development and Monitoring of Timelines",
                "Budgeting",
                "Project Budget Control and Management",
                "Simultaneous Project Management",
                "Client Communication",
                "Analytical Skills",
                "Negotiation Skills"
            ],
            imageUrl: "assets/computer.svg"
        },
        {
            title: "Digital production",
            content: [
                "Management of Large-Scale Productions and Small Productions",
                "Management of Website Improvements and/or Development",
                "Management of Social Media Content Development for Brands (Instagram, Facebook, TikTok, YouTube, LinkedIn)",
                "Management of App Development",
                "Management and Organization of In-Person Event Coverage"
            ],
            imageUrl: "assets/play.svg"
        },
        {
            title: "Visual and technical",
            content: [
                "Operating Systems: MACOSX, Windows",
                "Productivity: Office Suite, Asana, Monday, Trello, Jira, Microsoft Teams, Airtable, Notion",
                "Analysis and Digital Marketing: Google Analytics, Kissmetrics, MailChimp, FB Business"
            ],
            imageUrl: "assets/tablet.svg"
        }
    ],
    es: [
        {
            title: "Desarrollo de estrategia",
            content: [
                "Liderazgo de equipos: Creativo, UX, TI, Infraestructura, Social, Producción",
                "Gestión de proyectos",
                "Planificación de proyectos",
                "Gestión y asignación de recursos",
                "Desarrollo y seguimiento de cronogramas",
                "Presupuestación",
                "Control y gestión del presupuesto del proyecto",
                "Gestión de proyectos simultáneos",
                "Comunicación con el cliente",
                "Capacidad de análisis",
                "Capacidad de negociación"
            ],
            imageUrl: "assets/computer.svg"
        },
        {
            title: "Producción digital",
            content: [
                "Gestión de grandes y pequeñas producciones",
                "Gestión de mejoras y/o desarrollo de sitios web",
                "Gestión del desarrollo de contenido para redes sociales para marcas (Instagram, Facebook, TikTok, YouTube, LinkedIn)",
                "Gestión del desarrollo de aplicaciones",
                "Gestión y organización de coberturas de eventos presenciales"
            ],
            imageUrl: "assets/play.svg"
        },
        {
            title: "Visual y técnico",
            content: [
                "Sistemas Operativos: MACOSX, Windows",
                "Productividad: Office Suite, Asana, Monday, Trello, Jira, Microsoft Teams, Airtable, Notion",
                "Análisis y Marketing Digital: Google Analytics, Kissmetrics, MailChimp, FB Business"
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
