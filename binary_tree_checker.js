/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com


	Problem_Link : https://coderbyte.com/information/Tree%20Constructor
	Description : 
	
	The problem is to check if the given data is a binary tree, given that the
	second number in each item is a parent	

*/ 


function chechBinaryTree(strArr=[]) {
	strArr = strArr.map((item) => {
		let r = item.split(",");
		return [+r[0].replace("(","") , +r[1].replace(")","")];
	})
	let sol = {};
	let childChecker = {};
	for(let i = 0;i < strArr.length;i++) {
		if(!(strArr[i][1] in sol)) {
			sol[strArr[i][1]] = 1;
		}
		else {
			sol[strArr[i][1]]++;			
			if(sol[strArr[i][1]] > 2) return false;
		}

		if(!(strArr[i][0] in childChecker)) {
			childChecker[strArr[i][0]] = 1;
		}
		else {
			childChecker[strArr[i][0]]++;			
			if(childChecker[strArr[i][0]] > 1) return false;
		}
	}

	return true;
}


// console.log(chechBinaryTree(["(2,5)", "(2,6)"])); //return false;