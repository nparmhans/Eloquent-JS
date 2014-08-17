// HINTS...

// You will have to loop through one scope at a time, using Object.getPrototypeOf to go the next outer scope. For each scope, use hasOwnProperty to find out if the variable, indicated by the name property of the first argument to set, exists in that scope. If it does, set it to the result of evaluating the second argument to set, and return that value.

// If the outermost scope is reached (Object.getPrototypeOf returns null) and we haven’t found the variable yet, it doesn’t exist, and an error should be thrown.

// code below here: