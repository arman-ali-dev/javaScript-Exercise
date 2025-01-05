// ! Q.1 Create Bill Calculator
// ! Ask below Questions
// * 1. How many french fries(60rs per piece) do you want to order ?
// * 2. How many burgers(50rs per piece) do you want to order ?
// * 3. How many plates of chowmin(100rs per plate) do you want to order ?
// * 4. How many plates of Manchurian(80rs per plate) do you want to order ?
// * 5. How many Cokes(50 per piece) do you want to order ?
// ! User can enter any number of quantities.Calculate the bill based on the quantities entered
// ! and item prices.If user enteres 0 or negative value then consider item count as 0.

// let frechFreis = +prompt("1. How many french fries(60rs per piece) do you want to order ?")
// let burger = +prompt("2. How many burgers(50rs per piece) do you want to order ?")
// let chowmin = +prompt("How many plates of chowmin(100rs per plate) do you want to order ?")
// let manchurian = +prompt("4. How many plates of Manchurian(80rs per plate) do you want to order ?")
// let cokes = +prompt("5. How many Cokes(50 per piece) do you want to order ?")

// let total = ((frechFreis * 60) + (burger * 50) + (chowmin * 100) + (manchurian * 80) + (cokes * 50))
// console.log(`French Freis = ${frechFreis * 60}
// Burger = ${burger * 50}
// Chowmin = ${chowmin * 100}
// Manchurian = ${manchurian * 80}
// Cokes = ${cokes * 50}

// Your Total Payment: ${total}
// `)

// ! Q.2 Print below Pattern
// * $#$#$#$#$#
// * $#$#$#$#
// * $#$#$#
// * $#$#
// * $#

// for (let i = 5; i >= 1; --i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str += "$#"
//     }
//     console.log(str)
// }

// ! Q.3 Ask the user question "How many times do you want to print Series".
// ! Then print below series. For example below series will print if user enteres 5
// * 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly.
// * If the user enters 10 then we will print the same series numbers till 10 times.


// ! Q.4 Using a switch case to do this exercise

// * If number is odd then print Odd
// * If number is even then print Even
// * If number is 100 then print 100
// * Else print 10000

// let num = +prompt("Enter a number:");

// switch (num) {
//     case 100: console.log(100);
//         break;
//     default:
//         if (num % 2 == 0) {
//             console.log("Even")
//         } else {
//             console.log("Odd")
//         };
//         break;
//     case 10000: console.log(10000)
// }

// ! Q.5 Ask user his/her birth year, "What is your birth year?"
// * If user age is greater than 18 then ask user "Do you have valid license number?"
// * If user click on Okay then ask for his license number and finally in the alert
// * show message "User with license number #### is ready to drive."If user age is
// * less than 18 then ask him question in confirm box "Do you have gaurdians ?""
// * If user says yes then ask his/her Gaurdian name and then in alert show "You
// * are ready to drive with your ####(show gaurdian name here.)" Else show "Sorry
// * visit again please." in alert box

// let birthYear = +prompt("What is yout birth year?");
// let age = 2024 - birthYear
// if (age > 18) {
//     let LicenceConfirm = confirm("Do you have valid license number?")
//     if (LicenceConfirm) {
//         let LicenceNum = prompt("What is your License Number?")
//         alert(`User with License Number ${LicenceNum} is ready to drive.`)
//     }
// } else if (age < 18) {
//     let Gaurdians = confirm("Do you have gaurdians?")
//     if (Gaurdians) {
//         let gaurdiansName = prompt("What is your Gurdians Name?")
//         alert(`You are ready to drive with your ${gaurdiansName}`)
//     }
// } else {
//     alert("Sorry visit again please.")
// }

// ! Q.6 Take any number and take other number as 19. Now check their difference by
// ! subtracting each other. If both numbers difference is greater than 19 then print
// ! triple their absolute difference else print double their absolute difference.



// ! Q.7 Write a JavaScript program to check from two given integers,
// ! whether one is positive and another one is negative.
// * If yes then print sum of both the numbers Else print multiplication of both numbers

// let num1 = +prompt("Enter The Fisrt Number:")
// let num2 = +prompt("Enter The Second Number:")

// if (num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0) {
//     console.log(`The Sum Of Two Numbers = ${num1 + num2}`)
// } else {
//     console.log(`The Multiplication Of Two Numbers = ${num1 * num2}`)
// }


// ! Q.8 Write a JavaScript program to check if out of 4 numbers any two
// ! numbers are same or not. If yes then print Yes else print No.

// let firstNum = +prompt("Enter A First Number:")
// let secondNum = +prompt("Enter A Second Number:")
// let thirdNum = +prompt("Enter A Third Number:")
// let forthNum = +prompt("Enter A Forth Number:")

// if (firstNum === secondNum || firstNum === thirdNum ||
//     firstNum === forthNum || secondNum === thirdNum ||
//     secondNum === forthNum || thirdNum === forthNum) {
//     console.log("yes")
// } else {
//     console.log("No")
// }

// ! Q.9 Write a program to check if a number is palindrome or not.
// ! It means 141 and 12221 both are examples of palindrome number. If
// ! number is palindrome then print yes else print no

// * First And Easy Way
// let number = prompt("Enter A Number:");
// let arr = number.split("").reverse().join("")

// if (number == arr) {
//     console.log(`Yes, ${number} is a plaindrome`)
// } else {
//     console.log(`No, ${number} is NOT a plaindrome`)
// }

// * Second Way

// let number = prompt("Enter a Number");
// let reverseNum = ""
// for (let i = number.length - 1; i >= 0; --i) {
//     reverseNum += number[i]
// }

// if (number == reverseNum) {
//     console.log(`Yes, ${number} is a Palindrome...`)
// } else {
//     console.log(`No, ${number} is NOT a Palindrome...`)
// }

// ! Q.10 Take a String and check its length. If string length is greater
// ! than 10 then print from 1 to length of the string. else print No

// let string = prompt("Enter A String.");

// if(string.length > 10){
//     for(let i = 1; i <= string.length; ++i){
//         console.log(i)
//     }
// }else{
//     console.log("No")
// }

// ! Q.11 Write a JavaScript program that takes a month number (1 for January, 2 for February, and so on)
// ! as input and prints the number of days in that month. Consider leap years (February has 29 days in a leap
// ! year, otherwise 28), and assume all other months have a standard number of days (January, March, May,
// ! July,August, October, December have 31 days, April, June, September, November have 30 days).

// const month = +prompt("Enter A Month...")

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12: console.log("31 Days In This Month!")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11: console.log("30 Days In This Month!");
//         break;
//     case 2: console.log("28 Days In This Month!")
// }

// ! Q.12 Print below pattern
// * A
// * BB
// * CCC
// * DDDD
// * EEEEE

// for (let i = 1; i <= 5; ++i) {
//     if (i == 1) {
//         console.log("A".repeat(i))
//     } else if (i == 2) {
//         console.log("B".repeat(i))
//     } else if (i == 3) {
//         console.log("C".repeat(i))
//     } else if (i == 4) {
//         console.log("D".repeat(i))
//     } else if (i == 5) {
//         console.log("E".repeat(i))
//     }
// }

// ! Q.13 Print Pattern
// *    *****
// *   *****
// *  *****
// * *****

// for (let i = 4; i >= 1; --i) {
//     console.log(" ".repeat(i) + "*".repeat(5))
// }

// ! Q.14 Create function to find max of two numbers. Create all
// ! 3 types of functions. Declaration, arrow and expression

// * Function Declairation
// function max(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} Is Greater than ${num2}`)
//     } else if (num2 > num1) {
//         console.log(`${num2} Is Greater than ${num1}`)
//     }
// }

// max(4, 5)

// * Function Experesion
// const max = function (num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} Is Greater Than ${num2}`)
//     } else if (num2 > num1) {
//         console.log(`${num2} Is Greater Than ${num1}`)
//     }
// }

// max(30, 20)

// * Arrow Function
// const max = (num1, num2) => {
//     if (num1 > num2) {
//         console.log(`${num1} Is Greater Than ${num2}`)
//     } else if (num2 > num1) {
//         console.log(`${num2} Is Greater Than ${num1}`)
//     }
// }

// max(30, 20)

// ! Q.15 Add all the numbers of an array and print sum using for of loop.

// let arr = [10, 23, 56, 45, 60, 40];
// let sum = 0;
// for (let val of arr) {
//     sum += val;
// }
// console.log(sum)

// ! Q.16 Write a function to find maximum number from an array

// function array() {
//     let arr = [10, 40, 39, 56, 50];
//     let max = arr[0];
//     for (let value of arr) {
//         if (value > max) {
//             max = value
//         }
//     }
//     console.log(max)

// }

// array()

// ! Q.17 Write a function to find minimum number from an array.

// function array() {
//     let arr = [10, 40, 39, 56, 50];
//     let min = arr[0];
//     for (let value of arr) {
//         if (value < min) {
//             min = value
//         }
//     }
//     console.log(min)
// }

// array()

// ! Q.18 Write a function to Reverse a String

// function reverse(str) {
//     let reverseString = [...str].reverse().join("")
//     console.log(reverseString)
// }

// reverse("Arman")

// ! Q.19  Write a function to count all odd numbers in an array

// function oddCount() {
//     let arr = [17, 40, 39, 57, 50];
//     let count = 0;
//     for (let value of arr) {
//         if (value % 2 !== 0) {
//             count++
//         }
//     }
//     console.log(count)
// }

// oddCount()

// ! Q.20  Write a function to count all even numbers in an array

// function evenCount() {
//     let arr = [17, 40, 38, 57, 50];
//     let count = 0;
//     for (let value of arr) {
//         if (value % 2 == 0) {
//             count++
//         }
//     }
//     console.log(count)
// }

// evenCount()


// ! Q.21 Write a function that takes an array of strings and returns the longest string in the array.

// function string() {
//     let arr = ["Arman", "Ali", "Maan"]
//     let max = arr[0]
//     for (let value of arr) {
//         if (max.length < value.length) {
//             max = value
//         }
//     }
//     console.log(max)
// }

// string()