// Hints...

// Don’t forget to call the end method on the object returned by http.request, in order to actually fire off the request.

// The response object passed to http.request’s callback is a readable stream. This means that it is not entirely trivial to get the whole response body out of it. The following utility function reads a whole stream and calls a callback function with the result, using the usual pattern of passing any errors it encounters as first argument to the callback.

// code below here: