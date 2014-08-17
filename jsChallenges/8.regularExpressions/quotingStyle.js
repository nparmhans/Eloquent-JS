// HINTS...

// The most obvious solution is to only replace quotes with a nonword character on at least one side. Something like /\W'|'\W/. But you also have to take the start and end of the line into account.

// In addition, you must ensure that the replacement also includes the characters that were matched by the \W pattern so that those are not dropped. This can be done by wrapping them in parentheses and including their groups in the replacement string ($1, $2). Groups that are not matched will be replaced by nothing.



// code below here: