/*
	Author  : Kirollos Nasr Elias
	Country : Egypt
	Email   : kirollos.shenouda.gergis@gmail.com


	Problem_Link : https://coderbyte.com/information/Bracket%20Matcher
	Description : 
	
	The problem is to check if the given brackets are balanced or not

*/ 

function bracketMatcher(str) { 

  if(typeof str !== "string") return 0;
  let balancer = 0;
  for(let i = 0;i < str.length;i++) {
    if(balancer < 0) return 0;
    if(str.charAt(i) === "(") balancer++;
    if(str.charAt(i) === ")") balancer--;
  }

  if(balancer !== 0) return 0;
  return 1;

}

// console.log(bracketMatcher("df(xc})")); //return 1 which means they are matched