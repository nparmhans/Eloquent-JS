//HINTS...

// Given a pair of starting coordinates and the image data for the whole canvas, this approach should work:

// Create an array to hold information about already colored coordinates.
// Create a work list array to hold coordinates that must be looked at. Put the start position in it.
// When the work list is empty, we are done.
// Remove one pair of coordinates from the work list.
// If those coordinates are already in our array of colored pixels, go back to 3.
// Color the pixel at the current coordinates, and add the coordinates to the array of colored pixels.
// Add the coordinates of each adjacent pixel whose color is the same as the starting pixel’s original color to the work list.
// Return to 3.
// The work list can simply be an array of vector objects. The data structure that tracks colored pixels will be consulted very often. Searching through the whole thing every time a new pixel is visited will take a lot of time. You could instead create an array that has a value in it for every pixel, using again the x + y × width scheme for associating positions with pixels, and when checking if a pixel has been colored already, directly access the field corresponding to the current pixel.

// Comparing colors can be done by running over the relevant part of the data array, comparing one field at a time. Or you can “condense” a color down to a single number or string, and compare those. When doing this, ensure that every color produces a unique value. For example, simply adding the color’s components is not safe, since multiple colors will have the same sum.

// When enumerating the neighbors of a given point, take care to exclude neighbors that are not inside of the canvas, or your program might run off into one direction forever.

// code below here: