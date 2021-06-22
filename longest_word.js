/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com
	

	Problem_Link : https://coderbyte.com/information/Longest%20Word
	Description : 
	
	
	Given a string, return the longest word where anything other than letters and numbers
	don't count 
*/


function longestWord(sen="") {
	let longest = 0 , count   = 0 , destination = {from : 0 , to : 0};
	let i = 0 , j = 0;
	let isAlpha = (c) => (c.match(/[a-zA-Z0-9]/i)) ? true : false;
	while(i < sen.length) {
		if(isAlpha(sen[i])) {
			count++;
			if(count > longest) {
				destination = {from : j , to : i};
				longest = count;
			}
			i++;
		} else if(sen[i] === " ") {
			i++;
			j = i;
			count = 0;
		} else {
			i++;
		}
	}
	return sen.substring(destination.from , destination.to + 1);
}

// console.log(longestWord("i loVe dogs")); // return loVe 

