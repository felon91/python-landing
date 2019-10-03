const testimonialsBlock = document.querySelector('.testimonials__block');

testimonialsBlock.addEventListener('click', function (e) {

  if (e.target.closest('.testimonials__person')) {
    let testimonialID = e.target.closest('.testimonials__person').dataset.id;
    document.querySelector('.testimonials__person--active').classList.remove('testimonials__person--active');
    e.target.closest('.testimonials__person').classList.add('testimonials__person--active');
    document.querySelector('.testimonials__otziv--active').classList.remove('testimonials__otziv--active');
    document.querySelector('#'+testimonialID).classList.add('testimonials__otziv--active');
  }

});

const answerList = document.querySelector('.answer__list');

answerList.addEventListener('click', function (e) {

  if (e.target.closest('.answer__item')) {

    if(e.target.closest('.answer__item').classList.contains('answer__item--active')) {
      e.target.closest('.answer__item').classList.remove('answer__item--active');
    } else {
      e.target.closest('.answer__item').classList.add('answer__item--active');
    }

  }

});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    nav: true,
    margin: 16,
    dots: false,
    navText: [],
  });

  $(".smooth").click(function(){
    let href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(href).offset().top+"px"});
    return false;
  });

});