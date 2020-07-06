function formatDate (date) {
	let day = date.getDate() + '';
	let month = (date.getUTCMonth() + 1) + '';
	if(day.length == 1) day = '0' + day;
	if(month.length == 1) month = '0' + month;
	return day + '-' + month + '-' + date.getFullYear();
}