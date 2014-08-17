// HINTS...

// The essence of this example lies in grouping the elements of a collection by some aspect of theirs—splitting the array of ancestors into smaller arrays with the ancestors for each century.

// During the grouping process, keep an object that associates century names (numbers) with arrays of either person objects or ages. Since we do not know in advance what categories we will find, we’ll have to create them on the fly. For each person, after computing their century, we test whether that century was already known. If not, add an array for it. Then add the person (or age) to the array for the proper century.

// Finally, a for/in loop can be used to print the average ages for the individual centuries.

// code below here: