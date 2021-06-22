/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com


	Problem_Link : https://coderbyte.com/information/Find%20Intersection
	Description : 
	
	The problem is to return a list of numbers which are the intersection of two given lists,
	but the hard way is to use an efficient algorithm other than many inner loops 	

*/ 

function intersection(strArr) {
	let left  = strArr[0].split(",").map((item) => +item);
	let right = strArr[1].split(",").map((item) => +item);

	let i = 0,j = 0,out = [];
	while(i < left.length && j < right.length) {
		if(left[i] === right[j]) {out.push(left[i]);i++;j++;}
		if(left[i] < right[j]  ) {i++}
		if(left[i] > right[j]  ) {j++}
	}

	return (out.length) ? out.toString() : "false";
} 


// console.log(intersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); //return [1 , 4 , 13]