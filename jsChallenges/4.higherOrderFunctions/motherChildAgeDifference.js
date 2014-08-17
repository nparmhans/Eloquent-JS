// HINTS...

// Because not all elements in the ancestry array produce useful data (we can’t compute the age difference unless we know the birth date of the mother), we will have to apply filter in some manner before calling average. You could do it as a first pass, by defining a hasKnownMother function and filtering on that first. Alternatively, you could start by calling map, and in your mapping function return either the age difference, or null if no mother is known. Then, you can call filter to remove the null elements before passing the array to average.

// code below here: