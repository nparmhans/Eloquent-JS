##Learning Competencies:
* 
* 
* 

##Summary
Modules provide bigger structure by separating the code into the different files and namespaces. Giving a modul a well defined interface make them easier to use and reuse, and makes it possibke to continue using them as the module itself involves.

Though the JavaScript language itself is characteristically unhelpful when it comes to modules, the flexible functions and objects it provides make it possible to define rather nice module systems. Function scopes can be used as internal namespaces for the module, and objects can be used to store sets of exported values.

There are two popular, well-defined approaches to such modules. One is called CommonJS Modules, and revolves around a require function that fetches a module by name and returns its interface. The other is called AMD, and uses a define function that takes an array of module names and a function, and, after loading the modules, runs the function with their interfaces as arguments.


##Challenges

##Challange 1:Month Names
Write a simple module similar to the weekDay module, which can convert month numbers (zero-based, as in the Date type) to names, and names back to numbers. Give it its own namespace, since it will need an internal array of month names, and use plain JavaScript, without any module loader system:

```
console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
```

##Challenge 2: A Return to Electronic Life
Hoping that <a href="http://eloquentjavascript.net/07_elife.html#elife">Chapter 7</a> is still somewhat fresh in your mind, think back to the system designed in that chapter and come up with a way to separate the code into modules. To refresh your memory, these are the functions and types defined in that chapter, in order of appearance.

Vector
Grid
directions
randomElement
BouncingCritter
elementFromChar
World
charFromElement
Wall
View
directionNames
WallFollower
dirPlus
LifelikeWorld
Plant
PlantEater
SmartPlantEater
Tiger

Don’t exaggerate and create too many modules. A book that starts a new chapter for every page would probably get on your nerves, if only because of all the space wasted on titles. Similarly, having to open ten files to read a tiny project isn’t helpful. Aim for three to five modules.

You can choose to have some functions become internal to their module, and thus inaccessible to other modules.

There is no single correct solution here. Module organization is largely a matter of taste.

##Challenge 3: Circular Dependencies
A tricky subject in dependency management is circular dependencies, where module A depends on B, and B also depends on A. Many module systems simply forbid this. CommonJS modules allow a limited form: it works as long as the modules do not replace their default exports object with another value, and only start accessing each other’s interface after they finish loading.

Can you think of a way in which support for this feature could be implemented? Look back to the definition of require, and consider what the function would have to do to allow this.







