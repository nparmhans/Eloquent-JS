//HINTS...

// You can use relativePos to find the corner corresponding to the start of the mouse drag. Figuring out where the drag ends can be done with trackDrag, or by registering your own event handler.

// When you have two corners of the rectangle, you must somehow translate these into the arguments that fillRect expects: the top left corner, width, and height of the rectangle. Math.min can be used to find the leftmost x coordinate and topmost y coordinate. To get the width or height, you can call Math.abs (the absolute value) on the difference between two sides.

// Showing the rectangle during the mouse drag requires a similar set of numbers, but in the context of the whole page, rather than relative to the canvas. Consider writing a function findRect, which converts two points into an object with top, left, width, and height properties, so that you don’t have to write the same logic twice.

// You can then create a <div> node, and set its style.position to absolute. When setting positioning styles, do not forget to append "px" to the numbers. The node must be added to the document (you can append it to document.body), and also removed again when the drag ends and the actual rectangle gets drawn onto the canvas.



// code below here: