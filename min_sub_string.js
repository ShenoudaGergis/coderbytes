/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com


	Problem_Link : https://coderbyte.com/information/Min%20Window%20Substring
	Description : 
	
	Given a list of two strings, the problem is to return a substring from the first one, which
	contains all the characters in the second one only if it's the shortest path	

*/ 

function minWindow(strArr) {
	let superStr = strArr[0] , subStr = strArr[1];
	let left = 0 , right = 0;
	if(!superStr || !subStr) return "";
	function desired(str="" , pattern="") {
		for(let i = 0;i < pattern.length;i++) {
			let char  = pattern[i];
			let count = pattern.split(char).length - 1;
			if(!(str.split(char).length - 1 >= count)) return false;
		}
		return true;
	}

	let sol = {start : null , end : null , diff : null};
	while(right < superStr.length) {
		let isIn = desired(superStr.substring(left , right + 1) , subStr);
		if(isIn) {
			if(sol.start !== null) {
				if(right - left < sol.diff) {
					sol.start = left;
					sol.end	  = right;
					sol.diff  = right - left;					
				}
			} else {
				sol.start = left;
				sol.end	  = right;
				sol.diff  = right - left;
			}
			left++;
		} else right++
	}

	return superStr.substring(sol.start , sol.end + 1);
} 

// console.log(minWindow(["aaabaaddae", "aed"])); //return "dae"