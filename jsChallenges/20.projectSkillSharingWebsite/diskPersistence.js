// HINTS...

// The simplest solution I can come up with is to simply encode the whole talks object as JSON and dump it to a file with fs.writeFile. There is already a function (registerChange) which is called every time the server’s data changes. It can be extended to write the new data to disk.

// Pick a file name, for example ./talks.json. When the server starts up, it can try to read that file with fs.readFile, and if that succeeds, use its contents as our starting data.

// Beware though, the talks object started out as a prototype-less object, so that the in operator could be sanely used. JSON.parse will return regular objects with Object.prototype as their prototype. If you use JSON as your file format, you’ll have to copy the properties of the object returned by JSON.parse into a new, prototype-less object.

// code below here: