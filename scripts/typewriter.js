// this script is a typewriter effect for h1.app-typing. 

const phrases = [
    'Sizzle Your Taste Buds at D\'Kitchen!',
    'Where Every Bite is a Delicious Adventure!',
    'Juicy Pata and Sizzling Steaks - Yum!',
    'Filipino Comfort Food at its Finest!',
    'Perfectly Cooked Adobo? Yes, please!',
    'Refreshing Drinks to Quench Your Thirst!',
    'Treat yourself to our delicious desserts!',
    'Come and enjoy a sumptuous meal with us!',
    'Get your taste buds dancing with D\'Kitchen!',
    'Discover a world of flavor at D\'Kitchen!',
    'Experience the taste of Philippines at D\'Kitchen!',
    'D\'Kitchen - where every meal is a celebration!',
    'Elevate your dining experience with signature dishes!',
    'D\'Kitchen - where tradition meets innovation in every bite!',
    ];


let currentPhraseIndex = 0;
const typingDelay = 25;
const erasingDelay = 15;
const newPhraseDelay = 500;
const appTyping = document.querySelector('.app-typing');

// to avoid blinking effect, we will set the font color alpha to hide the text before the last letter is erased.

function type() {
    let currentPhrase = phrases[currentPhraseIndex];
    let currentLetterIndex = 0;
    let currentLetter = currentPhrase[currentLetterIndex];
    let typingInterval = setInterval(function () {
        appTyping.style.color = 'rgba(255, 255, 255, 1)';
        if (currentLetterIndex === 0) {
            appTyping.textContent = currentLetter[1];
            currentLetter = currentPhrase[currentLetterIndex];
        }
        appTyping.textContent += currentLetter;
        currentLetterIndex++;
        currentLetter = currentPhrase[currentLetterIndex];
        if (currentLetterIndex === currentPhrase.length) {
            clearInterval(typingInterval);
            setTimeout(erase, newPhraseDelay);
        }
    }, typingDelay);
}

function erase() {
    let currentPhrase = phrases[currentPhraseIndex];
    let currentLetterIndex = currentPhrase.length;
    let currentLetter = currentPhrase[currentLetterIndex];
    let erasingInterval = setInterval(function () {
        appTyping.textContent = currentPhrase.substring(0, currentLetterIndex);
        currentLetterIndex--;
        currentLetter = currentPhrase[currentLetterIndex];
        if (currentLetterIndex === 0) {
            appTyping.style.color = 'rgba(255, 255, 255, 0)';
            clearInterval(erasingInterval);
            currentPhraseIndex++;
            if (currentPhraseIndex === phrases.length) {
                currentPhraseIndex = 0;
            }
            setTimeout(type, 0);
        }
    }, erasingDelay);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, newPhraseDelay);
});
