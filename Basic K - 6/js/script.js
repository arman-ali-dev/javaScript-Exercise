// ! Q.1 Write a JavaScript function to capitalize the first character of the string.

// * for example:
// * allenacademy
// *
// * output:
// * Allenacademy

// let str = "allenacademy"
// let capitalize = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitalize)

// ! Q.2 Write a JavaScript function to insert a string within a string at a particular position

// * for example:
// * We are learning exercises.
// * now insert the word JavaScript at 14 position so output will be:
// * We are learning JavaScript exercises.


// function addString() {
//     let str = "We are learning exercises.";
//     let arr = str.split("")
//     let add = arr.splice(15, 0, " Javascript")
//     console.log(arr.join(""))
// }
// addString()

// ! Q.3 Write a JavaScript function to count the occurrence of a substring in a string.
// * "My name is allen academy and my friend name is Arun Kumar."
// * find count of 'is' in this word is 2.

// function countStr() {
//     let str = "My name is allen academy and my friend name is Arun Kumar.";
//     let arr = str.split(" ")
//     let count = 0
//     for (let value of arr) {
//         if (value == "is") {
//             count++
//         }
//     }
//     console.log(`${count}(is) In This String.`);
// }

// countStr()

// ! Q.4 Ask user below questions:
// * What is your name ?
// * What is your mobile number ?
// * What is your account number ?
// * What is your atm card number ?
// * What is your aadhar number ?

// ! Now do below tasks:
// * Mask last 3 digits of the mobile number
// * Mask middle of 5 numbers of the account
// * Mask last 8 digit of atm card number
// * Mask starting 4 digits and last 4 digits of aadhar number

// ! Q.5 Print Pattern

// *      $
// *     $$$
// *    $$$$$
// *   $$$$$$$
// *  $$$$$$$$$
// * $$$$$$$$$$$

// for (let i = 6; i > 0; --i) {
//     let str = "";
//     for (let k = 1; k < i; ++k) {
//         str += " "
//     }
//     for (let j = 1; j < 2 * (7 - i); j++) {
//         str += "$"
//     }
//     console.log(str)
// }

// ! Q.6 Ask below questions :

// * What is your name ?
// * What is your birth year ?
// * What is your address ?
// * What is your country code ?
// * What is your mobile number ?
// ! Now using string template literal syntax show below output based on your answer:

// ! My name is Sajid Khan.I was born in 1993 and my current age is 30 years.
// ! My address is Jhotwara, Jaipur and my mobile number is + 919565465654.

// let Name = prompt("What Is Your Name?")
// let birthYear = prompt("What Is Your Birth Year?")
// let address = prompt("What Is Your Address")
// let country = prompt("What Is Your Country Code?")
// let mobileNo = prompt("What Is Your Mobile Number?")

// console.log(`My Name Is ${Name}. I Was Born ${birthYear} And My Age is ${2024 - birthYear}.
// My Address Is ${address} And My Mobile Number Is +${mobileNo}.`)

// ! Q.7 Divide a string in two part.

// ! Now in right side part add Hello in the end In left side of the string add World in starting

// * for example:
// * let str = "Allen Academy"

// * output:
// * Allen Hello World Academy

// let str = "Allen Academy"
// let midPart = (str.length / 2)
// let leftPart = str.slice(0, midPart)
// let rightPart = str.slice(midPart)
// console.log(leftPart + "Hello " + "world " + rightPart)

// ! Q.8 Guessing Game? Ask user what character is present at particular index in a word.
// * If user guess is right then show him Congrulations message otherwise show Sorry message.
// * for example:
// * Allen Academy
// * What is the character you are guessing ? A
// * What is the index ? 3
// * Sorry

// let guessGame = prompt("Enter a String...")
// let guess = prompt("Enter A Character In The String...")
// let index = prompt("Enter A Index")

// if (guessGame.charAt(index) === guess) {
//     console.log("Congratulations You're Win")
// } else {
//     console.log("Sorry")
// }

// ! Q.9 Print Pattern using repeat function

// * ***********
// *  *********
// *   *******
// *    *****
// *     ***
// *      *

// for (let i = 0; i < 6; ++i) {
//     console.log(" ".repeat(i) + "*".repeat(11 - i - i))
// }

// ! Q.10 Print below Series using repeat function
// * 1 224 3339 44416 555525