// HINTS...

// Many of the same tricks that worked for the previous exercise also apply here. Making the predators big (lots of energy) and having them reproduce slowly is recommended. That’ll make them less vulnerable to periods of starvation when the herbivores are scarce.

// Beyond staying alive, keeping its food stock alive is a predator’s main objective. Find some way to make predators hunt more aggressively when there are a lot of herbivores and hunt more slowly (or not at all) when prey is rare. Since plant eaters moveg around, the simple trick of eating one only when others are nearby is unlikely to work—that’ll happen so rarely that your predator will starve. But you could keep track of observations in previous turns, in some data structure kept on the predator objects, and have it base its behavior on what it has seen recently.

// code below here: