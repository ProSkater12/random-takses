function sumArr (arr) {
	const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);
	return sum(arr);
}