$('.slider').slick({
    dots:false,
    infinite: true,
    fade:true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

$('.about-slider').slick({
    dots:true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
});



$('.courses-part-slider').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:1000,
    slidesToShow:3,
    centerMode:true,
    centerPadding:0,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  });


$('.counter').counterUp({
                delay: 10,
                time:20000
            });



$('.testi-slider').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    asNavFor:'.details-slider',
})

$('.details-slider').slick({
    dots:false,
    fade:true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    asNavFor:'.testi-slider',
})




$('.teacher-slider').slick({
    dots:false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
})



$('.footer-slider').slick({
    dots:false,
    infinite: true,
    speed:1000,
    autoplay: true,
    centerMode:true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
})



    
    