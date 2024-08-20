const educationData = {
  en: [
    {
      "institution": "UDF, Campus Condesa",
      "period": "2015 - 2017",
      "degree": "Bachelor's Degree in Communication Sciences",
      "courses": []
    },
    {
      "institution": "Featured Courses",
      "period": "2011 - 2022",
      "degree": "",
      "courses": [
        "2022, Online Certification. Digital Disruption: Strategy towards economic activation",
        "2021, Various certifications, courses, talks, debates organized and delivered by colleagues in the Marketing segment",
        "2020, Online Certification. Digital Marketing during the pandemic",
        "2019, Began taking Blueprint certifications, ongoing",
        "2018, ESDI - Digital Content Strategies",
        "2015-2016, UIC - Diploma in Digital Marketing and Social Media",
        "2013, IEBG - Diploma in Community Management",
        "2011-2012, LCD - Diploma in Community Management"
      ]
    }
  ],
  es: [
    {
      "institution": "UDF, Campus Condesa",
      "period": "2015 - 2017",
      "degree": "Licenciatura en Ciencias de la Comunicación",
      "courses": []
    },
    {
      "institution": "Cursos Destacados",
      "period": "2011 - 2022",
      "degree": "",
      "courses": [
        "2022, Certificación Online. Disrupción Digital: Estrategia hacia la activación económica",
        "2021, Varias certificaciones, cursos, charlas, debates organizados y realizados por colegas en el segmento de Marketing",
        "2020, Certificación Online. Marketing Digital durante la pandemia",
        "2019, Comencé a tomar certificaciones Blueprint, en curso",
        "2018, ESDI - Estrategias de Contenidos Digitales",
        "2015-2016, UIC - Diplomado en Marketing Digital y Redes Sociales",
        "2013, IEBG - Diplomado en Community Management",
        "2011-2012, LCD - Diplomado en Community Management"
      ]
    }
  ]
};

function generateEducationHTML(language = 'es') {
  const container = document.getElementById('education');
  container.innerHTML = ''; 

  const data = educationData[language];
  const isSmallScreen = window.matchMedia('(max-width: 750px)').matches;

  data.forEach(item => {
    const section = document.createElement('section');
    section.classList.add('education-item');

    const institution = document.createElement('h3');
    institution.textContent = item.institution;

    const period = document.createElement('p');
    period.textContent = item.period;

    const degree = document.createElement('p');
    degree.textContent = item.degree;

    const courses = document.createElement('ul');
    item.courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      courses.appendChild(li);
    });

    section.appendChild(institution);
    section.appendChild(period);
    section.appendChild(degree);
    section.appendChild(courses);
    container.appendChild(section);

    
    const toggleDiv = document.createElement('div');
    toggleDiv.classList.add('toggle-arrow');
    toggleDiv.innerHTML = '▼'; 

    section.appendChild(toggleDiv);

    
    courses.style.display = isSmallScreen ? 'none' : 'block';
    toggleDiv.style.display = isSmallScreen && item.courses[0] ? 'block' : 'none';

    toggleDiv.addEventListener('click', () => {
      if (courses.style.display === 'none') {
        courses.style.display = 'block';
        toggleDiv.innerHTML = '▲'; 
      } else {
        courses.style.display = 'none';
        toggleDiv.innerHTML = '▼'; 
      }
    });

  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateEducationHTML(); 

  document.getElementById('navbar-container').addEventListener('click', (event) => {
    if (event.target.id === 'language-toggle') {
      const newLanguage = event.target.textContent === 'Español' ? 'es' : 'en';
      generateEducationHTML(newLanguage);
    }
  });
});

