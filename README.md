Eloquent-JS
===========
## Learning Competencies
* Learning JAVASCRIPT


##Summary
These challenges have been taken from the Eloquent JavaScript PDF file. This book dives into JS immediately, providing elaborate explanations for every topic in the chapters, but more importantly challenges which engage the reader/programmer. 

The challenges are inside the jsChallenges director where subsequent directories for each chapter follow in numeric order.  Each chapter, except for chapter 1,  have multiple js challenges. There are 20 directories with README.md for each providing an idea and hints for the challenges. 

If you haven't read Eloquent Javascript, I would suggest that you don't read the text verbatim, rather skim through and jump into the challenge as soon as you have a basic understanding. <a href="http://eloquentjavascript.net/">Eloquent JavaScript, second edition, Margijn Haverbeke</a>

##Challenges

##Challenge 1: Program Structure
This section will test skills in:
* Expressions and statements, variables 
* Keywords and reserved words 
* The environment
* Functions
* Console.log function
* Return values
* Prompt and confirm control flow
* Conditional execution
* While and do loops
* Indenting code
* For loops
* Breakingout of a loop
* Updating variables succinctly
* Dispatching on a value with switch
* Capitalization
* Comments

Check it out: <a href="http://eloquentjavascript.net/02_program_structure.html">Program Structure</a>

##Challenge 2: Functions
This section will test skills in:
* Defining a function 
* Parameters and scopes
* Nested scope
* Functions as Values
* Declaration Notation
* The Call Stack
* Optional Arguments
* Closure 
* Recursion
* Growing Functions
* Functions and side effects
 
Check it out: <a href="http://eloquentjavascript.net/03_functions.html">Functions</a>

##Challenge 3: Data Structures: Objects And Arrays
This section will test skills in:
* The weresquirrel
* Data sets
* Properties
Values of the type object are arbitrary collections of properties, and we can add or remove these properties as we please. One way to create an object is by using a curly brace notation
* Methods
* Objects
* The arguments object
* The Math object

Math.random. This is a function that returns a new pseudo-random number between zero (inclusive) and one (exclusive) every time you call it.

```
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335
```

If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random.

```
console.log(Math.floor(Math.random() * 10));
// → 2
```

*The global object

```
var myVar = 10;
console.log("myVar" in window);
// → true
console.log(window.myVar);
// → 10
```