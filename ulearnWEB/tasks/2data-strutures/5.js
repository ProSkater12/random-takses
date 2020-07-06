function getMostFrequentElement (arr) {
	//сортируем изначальный массив
	arr.sort();
	let simbols = [];
	let matches = [];
	let counter = 0;
	//Добавляем первый символ в массив с символами (или словами)
	simbols[0] = arr[0];
	matches[0] = 1;
	//Из-за того что массив отсортирован мы можем спокойно повышать совпадения если следующее слово
	//равно предыдущему. Иначе добавляем в массив с символами другое значение и начинаем отсчитывать 
	//совпадения уже для него
	for(let i = 1; i < arr.length; i++){
		if(arr[i] != simbols[counter]) {
			counter++;
			simbols[counter] = arr[i];
			matches[counter] = 1;
		}
		else{
			matches[counter]++;
		}
	}
	//Находим в массиве с совпадениями максимальное значение и запоминаем индекс
	let maxMatches = 0;
	let maxInd = 0;
	for(let i = 0; i < matches.length; i++){
		if(matches[i] > maxMatches) {
			maxMatches = matches[i];
			maxInd = i;
		}
	}
	return simbols[maxInd];
}
