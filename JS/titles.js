const texts = {
    en: {
        whatIDo: "What I do",
        happyClients: "Happy clients",
        work: "Work",
        education: "Education"
    },
    es: {
        whatIDo: "Lo que hago",
        happyClients: "Clientes felices",
        work: "Trabajo",
        education: "Educación"
    }
};
function updateTexts(language = 'es') {
    document.querySelector('#whatido').textContent = texts[language].whatIDo;
    document.querySelector('#happyclients').textContent = texts[language].happyClients;
    document.querySelector('#work').textContent = texts[language].work;
    document.querySelector('#school').textContent = texts[language].education;
}
document.addEventListener('DOMContentLoaded', () => {
    updateTexts();

    document.getElementById('navbar-container').addEventListener('click', (event) => {
        if (event.target.id === 'language-toggle') {
            const newLanguage = event.target.textContent === 'Español' ? 'es' : 'en';
            updateTexts(newLanguage);
        }
    });
});