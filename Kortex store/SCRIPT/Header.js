
        // HEADER MENU

const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');
const navPoints = document.getElementById('nav-points');
        const BlackLine = document.getElementById('black-line');
        const SecondBlackLine = document.getElementById('second-black-line');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
navPoints.classList.toggle('active');
burgerMenu.classList.toggle('active');
        BlackLine.classList.toggle('active');
        SecondBlackLine.classList.toggle('active');
});


// SCROLL HEADER

// Отримуємо хедер
const header = document.querySelector("header");

let lastScrollPosition = 0; // Зберігаємо останню позицію скролу

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset; // Поточна позиція скролу

    if (currentScrollPosition > lastScrollPosition) {
        // Скрол вниз - ховаємо хедер
        header.classList.add("hidden");
    } else {
        // Скрол вверх - показуємо хедер
        header.classList.remove("hidden");
    }

    // Оновлюємо останню позицію скролу
    lastScrollPosition = currentScrollPosition;
});

