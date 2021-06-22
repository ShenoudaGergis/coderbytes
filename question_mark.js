/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com
	

	Problem_Link : https://coderbyte.com/information/Questions%20Marks
	Description : 
	
	Given a string, if every pair of number has only 3 question marks and the sum of them is 10
	then true is returned otherwise false 	
*/


function questionMark(str="") {
	let isNum = (n) => (isNaN(Number.parseInt(n))) ? false : true; 
	let flag = false , count = 0 , left = null , right = null;
	for(let i = 0;i < str.length;i++) {
		if(isNum(str[i])) {
			if(flag) {
				right = +str[i];
				if(count !== 3 || (left + right !== 10)) return false;
				left = null;right = null;count = 0;flag = false;
			} else {
				flag = true;
				left = +str[i];
			}
		} else {
			if(str[i] === "?" && flag) count++;
		}
	}
	if(flag) return false;
	return true;
} 


console.log(questionMark("acc?7??sss?3rr1???9"));
