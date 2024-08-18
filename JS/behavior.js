document.querySelectorAll('.nav__content ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('check').checked = false;
    });
  });
  