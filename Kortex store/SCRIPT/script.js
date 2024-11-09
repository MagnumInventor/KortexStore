

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
const product = document.querySelector('.products');

carousel.addEventListener('mouseover', () => {
  carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});



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


