function checkA1 (a) {
    // 1. if-else
	if(a == 0) a = "Все плохо";
	return a;
}

function checkA2 (a) {
    // 2. тернарный оператор
	return (a === 0) ? "Все плохо" : a;
}

function checkA3 (a) {
    // 3. логическое или
	return a || "Все плохо";
}
