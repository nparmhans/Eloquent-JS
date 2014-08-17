// HINTS...

// One way to do this is to change instantiateTemplate so that its inner function takes not just a node, but also a current context as argument. You can then, when looping over a node’s child nodes, check whether the child has a template-repeat attribute. If it does, don’t instantiate it once, but instead loop over the array indicated by the attribute’s value, and instantiate it once for every element in the array, passing the current array element as context.

// Conditionals can be implemented in a similar way, with attributes called, for example, template-when and template-unless, which cause a node to be instantiated only when a given property is true (or false).

// code below here: