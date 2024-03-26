jQuery(document).ready(function ($) {
  $('.slider-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion')

  accordions.forEach(function (accordion) {
    accordion.addEventListener('shown.bs.collapse', function (event) {
      var parentWrapper = event.target.closest('.accordion-item')
      if (parentWrapper) {
        parentWrapper.classList.add('active')
      }
    })

    accordion.addEventListener('hidden.bs.collapse', function (event) {
      var parentWrapper = event.target.closest('.accordion-item')
      if (parentWrapper) {
        parentWrapper.classList.remove('active')
      }
    })
  })
})
