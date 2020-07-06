let HOURS_IN_DAY = 24;

function calculateHoursOnMoon(days) {
	HOURS_IN_DAY = 29.5;
    return days * HOURS_IN_DAY;
}

function calculateHoursOnEarth(days) {
	HOURS_IN_DAY = 24;
    return days * HOURS_IN_DAY;
}