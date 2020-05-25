
$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    // slidesToShow: 3,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    prevArrow: `<button type="button" class="slick-prev"><img src="../images/arrow.png"></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="../images/arrow_right.png"></button>`
  });
});

new Glide('.glide', {
  type: 'carousel',
  // gap: 40,
  perView: 4,
  

}).mount();
	