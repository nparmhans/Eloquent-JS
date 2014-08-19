// HINTS...

// If you have trouble putting braces and parentheses in the right place to get a valid function definition, start by copying one of the examples in this chapter and modifying it.

// A function may contain multiple return statements.

// Code goes below this line:

// var minimum = function(x, y){
// 	console.log(Math.min(x,y)); 
// }

function min(a, b){
	if (a < b)
		return a; 
	else 
		return b;
} 

console.log(min(0,10))
console.log(min(0,-10))