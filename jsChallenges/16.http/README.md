##Learning Competencies:
* Understanding basic Javascript methods
* Be able to create a *for loop*
* Display output using **console.log**

##Summary
In this chapter, we saw that HTTP is a protocol for accessing resources over the Internet. A client sends a request, which contains a method (usually GET) and a path that identifies a resource. The server then decides what to do with the request, and responds with a status code and a response body. Both requests and responses may contain headers, providing additional information.

Browsers make GET requests to fetch the resources needed to display a web page. A web page may also contain forms, which allow information entered by the user to be sent along in the request made when the form is submitted. More on that in the next chapter.

The interface through which browser JavaScript can make HTTP requests is called XMLHttpRequest. You can usually ignore the “XML” part of that name (but you still have to type it). There are two ways in which it can be used—synchronous, which blocks everything until the request finishes, and asynchronous, which requires an event handler to notice that the response came in. In almost all cases, asynchronous is preferable. Making a request looks like this:

```
var req = new XMLHttpRequest();
req.open("GET", "example/data.txt", true);
req.addEventListener("load", function() {
  console.log(req.statusCode);
});
req.send(null);
Asynchronous programming is tricky. Promises are an interface that makes it slightly easier, by helping route error conditions and exceptions to the right handler, and abstracting away some of the more repetetive and error-prone elements in this style of programming.
```

##Challenges

##Challange 1: Content Negotiation
One of the things that HTTP can do, but which we have not discussed in this chapter yet, is called content negotiation. The Accept header for a request can be used to tell the server what type of document the client would like to get. Many servers ignore this header, but when a server knows of various ways to encode a resource, it can look at this header and send the one that the client prefers.

The URL <a href="eloquentjavascript.net/author">eloquentjavascript.net/author</a> is configured to respond with either plain text, HTML, or JSON, depending on what the client asks for. These formats are identified by the standardized media types text/plain, text/html, and application/json.

Send requests to fetch all three formats of this resource. Use the setRequestHeader method of your XMLHttpRequest object set the header named Accept to one of the media types given above. Make sure you set the header after calling open, but before calling send.

Finally, try asking for the media type application/rainbows+unicorns and see what happens.

// Your code here.

##Challenges 2: Waiting for Multiple Promises
The Promise constructor has an all method which, given an array of promises, returns a promise that waits for all of them to finish, and then succeeds itself, yielding an array of result values. If any of the promises in the array fail, the promise returned by all fails too (with the failure value from the failing promise).

Try to implement something like this yourself, as a regular function called all.

Note that after a promise is resolved (has succeeded or failed), it can not succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise:

```
function all(promises) {
  return new Promise(function(success, fail) {
    // Your code here.
  });
}

// Test code.
all([], function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});
```
