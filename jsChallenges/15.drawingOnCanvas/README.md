##Learning Competencies:
* SVG
* Curves
* Pie Chart

##Summary
Browsers give us several ways to display graphics. The simplest is to use regular DOM elements, and use styles to position and color them. 

##Challenges

##Challange 1: Shapes
Write a program that draws the following shapes on a canvas:

1. A parallelogram (a rectangle that is wider on one side).
2. A red diamond (a rectangle rotated 45 degrees or ¼π radians).
3. A zigzagging line.
4. A spiral made up of 100 straight line segments.
5. A yellow star. 

When drawing the latter two, you may want to refer back to the explanation of Math.cos and Math.sin in <a href="http://eloquentjavascript.net/13_dom.html#sin_cos">Chapter 13</a>, which describes how to get coordinates on a circle using these functions.

I recommend creating a function for each shape, and passing the position, and optionally other things, such as the size or the number of points, as parameters. The alternative, which is to hard-code numbers all over your code, tends to make the code needlessly hard to read and modify.

````
<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  // Your code here.
</script>
```

#Challenge 2: The Pie Chart 
<a href="http://eloquentjavascript.net/16_canvas.html#pie_chart">Earlier</a> in the chapter, we saw an example program that drew a pie chart. Modify this program so that the name of each category is shown next to the slice that represents it. Try to find a pleasing-looking way to automatically position this text, which would work for other data sets as well. You may assume that categories are no smaller than 5% (i.e. there won’t be a bunch of tiny ones next to each other).

You might again need Math.sin and Math.cos, as described in the previous exercise:

````
<canvas width="600" height="300"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  var currentAngle = -0.5 * Math.PI;
  var centerX = 300, centerY = 150;
  // Add code to draw the slice labels in this loop.
  results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
  });
</script>
```

##Challenge 3: A Bouncing Ball
Use the requestAnimationFrame technique that we saw in <a href="http://eloquentjavascript.net/13_dom.html#sin_cos">Chapter 13</a> and <a href="http://eloquentjavascript.net/15_game.html#runAnimation">Chapter 15</a> to draw a box with a bouncing ball inside of it. The ball moves at a constant speed, and bounces off the box’s sides when it hits them:

```
<canvas width="400" height="400"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");

  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function updateAnimation(step) {
    // Your code here.
  }
</script>
```

##Challenge 4: Precomputed Mirroring
One unfortunate thing about transformations is that they slow down drawing of bitmaps. For vector graphics, the effect is less serious, since there only a few points (for example the center of a circle) need to be transformed, after which drawing can happen as normal. For a bitmap image, the position of each pixel has to be transformed, and though it is possible that browsers will get more clever about this in the future, this currently causes a measurable increase in the time it takes to draw a bitmap.

In a game like ours, where we are only drawing a single transformed sprite, this is a non-issue. But imagine that we need to draw hundreds of characters, or thousands of rotating particles from an explosion.

Think of a way to allow us to draw an inverted character, without loading additional image files, and without having to make transformed drawImage calls every frame.
