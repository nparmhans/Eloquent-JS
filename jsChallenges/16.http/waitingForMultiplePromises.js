// HINT..

// The function passed to the Promise constructor will have to call then on each of the promises in the given array. When one of them succeeds, two things need to happen—the resulting value needs to be stored in the correct position of a result array, and we must check whether this was the last pending promise, and finish our own promise when it was.

// The latter can be done with a counter, which is initialized to the length of the input array, and which we subtract one for every time a promise succeeds. When it reaches zero, we are done. Make sure you take the situation where the input array is empty (and thus no promise will ever resolve) into account.

// Handling failure requires some though, but turns out to be extremely simple. Just pass the failure function of the wrapping promise to each of the promises in the array, so that a failure in one of them triggers failure of the whole wrapper.

// code below here: