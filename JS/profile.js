function generateProfileSection(language = 'es') {
    const profileSectionContainer = document.getElementById('aboutme');
    
    const content = {
        en: {
            title: "Short facts about me",
            loving: "LOVING",
            lovingText: "Skating, listening to music, nature, traveling, dancing, and dedicating time to the important things and people in my life.",
            socialProfiles: "SOCIAL PROFILES",
            skills: "SKILLS",
            contact: "CONTACT",
            description: `I am an entrepreneurial and passionate individual who embraces challenges and perseveres. <br><br>
                          With a meticulous and self-taught approach, I am committed to continuous learning every day.<br><br>
                          Over the past 10 years, I have gained extensive experience in managing Digital Marketing, successfully
                          adapting to various brand projects under my direction. <br><br>
                          My primary goal is to achieve professional growth and evolution. <br><br>
                          I seek opportunities that align with this objective while ensuring that I fully support the company's goals.`,
            signature: "Kind Regards,<br>Karen"
        },
        es: {
            title: "Datos breves sobre mí",
            loving: "ME GUSTA",
            lovingText: "Patinar, escuchar música, la naturaleza, viajar, bailar y dedicarle tiempo a las cosas y personas importantes en mi vida",
            socialProfiles: "REDES SOCIALES",
            skills: "HABILIDADES",
            contact: "CONTACTO",
            description: `Soy una persona emprendedora y apasionada que enfrenta desafíos y persevera. <br><br>
                          Con un enfoque meticuloso y autodidacta, me comprometo a aprender continuamente cada día.<br><br>
                          En los últimos 10 años, he adquirido una amplia experiencia en la gestión de Marketing Digital, adaptándome exitosamente
                          a varios proyectos de marcas bajo mi dirección. <br><br>
                          Mi objetivo principal es lograr el crecimiento y la evolución profesional. <br><br>
                          Busco oportunidades que se alineen con este objetivo mientras me aseguro de apoyar completamente los objetivos de la empresa.`,
            signature: "Saludos cordiales,<br>Karen"
        }
    };
    
    const profileContent = content[language];

    const profileSection = `
        <div class="profile-section">
            <div class="amcontent">
                <div class="left-column">
                    <h2>${profileContent.title}</h2>
                    <section class="loving">
                        <h3>${profileContent.loving}</h3>
                        <p>${profileContent.lovingText}</p>
                    </section>
                    <section class="social-profiles">
                        <h3>${profileContent.socialProfiles}</h3>
                        <div class="icons">
                            <a href="https://www.linkedin.com/in/karen-beltr%C3%A1n-638726315/?utm_source=share&utm_campaign=share_via&utm_content=profile"><img src="assets/linkedin.png" alt="LinkedIn"></a>
                        </div>
                    </section>
                    <section class="skills">
                        <h3>${profileContent.skills}</h3>
                        <div class="skill">
                            <span>Analytics</span>
                            <div class="bar">
                                <div class="fill" style="width: 70%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>CMS</span>
                            <div class="bar">
                                <div class="fill" style="width: 80%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>Social</span>
                            <div class="bar">
                                <div class="fill" style="width: 70%;"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>Productivity</span>
                            <div class="bar">
                                <div class="fill" style="width: 80%;"></div>
                            </div>
                        </div>
                    </section>
                    <section class="contact">
                        <h3>${profileContent.contact}</h3>
                        <a href="mailto:karenbeltran.digital@gmail.com?subject=Hello%20Karen&body=We%20are%20interested%20in%20your%20profile">karenbeltran.digital@gmail.com</a>
                    </section>
                </div>
                <div class="right-column">
                    <p class="description">
                        ${profileContent.description}
                    </p>
                    <p class="signature">${profileContent.signature}</p>
                </div>
            </div>
        </div>
    `;

    profileSectionContainer.innerHTML = profileSection;
}

document.addEventListener('DOMContentLoaded', () => {
    generateProfileSection();
    
    document.getElementById('navbar-container').addEventListener('click', (event) => {
        if (event.target.id === 'language-toggle') {
            const newLanguage = event.target.textContent === 'Español' ? 'es' : 'en';
            generateProfileSection(newLanguage);
        }
    });
});
