// Menu mobile : ouvre/ferme la liste de liens
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// Met en surbrillance le lien de la section visible au scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a.link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// Année dynamique dans le footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = `© ${new Date().getFullYear()}`;
}