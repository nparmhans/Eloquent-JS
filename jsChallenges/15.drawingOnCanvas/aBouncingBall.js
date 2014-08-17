// HINTS...

// A box is easy to draw with strokeRect. Define a variable that holds its size (or two variables, if your box’s width and height differ). To create a round ball, start a path, call arc(x, y, radius, 0, 7)—an arc going from zero to more than a whole circle—and fill it.

// To model the ball’s position and speed, you can use the Vector type from Chapter 15(which is available on this page). Give it a starting speed, preferably one that is not purely vertical or horizontal, and every frame, multiply that speed with the amount of time that elapsed. When the ball gets too close to a vertical wall, invert the x component in its speed. Likewise, invert the y component when it hits a horizontal wall.

// After finding the ball’s new position and speed, use clearRect to delete the scene, and redraw it using the new position.

// code below here: