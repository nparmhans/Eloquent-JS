// HINTS...
// Your function will likely look somewhat similar to the inner find function in the recursive findSolution example in this chapter, with an if/else if/else chain that tests which of the three cases applies. The final else, corresponding to the third case, makes the recursive call. Each of the branches should contain a return statement or in some other way arrange for a specific value to be returned.

// When given a negative number, the function will recurse again and again, passing itself an ever more negative number, thus getting further and further away from returning a result. It will eventually run out of stack space and abort.

// Code goes below this line:


// function isEven(n) {
// 	if (n < 0)
// 		return -1;
// 	else if (n % 2 == 0)
// 		return true;
// 	else
// 		return false;
// } 
// cool now make this recursive stephen!!

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function isEven(number){
	if (number == 0)
		return true;
	else if (number == 1)
		return false;
	else if(number < 0)
		return isEven(-number);
	else
		return isEven(number -2)
}
	
	

