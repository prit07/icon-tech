jQuery(document).ready(function(){
  $('#artisans-slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    autoplay: true,
    slideSpeed: 200,
    smartSpeed: 1000,
    nav: true,
    navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
    items: 1,
  });
});
