##Learning Competencies:
* Typical programmer mistakes.
* Strict mode, what is it?
* Test, when & why it is necessary?
* Debugger, know any special gems?
* Errors, identifying your errors.
* Assertions

##Summary
Establish a good connections with debugging, testing and identifying errors. Identifying your own errors will make you a better programmer. 

##Challenges

##Challange 1:Retry
Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers and in the other 50 percent raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, returning the result.

Make sure you handle only the exceptions you are trying to handle.

```
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
}

console.log(reliableMultiply(8, 8));
// → 64
```

##Challenge 2: The Locked Box
Consider the following (rather contrived) object:

```
var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};
It is a box, with a lock. Inside is an array, but you can get at it only when the box is unlocked. Directly accessing the _content property is not allowed.

Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.

function withBoxUnlocked(body) {
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
```

For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.








