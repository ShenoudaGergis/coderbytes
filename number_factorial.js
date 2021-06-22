/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com
	

	Problem_Link : https://coderbyte.com/information/First%20Factorial
	Description : 
	
	
	Given a number, return the factorial of it
*/

function factorial(num) {
	if(num <= 1) return 1;
	return num * factorial(num - 1);
}

// console.log(factorial(4)); return 24 