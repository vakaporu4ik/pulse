let answer = prompt("Вам есть 18?", "");
console.log(answer);
// $-библиотека jquery
// .ready(function()-код будет запускаться когда структура будет готова
$(document).ready(function(){
    // обращаемся к классу carousel__inner
    // .slick()-метод которій позволит запустить slick слайдер
    $('.carousel__inner').slick({
        // // карусель движется по кругу
        // infinite: true,
        // // кол слайдов
        // slidesToShow: 1,
        // // кол слайдов за одно нажатие кнопки
        // slidesToScroll: 3
        // кружки внизу
        // dots: true,
        infinite: true,
        // скорость перелистывания м/с
        speed: 1200,
        // картинки разной высоты,подстраивайся
        adaptiveHeight: true,
        // проявление картинки равномерно
        // fade: true,
        // cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/chevronright.png"></button>',
        // адаптация под разные экраны responsiveб через масив []
        responsive: [
            {
                // границы в пик от 0 до 
                breakpoint: 992,
                settings: {
                  dots: true,
                //   убираем стрелочки
                arrows: false
                }
            }
        ]
      });
  });