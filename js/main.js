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