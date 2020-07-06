function sortArr (arr) {
	let resultArr = [];
	for(let i = 0; i < arr.length; i++){
		resultArr[i] = arr[i];
	}
	return resultArr.sort(function(a, b){ return b - a; });
}