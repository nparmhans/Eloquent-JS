// Hints...

// Then, when the user clicks a button (you can use a <form> element and "submit" event, or simply a "click" handler), make a PUT request to the same URL, with the content of the <textarea> as request body, to save the file.

// You can then add a <select> element that contains all the files in the server’s root directory, by adding <option> elements containing the lines returned by a GET request to the URL /. When the user selects another file (a "change" event on the field), the script must fetch and display that file. Also make sure that when saving a file, you use the currently selected file name.

// Unfortunately, the server is too simplistic to be able to reliably read files from subdirectories, since it does not tell us whether the thing we fetched with a GET request is a regular file or a directory. Can you think of a way to extend the server to address this?

// code below here: