$(document).ready(function() {
	/*Открытие попапа главного с автомобилем*/
	$('.main-table__item').click(function() {
		$('.main-popup-wrapper').show()
		$('body').addClass('body-popup')
	})

	$('.main-popup-close').click(function() {
		$('.main-popup-wrapper').hide()
		$('body').removeClass('body-popup')
	})
	
	$('.main-popup').on('click', function(e) {
		if (e.target !== this)
		return;
		$('.main-popup-wrapper').hide()
		$('body').removeClass('body-popup')
	});
	
	/*Все марки открыть*/
	$('.cars__show').click(function() {
		$('.cars').addClass('cars-open')
		$('.cars__hide').show()
		$(this).hide()
	})
	$('.cars__hide').click(function() {
		$('.cars').removeClass('cars-open')
		$('.cars__show').show()
		$(this).hide()
	})

	/*Все настройки открыть*/
	$('.filter__nav .left').click(function() {
		$(this).toggleClass('left-open')
		$('.filter__bottom-wrapper').toggle()
	})

	/*Регистрация и вход*/
	$('.header__register-btn').click(function() {
		$('.popup-reg').show()
		$('body').addClass('body-popup')
	})

	$('.popup-reg .close-popup').click(function() {
		$('.popup-reg').hide()
		$('body').removeClass('body-popup')
	})
	
	$('.popup-reg').on('click', function(e) {
		if (e.target !== this)
		return;
		$('.popup-reg').hide()
		$('body').removeClass('body-popup')
	});


	$('.header__login').click(function() {
		$('.popup-login').show()
		$('body').addClass('body-popup')
	})

	$('.popup-login .close-popup').click(function() {
		$('.popup-login').hide()
		$('body').removeClass('body-popup')
	})
	
	$('.popup-login').on('click', function(e) {
		if (e.target !== this)
		return;
		$('.popup-login').hide()
		$('body').removeClass('body-popup')
	});

	/*Слайдер футер*/
	$('.slider2').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  dots: false,
	  autoplaySpeed: 2000,
	  prevArrow: '<div class="slider2__prev slider2__arrows"><img src="img/arrow-left.png" alt=""></div>',
	  nextArrow: '<div class="slider2__next slider2__arrows"><img src="img/arrow-right.png" alt=""></div>',
	  responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    }
	  ],
	});
	/*Слайдер попап*/
	$('.slider3').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  arrows: false,
	  dots: true
	});
})