//HINTS...

// Use document.querySelector or document.getElementById, to get access to the elements defined in your HTML. An event handler for "click" or "mousedown" events on the button can get the value property of the text field, and call new Function on it.

// Make sure you wrap both the call to new Function and the call to its result in a try block, so that you can catch exceptions that it produces. In this case, we really don’t know what type of exception we are looking for, so catch everything.

// The textContent property of the output element can be used to fill it with a string message. Or, if you want to keep the old content around, create a new text node using document.createTextNode, and append it to the element. Remember to add a newline character to the end, so that not all output appears on a single line.

// code below here: