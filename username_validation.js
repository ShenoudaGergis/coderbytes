/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com
	

	Problem_Link : https://coderbyte.com/information/Codeland%20Username%20Validation
	Description : 
	
	
	Given a string, return true if the string is a valid username otherwise false.
	A valid username is when the string has between 4 - 25 characters and starts with letters only
	and contains only letters , numbers and underscore and doesn't end with underscore. 	
*/

function usernameValidation(str) {
	return  str.length >= 4 && 
			str.length <= 25 &&
			(new RegExp("^[a-zA-Z][a-zA-Z0-9_]*[^_]$")).test(str);
}


// console.log(usernameValidation("sdsd")); //return true