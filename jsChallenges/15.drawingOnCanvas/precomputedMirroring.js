// HINTS...

// The key to the solution is the fact that we can use a canvas element as a source image when using drawImage. It is possible to create an extra <canvas> element, without adding it to the document, and draw our inverted sprites to it, once. When drawing an actual frame, we just copy the already inverted sprites to the main canvas.

// Some care would be required because images do not load instantly. We only do the inverted drawing once, and if we do it before the image loads, it won’t draw anything. A "load" handler on the image can be used to draw the inverted images to the extra canvas. This canvas can be used as a drawing source immediately (it’ll simply be blank until we draw the character onto it).



// code below here: