const educationData = [
    {
      "institution": "UDF, Campus Condesa",
      "period": "2015 - 2017",
      "degree": "Bachelor's Degree in Communication Sciences",
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
  ];
  
  function generateEducationHTML(data) {
    const container = document.getElementById('education');
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
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    generateEducationHTML(educationData);
  });
  