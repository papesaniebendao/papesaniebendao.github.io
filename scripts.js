const textArray = [
    "Développeur Web.",
    "Développeur Mobile.",
    "Passionné de Technologie.",
    "Créateur de Solutions."
];

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (textIndex === textArray.length) {
        textIndex = 0;
    }

    currentText = textArray[textIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.querySelector('.typing-text').textContent = currentText.substring(0, charIndex);

    if (charIndex === currentText.length) {
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
    }

    setTimeout(type, isDeleting ? 100 : 150);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.image-stack img');

function changeSlide() {
    slides[currentSlide].classList.remove('active'); // Hide current slide
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
    slides[currentSlide].classList.add('active'); // Show the next slide
}

// Change slides every 3 seconds
setInterval(changeSlide, 3000);


// Écouteur d'événements pour le défilement de la page
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav'); // Sélection de la barre de navigation

    // Vérifie si la position de défilement est supérieure à 0
    if (window.scrollY > 0) {
        nav.classList.add('scrolled'); // Ajoute la classe 'scrolled'
    } else {
        nav.classList.remove('scrolled'); // Retire la classe 'scrolled'
    }
});
