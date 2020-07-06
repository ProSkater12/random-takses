function calculateAverage () {
	let arr = Array.prototype.slice.call(arguments);
  	if(arr[0]) return arr.reduce(function(a,b){ return( a + b ) }) / arguments.length;
  	else return 0;
}
