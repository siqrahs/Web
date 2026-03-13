// Menu interaktif
const menuItems = document.querySelectorAll('#menu li');
const sections = document.querySelectorAll('main section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.dataset.section;

        sections.forEach(sec => {
            sec.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});

// Contoh stat pengunjung sederhana
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitorCount').textContent = visitorCount;

// Contoh form submit
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Pesan berhasil dikirim! 🚀');
    form.reset();
});
