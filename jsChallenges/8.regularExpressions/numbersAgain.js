// HINTS...

// First, do not forget the backslash in front of the dot.

// Matching the optional sign in front of the number, as well as in front of the exponent, can be done with [+\-]? or (\+|-|) (plus, minus, or nothing).

// The more complicated part of the exercise is the problem of matching both "5." and ".5" without also matching ".". For this, a good solution is to use the | operator to separate the two cases—either one or more digits optionally followed by a dot and zero or more digits or a dot followed by one or more digits.

// Finally, to make the e case-insensitive, either add an i option to the regular expression or use [eE].

// code below here: