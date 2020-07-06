function sumSquares (min, max) {
	let result = 0;
	for(let i = min; i < max + 1; i++)
	{
		result += i * i;
	}
	return result;
}
