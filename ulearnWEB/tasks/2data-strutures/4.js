function formatMoney (money) {
	//Приравниваем число к строке
	money += '';
	let resultStr;
	//Проверяем дробную часть числа. Есть 3 случая:
	//1) Дробной части нет
	//2) Дробная часть есть и она 2 и более знака (почему нужно приравнивать к деньгам число с огромной 
	//дробной частью???)
	//3) Дробная часть содержит только 1 знак
	//Приводим к виду *целая часть числа* + '.' + *дробная часть 2 знака*
	for(let i = 0; i < money.length; i++){
		if(money[i] == '.') {
			if(i < money.length - 2){
				money = money.substr(0, (money.length - (money.length - i) + 3));
				break;
			}
			else{
				money += '0';
			}
		}
	}
	
	//Если дробной части нет, то прибавляем ',00' к строке результату
	if(money[money.length - 3] != '.'){ resultStr = ',00'; }
	//Если есть, то к строке результату прибавляем эту дробную часть
	else{ 
		resultStr = ',' + money[money.length - 2] + money[money.length - 1];
		money =  money.substr(0, money.length - 3);	
	}
	//По 3 знака через пробел прибавляем к строке результату части оригинальной строки с конца
	while(money.length > 3){
		resultStr = ' ' + money.substr(money.length - 3, 3) + resultStr;
		money = money.substr(0, money.length - 3);
	}

	//Прибавляем оставшиеся знаки и возвращаем
	return money + resultStr;
}