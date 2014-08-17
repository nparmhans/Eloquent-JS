// HINTS...

// The solution to this exercise involves preventing the default behavior of key events. You can handle either "keypress" or "keydown". If either of them has preventDefault called on it, the letter will not appear.

// Identifying the letter typed requires looking at the keyCode or charCode property, and comparing that with the codes for the letters you want to filter. In "keydown", you do not have to worry about lower- and upper-case letters, since it only identifies the key pressed. If you decide to handle "keypress" instead, which identifies the actual character typed, you have to make sure you test for both cases. One way to do that would be this:

// /[qwx]/i.test(String.fromCharCode(event.charCode))

// code below here: