


/****jQuery conflict-fix*****/ 
//$ = $myJQ
jQuery.noConflict();


/***owl *****/ 
jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


/***slick *****/ 

jQuery(document).ready(function(){
  jQuery('.myGallery').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
  });


  jQuery('.js-menu').on('click', () => {
    jQuery('.js-menu').toggleClass('active');
    jQuery('.js-nav').toggleClass('open');
    jQuery('.js-nav__list').toggleClass('show');
  });



