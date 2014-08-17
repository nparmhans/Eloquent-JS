// HINTS...

// The greediness problem can be attacked in several ways. The critters could stop eating when they reach a certain energy level. Or they could eat only every N turns (by keeping a counter of the turns since their last meal in a property on the creature object). Or, to make sure plants never go entirely extinct, the animals could refuse to eat a plant unless they see at least one other plant nearby (using the findAll method on the view). A combination of these, or some entirely different strategy, might also work.

// Making the critters move more effectively could be done by stealing one of the movement strategies from the critters in our old, energyless world. Both the bouncing behavior and the wall-following behavior showed a much wider range of movement than completely random staggering.

// Making creatures breed more slowly is trivial. Just increase the minimum energy level at which they reproduce. Of course, making the ecosystem more stable also makes it more boring. If you have a handful of fat, immobile critters forever munching on a sea of plants and never reproducing, that makes for a very stable ecosystem. But no one wants to watch that.

// code below here: