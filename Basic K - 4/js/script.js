// ! Q.1 Create two variables and store some numbers in them.Now do below operations:

// let num1 = 20;
// let num2 = 10;

// * Addition
// console.log(num1 + num2)
// * Multiplication
// console.log(num1 * num2)
// * Substraction
// console.log(num1 - num2)
// * Divide
// console.log(num1 / num2)

// ! Q.2 Take one number. If number is odd then print odd else print even.

// let num = 11;
// if (num % 2 !== 0) {
//     console.log("Odd")
// } else {
//     console.log("Even")
// }

// ! Q.3 Using prompt ask user to enter name and then show the name in alert.

// let Name = prompt("What Is Your Name?")
// alert(Name)

// ! Q.4 Take two numbers if first number is less than second number than print your
// ! name, age and mobile number else print your father name, age and mobile number.

// let num1 = 20;
// let num2 = 10;

// if (num1 < num2) {
//     console.log("Arman, 17, 7665407031")
// } else {
//     console.log("Sikandar ALi, 50, 9116567031")
// }

// ! Q.5 Take two numbers. Now using && and || operator check if both numbers
// ! are divisible of 5 && 10 or not. Also check both numbers are even or not.

// let num1 = 20;
// let num2 = 10;

// if (num1 % 5 == 0 && num1 % 10 == 0 && num2 % 5 == 0 && num2 % 10 == 0 && num1 % 2 == 0 && num2 % 2 == 0) {
//     console.log("Yes")
// } else {
//     console.log("NO")
// }

// ! Q.6 print Hello world using console.log, window.alert and document.write
// * console
// console.log("Hello World")
// * window.alert
// window.alert("Hello World")
// * document.write
// document.write("Hello World")

// ! Q.7 Take all the 6 falsy values and check in if condition.

// if (0) {
//     console.log("This Value Is Truely")
// } else {
//     console.log("This Value Is Falsy")
// }
// if (null) {
//     console.log("This Value Is Truely")
// } else {
//     console.log("This Value Is Falsy")
// }
// if (false) {
//     console.log("This Value Is Truely")
// } else {
//     console.log("This Value Is Falsy")
// }
// if (undefined) {
//     console.log("This Value Is Truely")
// } else {
//     console.log("This Value Is Falsy")
// }
// if (NaN) {
//     console.log("This Value Is Truely")
// } else {
//     console.log("This Value Is Falsy")
// }
// if (""){
//     console.log("This Value Is Truely")
// } else {
//     console.log("This Value Is Falsy")
// }

// ! Q.8 Using confirm box ask questions "Do you want to play?". if user
// ! click on Ok then print yes and if user click on Cancel then print No

// let confirmation = confirm("Do You Want To Play?")
// if (confirmation) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// ! Q.9 If total members in your family are more than 5 then print Big Family, if
// ! members are between 3 to 5 then print small family else print very small family

// let members = 1;
// if (members > 5) {
//     console.log("Big Family")
// } else if (members >= 3 && members <= 5) {
//     console.log("Small Family")
// } else {
//     console.log("Very Small Family")
// }

// ! Q.10 Using ++, -- print 1 to 10 and then 10 to 5
// * ++
// let num1 = 0;
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)
// console.log(++num1)

// * --
// console.log(num1--)
// console.log(num1--)
// console.log(num1--)
// console.log(num1--)
// console.log(num1--)
// console.log(num1--)

// ! Q.11 For a given with marks of students -> [85,97,44,37,76,60]
// ! Find the average marks of the entrei class.

// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for (let i = 0; i < marks.length; ++i) {
//     sum += marks[i]
// }

// let average_Marks = (sum / marks.length)
// console.log(average_Marks)