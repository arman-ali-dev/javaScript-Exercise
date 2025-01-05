// ! Q.1 Split this string using space and find length.
// * let str = "My name is learn javascript";

// let str = "My name is learn javascript";
// console.log("Length of the array:", str.split(" ").length);

// ! Q.2 Write a program to check if a string is palindrome or not?

// let str = "adada";
// let arr = str.split("");
// const ans = arr.reverse().join("");
// if (ans === str) {
//   console.log("yes This a string is palindrome");
// } else {
//   console.log("No This a string is NOT palindrome");
// }

// ! Q.3 9581894461 Convert to below

// * 95818*****
// * *****94461
// * 958**944**

// console.log("95818".padEnd(10 ,"*"));
// console.log("94461".padStart(10 ,"*"));
// console.log("958".padEnd(5, "*") + "944".padEnd(5, "*"));

// ! Q.4 Write a program to reverse a string. For example:

// * Hello -> olleH
// let str = "Hello";
// let finalstr = "";
// for (let i = str.length - 1; i >= 0; --i) {
//   finalstr = finalstr.concat(str[i]);
// }

// console.log(finalstr);

// * Bye -> eyB
// let str = "Bye";
// let finalstr = "";
// for(let i = str.length - 1 ; i >= 0; --i){
//     finalstr = finalstr.concat(str[i])
// }

// console.log(finalstr)

// ! Q.5 Captialize first character of the String. For example:

// * learnjavascript -> Learnjavascript
// let str = "learnjavascript";
// let Captialize = str.charAt(0).toUpperCase() + str.substring(1);
// console.log(Captialize)

// * hello -> Hello
// let str = "hello";
// let Captialize = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(Captialize)

// ! Q.6 In a string convert uppercase character to lowercase and vice versa.

// * leArNjavaScript -> LEaRnJAVAsCRIPT
// let str = "leArNjavaScript";
// let finalstr = "";
// for (let value of str) {
//   if (value == value.toLowerCase()) {
//     finalstr = finalstr.concat(value.toUpperCase());
//   } else {
//     finalstr = finalstr.concat(value.toLowerCase());
//   }
// }
// console.log(finalstr);

// * HeLlo -> hElLO
// let str = "HeLlo";
// let finalstr = "";
// for (let value of str) {
//   if (value == value.toLowerCase()) {
//     finalstr = finalstr.concat(value.toUpperCase());
//   } else {
//     finalstr = finalstr.concat(value.toLowerCase());
//   }
// }
// console.log(finalstr);


// ! Q.7 Camelize the string. for example:

// * Hello World -> helloWorld
// * my name is Sajid -> myNameIsSajid
// * learn javascript -> learnJavascript

// ! Q.8 Prompt The User To Enter their full name. Generate a username for them based on the input.
// ! Start username with @, followed bu their full name and ending with the fullname length.

// let fullName = prompt("Enter Their Full Name Without Spaces")
// let userName = "@" + fullName + fullName.length;
// console.log(`Your UserName Is ${userName}...`);

// ! Q.9 Camelize the string. for example:

// * Hello World -> helloWorld
// let str = "Hello World"
// let arr = str.split(" ")
// let finalstr = ""
// for (let value of arr) {
//     let firstChar = value.charAt(0).toUpperCase()
//     let remainingChar = value.slice(1).toLowerCase()
//     finalstr = finalstr + firstChar + remainingChar
// }
// console.log(finalstr.replace("H", "h"))

// * my name is Arman -> myNameIsArman
// let str = "my name is Arman"
// let arr = str.split(" ")
// let finalstr = ""
// for (let i = 0; i < arr.length; ++i) {
//     let words = arr[i];
//     let firstChar = words.charAt(0).toUpperCase()
//     let remainingChar = words.slice(1).toLowerCase()
//     finalstr = finalstr.concat(firstChar, remainingChar)
// }
// console.log(finalstr.replace("M", "m"))

// * learn javascript -> learnJavascript

// let str = "learn javascript"
// let arr = str.split(" ")
// let finalstr = ""
// for (let char of arr) {
//     let firstChar = char.charAt(0).toUpperCase();
//     let remainingChar = char.substring(1).toLowerCase();
//     finalstr = finalstr.concat(firstChar, remainingChar)
// }
// console.log(finalstr.replace("L", "l"))

// ! Q.10 Count number of spaces in a string.
// let str = "My Name Is Arman Ali Khan";
// let Count = 0;
// for (let value of str) {
//     if (value == " ") {
//         Count++
//     }
// }
// console.log(`There is space inside ${Count}`)

// ! Q.11 Print below pattern using repeat function

// * 1111111111
// * 222222222
// * 33333333
// * 4444444
// * 555555
// * 66666
// * 7777
// * 888
// * 99

// for (let i = 1; i < 10; ++i) {
//     let str = "";
//     for (let j = 10; j >= i; --j) {
//         str = str + i
//     }
//     console.log(str)
// }

// ! Q.12 "My name is Sajid Khan", take input from user
// ! and print whatever is there after the word. For example:

// ! Hello learn javascript
// ! input: "rn"
// ! output: javascipt

// let input = prompt("Enter a santance")
// let word = prompt("Enter a word for search")

// let index = input.indexOf(word)
// if(index >= 0){
//     let output = input.substring(index + word.length)
//     console.log(output)
// }

// ! Q.13 Take a sentence from prompt. In next question ask for a string
// ! and check if that string is present in that sentence or not.

// let sentence = prompt("Enter a Sentence")
// let string = prompt("Enter a string which in This sentence")

// if (sentence.includes(string)) {
//     console.log(`This ${string} is Present in this Sentence.`)
// } else {
//     console.log(`This ${string} is NOT Present in this Sentence.`)
// }

// ! Q.14 Imagine you have a string representing a sentence, and you need to count the number of occurrences of a specific word within that sentence. How would you accomplish this using JavaScript?

// function occurrenceChar() {
//     let str = "Hello World";
//     let finalstr = ""
//     let count = 0;
//     let seen = {}
//     for (let char of str) {

//         seen[char] = seen[char] ? seen[char] + 1 : 1
//         if (seen[char] > count) {
//             finalstr = char
//             count = seen[char]
//         }
//     }
//     console.log(seen, count, finalstr);
//     return finalstr;
// }

// console.log(occurrenceChar());


// ! Q.15 Ek string mein kuch specific characters ke beech mein sabse lamba substring kaun sa hai?

// function LognestStr(str) {
//     let arr = str.split(" ")
//     let largestWord = ""
//     for (let word of arr) {
//         if (word.length > largestWord.length) {
//             largestWord = word
//         }
//     }
//     return largestWord
// }

// let str = "My Name Is Arman"
// console.log(LognestStr(str));

// ! Q.16 Ek string mein palindromic substring kaun kaun se hain?

// function findPalindromic() {
//     let str = "ada Arman level"
//     let arr = str.split(" ")
//     let finalstr = ""
//     for (let word of arr) {
//         let reverse = word.split("").reverse().join("")
//         if (reverse === word) {
//             console.log(word, "Are Palindromic In This String");
//         }
//     }
// }

// findPalindromic()

// ! Q.17 Ek string mein unique characters ka count kaise karen?

// function uniquecharCount(str) {
//     let same = {}
//     for (let char of str) {
//         if (same[char] === undefined) {
//             same[char] = 0
//         } ++same[char]
// * Short hand To Apply this Condition // same[char] = (same[char] || 0) + 1
//     }

//     let count = 0
//     for (let val in same) {
//         if (same[val] === 1) {
//             count++
//         }
//     }
//     return count
// }
// let str = "hello world"
// const result = uniquecharCount(str);
// console.log("Count of unique characters:", result);

// ! Q.18 Ek string mein kuch specific characters ke frequency kaise karen?

// function frequencyChar(str) {
//     let seen = {}
//     let count = 0
//     let finalstr = ""
//     for (let char of str) {
//         seen[char] = seen[char] ? seen[char] + 1 : 1;
//         finalstr = seen
//     }
//     return finalstr
// }

// let str = "hello world"
// const result = frequencyChar(str)
// console.log("Frequency of specific characters:", result);


// ! Q.19 Take a string and if in that string anything is there other than the characters $, _, number, a-z, A_Z then remove them from the string. Do it with regex and without regex. for example:

// ! We %^% $Cod!@#e -> WeCode

// let str = "We %^% $Cod!@#e"
// let finalStr = ""
// for (let char of str) {
//     if (char !== "%" && char !== "^" &&
//         char !== "!" && char !== "@" &&
//         char !== "#" && char !== " " && char !== "$") {
//         finalStr += char
//     }

// }

// console.log(finalStr);

// ! Q.20 Write a program to reverse a string.

// const str = "Hello World"
// const reverse = str.split("").reverse().join("")
// console.log(reverse);

// ! Q.21 Check if a given string is a palindrome.

// const str = "hannah"
// const reverse = str.split("").reverse().join("")
// if (reverse === str) {
//     console.log(`Yes, ${str} Is a Palindormic String...`);
// } else {
//     console.log(`No, ${str} Is NOT a Palindormic String...`);
// }

// ! Q.22 Count the number of vowels in a string.

// const str = "Hello Javascript"
// let countVowels = 0
// for (let char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         countVowels++
//     }
// }
// console.log(`${countVowels} Vowels In This String...`);

// ! Q.23 Convert a string to uppercase.

// const str = "hello world"
// const captialize = str.toUpperCase()
// console.log(captialize);

// ! Q.24 Convert a string to lowercase.

// const str = "HELLO WORLD"
// const captialize = str.toLowerCase()
// console.log(captialize);

// ! Q.25 Find the length of a string without using the built-in length property.

// const str = "Hello World"
// let count = 0
// for (let char of str) {
//     count++
// }
// console.log(count);

// ! Q.26 Remove all spaces from a string.

// const str = "My Name Is Arman Khan"
// * First Way
// const removeSpace = str.replaceAll(" ", "")
// console.log(removeSpace);

// * Second Way
// const removeSpace = str.replace(/\s/g, "")
// console.log(removeSpace);

// ! Q.27 Concatenate two strings without using the + operator.

// const str1 = "Arman"
// const str2 = "Ali"
// const concatenate = str1.concat(" ", str2)
// console.log(concatenate);

// ! Q.28 Find the first non-repeated character in a string.

// function fn(str) {
//     let finalStr = ""
//     for (let char of str) {
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return char
//         }
//     }

// }

// const str = "Hello World"
// console.log(fn(str));

// ! Q.29 Replace all occurrences of a substring with another substring in a given string.

// const str = "Hello World, Hello Universe"
// const replace = str.split("Hello").join("Hii")
// console.log(replace);

// ! Q.30 Remove all occurrences of a specified character from a string.

// const str = "Hello, World!"
// const replace = str.split(",").join("")
// console.log(replace);

// ! Q.31 Check if a string starts with a specific substring.

// const str = "Hello World!"
// const check = str.startsWith('H')
// console.log(check);

// ! Q.32 Check if a string ends with a specific substring.

// const str = "Hello World!"
// const check = str.endsWith("!")
// console.log(check);

// ! Q.33 Count the number of words in a sentence.

// const str = "Hello world!, How Are You"
// const arr = str.split(" ")
// let countWord = 0
// for (let word of arr) {
//     countWord++
// }

// console.log(`${countWord} Words In This String...`);

// ! Q.34 Remove duplicate characters from a string.

// const str = "Hello world"
// let seen = []
// let finalStr = ""
// for (let char of str) {
//     if (!seen[char]) {
//         seen[char] = true
//         finalStr += char
//     }
// }

// console.log(finalStr);

// ! Q.35 Convert a sentence to title case (capitalize the first letter of each word).

// const str = "my name is arman khan."
// let arr = str.split(" ")
// let finalStr = ""
// for (let word of arr) {
//     finalStr += word.charAt(0).toUpperCase() + word.slice(1) + " "
// }

// console.log(finalStr.trimEnd());

// ! Q.36 Swap the case of each character in a string (e.g., 'Hello' becomes 'hELLO').

// const str = "heLLo WOrld"
// let finalStr = ""
// let arr = str.split("")
// for (let word of arr) {
//     if (word === word.toUpperCase()) {
//         finalStr += word.toLowerCase()
//     } else {
//         finalStr += word.toUpperCase()
//     }
// }
// console.log(finalStr);

// ! Q.37 Find the most frequent character in a string.

// const str = "hello world!"
// let seen = {}
// let count = 0
// let finalStr = ""
// for (let char of str) {
//     seen[char] = seen[char] ? seen[char] + 1 : 1

//     if (seen[char] > count) {
//         finalStr = char
//         count = seen[char]
//     }

// }
// console.log(finalStr);

// ! Q.38 Implement a function to truncate a string if it's longer than a certain length, adding "..." at the end.

// function truncate(str, max_legnth) {
//     if (str.length > max_legnth) {
//         return str.slice(0, max_legnth) + "..."
//     } else {
//         return str
//     }
// }

// const ans = truncate("This Is a Long String.", 20)
// console.log(ans);

// ! Q.39 Check if a string is a valid URL.

// function checkValidURL(url) {
//     return url.startsWith("http://") || url.startsWith("https://")
// }

// const answer = checkValidURL("https://www.example.com")
// console.log(answer);

// ! Q.40 Implement a function to check if two strings are anagrams.

// function checkAnagrams(str1, str2) {
//     const sortedStr1 = str1.split("").sort().join("")
//     const sortedStr2 = str2.split("").sort().join("")

//     sortedStr1 === sortedStr2 ? console.log("Yes, These Strings Are Anagrams....") : console.log("No, These Strins Are NOT a Anagrams");;
// }

// checkAnagrams("silent", "listen")
// checkAnagrams("hello", "world")

// ! Q.41 Check if a string contains only digits.

// const numStr = "123"

// ! First Way
// if (Math.sign(numStr)) {
//     console.log(`Yes, ${numStr} Are Digits...`);
// } else {
//     console.log(`No, ${numStr} Are NOT a Digit...`);
// }

// ! Second Way

// function checkDigit(numStr) {
//     for (let digit of numStr) {
//         if (digit >= 0 && digit <= 9) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(checkDigit("123"));

// ! Q.42 Count the occurrences of a specific word in a paragraph.

// const paragraph = "My Name Is Arman Khan. I Am Student And My Skill Is JS."
// let seen = []
// let count = 0
// let arr = paragraph.split(" ")
// for (let word of arr) {
//     seen[word] = seen[word] ? seen[word] + 1 : 1
//     if (seen[word] > count) {
//         count++
//     }
// }

// console.log(count);

// ! Q.43 Reverse the order of words in a sentence.

// const str = "My Name Is Arman Khan"
// const reverse = str.split(" ").reverse().join(" ")
// console.log(reverse);

// ! Q.44 Capitalize the first letter of each word in a sentence.

// const str = "my name is arman khan."
// let arr = str.split(" ")
// let  finalStr = ""
// for(let word of arr){
// finalStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " "
// }

// console.log(finalStr);

// ! Q.45 Find the longest substring without repeating characters.

// const str = "My Name Is Armaan Khan."
// let arr = str.split(" ")
// let lognestStr = ""
// let seen = []
// for (let word of arr) {
//     if (word.length > lognestStr.length) {
//         lognestStr = word
//     }
// }

// let finalStr = ""
// for (let char of lognestStr) {
//     if (!seen[char]) {
//         seen[char] = true
//         finalStr += char
//     }
// }
// console.log(`${finalStr} Is Longest Word In This Santence...`);

// ! Q.46 Rotate a string to the left by a given number of positions.

// const str = "hello" // output : llohe
// const position = 2
// const rotatedString = str.slice(position) + str.slice(0, position)
// console.log(rotatedString);

// ! Q.47 Check if a string is a valid email address.

// const email = "ArmanKhan33102712@email.com"
// const checkEmail = email.endsWith("email.com")
// console.log(checkEmail);

// ! Q.48 Implement a function to perform string compression (e.g., "aabcccccaaa" becomes "a2b1c5a3").

// const str = "aabcccccaaa"
// let count = 1
// let finalStr = ""

// for (let i = 0; i < str.length; ++i) {
//     if (str[i] === str[i + 1]) {
//         count++
//     } else {
//         finalStr += str[i] + count
//         count = 1
//     }
// }

// console.log(finalStr);

// ! Q.49 Calculate the Levenshtein distance between two strings.

// ! Q.50 Implement a function to convert a string to camel case.

// function strToCamelCase(str) {
//     let arr = str.split("_")
//     const camelCasing = arr[0] + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)
//     return camelCasing
// }

// const str = "hello_world"
// const ans = strToCamelCase(str)
// console.log(ans);

// ! Q.51 Check if a string is a valid IPv4 address.

// function checkIPv4Address(str) {
//     const chunks = str.split(".")
//     if (chunks.length !== 4) {
//         return false
//     }
//     for (let element of chunks) {
//         const num = parseInt(element)
//         if (isNaN(num) || num < 0 || num > 255) {
//             return false
//         }
//     }
//     return true
// }

// console.log(checkIPv4Address("192.168.0.1"));
// console.log(checkIPv4Address("168.0.1"));
// console.log(checkIPv4Address("300.168.0.1"));
// console.log(checkIPv4Address("300.-80.0.1"));

// ! Q.52 Reverse the order of words and the characters within each word in a sentence.

// const str = "My Name Is Arman Khan"
// const wordReverse = str.split(" ").reverse().join(" ")
// const arr = wordReverse.split(" ")
// let charReverse = ""
// for (let word of arr) {
//     const str = word.split("").reverse().join("")
//     charReverse += str + " "
// }

// console.log(charReverse);

// ! Q.53 Write a program to remove all HTML tags from a string.

// const str = "My <b>Name</b> Is <strong>Arman Khan</strong>"
// const replace = str.replace(/<[^>]*>/g, "")
// console.log(replace);

// ! Q.54 Implement a function to encode a string using Run-Length Encoding (e.g., "aaabbbbbcc" becomes "a3b5c2").

// function diffString(str) {
//     let encode = ""
//     let count = 1
//     for (let i = 1; i <= str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++
//         } else {
//             encode += str[i] + count
//             count = 1
//         }
//     }

//     return encode
// }

// const ans = diffString("aaabbbbbcc")
// console.log(ans);

// ! Q.55 Find the longest common prefix of an array of strings.

// function fn(arr) {
// ! First Way

// for (let i = 0; i < arr[0].length; i++) {
//     if (arr.some(str => str[i] !== arr[0][i])) {
//         return arr[0].slice(0, i)
//     }
// }
// return arr[0]

// ! Second Way

//for (let i = 0; i < arr[0].length; i++) {
//for (let j = 0; j < arr.length; j++) {
//if (arr[0][i] !== arr[j][i]) {
//return arr[0].slice(0, i)

//}
//}
//}
//}

//const arr = ["chiliFlex", "chips", "chicken"]
//console.log(fn(arr))
//;

// ! Q.56 Implement a function to decode a Run-Length Encoded string.

// function encodeToDecode(encode) {
//     let count = ""
//     let decode = ""
//     for (let char of encode) {
//         if (!isNaN(char)) {
//             count += char
//         } else {
//             decode += char.repeat(parseInt(count))
//             count = ""
//         }
//     }
//     return decode
// }

// const ans = encodeToDecode("2A3B4C5E")
// console.log(ans);


// ! Q.57 Ek function likhiye jo ek string me pehla character jo repeat nahi hota, usse return kare.

// function firstNonRepeatedChar(str) {
//     for (let char of str) {
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return char;
//         }
//     }

// }

// const result = firstNonRepeatedChar("hello world");
// console.log(result);