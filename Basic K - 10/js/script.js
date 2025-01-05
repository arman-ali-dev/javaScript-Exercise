// ! Q.1 Using prompt ask user below questions and then print these values in console
// * What is your name
// * What is your batch name
// * What is your birth year
// ! Now print name, batch name and age in the console.Let's say if birth year of the user is 1991 then output should be his/her current age 31 years

// const userName = prompt("What Is Your Name?")
// const userBatchName = prompt("What Is Your Batch Name?")
// const userBirthYear = parseInt(prompt("What Is Your Birth Year?"))
// console.log(`Your Name Is ${userName} And Your Batch Name Is ${userBatchName} And Age Is ${2024 - userBirthYear}`);

// ! Q.2 Print numbers like 3, 6, 9, 12, 15 until the number is less than 100.
// for (let i = 3; i <= 100; i += 3) {
//     console.log(i);
// }

// ! Q.3 Ask user a question "Do you want to study Nodejs"? If user click on "OK" button then print "Yes" else print "No" in the console

// const question = confirm("Do You Want To Study NodeJs?")
// if (question) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// ! Q.4 Take one number. If number is odd and less than 20 then in alert box show "Yes" and else show "No" in alert box.

// const number = 21
// if (number % 2 !== 0 && number < 20) {
//     alert("Yes")
// } else {
//     alert("No")
// }

// ! Q.5 If rating is 5 then print Excellent. If rating is 4 then print Good. If rating is 3 then print Average. If rating is 2 then print Poor. If rating is 1 then print Very Poor else print Invalid rating
// const rating = parseInt(prompt("Enter a Rating..."))
// if (rating === 5) {
//     console.log("Excellent");
// } else if (rating === 4) {
//     console.log("Good");
// } else if (rating === 3) {
//     console.log("Average");
// } else if (rating === 2) {
//     console.log("Poor");
// } else if (rating === 1) {
//     console.log("Very Poor");
// } else {
//     console.log("Invalid Rating...");
// }

// ! Q.6 Convert any if else condition to ternary operator.
// * If-Else
// if (10 < 20) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// ! Converted To Ternary Operator
// 10 < 20 ? console.log("Yes") : console.log("No");;

// ! Q.7 Check if a number is divisible by 13 or not. If yes then check number is also divisible by 4 or not. If both conditions matches then print "Yes" else print "No".

// let num = 52
// if (num % 13 === 0) {
//     if (num % 4 === 0) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }else {
// console.log("No");
// }
// ! Q.8 Print below pattern:

// * 1
// * 2 3
// * 4 5 6
// * 7 8 9 10
// * 11 12 13 14 15
// let count = 1
// for(let i = 1; i <= 5; i++){
//     let str = ""
//     for(let j = 1; j <= i; j++){
//         str += count++ + " "
//     }
//     console.log(str);
// }

// ! Q.9 Create a JavaScript program that prompts the user to enter their age. If the age entered is less than 18, display an alert box with the message "Sorry, you must be at least 18 years old to access this website." If the age entered is between 18 and 30, display a confirm box with the message "Are you sure you want to proceed?" If the user clicks "Cancel" in the confirm box, display an alert box with the message "Action canceled." If the user clicks "OK" in the confirm box, display a prompt box asking for their name and display an alert box with the message "Welcome, [Name]!" (replace [Name] with the name entered).

// const age = parseInt(prompt("Enter Your Age..."))
// if (age < 18) {
//     alert("Sorry, You Must Be At Least 18 Years Old To Access This Website.")
// } else if (age > 18 && age < 30) {
//     const confirmation = confirm("Are You Sure you Want To Procced?")
//     if (confirmation) {
//         const userName = prompt("What Is Your Name?")
//         console.log(`Welcode ${userName}`);
//     } else {
//         alert("Action Canceled.")
//     }
// }

// ! Q.10 Create a JavaScript program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average using an alert box.

// const firstNum = +prompt("Enter First Number.")
// const secondNum = +prompt("Enter Second Number.")
// const thirdNum = +prompt("Enter Third Number.")
// const average = (firstNum + secondNum + thirdNum) / 3
// alert(average)


// ! Q.11 Solve below expressions

// * 5 + 2 * 3 - 4 / 2
// * 10 % 3 + 4 * 2 / 5
// * 15 % (7 + 3) - 4 * 2
// * (2 + 3) * (4 - 1) + 6 / 2
// * 12 / 3 + 4 - 2 * 5

// console.log(5 + 2 * 3 - 4 / 2); // 9
// console.log(10 % 3 + 4 * 2 / 5);
// console.log(15 % (7 + 3) - 4 * 2);
// console.log((2 + 3) * (4 - 1) + 6 / 2);
// console.log(12 / 3 + 4 - 2 * 5);

// ! Q.12 Write a JavaScript program that prompts the user to enter their age and their country of residence. Based on the age and country, display a message using if-else if-else statements and logical operators. Consider the following conditions:

// * If the age is less than 18, display "Sorry, you must be at least 18 years old."
// * If the age is 18 or older and the country is "USA", display "Welcome! Enjoy your stay in the USA."
// * If the age is 18 or older and the country is "UK", display "Welcome! Enjoy your stay in the UK."
// * If the age is 18 or older and the country is neither "USA" nor "UK", display "Welcome! Enjoy your stay."

// const age = prompt("What Is Your Age?")
// const country = prompt("What Is Your Country?")

// if (age < 18) {
//     console.log("Sorry, You Must Be At Least 18 Years Old.");
// } else if (age === 18 || country === "USA") {
//     console.log("Welcome! Enjoy You Stay In The USA.");
// } else if (age === 18 || country === "UK") {
//     console.log("Welcome! Enjoy You Stay In The UK.");
// } else if (age >= 18) {
//     console.log("Welcome! Enjoy your stay.");
// }

// ! Q.13 Write a JavaScript program that prompts the user to enter a sentence. The program should perform the following operations:
// * Use the toLowerCase function to convert the sentence to lowercase.
// * Use the replace function to replace all spaces with dashes("-") in the modified sentence.
// * Use the slice function to extract a substring from the 2nd to the 6th character(inclusive) of the modified and replaced sentence.
// * Use the startsWith function to check if the extracted substring starts with the letter "a".
// * Display the result of the check using an alert box.

// const string = prompt("Enter a Santence...")
// * Lower Case
// console.log(string.toLowerCase());
// * Replace
// console.log(string.replaceAll(" ", "-"));
// Slice
// console.log(string.slice(2, 7));
// Start With
// console.log(string.startsWith("a"));

// ! Q.14 Write a JavaScript function called calculateArea that takes the length and width of a rectangle as parameters and returns the area of the rectangle. The formula for calculating the area is length * width.

// function calculateArea(length, width) {
//     return length * width
// }

// const result = calculateArea(10, 100)
// console.log(result);

// ! Q.15 Write a JavaScript function which calculate sum of 4 numbers. If sum of 4 numbers is greater than 100 then return 1 else return 2.

// function calculateSumOf4Num(num1, num2, num3, num4) {
//     const sumOf4Num = num1 + num2 + num3 + num4
//     if (sumOf4Num > 100) {
//         return 1
//     } else {
//         return 2
//     }
// }

// const answer = calculateSumOf4Num(10, 20, 30, 50)
// console.log(answer);