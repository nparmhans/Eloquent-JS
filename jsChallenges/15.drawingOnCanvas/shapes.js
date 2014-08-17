// HINTS...
// The parallelogram (1) is easy to draw using a path. Pick suitable center coordinates, and add each of the four corners around that.

// The diamond (2) can be drawn the easy way, with a path, or the interesting way, with a rotate transformation. To use rotation, you will have to apply a trick similar to what we did in the flipHorizontally function. Because you want to rotate around the center of your rectangle, and not around the point (0,0), you must first translate to there, then rotate, and then translate back.

// For the zigzag (3) it becomes unpractical to write a new call to lineTo for each line segment. Instead you should use a loop. You can either have each iteration draw two line segments (right and then left again), or one, in which case you must use the evenness (% 2) of the loop index to determine whether to go left or right.

// You’ll also need a loop for the spiral (4). If you draw a series of points, with each point moving further along a circle around the spiral’s center, you get a circle. If, during the loop, you vary the radius of the circle on which you are putting the current point, and go around more than once, the result is a spiral.

// The star (5) depicted is built out of quadraticCurveTo lines. You could also draw one with straight lines. Divide a circle into 8 (or however many points you want your star to have) pieces. Draw lines between these points, making them curve towards the center of the star (with quadraticCurveTo, you can use the center as control point).


// code below here: