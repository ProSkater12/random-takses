function delayedHello(name) {
	if(!name) name = 'Привет, Незнакомец!';
	else name = 'Привет, ' + name + '!';

  	setInterval(function() { console.log(name); }, 1000);
}