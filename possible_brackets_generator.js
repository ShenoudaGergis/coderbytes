/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com


	Problem_Link : https://coderbyte.com/information/Bracket%20Combinations
	Description : 
	
	The problem is to return the max possible number of balanced bracket combination given a number
	of available bracket pairs

*/ 

function bracketGenerator(num) {
	if(!num) return 0;

	let raw = [{
			"remain"  : num * 2 - 1,
			"charge"   : 1,
			"shape" : ["("],
		}];
	let sol = [];

	while(raw.length) {
		let node = raw[0]
		raw.splice(0 , 1);

		if(node.remain === 0 && node.charge === 0) {sol.push(node);continue;} 
		if(node.remain < Math.abs(node.charge) || node.charge < 0) continue;
		else {
			raw.push({
				"remain" : node.remain - 1,
				"charge" : node.charge + 1,
				"shape"  : node.shape.concat("(")
			});
			raw.push({
				"remain" : node.remain - 1,
				"charge" : node.charge - 1,
				"shape"  : node.shape.concat(")")
			});
		}
	}
	return sol.length
} 

// console.log(bracketGenerator(4)); // return 14 possible combination