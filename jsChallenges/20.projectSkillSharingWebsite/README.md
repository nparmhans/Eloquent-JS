##Learning Competencies:
* HTML
* CRUD Request
* Updating Server


##Summary
In this final project chapter, our project is to set up a website for managing talks given at a skill-sharing meeting. Imagine a small group of people, meeting up regularly in one of the members’ office to talk about unicycling. Problem is: when the previous organizer of the meetings moved to another town, nobody stepped forward to take over this task. We want a system that will let the participants propose and discuss talks among themselves, without a central organizer.

##Challenges

##Challange 1: Disk Persistence
The skill sharing server keeps its data purely in memory. This means that when it crashes or is restarted for any reason, all talks and comments are lost.

Extend the server so that it stores the talk data to disk, and automatically reloads it when it is restarted. Do not worry about efficiency—do the simplest thing that works.

##Challange 2: Comment Field Resets
The wholesale redrawing of talks works pretty well because you usually can’t tell the difference between a DOM node and its identical replacement. But there are exceptions. If you start typing something in the comment field for a talk in one browser window, and then, in another, add a comment to that talk, the field in the first window will be redrawn, removing both its content and its focus.

In a heated discussion, where multiple people are adding comments to a single talk, this would be very annoying. Can you come up with a way to avoid it?

##Challange 3: Better Templates
Most templating systems do more than just fill in some strings. At the very least, they also allow conditional inclusion of parts of the template, analogous to if statements, and repetition of parts of a template, similar to a loop.

If we were able to repeat a piece of template for each element in an array, we would not need the second template ("comment"), but rather could specify the "talk" template to loop over the array held in a talk’s comments property, and render the nodes that make up a comment for every element in the array.

It could look like this:

```
<div class="comments">
  <div class="comment" template-repeat="comments">
    <span class="name">{{author}}</span>: {{message}}
  </div>
</div>
```

The idea being that whenever a node with a template-repeat attribute is found during template instantiation, the instantiating code loops over the array held in the property named by that attribute. For each element in the array, it adds an instance of the node. The template’s context (the values variable in instantiateTemplate) would, during this loop, point at the current element of the array, so that {{author}}, rather than being looked up in the original context (the talk), would be looked up in the comment object.

Rewrite instantiateTemplate to implement this, and then change the templates to use this feature and remove the explicit rendering of comments from the drawTalk function.

How would you add conditional instantiation of nodes, making it possible to omit parts of the template when a given value is true or false?

##Challenge 4: Unscriptables
When someone visits our website with a browser that has JavaScript disabled, or is simply not capable of displaying JavaScript, they will get a completely broken, inoperable page. This is not nice.

Some types of web applications really can’t be done without JavaScript. For others, you just don’t have the budget or patience to bother about clients that can’t run scripts. But for pages with a wide audience, it is polite to support script-less users.

Try to think of a way the skill sharing website could be set up to preserve basic functionality when ran without JavaScript. The automatic updates will have to go, and people will have to refresh their page the old-fashioned way. But being able to see existing talks, create new ones, and submit comments would be nice.

Don’t feel obliged to actually implement this. Outlining a solution is enough. Does the revised approach strike you as more, or less elegant than what we did initially?