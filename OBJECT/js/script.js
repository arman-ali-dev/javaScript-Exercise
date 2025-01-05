// ! Q.1 Create a book class that stores book names, author names, and prices. After that, create an object of the IS class and print its attributes to the console.

// const bookdetails = {
//     Name: "First Flight",
//     writerName: "Jhon Doe",
//     price: 100
// }

// console.log(`Book Name Is: ${bookdetails.Name}
// Book Writer Name Is: ${bookdetails.writerName}
// Book Price Name Is: ${bookdetails.price}`)

// ! Q.2 Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.

// function capitalizedObj(obj, newObj) {
//     for (let [keys, values] of Object.entries(obj)) {
//         if (typeof values === 'string') {
//             newObj[keys] = values.toUpperCase()
//         } else {
//             newObj[keys] = values
//         }
//     }
//     return newObj
// }

// let obj = {
//     Name: "arman khan",
//     Age: 17,
// }

// newObj = {}
// console.log(capitalizedObj(obj, newObj));

// ! Q.3 Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.

// function sameKeys() {
//     let obj1 = {
//         Name: "Arman",
//         LastName: "Khan"
//     }
//     let obj2 = {
//         Name: "Vaibhav",
//         Age: 18
//     }
//     let newObject = {}
//     for (let key of Object.keys(obj1)) {
//         if (obj2.hasOwnProperty(key)) {
//             newObject[key] = obj1[key]
//         }
//     }
//     return newObject
// }

// console.log(sameKeys());

// ! Q.4 Write a function that takes an array of objects as an input and returns a new array that contains only the objects that have unique values for a specified key. For example, if the input array contains objects with a "name" key, the function should return an array of objects with unique names.

// function filteredFun(arr, key) {
//     let uniquevalus = new Set()
//     let result = []
//     for (let val of arr) {
//         if (!uniquevalus.has(val[key])) {
//             uniquevalus.add(val[key])
//             result.push(val)
//         }
//     }
//     return result
// }

// const arr = [
//     { Name: "Arman", Age: 17 },
//     { Name: "Harsh", Age: 19 },
//     { Name: "Vaibhav", Age: 21 },
//     { Name: "Arman", Age: 18 }
// ]

// console.log(filteredFun(arr, "Name"));

// ! Q.5 Write a function that takes an object as an input and returns an array of all the keys in the object, sorted alphabetically.

// function sortedObj(obj) {
//     let arr = Object.keys(obj);
//     return arr.sort((a, b) => a.length - b.length)
// }
// const obj = {
//     Name: "Arman",
//     Age: 17,
//     MoibileNum: 7665407031
// }
// console.log(sortedObj(obj));

// ! Q.6 Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string. The original object should not be modified.

// function fn(obj, str) {
//     const newObj = {}
//     for (let key of Object.keys(obj)) {
//         if (key.charAt(0) === str) {
//             newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }
// const obj = {
//     Name: "Arman Khan",
//     Age: 17,
//     MobileNum: 7665407031,
//     Address: "Jhotwara, Jaipur"
// }
// const str = "A";
// const result = fn(obj, str)
// console.log(result);

// ! Q.7 Create an Object with your personal details. Now print all the keys of the object in ascending order.

// const personalDetails = {
//     fullName: "Arman Ali",
//     age: 17,
//     skills: ["html", "css", "bootstrap", "tailwind css", "javascript", "jquery", "react.js", "node.js", "express.js", "sql", "c", "java"],
// };

// let keys = Object.keys(personalDetails);

// keys.sort();

// for (let val of keys) {
//     console.log(val);
// }

// ! Q.8 Create an Object with your personal details. Now print all the keys of the object in ascending order.

// const personalDetails = {
//     fullName: "Arman Ali",
//     age: 17,
//     skills: ["html", "css", "bootstrap", "tailwind css", "javascript", "jquery", "react.js", "node.js", "express.js", "sql", "c", "java"],
// };


// let keys = Object.keys(personalDetails);
// keys.sort()

// for (let i = keys.length - 1; i >= 0; i--) {
//     console.log(keys[i]);
// }

// ! Q.9 Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.


// const obj = {
//     findMaxNumber(a, b, c) {
//         let maxNumber = Math.max(a, b, c);
//         return maxNumber;
//     }
// }

// const result = obj.findMaxNumber(1, 3, 2);
// console.log(result);