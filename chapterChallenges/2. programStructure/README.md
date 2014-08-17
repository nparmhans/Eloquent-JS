##Learning Competencies:
* Understanding basic Javascript methods
* Be able to create a *for loop*
* Display output using **console.log**

##Summary
If we wanted to display objects one-by-one from an array it would prove very redundant to do so if we were forced to use **console.log** for each line, which is why *for loops* are so important. Being able to display ten numbers on the screen with two lines of code sounds much more efficient, to **console.log** tens times in a row. 

##Challenges

##Challange 1: Looping a Triangle
Write a loop that makes seven calls to console.log to output the following traingle:

```
#
##
###
####
#####
######
#######
```

It maybe useful to know that you can find the length of a strin by writing *.length* after it: 

```
var abc = "abc";
console.log(abc.length);
 --> 3
```

Most exercises contains a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them. 

##Challenge 2: FizzBuzz
Write a program that uses *console.log* to print all the numbers from 1 to 100, with two exceptions. For number divisible by 3, print "Fizz" instead of the number, and for numbers divisible 5 (and not 3), print "Buzz" for numbers that are divisible by both 3 and 5. 

(This is actually an interview question that has been claimed to weed out a significant percentage progammer candidates. So if you solved it, you're not allowed to feel good about yourself.)

##Challenge 3: Chess Board
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
 ```

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.







