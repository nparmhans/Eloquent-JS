##Learning Competencies:
* Sessions?
* What fields are required in a form?
* What is a form

##Summary
HTML can express various types of form fields, such as text fields, checkboxes, multiple-choice fields, and file pickers.

Such fields can be inspected and manipulated with JavaScript. They fire the events "change" when changed and *"input"* when text is typed, as well as the various keyboard events. These allow us to notice when the user is interacting with them. Properties like value (for text and select fields) or checked (for checkboxes and radio buttons) are used to read or set the field’s content.

When a form is submitted, its *"submit"* event fires. A JavaScript handler can preventDefault that event to prevent the submission from happening. Form fields elements do not have to be wrapped in *form* tag.

When the user has selected a field from their local file system in a file picker field, the FileReader interface can be used to access the content of this file from a JavaScript program.

The localStorage and sessionStorage objects can be used to save information in a way that survives page reloads. The first saves the data forever (or until the user decides to clear it), the second saves it until the browser is closed.



##Challenges

##Challange 1: A JavaScript Workbench
Build an interface that allows people to type and run pieces of JavaScript code:

Put a button next to a *textarea* field, which, when pressed, uses the Function constructor we saw in <a href="http://eloquentjavascript.net/10_modules.html#eval">Chapter 10</a> to wrap the text in a function and call it. Convert the return value of the function, or any error it raised, to a string and display it below the text field.

```
<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  // Your code here.
</script>
```

##Challenge 2: Autocompletion
Extend a text field so that when the user types, a list of suggested values is shown below the field. You have an array of possible values, and should show those that start with the text that was typed. When a suggestion is clicked, replace the text field’s current value with it:

```
<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  // Your code here.
</script>
```

#Challenge 3: Conway's Game of Life
Conway’s Game of Life is a simple simulation that creates artificial “life” on a grid, each cell of which is either live or not. Each generation (turn), the following rules are applied:

1. Any live cell with fewer than two or more than three live neighbors dies.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any dead cell with exactly three live neighbors becomes a live cell.

Where a neighbor is defined as any adjacent cell, including diagonally adjacent ones.

Note that these rules are applied to the whole grid at once, not one square at a time. That means that the counting of neighbors is based on the situation at the start of the generation, and changes happening to neighbor cells this generation should not influence the new state of a given cell.

Implement this game, using whichever data structure you find appropriate. Use Math.random to populate the grid with a random pattern initially. Display it as a grid of checkbox fields, with a button next to it to advance to the next generation. When the user checks or unchecks the checkboxes, their changes should be included when computing the next generation:

```
<div id="grid"></div>
<button id="next">Next generation</button>

<script>
  // Your code here.
</script>
```





