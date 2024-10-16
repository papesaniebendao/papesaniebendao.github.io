// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".typing-text");
    const textArray = ["Développeur Web", "Développeur Mobile", "Programmeur Python", "Programmeur Java"];
    let textIndex = 0;
    let charIndex = 0;
    let typingDelay = 150;
    let erasingDelay = 100;
    let newTextDelay = 2000; // Delay between current and next text

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingDelay + 500); // Slight delay before typing next text
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
