// HINTS..

// There are two obvious ways to implement reverseArray. The first is to simply go over the input array from front to back and use the unshift method on the new array to insert each element at its start. The second is to loop over the input array backward and use the push method. Iterating over an array backward requires a (somewhat awkward) for specification like (var i = array.length - 1; i >= 0; i--).

// Reversing the array in place is harder. You have to be careful not to overwrite elements that you will later need. Using reverseArray or otherwise copying the whole array (array.slice(0) is a good way to copy an array) works but is cheating.

// The trick is to swap the first and last elements, then the second and second-to-last, and so on. You can do this by looping over half the length of the array (use Math.floor to round down—you don’t need to touch the middle element in an array with an odd length) and swapping the element at position i with the one at position array.length - 1 - i. You can use a local variable to briefly hold on to one of the elements, overwrite that one with its mirror image, and then put the value from the local variable in the place where the mirror image used to be.


// Enter code below here: