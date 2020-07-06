const deer = {
    hasHorns: true,
    habitat: 'everywhere',
    eatGrass: () => 'nom, nom'
};

function NorthReindeer(name, owner) {
	this.name = name;
	this.owner = owner;
    this.__proto__ = deer;
	this.canSleepInSnow = true;
	this.habitat = 'tundra';
}