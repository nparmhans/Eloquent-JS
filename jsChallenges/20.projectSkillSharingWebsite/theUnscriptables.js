// HINTS...

// Two central aspects of the approach taken in this chapter—a clean HTTP interface, and client-side template rendering—don’t work without JavaScript. Normal HTML forms can send GET and POST requests, but no PUT or DELETE requests, and can only send their data to a fixed URL.

// Thus, the server would have to be revised to accept comments, new talks, and deleted talks through POST requests, whose bodies aren’t JSON, but rather use the URL-encoded format that HTML forms use (see Chapter 17). These requests would have to return the full new page, so that users see the new state of the site after they make a change. This would not be too hard to engineer, and could be implemented alongside the “clean” HTTP interface.

// The code for rendering talks would have to be duplicated on the server. The index.html file, rather than being a static file, would have to be generated dynamically (by adding a handler for it to the router), so that it already includes the current talks and comments when it gets served.

// code below here: