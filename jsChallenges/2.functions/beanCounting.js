// HINTS...
// You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.

// Code goes below this line:


function countBs(word){
	var wordString = String(word);
	var count = 0
	for(var i =0; i < wordString.length - 1; i++){
		if (wordString[i] === "b".toUpperCase()){
			count++;
		}		
	}
	return count;
}

function countChar(word, letter){
	var wordString = String(word);
	var letterString = String(letter);
	var count = 0
	for (var i=0; i < wordString.length; i++){
		if(wordString[i] == letterString ){
			count++;
		}
	}
	return count;
}

// function countBs(word, letter){
// 	var count = 0;
// 	for (var i= 0; i < word.length; i++){
// 		if (word.charAt(i) == letter){
// 			count ++;
// 	return count;
// 		}
// 	function countBs(word){
// 		return countChar(word, letter);
// 	}
// }


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4





