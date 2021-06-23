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


let windowHeight = window.innerHeight;
window.addEventListener('resize', function () {
	windowHeight = window.innerHeight;
})
let headerHeight = document.getElementById('header').clientHeight;

for (let link of document.getElementsByClassName('menu__item')) {
	let sectionId = link.getAttribute('href');
	window.addEventListener('scroll', function (e) {
		let pos = document.querySelector(sectionId).getBoundingClientRect();
		if (pos.top < windowHeight / 2 && pos.top > - 1 * (pos.height - windowHeight / 2)) {
			link.firstElementChild.classList.add('menu__circle_active')
		} else {
			link.firstElementChild.classList.remove('menu__circle_active')
		}
	})
}
for (let link of document.getElementsByClassName('menu__item')) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let idSection = this.getAttribute('href');
		let pos = document.querySelector(idSection)
		window.scrollTo({
			top: pos.offsetTop - headerHeight,
			left: 0,
			behavior: 'smooth',
		})
	})
}
function circleDown() {
	document.getElementById('circle-down').addEventListener('click', function (e) {
		e.preventDefault();
		window.scrollTo({
			top: document.getElementById('project').offsetTop - headerHeight,
			left: 0,
			behavior: 'smooth',
		})
	})
}
circleDown()
function clear() {
	let res = []
	window.addEventListener('scroll', function (e) {
		let pos = document.getElementById('about').getBoundingClientRect();
		res.push(pos.y)
		if (res[res.length - 1] > res[res.length - 2]) {
			document.querySelector('.header__body').classList.remove('hiden')
		} else {
			document.querySelector('.header__body').classList.add('hiden')
		}
	})
}
clear()