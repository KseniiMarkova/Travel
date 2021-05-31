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
	// обработчик события открыть меню('событие которое хотим прослушивать')
	burgerItem.addEventListener ('click', () => {
		menu.classList.add('header__nav_active');
	});
	// обработчик события закрыть меню (при нажатии на крестик)
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	});
}());