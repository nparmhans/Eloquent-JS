// HINTS...

// An animation can be interrupted by returning false from the function given to runAnimation. It can be continued by calling runAnimation again.

// To communicate the fact that the animation should be interrupted to the function passed to runAnimation, so that it can return false, you can use a variable that both the event handler and that function have access to.

// When finding a way to unregister the handlers registered by trackKeys, remember that the exact same function value that was passed to addEventListener must be passed to removeEventListener to successfully remove a handler. Thus, the handler function value created in trackKeys must be available to the code that unregisters the handlers.

// You can add a property to the object returned by trackKeys, containing either that function value, or a method that handles the unregistering directly.

// code below here: