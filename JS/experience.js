const experienceData = [
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
  ];
  

  function generateExperienceHTML(data) {
    const container = document.getElementById('experience');
    data.forEach(item => {
      const section = document.createElement('section');
      section.classList.add('experience-item');

      const company = document.createElement('h3');
      company.textContent = item.company;

      const period = document.createElement('p');
      period.textContent = item.period;

      const position = document.createElement('p');
      position.textContent = `Position: ${item.position}`;

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
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    generateExperienceHTML(experienceData);
  });