// ! Create Bill Calculator
// ! Ask below Questions

// * How many french fries(60rs per piece) do you want to order ?
// * How many burgers(50rs per piece) do you want to order ?
// * How many plates of chowmin(100rs per plate) do you want to order ?
// * How many plates of Manchurian(80rs per plate) do you want to order ?
// * How many Cokes(50 per piece) do you want to order ?
// ! Use can enter any number of quantities.Calculate the bill based on the quantities entered
// ! and item prices.If user enteres 0 or negative value then consider item count as 0.

// let frenchfries = +prompt("How many french fries(60rs per piece) do you want to order ?")
// let burgers = +prompt("How many burgers(50rs per piece) do you want to order ?")
// let chowmin = +prompt("How many chowmin(100rs per piece) do you want to order ?")
// let Manchurian = +prompt("How many Manchurian(80rs per piece) do you want to order ?")
// let Cokes = +prompt("How many french Cokes(50rs per piece) do you want to order ?")

// let order = frenchfries * 60 + burgers * 50 + chowmin * 100 + Manchurian * 80 + Cokes * 50;

// console.log(`Your Bill Is:
// ${frenchfries} French Fries = ${frenchfries * 60}
// ${burgers} Burgers = ${burgers * 50}
// ${chowmin} Chowmin = ${chowmin * 100}
// ${Manchurian} Manchurian = ${Manchurian * 80}
// ${Cokes} Cokes = ${Cokes * 50}
// Total Payment:- ${order}`)

// ! Print below Pattern
// ! $$#$$#$$
// ! $$#$$#
// ! $$#$$
// ! $$#
// ! $$

// for (let i = 5; i >= 1; --i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         if (j % 2 !== 0) {
//             str += "$$"
//         } else {
//             str += "#"
//         }
//     }
//     console.log(str)
// }

// ! Q.3 Ask the user question "How many times do you want to print Series".
// ! Then print below series. For example below series will print if user enteres 5
// * 1 2 3 5 8 13 21 34 55 Find the pattern for above series and print accordingly.
// * If the user enters 10 then we will print the same series numbers till 10 times.

// ! Using a switch case to do this exercise
// ! Ask user a question "Do you drink tea/coffee" ?
// * If user says tea print tea
// * If user says coffee then print coffee
// * If users say anything else then print water

// let drink = prompt("Do you drink tea/coffee?")

// switch (drink) {
//     case "tea":
//         console.log("tea")
//         break;
//     case "coffee":
//         console.log("coffee")
//         break;
//     default: console.log("water")
// }

// ! Q.5 Ask user his/her age, "What is your age?"
// * If user age is greater than 18 and less than 50 then ask user "Would you like to have a coffee?"
// * If user click on Okay then ask for his / her choice with questions "What type of coffee you want
// * to have?" and finally in the alert show message "Hello Sir/Mam, here is your coffee ###"If user age
// * is less than 18 then ask him question in confirm box "Would you like to have tea?" If user says yes
// * then ask "What type of tea do you want?" and then in alert show "Hello Sir/Mam, here is your ### tea."
// * Else show "Sorry visit again please." in alert box

// let age = prompt("What is  your age?")

// if (age > 18 && age < 50) {
//     let confirmation = confirm("Would you like to have a coffee?")
//     if (confirmation) {
//         let coffeeType = prompt("What type of coffee you want?")
//         alert(`Hello Sir / Mam, here is your coffee ${coffeeType}.`)
//     }
// } else if (age < 18) {
//     let confirmation2 = confirm("Would you like to have tea?")
//     if (confirmation2) {
//         let teaType = prompt("What type of coffee you want?")
//         alert(`Hello Sir/Mam, here is your ${teaType} tea.`)
//     }
// } else {
//     alert("Sorry visit again please.")
// }

// ! Q.6 Take any number and take other number as 39. Now check their difference by subtracting
// ! each other. If both numbers difference is greater than 40 then print double their absolute
// ! difference else print triple their absolute difference.

// let number = Number(prompt("Enter A Number..."))
// let otherNum = 39;
// let subtracting = number - otherNum;
// console.log(number - otherNum);
// if (subtracting > 40) {
//     console.log(subtracting * 2)
// } else {
//     console.log(subtracting * 3)
// }

// ! Q.7 Write a JavaScript program to check from two given integers,
// ! whether one is greater than 18 and another one is less than 10.
// * If yes then print sum of both the numbers Else print multiplication of both numbers

// let num1 = Number(prompt("Enter First Number..."))
// let num2 = Number(prompt("Enter Second Number..."))

// if (num1 > 18 && num2 < 10) {
//     console.log(num1 + num2)
// } else {
//     console.log(num1 * num2);
// }

// ! Q.8 Write a JavaScript program to check if out of 5 numbers any
// ! two numbers are same or not. If yes then print Yes else print No.

// let firstNum = Number(prompt("Enter First Number..."))
// let secondNum = Number(prompt("Enter Second Number..."))
// let thirdNum = Number(prompt("Enter Third Number..."))
// let forthNum = Number(prompt("Enter Forth Number..."))
// let fifthNum = Number(prompt("Enter Fifth Number..."))

// if (firstNum === secondNum || firstNum === thirdNum ||
//     firstNum === forthNum || firstNum === fifthNum ||
//     secondNum === thirdNum || secondNum === forthNum ||
//     secondNum === fifthNum || thirdNum === forthNum ||
//     thirdNum === fifthNum || forthNum === fifthNum
// ) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// ! Q.9 Write a program to check if a number is divisible by 10 && 20 or not. If
// ! yes then multiply the number by 51 else multiply the number by 59 and print.

// let number = Number(prompt("Enter A Number..."))
// if (number % 10 === 0 && number % 20 === 0) {
//     console.log(number * 51)
// } else {
//     console.log(number * 59)
// }

// ! Q.10 Take a String and check its length.If string length is greater than
// ! 15 then print 2's table till the length of the string else print No...

// let str = prompt("Enter A String...")
// if (str.length > 15) {
//     console.log(str.length)
//     for (let i = 1; i <= str.length; ++i) {
//         console.log(i * 2)
//     }
// } else {
//     console.log(str.length)
//     console.log("No...")
// }

// ! Q.11 How do you reverse a given string in place.

// let str = prompt("Enter A String...")
// ! First Way
// let reverseCase = str.split("").reverse().join("")
// console.log(reverseCase)

// ! Second Way
// let con = ""
// for (let i = str.length - 1; i >= 0; --i) {
//     con += str[i];
// }
// console.log(con)

// ! Q.12 How do you print duplicate characters from a string.

// function printDuplicateChar() {
//     let str = 'Hello World'
//     let uniquChar = new Map()
//     for (let char of str) {
//         if (uniquChar.has(char)) {
//             uniquChar.set(char, uniquChar.get(char) + 1)
//         } else {
//             uniquChar.set(char, 1)
//         }
//     }
//     uniquChar.forEach((count, char) => {
//         if (count > 1) {
//             console.log(char);
//         }
//     })
// }

// printDuplicateChar()

// ! Q.13 How do you find duplicate characters in a given string.


// ! Q.14 How do you count a number of vowels and consonants in a given string

// function count() {
//     let str = prompt("Enter a String...");
//     let vowel = 0;
//     let consonants = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             vowel++
//         } else if (char >= "a" || char <= "z") {
//             consonants++
//         }
//     }
//     console.log(`${vowel} Vowels In This String...`);
//     console.log(`${consonants} Consonants In This String...`);
// }
// count()

// ! Q.15 How do you check if a given string is a palindrome.

// const checkPalin = () => {
//     let str = prompt("Enter a String...");
//     let palin = "";
//     for (let i = str.length - 1; i >= 0; --i) {
//         palin += str[i]
//     }
//     if (str === palin) {
//         console.log("Yes, That's a Palindrome...")
//     } else {
//         console.log("No, That's NOT a Palindrome....");
//     }
// }

// checkPalin()

// ! Q.16 How to remove the duplicate character from String.

// function duplicateRemove() {
//     let str = "hello world"
//     let seen = {};
//     let result = ""
//     for (let char of str) {
//         if (!seen[char]) {
//             seen[char] = true;
//             result += char
//         }
//     }
//     console.log(result)
// }

// duplicateRemove()

// ! Q.17 Write a program to count the number of characters in a string.

// function countChar() {
//     let str = prompt("Enter A String...")
// ! let arr = str.replaceAll(" ", "")
//     let count = 0
//     for (let char of arr) {
//         console.log(char)
//         if (char >= "a" || char <= "z") {
//             ++count
//         }
//     }
//     console.log(count)
// }

// countChar()

// ! Q.18 Write a program to check if a given string is a
// ! palindrome (reads the same backwards and forwards).

// let str = prompt("Enter a String... ")
// let reverseCase = str.split("").reverse("").join("")

// if (str === reverseCase) {
//     console.log(`${str} -> ${reverseCase}
// Yes, That's a Palindrome...`);
// } else {
//     console.log(`${str} -> ${reverseCase}
// No, That's NOT a Palindrome...`);
// }

// ! Q.19 Write a program to reverse a string.

// let str = "Hello World!"
// let reverse = "";
// for (let i = str.length - 1; i >= 0; --i) {
//     reverse += str[i]
// }
// console.log(reverse)

// ! Q.20 Write a program to find the first non-repeated character in a string.

// function nonRepeatedChar() {
//     let str = 'hello world'
//     let seen = {};
//     let countChar = "";
//     for (let char of str) {
//         if (!seen[char]) {
//             seen[char] = true;
//         } else if (seen[char]) {
//             countChar += char
//             break
//         }
//     }
//     console.log(`( ${countChar} ) This First Character Are Repeat In this String...`)
// }
// nonRepeatedChar()

// ! Q.21 Write a program to remove all vowels from a string.

// function removeVowel(str) {
//     let finalStr = ""
//     for (let char of str) {
//         if (char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u") {
//             finalStr += char
//         }
//     }
//     return finalStr
// }

// let str = "Hello World"
// const result = removeVowel(str)
// console.log(result);

// ! Q.22 Write a program to check if a given string contains only numeric characters.

// ! Local Way
// let str = 134
// if (typeof str === 'number') {
//     console.log("Yes This Is a Numeric Characters!");
// } else {
//     console.log("Yes This Is a NON-Numeric Characters!");
// }

// ! Q.23 Write a program to find the largest word in a string.

// function findLongestWord(str) {
//     let arr = str.split(" ")
//     let longestWord = ""
//     for (let word of arr) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }

// console.log(findLongestWord("Hello Javascript!"))

// ! Q.24 Write a program to remove all occurrences of a particular character from a string.

// function removeOccurencChar() {
//     let newStr = ""
//     for (let char of str) {
//         if (char !== removeChar) {
//             newStr += char
//         }
//     }
//     return newStr
// }

// let removeChar = "l"
// let str = "Hello World"
// const result = removeOccurencChar(str, removeChar)
// console.log(result);

// ! Q.25 Write a program to capitalize the first letter of each word in a sentence.

// function capitalize(str) {
//     let arr = str.split(" ")
//     let finalStr = ""
//     for (let word of arr) {
//         let leftSide = word.charAt(0).toUpperCase();
//         let rightSide = word.slice(1).toLowerCase();
//         finalStr += leftSide + rightSide + " "
//     }
//     return finalStr.trimEnd()
// }
// console.log(capitalize("hello world"))

// ! Q. 27 Write a program to find the most frequently occurring character in a string.

// function frequentChar(str) {
//     let sameChar = {};
//     let count = 0;
//     let finalStr = "";
//     for (let char of str) {
//         sameChar[char] = sameChar[char] ? sameChar[char] + 1 : 1
//         if (sameChar[char] > count) {
//             finalStr = char;
//             count = sameChar[char]
//         }
//     }
//     return finalStr
// }
// let str = "hello world"
// const mostFrequentChar = frequentChar(str);
// console.log(`The most frequent character in '${str}' is '${mostFrequentChar}'.`)


// ! Q.28 Aapke paas ek array hai jismein kuch numbers hain. Aapko ek function likhna hai
// ! jo ek array ko le aur usmein har ek element ko double karke naya array return kare. Phir,
// ! ek aur function likhna hai jo ek array aur ek transformation function le aur us transformation
// ! function ko har ek element pe apply karke naya array return kare.


// function test(arr) {
//     const ans = arr.map((value) => {
//         return value * 2;
//     })
//     console.log("Double Array:", ans);
//     arr.forEach((element, index, arr) => {
//         arr[index] = element + 5
//     })
//     console.log("transformation Array:", arr);
// }
// let arr = [10, 20, 30, 40, 50]
// test(arr);