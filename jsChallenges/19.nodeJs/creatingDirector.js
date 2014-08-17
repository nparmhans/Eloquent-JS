// // Hints...

// You can use the function that implements the DELETE method as a blueprint for methods.MKCOL. When no file is found, try to create a directory with fs.mkdir. When a directory exists at that path, you can return a 204 response, so that directory creation requests are idempotent. If a non-directory file exists here, return an error code. 400 (“bad request”) would be appropriate here.

// // code below here:
