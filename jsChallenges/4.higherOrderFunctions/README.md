##Learning Competencies
* What is a JSON object?
* How do we create a JSON object?
* What are higher order functions?
* Filtering an array

##Summary
One you will finish the all the challeneges of twenty chapters, not including chapter one, JSON will make more sense. 

##Challenges 

#Challenge 1: Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

```
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
```

##Challenge 2: Mother-child age difference

Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

```
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
→ 31.2
```