// ! Q.1 Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

// function presentString(str) {
//     if (str.slice(4, 8) === "Code") {
//         return str.replace("Code", "")
//     } else {
//         return str
//     }
// }
// let str = "Hey Code World"
// console.log(presentString(str))

// ! Q.2 Write a JavaScript program to capitalize the first letter of each word of a given string.
// * Example string: 'the quick brown fox'
// * Expected Output: 'The Quick Brown Fox'

// function capitalizeStr(str, arr) {
//     let finalStr = ""
//     for (let i = 0; i < arr.length; ++i) {
//         let firstChar = arr[i].charAt(0).toUpperCase()
//         let remainingChar = arr[i].slice(1).toLowerCase()
//         finalStr += firstChar + remainingChar + " "
//     }
//     return finalStr.trimEnd()
// }

// let str = "the quick brown fox"
// let arr = str.split(" ")
// console.log(capitalizeStr(str, arr));

// ! Q.3 Write a JavaScript program to check whether all the digits in a given number are the same or not.

// function sameNum(arr) {
//     for (let ele of arr) {
//         return arr.every((value) => {
//             return value === ele
//         })
//     }

// }
// let arr = [2, 2, 2, 3]
// console.log(sameNum(arr));

// ! Q.4 Write a JavaScript function that reverse a number.

// function reverseNum() {
//     let number = 12345
//     let reverse = number.toString().split("").reverse().join("") * Math.sign(number)
//     console.log(reverse);
// }

// console.log(reverseNum());

// ! Q.5 Write a JavaScript function to extract unique characters from a string.

// * Example string: "thequickbrownfoxjumpsoverthelazydog"
// * Expected Output: "thequickbrownfxjmpsvlazydg"

// function uniqueChar(str) {
//     let seen = {};
//     let finalStr = "";
//     for (let char of str) {
//         if (!seen[char]) {
//             seen[char] = true
//             finalStr += char
//         }
//     }
//     return finalStr
// }

// let str = "thequickbrownfoxjumpsoverthelazydog";
// console.log(uniqueChar(str));

// ! Q.6 Write a JavaScript function to chop a string into chunks of a given length. Test Data :

// * console.log(string_chop('w3resource'));
// * console.log(string_chop('w3resource', 2));
// * ["w3resource"]
// * ["w3", "re", "so", "ur", "ce"]

// function chop_string() {
//     let str = "w3resourcee"
//     let chop = 2
//     let chunks = []
//     for (let i = 0; i < str.length; i += chop) {
//         chunks.push(str.slice(i, i + chop))
//     }
//     return chunks
// }

// console.log(chop_string());

// ! Q.7 Write a JavaScript function to find a word within a string. Test Data :
// * console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// ! Output:
// * "'aa' was found 2 times."

// function search_word(str, word) {
//     let arr = str.split(" ")
//     return arr.some((value) => {
//         if (value === word) {
//             return console.log(word, "Was Found 2 Times");
//         }
//     })

// }
// let str = 'aa bb cc dd aa'
// let word = "dd"
// search_word(str, word);

// ! Q.8 Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

// function filterOut(arr) {
//     return arr.filter((value) => value > 30 && value < 50
//     ).map((value) => value + 20
//     ).reduce((prev, curr) => prev + curr
//     )
// }

// let arr = [10, 15, 20, 25, 30, 35, 40, 45, 50]
// console.log(filterOut(arr));

// ! Q.9 Convert below array:

// * [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
// ! to
// * [3, 7, 11, 15, 19]

// function ConvertToNewArr(arr) {
//     for (let array of arr) {
//         let ans = array.reduce((prev, curr) => prev + curr)
//         newArr.push(ans)
//     }
//     return newArr
// }

// let arr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
// let newArr = []
// console.log(ConvertToNewArr(arr, newArr));

// ! Print below pattern:

// * 1 2 3 4 5
// *  2 3 4 5
// *   3 4 5
// *    4 5
// *     5

for (let i = 5; i >= 1; --i) {
    let str = ""
    for (let k = 4; k >= i; --k) {
        str += " "
    }
   
    for (let j = 1; j <= i; ++j) {
        str += j + " "
    }
    console.log(str);
}

