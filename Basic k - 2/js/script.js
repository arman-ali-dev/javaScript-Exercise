// ! Q.1 Create a variable "marks" and assign any number.
// ! If the marks are greater than 60, then print "Pass," else print "Fail."

// const marks = 59;
// if(marks > 60){
// console.log("Pass")
// }else{
//     console.log("Fail")
// }

// ! Q.2 Take two numbers and check if both numbers are odd or not.
// ! If they are both odd, then print "Odd," otherwise print "Even."

// const num1 = 11;
// const num2 = 21;

// if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//   console.log("Odd");
// } else {
//   console.log("Even");
// }

// ! Q.3 Take four variables, "a," "b," "c," and "d," and
// ! assign their values in the following way: a = b, b = c, c = d, d = a. Check the output.

// * a = b b = c c = d d = a

// let a = 2;
// let b = 4;
// let c = 6;
// let d = 8;

// console.log((a = b), (b = c), (c = d), (d = a));

// ! Q.4 Print the 2's table using the ** operator. Use any logic, but it should print the 2's table.

// console.log(2 ** 1);
// console.log(2 ** 2);
// console.log(2 ** 3 - 2);
// console.log(2 ** 3);
// console.log(2 ** 4 - 6);
// console.log(2 ** 4 - 4);
// console.log(2 ** 4 - 2);
// console.log(2 ** 4);
// console.log(2 ** 5 - 14);
// console.log(2 ** 5 - 12);

// ! Q.5 Check the output of the following expressions and validate your answers

// ! Q.6 Take a number and check if the number is odd or not.
// ! If the number is odd, then print "Yes," else print "No."

// let num = 11;
// if (num % 2 !== 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// ! Q.7 Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print No.

// let num1 = 50;
// if (num1 % 10 == 0 && num1 % 5 == 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// ! Q.8 Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No.

// let num = 5;
// if(num * 20 == 100){
//     console.log("Yes")
// }else{
//     console.log("No");
// }

// ! Q.9 Calculate your 10th percentage and print "Pass" or "Fail."
// ! If the marks are more than 70, then print "Pass," else print "Fail."

// let marks = 710;
// let totalMarks = 1000;
// let percentage = (marks / totalMarks) * 100;
// if (percentage > 70) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// ! Q.10 Take your age and check if your age is greater than 21.
// ! If it is, print "Adult," else print "Minor."

// let age = 17;
// if (age > 21) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// ! Q.11 Convert all if-else solutions to ternary operator solutions.
// ! So, instead of using if-else, use the ternary operator.

// 10 < 20 ? console.log("That's Condition Is True") : console.log("That's Condition Is False")

// ! Q.12 Implement mark-sheet logic

// * Take a field "percentage"
// * If percentage is >= 80 then print Distinction
// * If percentage is >= 60 and < 80 then print First division
// * If percentage >= 33 and < 60 then print Second division
// * if percentage < 33 then print Fail

// let percentage = prompt("What is Your Percentage?");
// if (percentage >= 80) {
//   console.log("Distiction");
// } else if (percentage >= 60 && percentage < 80) {
//   console.log("First Devision");
// } else if (percentage >= 33 && percentage < 60) {
//   console.log("Second Devision");
// } else {
//   console.log("Fail");
// }

// ! Q.13 Find the maximum of 2 numbers

// let FirstNum = prompt("Enter First Number");
// let SecondNum = prompt("Enter Second Number");

// if (FirstNum > SecondNum) {
//   alert("First Number Is Bigger Than Second Number");
// } else if (SecondNum > FirstNum) {
//   alert("Second Number Is Bigger Than FirstNumber");
// } else {
//   alert("All Are Equal");
// }

// ! Q.14 Find then maximum of 3 numbers

// let FirstNum = prompt("Enter First Number");
// let SecondNum = prompt("Enter Second Number");

// if (FirstNum > SecondNum && FirstNum > ThirdNum) {
//   alert("First Number Is Bigger Than Second And Third Number");
// } else if (SecondNum > FirstNum && SecondNum > ThirdNum) {
//   alert("Second Number Is Bigger Than First And Third Number");
// } else if (ThirdNum > FirstNum && ThirdNum > SecondNum) {
//   alert("Third Number Is Bigger Than First And Second Number");
// } else {
//   alert("All Are Equal");
// }
