$(function () {
  $(".about__popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
  $(".gallery__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/left-btn.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/right-btn.svg"></button>',
  });
  $(".gallery__items-inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list-active');
  });
});



