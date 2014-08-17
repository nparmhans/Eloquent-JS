##Learning Competencies:

##Summary


##Challenges

##Challange 1: Rectangle
Define a tool called Rectangle that fills a rectangle (see the *fillRect* method from <a href="http://eloquentjavascript.net/16_canvas.html#fill_stroke">Chapter 16</a>) with the current color. The rectangle should span from the point where the user pressed the mouse button to the point where they released it. Note that the latter might be above or to the left of the former.

Once it works, you’ll notice that it is somewhat jarring to not see the the rectangle as you are dragging the mouse to select its size. Can you come up with a way to show some kind of rectangle during the dragging, without actually drawing to the canvas until the mouse button is released?

If nothing comes to mind, think back to the position: absolute style which was discussed in Chapter 13, which can be used to overlay a node on the rest of the document. The pageX and pageY properties of a mouse event can be used to position an element precisely under the mouse, by setting the left, top, width, and height styles to the correct pixel values:

```
<script>
  tools.Rectangle = function(event, cx) {
    // Your code here.
  };
</script>

<link rel="stylesheet" href="css/paint.css">
<body>
  <script>createPaint(document.body);</script>
</body>
```

##Challenge 2: Color Picker
Another tool that is commonly found in graphics programs is a color picker, which allows the user to click on the picture, and selects the color under the mouse pointer. Build this.

In order to build this, we need a way to access the content of the canvas. The toDataURL method more or less did this, but getting pixel information out of such a data URL is hard. Instead, we’ll use the getImageData method on the drawing context, which returns a rectangular piece of the image as an object with width, height, and data properties. The data property holds an array of numbers from 0 to 255, using four numbers to represent each pixel’s red, green, blue, and alpha (opaqueness) components.

This example retrieves the numbers for a single pixel from a canvas, once when the canvas is blank (all pixels are transparent black), and once when the pixel has been colored red:

```
function pixelAt(cx, x, y) {
  var data = cx.getImageData(x, y, 1, 1);
  console.log(data.data);
}

var canvas = document.createElement("canvas");
var cx = canvas.getContext("2d");
pixelAt(cx, 10, 10);
// → [0, 0, 0, 0]

cx.fillStyle = "red";
cx.fillRect(10, 10, 1, 1);
pixelAt(cx, 10, 10);
// → [255, 0, 0, 255]
The arguments to getImageData indicate the starting x and y coordinates of the rectangle we want to retrieve, followed by its width and height.
```

##Challenge 3: Flood Fill
This is a more advanced exercise than the preceding two, and will require you to design a non-trivial solution to a tricky problem. Make sure you have plenty of time and patience before starting to work on this exercise, and do not get discouraged by initial failures.

A “flood fill” tool colors the pixel under the mouse, and the whole group of pixels around it that have the same color. For the purpose of this exercise, we will consider such a group to include all pixels that can be reached from our starting pixel by moving in single-pixel horizontal and vertical steps (not diagonal), without ever touching a pixel that has a color different form the starting pixel.

The picture below illustrates the set of pixels colored when the flood fill tool is used at the marked pixel:

<a href="http://eloquentjavascript.net/19_paint.html">Click link to view image</a>

The flood fill does not leak through diagonal gaps, and does not touch pixels that are not reachable, even if they have the same color as the target pixel.

You will once again need getImageData to find out the color for each pixel. It is probably a good idea to fetch the whole image in one go, and then pick out pixel data from the resulting array. The pixels are organized in this array in a similar way to the grid elements in Chapter 7, one row at a time, except that each pixel is represented by four values. The first value for the pixel at (x,y) is at position (x + y × width) × 4.

Do include the fourth (alpha) value this time, since we want to be able to tell the difference between empty and black pixels.

Finding all adjacent pixels with the same color requires you to “walk” over the pixel surface, one pixel up, down, left, or right, as long as new same-colored pixels can be found. But you won’t find all pixels in a group on the first walk. Rather, you have to do something similar to the backtracking done by the regular expression matcher, described in Chapter 9. Whenever more than one possible direction to proceed is seen, you must store all the directions you do not take immediately, and look at them later, when you finish your current walk.

In a normal-sized picture there are a lot of pixels. Thus, you must take care to do the minimal amount of work required, or your program will take a very long to run. For example, every walk must ignore pixels seen by previous walks, so that it does not redo work that has already been done.

I recommend calling fillRect for individual pixels when a pixel that should be colored is found, and keeping some data structure that tells you about all the pixels that have already been looked at"

```
<script>
  tools["Flood fill"] = function(event, cx) {
    // Your code here.
  };
</script>

<link rel="stylesheet" href="css/paint.css">
<body>
  <script>createPaint(document.body);</script>
</body>
```

