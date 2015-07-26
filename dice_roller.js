var DiceRoller = function (dstr) {
	this.init = function (str) {
		var dRexp = /(\d*)?d(\d+|F)([\+\-]\d*)?/,
			parts = (str || '3d6').match(dRexp), // initialized as 3d6 by default
			count = +parts[1],
			mod = +parts[3] || 0,
			sides = +parts[2];
		this.diceCount = count || 1;
		this.diceSides = sides || 3;
		this.modifier = sides ? mod : mod - (count * 2);
		
		return this;
	};
	this.roll = function (str) {
		if (str) this.init(str); // can be resetted to other dice
		var rndVal = 0;
		for (var i = 0; i < this.diceCount; i++) {
			rndVal += (Math.random() * this.diceSides + 1) >> 0
		}
		return rndVal + this.modifier;
	};
	
	this.init(dstr);
	
	return this;
};
