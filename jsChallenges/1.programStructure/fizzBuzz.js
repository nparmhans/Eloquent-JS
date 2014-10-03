// HINTS...
// Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero).

// In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else chain.

// The second version of the program has a straightforward solution and a clever one. The simple way is to add another “branch” to precisely test the given condition. For the clever method, build up a string containing the word or words to output, and print either this word or the number if there is no word, potentially by making elegant use of the || operator.

// code below here:

var myArray = [1, 2, 3];
for(var i=0; i< myArray.length; i++){
	console.log(array[i]);
}