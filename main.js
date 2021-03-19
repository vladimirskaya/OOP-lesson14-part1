document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const DomElement = function (s, arr) {
		this.selector = s;
		this.height = arr[0];
		this.width = arr[1];
		this.bg = arr[2];
		this.fontSize = arr[4];
	};

	function getNewColor() {
		let num16 = '#';
		const changeInto16 = (n) => {
			if (n > 9) {
				switch (n) {
					case 10:
						n = 'a';
						break;
					case 11:
						n = 'b';
						break;
					case 12:
						n = 'c';
						break;
					case 13:
						n = 'd';
						break;
					case 14:
						n = 'e';
						break;
					case 15:
						n = 'f';
						break;
				}
			}
			return String(n);
		}

		for (let i = 0; i < 3; i++) {
			let num10 = Math.floor(Math.random() * 256),
				firstPart16 = Math.trunc(num10 / 16),
				secondPart16 = num10 % 16,
				allParts16 = changeInto16(firstPart16) + changeInto16(secondPart16);
			num16 += allParts16;
		}
		console.log(num16);
		return num16;
	}

	DomElement.prototype.createElem = function () {
		let elem;
		if (this.selector[0] === '.') {
			// create div with class
			elem = document.createElement('div');
			elem.classList.add(this.selector.slice(1));
		} else if (this.selector[0] === '#') {
			// create p with id
			elem = document.createElement('p');
			elem.setAttribute('id', this.selector.slice(1));
		}

		document.querySelector('body').insertAdjacentElement('afterbegin', elem);
		elem.style.cssText = `height: ${this.height}px; 
			width: ${this.width}px; 
			background-color:${this.bg}; 
			font-size:${this.fontSize}px;
			position: absolute;`
	};


	let q1 = '#bop',
		q2 = `100 ,   100  , ${getNewColor()}  ,   10`,
		selectorName = prompt("Введите имя класса или имя идентификатора для будущего элемента: ", q1),
		selectorData = prompt("Введите высоту, ширину, фон и шрифт для будущего элемента через запятую", q2).split(',');

	selectorData.forEach(function (item, index) {
		selectorData[index] = item.trim();
	});

	const newElem = new DomElement(selectorName, selectorData);

	newElem.createElem();

	const square = document.querySelector(`${selectorName}`);
	square.style.marginTop = 0; // обнуляем верхнюю границу марджин
	let coordinates;
	document.addEventListener('keydown', (event) => {
		let btn = event.code;
		switch (btn) {
			case 'ArrowUp':
				coordinates = square.getBoundingClientRect();
				square.style.top = coordinates.top - 10 + 'px';
				break;
			case 'ArrowDown':
				coordinates = square.getBoundingClientRect();
				square.style.top = coordinates.top + 10 + 'px';
				break;
			case 'ArrowLeft':
				coordinates = square.getBoundingClientRect();
				square.style.left = coordinates.left - 10 + 'px';
				break;
			case 'ArrowRight':
				coordinates = square.getBoundingClientRect();
				square.style.left = coordinates.left + 10 + 'px';
				break;
		}
	});

})