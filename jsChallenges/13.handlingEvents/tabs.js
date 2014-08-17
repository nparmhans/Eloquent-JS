// HINTS...

// One pitfall you’ll probably run into is that you can’t directly use the node’s childNodes property as a collection of tab nodes. For one thing, when you add the buttons, they will also become child nodes, and end up in this object, because it is live. For another, the text nodes created for the whitespace between the nodes are also in there, and should not get their own tabs.

// To work around this, start by building up a real array of all the children in the wrapper that have a nodeType of 1.

// When registering event handlers on the buttons, the handler functions will need to know which tab element is associated with the button. If they are created in a normal loop, you can access the loop index variable from inside the function, but it won’t give you the correct number because that variable will have been further changed by the loop.

// A simple workaround is to use the forEach method and create the handler functions from inside the function passed to forEach. The loop index, which is passed as a second argument to that function, will be a normal local variable there, and won’t be overwritten by further iterations.

// code below here: