import '../css/style.css';
(function () {
	/*вернет первый элемент с заданным селектором*/
	const header = document.querySelector('.header');
	/*при скролинге страницы, пишем стрелочную функию {если скролинг на 50px, то применяем bg}*/
	window.onscroll = () => {
		/*window.pageYOffset = растоянию от верхней точки документа*/
		if (window.pageYOffset > 70) {
			/*если условие выполнилось, то присваиваем header дополнительный класс*/
			header.classList.add('header_active');
		} else{
			/*иначе удаляем класс*/
			header.classList.remove('header_active');
		}
	};
}());/*самовызывающаяся функция, которая отработает как только распарсится js*/

// Burger handler
(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__nav-close');
	const menuLinks = document.querySelectorAll('.header__link');
	// обработчик события открыть меню('событие которое хотим прослушивать')
	burgerItem.addEventListener ('click', () => {
		menu.classList.add('header__nav_active');
	});
	// обработчик события закрыть меню (при нажатии на крестик)
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	});
	if (window.innerWidth < 768) { //для перехода по частям страницы
		for (let i = 0; i < menuLinks.length; i++) { //можно использовать forEach
			menuLinks[i].addEventListener('click', () => {
				menu.classList.remove('header__nav_active');
			});
		};
	};
}());

//Scroll to anchors(плавная анимация скролла)
(function () {
	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.header').clientHeight; //получаем высоту хедера
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		//функция обработчик скролла (функция is)
		const ease = function(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		//функция анимации
		const animation = function(currentTime){
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0,run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);

	};

	//подвешивание обработчика события на ссылки для срабатывания скрола smoothscroll
	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
}());