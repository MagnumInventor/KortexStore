
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

let lastScrollY = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Скрол вниз — ховаємо хедер
    header.classList.add('hidden');
  } else {
    // Скрол вверх — показуємо хедер
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
