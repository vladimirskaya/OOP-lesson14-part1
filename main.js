'use strict';

const DomElement = function(s, arr){
	this.selector = s;
	this.height = arr[0];
	this.width = arr[1];
	this.bg = arr[2];
	this.fontSize = arr[3];
};

DomElement.prototype.createElem = function(){
	let elem;
	if (this.selector[0] === '.'){
		// create div with class
		elem = document.createElement('div');
		elem.classList.add(this.selector.slice(1));
	} else if (this.selector[0] === '#'){
		// create p with id
		elem = document.createElement('p');
		elem.setAttribute('id',this.selector.slice(1));
	}
	document.querySelector('body').insertAdjacentElement('afterbegin', elem);
	elem.style.cssText = `height: ${this.height + 'px'}; 
			width: ${this.width + 'px'}; 
			background-color:${this.bg}; 
			font-size:${this.fontSize + 'px'}`  
};

	
let q1 = '#bop',
	q2 = '100 ,   280  , yellow  ,   10',
	selectorName = prompt("Введите имя класса или имя идентификатора для будущего элемента: ", q1),
	selectorData = prompt("Введите высоту, ширину, фон и шрифт для будущего элемента через запятую", q2).split(',');
	
selectorData.forEach(function(item,index){
	selectorData[index] = item.trim();
});

const newElem = new DomElement(selectorName, selectorData);

newElem.createElem();
