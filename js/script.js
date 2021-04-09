const swiper = new Swiper('.content__row-1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 5,
	spaceBetween: 0,
	// Navigation arrows
	navigation: {
		nextEl: '.content__btn-1-next',
		prevEl: '.content__btn-1-prev',
	},
});
const swiper1 = new Swiper('.content__row-recommend', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 0,
	// Navigation arrows
	navigation: {
		nextEl: '.content__btn-rec-next',
		prevEl: '.content__btn-rec-prev',
	},
});
const swiper2 = new Swiper('.content__row-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 5,
	spaceBetween: 0,
	// Navigation arrows
	navigation: {
		nextEl: '.content__btn-2-next',
		prevEl: '.content__btn-2-prev',
	},
});