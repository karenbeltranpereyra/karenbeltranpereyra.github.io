function generateNavbar(language = 'es') {
    const navbarContainer = document.getElementById('navbar-container');
    
    const navContent = `
        <nav>
            <div class="nav__content">
                <div class="logo"><a href="#">Karen Beltrán</a></div>
                <label for="check" class="checkbox">
                    <i class="ri-menu-line"></i>
                </label>
                <input type="checkbox" name="check" id="check" />
                <ul>
                    <li><a href="#home">${language === 'en' ? 'Home' : 'Inicio'}</a></li>
                    <li><a href="#aboutme">${language === 'en' ? 'About Me' : 'Acerca de mi'}</a></li>
                    <li><a href="#resume">${language === 'en' ? 'Resume' : 'Currículum'}</a></li>
                    <li><a href="#" id="language-toggle">${language === 'en' ? 'Español' : 'English'}</a></li>
                </ul>
            </div>
        </nav>
    `;

    navbarContainer.innerHTML = navContent;

    document.getElementById('language-toggle').addEventListener('click', function() {
        const newLanguage = language === 'en' ? 'es' : 'en';
        generateNavbar(newLanguage);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    generateNavbar();
});
