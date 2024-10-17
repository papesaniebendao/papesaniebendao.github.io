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
