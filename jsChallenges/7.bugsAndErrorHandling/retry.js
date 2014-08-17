// HINTS...

// The call to primitiveMultiply should obviously happen in a try block. The corresponding catch block should rethrow the exception when it is not an instance of MultiplicatorUnitFailure and ensure the call is retried when it is.

// To do the retrying, you can either use a loop that breaks only when a call succeeds—as in the look example earlier in this chapter—or use recursion and hope you don’t get a string of failures so long that it overflows the stack (which is a pretty safe bet).

// code below here: