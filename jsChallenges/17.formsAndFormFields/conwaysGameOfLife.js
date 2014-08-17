//HINTS...

// To solve the problem of having the changes conceptually happen at the same time, try to see the computation of a generation as a pure function, which takes one grid, and produces a new grid that represents the next turn.

// Representing the grid can be done in any of the way seen in Chapters 7 and 15. Counting live neighbors can be done with two nested loops, looping over adjacent coordinates. Take care not to count cells outside of the field, and to ignore the cell in the center, for which we are counting.

// Making changes to checkboxes take affect on the next generation can be done in two ways. An event handler could notice these changes and update the current grid to reflect them, or you could generate a fresh grid from the values in the checkboxes before computing the next turn.

// If you choose to go with event handlers, you might want to attach attributes that identify the position that each checkbox corresponds to, so that it is easy to find out which cell to change.

// To draw the grid of checkboxes, you can use either a <table> element (see Chapter 13) or simply put them all in the same element, and put <br> (line break) elements between the rows.

// code below here: