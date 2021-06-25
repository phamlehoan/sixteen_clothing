import "./owl"
import "./slick"

jQuery(document).ready(function ($) {
	"use strict";
	$(function () {
		$("#tabs").tabs();
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});
	if ($('.owl-clients').length) {
		$('.owl-clients').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			margin: 30,
			autoplay: false,
			smartSpeed: 700,
			autoplayTimeout: 6000,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				460: {
					items: 1,
					margin: 0
				},
				576: {
					items: 3,
					margin: 20
				},
				992: {
					items: 5,
					margin: 30
				}
			}
		});
	}
	if ($('.owl-testimonials').length) {
		$('.owl-testimonials').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			margin: 30,
			autoplay: false,
			smartSpeed: 700,
			autoplayTimeout: 6000,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				460: {
					items: 1,
					margin: 0
				},
				576: {
					items: 2,
					margin: 20
				},
				992: {
					items: 2,
					margin: 30
				}
			}
		});
	}
	if ($('.owl-banner').length) {
		$('.owl-banner').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			margin: 0,
			autoplay: false,
			smartSpeed: 700,
			autoplayTimeout: 6000,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				460: {
					items: 1,
					margin: 0
				},
				576: {
					items: 1,
					margin: 20
				},
				992: {
					items: 1,
					margin: 30
				}
			}
		});
	}

	$(".Modern-Slider").slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		pauseOnDotsHover: true,
		cssEase: 'linear',
		// fade:true,
		draggable: false,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});

	$("#user_avatar").change(function (e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

      var file = e.originalEvent.srcElement.files[i];

      var img = document.getElementById("output_image");
      var reader = new FileReader();
      reader.onloadend = function () {
        img.src = reader.result;
      }
      reader.readAsDataURL(file);
      $("#session_avatar").after(img);
    }
  });

  $("#btn-register-next, #btn-register-prev").click(function () {
    $("#register-form-1").toggleClass("d-none");
    $("#register-form-2").toggleClass("d-none");
  });

	var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();
	for (let i = 0; i < $('.toggle-password').length; i++) {
    $('.toggle-password').eq(i).click(function () {
      $('.eye-pic').eq(i).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
});