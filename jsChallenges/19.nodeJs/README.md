##Learning Competencies:
* node.js
* Error handling
* Installing NPM

##Summary
Node is a nice, straightforward system that lets us run JavaScript in a non-browser context. It was originally designed for network tasks, to play the role of a node in a network. But it lends itself to all kinds of scripting tasks, and if writing JavaScript is something you enjoy, automating everyday tasks with Node works wonderfully.

NPM provides libraries for everything you can think of (and quite a few things you’d probably never think of), and allows you to fetch and install them by running a simple command.

Node also comes with a number of built-in modules, among which the "fs" module, for working with the file system, and the "http" module, to running HTTP servers and make HTTP requests.

All in- and output in Node is done asynchronously, unless you explicitly use a synchronous variant of a function, such as fs.readFileSync. You provide callback functions, and Node will call them at the appropriate time, when the I/O you asked for has finished.

##Challenges


##Challange 1: Content Negotiation, Again
In <a href="http://eloquentjavascript.net/17_http.html#exercise_accept">Chapter 17</a>, the first exercise was to make several requests to <a href="eloquentjavascript.net/author">eloquentjavascript.net/author</a>, asking for different types of content by passing different Accept headers.

Do this again, using Node’s http.request function. Ask for at least the media types text/plain, text/html, and application/json. Remember that headers to a request can be given as an object, in the headers property of http.request’s first argument.

Write out the content of the responses to each request.

##Challenge 2: Fixing A Leak http://eloquentjavascript.net/20_node.html#file_server
For easy remote access to some files, I might get into the habit of having the file server defined in this chapter running on my machine, in the /home/marijn/public directory. Then, one day, I find that someone has gained access to all the passwords I stored in my browser.

What happened?

If it isn’t clear to you yet, think back to the urlToPath function, defined like this:

```
function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  return "." + decodeURIComponent(path);
}
```

Now consider the fact that paths passed to the "fs" functions can be relative—they may contain "../" to go up a directory. What happens when a client sends requests to URLs like the ones below?

http://myhostname:8000/../.config/config/google-chrome/Default/Web%20Data
http://myhostname:8000/../.ssh/id_dsa
http://myhostname:8000/../../../etc/passwd
Change urlToPath to fix this problem. Take into account the fact that Node on Windows allows both forward slashes and backslashes to separate directories.

Also, meditate on the fact that as soon as you expose some half-baked system on the Internet, the bugs in that system might be used to do bad things to your machine.

##Challenge 3: Creating Directories
Though the DELETE method is wired up to delete directories (using fs.rmdir), the file server currently does not provide any way to create a directory.

Add support for a method MKCOL, which should create a directory by calling fs.mkdir. MKCOL is not one of the basic HTTP methods, but it does exist, for this same purpose, in the WebDAV standard, which specifies a set of extensions to HTTP that make it suitable for writing resources, not just reading them.

##Challenge 4: A Public Space On The Web
Since the file server serves up any kind of files, and even includes the right Content-Type header, you can use it to serve a website. Since it allows everybody to delete and replace files, it would be an interesting kind of website: one that can be modified, vandalized, and destroyed by everybody who takes the time to create the right HTTP request. Still, it would be a website.

Write a simple HTML page, which includes a simple JavaScript file. Put them in a directory served by the file server, and open them in your browser.

Next, as an advanced exercise, or even a weekend project, combine all the knowledge you gained from this book to build a more user-friendly interface for modifying the website, from inside the website itself.

Use an HTML form <a href="http://eloquentjavascript.net/18_forms.html#forms">Chapter 18</a> to edit the content of the files that make up the website, allowing the user to update them on the server, using HTTP request as described in <a href="http://eloquentjavascript.net/17_http.html#exercise_accept">Chapter 17</a>.

Start by making only a single file editable. Then make it so that the user can select which file to edit. Use the fact that our file server returns lists of files when reading a directory.

Don’t work directly in the code on the file server, since if you make a mistake, you are likely to damage the files there. Instead, keep you work outside of the publicly accessible directory, and copy it there when testing.

If your computer is directly connected to the Internet, without a firewall, router, or other interfering device in between, you might be able to invite a friend to use your website. To check, go to <a href="http://www.whatismyip.com/">whatismyip.com</a>, copy the IP address it gives you into the address bar of your browser, and add :8000 after it to select the right port. If that brings you to your site, it is online for everybody to see.
