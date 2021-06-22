$(document).ready(function () {
	$('.header__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		// dots: true,
		centerMode: true,
		arrows: false,

	});
});
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		// center: true,
		items: 3,
		loop: true,
		margin: 30,
		autoWidth: true,
		nav: true,
		dotsEach: true,
		// autoplay: true,
		// autoplayTimeout: 3000,
		// autoplayHoverPause: true,

	});
});


function findMap() {
	const map = L.map('map', {
		center: [49.22825150585289, 28.47068416508359],
		zoom: 17,
		scrollWheelZoom: false
	});
	let customIcon = L.icon({
		iconUrl: 'img/pin.png',
		iconSize: [40, 40],
		iconAnchor: [20, 20],
	});
	L.marker([49.229638781785724, 28.470161053965366], { icon: customIcon }).addTo(map);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
}
findMap();