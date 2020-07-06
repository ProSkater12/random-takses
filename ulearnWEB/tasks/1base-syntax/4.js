function createGratitude (name, rating) {
	if(!name) name = "Аноним";
	if(!rating) rating = 0;
	return name + " оценил нас на " + rating + " из 5. Спасибо, " + name + "!";
}