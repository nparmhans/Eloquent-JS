// HINTS...

// Creating the elements is best done in a loop. Append them to the document to make them show up. In order to be able to access them later, to change their position, store the trail elements in an array.

// Cycling through them can be done by keeping a counter variable, and adding one to it every time the "mousemove" event fires. The remainder operator (% 10) can then be used to get a valid array index, to pick the element we want to position during a given event.

// Another interesting effect can be achieved by modeling a simple physics system. Use the "mousemove" event only to update a pair of variables that track the mouse position. Then use requestAnimationFrame to simulate the trailing elements being attracted to the position of the mouse pointer. At every animation step, update their position based on their position relative to the pointer (and optionally, a speed that is stored for each element). Figuring out a good way to do this is up to you.

// code below here: