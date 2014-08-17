// HINTS...

// You will need to call fillText, and set the context’s textAlign and textBaseline properties in such a way that the text ends up where you want it.

// A sensible way to position the labels would be to put the text on the line going from the center of the pie through the middle of the slice. You don’t want to put the text directly against the side of the pie, but rather move it outside of it a given amount of pixels.

// The angle of this line is currentAngle + 0.5 * sliceAngle. The code below finds a position on this line, 120 pixels from the center:

// var middleAngle = currentAngle + 0.5 * sliceAngle;
// var textX = Math.cos(middleAngle) * 120 + centerX;
// var textY = Math.sin(middleAngle) * 120 + centerY;
// For textBaseline, the value "middle" is probably appropriate when using this approach. What to use for textAlign depends on the side of the circle we are on—on the left, it should be "right", and on the right, it should be "left", so that the text is positioned away from the pie.

// If you are not sure how to find out which side of the circle a given angle is on, look back to the explanation of Math.cos in the previous exercise. The cosine of an angle tells us which x coordinate it corresponds to, which in turn tells us exactly which side of the circle we are on.



// code below here: