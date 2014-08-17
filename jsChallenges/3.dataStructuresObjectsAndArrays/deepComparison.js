// HINTS..

// Your test for whether you are dealing with a real object will look something like typeof x == "object" && x != null. Be careful to compare properties only when both arguments are objects. In all other cases you can just immediately return the result of applying ===.

// Use a for/in loop to go over the properties. You need to test whether both objects have the same set of property names and whether those properties have identical values. The first test can be done by counting the properties in both objects and returning false if the numbers of properties are different. If they’re the same, then go over the properties of one object, and for each of them, verify that the other object also has the property. The values of the properties are compared by a recursive call to deepEqual.

// Returning the correct value from the function is best done by immediately returning false when a mismatch is noticed and returning true at the end of the function.

// Enter code below here: