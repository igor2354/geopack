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
});
