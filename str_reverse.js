/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com
	

	Problem_Link : https://coderbyte.com/information/First%20Reverse
	Description : 
	
	
	Given a string, return the reverse of it	
*/


function FirstReverse(str) {
	let s = "";
	for(let i = str.length - 1;i >= 0;i--) {
		s += str[i];
	}
	return s;
}

// FirstReverse("football"); //return llabtoof