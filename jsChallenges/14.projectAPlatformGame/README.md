##Learning Competencies:
* Gaming
* Motion and Collision
* Encapsulation

##Summary
What is asynchronous programming?

##Challenges

##Challange 1: Game Over
It is tradition for platform games to have the player start with a limited number of lives, and subtract one life each time they die. When out of lives, the game restarts from the beginning.

Adjust runGame to implement lives (have the player start with 3):

```
<link rel="stylesheet" href="css/game.css">

<script>
  // The old runGame function. Modify it...
  function runGame(plans, Display) {
    function startLevel(n) {
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == "lost")
          startLevel(n);
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log("You win!");
      });
    }
    startLevel(0);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
```

##Challange 2: Pausing the Game
Make it possible to pause (suspend) and unpause the game by pressing the Escape key.

This can be done by changing the runLevel function to use another keyboard event handler, and interrupting or resuming the animation whenever the Escape key is hit.

The runAnimation interface may not look like it is suitable for this, at first glance, but it is, if you rearrange the way runLevel calls it.

When you have that working, there is something else you could try. The way we have been registering keyboard event handlers is somewhat problematic. The arrows object is currently a global variable, and its event handlers are kept around even when no game is running. They leak out of our system, you could say. Extend trackKeys to provide a way to unregister its handlers, and then change runLevel to register its handlers when it starts, and unregister them again when it is finished:

```
<link rel="stylesheet" href="css/game.css">

<script>
  // The old runLevel function. Modify this...
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    runAnimation(function(step) {
      level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        if (andThen)
          andThen(level.status);
        return false;
      }
    });
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
```

