$(document).on('ready', function() {
  $(".carrusel-inspiracion-edp").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [{
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
          }, {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false
              }
          }, {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false
              }
          }

      ]
  });
});