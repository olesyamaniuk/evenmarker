$(function () {
  $(".o-g-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".o-g-why-list-left",
    nextArrow: ".o-g-why-list-right",
  });
});

$(function () {
  $(".o-g-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".o-g-gallery-list-left",
    nextArrow: ".o-g-gallery-list-right",
  });
});
