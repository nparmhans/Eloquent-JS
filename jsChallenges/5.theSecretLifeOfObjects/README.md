##Learning Competencies:
* What are Prototypes
* Why are prototypes important/useful?
* Differnt from Ruby classes and inheritance vs JS?

##Summary
If you have ever work with classes or inheritance with an other languages such as python or Ruby. You will notice that the pattern and idea differ slightly. Pay close attention .

##Challenges

##Challenge 1: A Vector Type
Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

```
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
```

Challenge 2: Another cell
Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.

```
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
```