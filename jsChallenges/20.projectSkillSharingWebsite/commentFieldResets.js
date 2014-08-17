// HINTS...

// The ad-hoc approach is to simply store the state a talk’s comment field (its content and whether it is focused) before redrawing the talk, and then reset the field to its old state afterwards.

// Another solution would be to not simply replace the old DOM structure with the new one, but recursively compare them, node by node, and only update the parts that actually changed. This is more general (it continues working even if we add another text field), but also a lot harder to implement.

// code below here: