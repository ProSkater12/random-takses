function truncateString (str, len) {
	if(str.length > len) {
		str = str.substring(0, len) + '…';
	}
	return str;
}