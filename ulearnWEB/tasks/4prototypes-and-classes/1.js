function createRelation() {
    const programmer = {
        hasComputer: true,
        canWriteCode: true,
        wait: () => 'Билдится!',
        reactOnBugReport: () => 'У меня все работает!'
    };
	
	const frontendDeveloper = {		
		reactOnBugReport: function() {
			return 'Купите новый компьютер';
		},
		__proto__: programmer
	}

    return {
        programmer, 
		frontendDeveloper
    };
}
