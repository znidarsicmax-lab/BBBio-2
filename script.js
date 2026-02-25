// Progress bar
const progressBar = document.getElementById('progress-bar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / total * 100) + '%';
    backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal, .effect-item, .tech-card, .hover-card, .tech-highlight');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 100);
        }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Contact form handler
function sendForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value || 'Povpraševanje';
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:weyergans@bb-bio.si?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('Ime: ' + name + '\nE-pošta: ' + email + '\n\nSporočilo:\n' + message)}`;
    window.location.href = mailtoLink;
}

// Smooth nav links
document.querySelectorAll('nav a, .hero-btn').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
