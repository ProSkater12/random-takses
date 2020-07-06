function convertStringToNumber (str) {
	str = +str;
	//NaN не равен ничему, даже себе. Поэтому str == str имеет смысл
	if(str == str) return str;
	else return false;
}
