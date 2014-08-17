##Learning Competencies:
* How to create a regaular expression?
* Set characters
* Recognizing patters
* Grouping subexpressions
* Data type
* Replace method

##Summary
Regular expressions or regex for short, is not something you can just memorize in one day, as a matter of fact I'm not sure that many people do. However, it's still important to be able to understand the context of the regex.

##Challenges

##Challange 1: Regexp Golf
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a dot, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e

Refer to the table in the <a href="http://eloquentjavascript.net/09_regexp.html#summary_regexpg">chapter summary</a> for help. Test each solution with a few test strings:

```
// Fill in the regular expressions

verify(/.../,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/.../,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/.../,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/.../,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/.../,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/.../,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/.../,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
    console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
```

##Challenge 2: Quoting Style
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement:

```
var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/A/g, "B"));
// → "I'm the cook," he said, "it's my job."
```

##Challenge 3: Numbers again
A series of digits can be matched by the simple regular expression /\d+/.

Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10— again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t:

```
// Fill in this regular expression.
var number = /^...$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
```





