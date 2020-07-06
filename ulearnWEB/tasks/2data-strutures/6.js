function sample (arr) {
	//Ф-ция нахождения случайного числа в интервале:
	//Math.random() * (max - min) + min; 
	//У нас интервал от 0 до arr.length -1. После чего округляем
	return arr[Math.round(Math.random() * (arr.length - 1))];
}