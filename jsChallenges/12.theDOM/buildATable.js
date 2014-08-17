// HINTS...

// The solution is most easily expressed with a recursive function, similar to the talksAbout function defined earlier in this chapter.

// You could call byTagname itself recursively, concatenating the resulting arrays to produce the output. For a more efficient approach, define an inner function which calls itself recursively, and which has access to an array variable defined in the outer function to which it can add the matching elements it finds. Don’t forget to call the inner function once from the outer function.

// The recursive function must check the node type. Here we are only interested in node type 1 (document.ELEMENT_NODE). For such nodes, we must loop over their children, and for each child, see if it matches the query, but also do a recursive call on it to inspect its own children.



// code below here: