// Hints...

// It is enough to strip out all occurrences of two dots which have a one of a slash, backslash, or the end of the string on both sides. Using the replace method with a regular expression is the easiest way to do this. Do not forget the g flag on the expression, or replace will only replace a single instance, and people could still get around this safety measure by including additional double dots in their paths! Also make sure you do the replace after decoding the string, or it would be possible to foil the check by encoding a dot or a slash.

// Another potentially worrying case is paths starting with a slash, which interpreted as absolute paths. But because urlToPath puts a dot character in front of the path, it is impossible to create requests that result in such a path. Multiple slashes in a row, inside of the path, are odd, but will be treated as a single slash by the file system.

// code below here: