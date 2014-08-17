// HINTS..

// Building up an array is most easily done by first initializing a variable to [] (a fresh, empty array) and repeatedly calling its push method to add a value. Don’t forget to return the array at the end of the function.

// Since the end boundary is inclusive, you’ll need to use the <= operator rather than simply < to check for the end of your loop.

// To check whether the optional step argument was given, either check arguments.length or compare the value of the argument to undefined. If it wasn’t given, simply set it to its default value (1) at the top of the function.

// Having range understand negative step values is probably best done by writing two separate loops—one for counting up and one for counting down—because the comparison that checks whether the loop is finished needs to be >= rather than <= when counting downward.

// It might also be worthwhile to use a different default step, namely, -1, when the end of the range is smaller than the start. That way, range(5, 2) returns something meaningful, rather than getting stuck in an infinite loop.

// Enter code below here: