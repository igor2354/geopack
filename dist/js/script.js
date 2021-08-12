$(document).ready(function () {
	$(".js-tab").on("click", function (e) {
		e.preventDefault();

		let elementId = $(this).attr("href");

		$(this).parent().find(".js-tab").removeClass("active");

		$(elementId).parent().find(".js-tab-item").removeClass("active");

		$(this).addClass("active");

		$(elementId).addClass("active");
	});

	$(".lightgallery").lightGallery({
		selector: "a",
	});

	$(".js-ham, .header-close-menu, .bg-overlay").on("click", function (e) {
		$(".js-ham").toggleClass("active");
		$(".header").toggleClass("active");
		$(".bg-overlay").fadeToggle();
		$("body").toggleClass("lock");
	});

	$(".header").mCustomScrollbar({
		theme: "my-theme",
		scrollInertia: 300,
	});

	// МАСКА ТЕЛЕФОНА
	$("input[type=tel]").inputmask({
		mask: "+7 (Z99) 999-99-99",
		definitions: {
			Z: {
				validator: "[0-6,9]",
			},
		},
	});

	//===============ANIMATION SCROLL======================
	const animItems = $(".anim-items");

	if (animItems.length > 0) {
		$(window).on("scroll", animOnScroll);
		function animOnScroll() {
			$.each(animItems, function (index, val) {
				const animItem = animItems.eq(index);
				const animItemHeight = animItem.innerHeight();
				const animItemOffset = animItem.offset().top;
				const animStart = 10; // начало анимации при достижении скролом 1/10 части элемента

				let animItemPoint = $(window).height() - animItemHeight / animStart;

				if (animItemHeight > $(window).height()) {
					animItemPoint = $(window).height() - $(window).height() / animStart;
				}

				if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
					animItem.addClass("animate");
				} else {
					if (!animItem.hasClass("anim-no-scrollTop")) {
						animItem.removeClass("animate");
					}
				}
			});
		}
		setTimeout(animOnScroll, 0);
	}

	$("select").niceSelect();

	//Попапы
	$(".js-show-popup a").on("click", function (e) {
		e.preventDefault();
		$(".modal").fadeOut();

		$(".popup-overlay").fadeIn();
		$($(this).attr("href")).fadeIn();
		$($(this).attr("href")).css({ "max-height": $(window).height() });
	});

	$(".js-modal-close").on("click", function (e) {
		$(this).parents(".modal").fadeOut();
		$(".popup-overlay").fadeOut();
	});

	$(".popup-overlay").on("click", function (e) {
		$(".modal").fadeOut();
		$(this).fadeOut();
	});
});

// скрипт слайдера

document.addEventListener(
	"DOMContentLoaded",
	function () {

		const swiper_small = new Swiper(".product-swiper-container-small", {
			// Optional parameters
			slidesPerView: 5,
			spaceBetween: 30,
			loop: false,

			
		});
		const swiper_big = new Swiper(".product-swiper-container-big", {
			// Optional parameters
			slidesPerView: 1,
			spaceBetween: 30,
			loop: false,

			// Navigation arrows
			navigation: {
				nextEl: ".product-button-next",
				prevEl: ".product-button-prev",
			},

			thumbs: {
				swiper: swiper_small,
			},
		});
	},
	false
);
