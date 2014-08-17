##Learning Competencies:
* Understanding basic Javascript methods
* Be able to create a *for loop*
* Display output using **console.log**

##Summary
If we wanted to display objects one-by-one from an array it would prove very redundant to do so if we were forced to use **console.log** for each line, which is why *for loops* are so important. Being able to display ten numbers on the screen with two lines of code sounds much more efficient, to **console.log** tens times in a row. 

##Challenges

##Challange 1: Censored keyboard
Between 1928 and 2013, Turkish law forbade the use of the letters “Q”, “W”, and “X” in official documents. This was part of a wider initiative to stifle Kurdish culture—those letters occur in the language used by Kurdish people, but not in Istanbul Turkish.

As an exercise in doing ridiculous things with technology, I’m asking you to program a text field (an <input type="text"> tag) that these letters can not be typed into.

(Do not worry about copy-paste and other such loopholes.):

```
<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
</script>
```

##Challange 2: Mouse trail
In JavaScript’s early days, which was the high time of gaudy homepages with lots of animated images, people came up with some truly inspiring ways to use the language.

One of these was the “mouse trail”—a series of images that would follow the mouse pointer as you moved it across the page.

In this exercise, I want you to implement a mouse trail. Use absolutely positioned <div> elements with a fixed size and background color (refer back to the code in the section on mouse click events for an example). Create twelve such elements, and when the mouse moves, display them in the wake of the mouse pointer, somehow.

There are various possible approaches here. You can make your solution as simple or complex as you want. A simple solution to start with is to keep a fixed number of trail elements and cycle through them, moving the next one to the mouse’s current position every time a "mousemove" event occurs:

```
<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // Your code here.
</script>
```

###Challenge 3: Tabs
A tabbed interface is a common design pattern. It allows you to select an interface panel by selecting from a number of tabs “sticking out” above an element.

In this exercise you’ll implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed interface showing the children of that node. It should insert a list of <button> elements at the top of the node, one for each child element, containing text retrieved from the data-tabname attribute of the child. All but one of the original children should be hidden (given a display style of none), and the currently visible node can be selected by clicking the buttons.

When it works, extend it to also style the currently active button differently:

```
<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
  }
  asTabs(document.querySelector("#wrapper"));
</script>
```
