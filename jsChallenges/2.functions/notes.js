// function power(base, exponent){
// 	if (exponent == undefined)
// 		exponent = 2;
// 	var result = 1;
// 	for (var count = 0; count < exponent; count ++)
// 		result *= base;
// 	return result;
// }



// console.log(power(4));
// // → 16
// console.log(power(4, 3));
// // → 64

// function wrapValue(n) {
//   var localVariable = n;
//   return function() { return localVariable; };
// }

// var wrap1 = wrapValue(1);
// var wrap2 = wrapValue(2);
// console.log(wrap1());
// // → 1
// console.log(wrap2());
// // → 2

// function multiplier(factor){
// 	return function(number) {
// 		return number * factor
// 	}
// };

// var twice = multiplier(2);
// console.log(twice(5));

// function power(base, exponent) {
//   if (exponent == 0)
//     return 1;
//   else
//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 3));
// // → 8

// function power(base, exponent){
// 	var result = 1
// 	while(exponent--)
// 		result *= base;
// 	return result;
// }

// console.log(power(2,3));

// function power(base, exponent){
// 	return exponent == 0? 1 : base * power(base, --exponent);
// };

// function findSolution(target) {
//   function find(start, history) {
//     if (start == target)
//       return history;
//     else if (start > target)
//       return null;
//     else
//       return find(start + 5, "(" + history + " + 5)") ||
//              find(start * 3, "(" + history + " * 3)");
//   }
//   return find(1, "1");
// }
// console.log(findSolution(24));

// prints two numbers, the numbers of cows and chickens on a farm, with the words cows anc chicken after them. 
// 007 cows 011 chickens

function printFarmInventory(cows, chickens){
	var cowString = String(cows);
	while(cowString.length < 3)
		cowString = "0" + cowString;
	console.log(cowString + " Cows");
	var chickenString = String(chickens);
	while(chickenString.length < 3)
		chickenString = "0" + chickenString;
	console.log(chickenString + " Chickens");
}
printFarmInventory(7,11);




