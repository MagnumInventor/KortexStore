

  // SHOPPING

$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});



            // CAROUSEL

    //BRANDS
// Зупинка анімації при наведенні на карусель
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', () => {
  carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});


    //SALE PRODUCTS
// Зупинка анімації при наведенні на карусель

/*
const salecarousel = document.querySelector('.carousel');
const saleproducts = document.querySelectorAll('.product');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = products[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < products.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = products.length - 1;
    }
    updateCarousel();
});

// Автоматичне переключення слайдів
setInterval(() => {
    nextButton.click();
}, 3000);

// Підлаштовування під ширину екрана при зміні розміру
window.addEventListener('resize', updateCarousel);




  // PRODUCT SCALLING

  // Отримуємо всі елементи з класом 'product'
const products = document.querySelectorAll('.product');

products.forEach(product => {
    // Додаємо слухач події для наведення миші
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.1)';
    });

    // Додаємо слухач події для виходу миші
    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
    });
});
*/

