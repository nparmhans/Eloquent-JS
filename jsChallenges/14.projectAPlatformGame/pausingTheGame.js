// HINTS...

// The most obvious solution would be to make lives a variable that lives in runGame, and is thus visible by the startLevel closure.

// Another approach, which fits nicely with the spirit of the rest of the function, would be to add a second parameter to startLevel that gives the amount of lives. When the whole state of a system stored in the arguments to a function, calling that function provides an elegant way to transition to a new state.

// In any case, when a level is lost, there should now be two possible state transitions: if that was the last life, we go back to level zero with the starting amount of lives. If not, we repeat the current level with one less life remaining.

// code below here: