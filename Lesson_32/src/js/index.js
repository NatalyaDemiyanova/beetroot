$('ul.navigation__list').on('click', 'li:not(.navigation__item--active)', function() {
    $(this)
      .addClass('navigation__item--active')
      .siblings()
      .removeClass('navigation__item--active')
      .closest('div.container')
      .find('li.content__item')
      .removeClass('content__item--active')
      .eq($(this).index())
      .addClass('content__item--active');
  });
  


$('#rateYo').rateYo({
    rating: 3.6,
    starWidth: '20px',
    numStars: 5,
    minValue: 0,
    maxValue: 5,
    normalFill: 'gray',
    ratedFill: '#ffdd3f',
    spacing: '9px'
});

$('#circle').circleProgress({
    value: 0.78,
    size: 80,
    lineCap:'butt',


    fill: {
      gradient: ["yellow", "#13e28d"]
    }
  });


 