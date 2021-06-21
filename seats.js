/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com

	Description : 
	
	The problem is to return the possible number of seats where each two students can sit next to 
	each other, given a list of numbers in which the first one is the total number of seats which
	will be in two columns like that if the total is 6 :-

	0 1
	2 3
	4 5 	

	And the rest of numbers is the positions of seats which cann't be used
*/

function seats(arr) {
	let total  = arr[0];
	let occArr = arr.slice(1);
	let leftPos  = [];
	let rightPos = [];
	let allComp  = [];

	let isIn = function(n , arr) {
		return (arr.indexOf(n) === -1) ? false : true;
	}

	for(let i = 0;i < total;i++) {
		if(i % 2 === 0) leftPos.push(i);
		else {
			rightPos.push(i); 
		}
	}

	for(let i = 0;i < total/2; i++) {
		allComp.push([leftPos[i]  , rightPos[i]]);
		if(i + 1 < total / 2) {
			allComp.push([leftPos[i]  , leftPos[i+1]]);
			allComp.push([rightPos[i] , rightPos[i+1]]);
		}
	}

	return allComp.filter((item) => {
		if(isIn(item[0] , occArr) || isIn(item[1] , occArr)) return false;
		return true;
	}).length;
} 


// console.log(seats([12 , 2 , 6 , 7 , 11])) // return 6 possible seat pairs