// ! Q.1 Write a function that takes an array containing [name, age, city] as input and destructures it to print "Name: [name], Age: [age], City: [city]".

// function arr(name, age, city){
// console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
// }

// arr("Arman", 17, "Jaipur")

// ! Q.2 Given an array of arrays representing 2D coordinates like [[1, 2], [3, 4], [5, 6]], use destructuring to extract and print each coordinate separately.

// function test(arr) {
//     for (let [x, y] of arr) {
//         console.log(`x = ${x} y = ${y}`);
//     }
// }

// test([[1, 2], [3, 4], [5, 6]])

// ! Q.3 Create an object representing a person with properties name, age, and address. Use object destructuring to print "Name: [name], Age: [age], Address: [address]".

// let obj = {
//     Name: "Arman",
//     Age: 17,
//     Address: "Jhotwara, Jaiipur"
// }
// const { Name, Age, Address } = obj
// console.log(`Name: ${Name}, Age: ${Age}, Address: ${Address}`);

// ! Q.4 iven a nested object representing a car { brand: 'Toyota', model: { name: 'Corolla', year: 2020 } }, use destructuring to extract and print the car model name and year.

// const car = {
// Brand : "Toyota",
// Model : {
//     Name : "Corolla",
//     Year : 2020
// }
// }

// const {Model: {Name, Year}} = car
// console.log(Name, Year);

// ! Q.5 Write a function that takes two arrays as arguments and concatenates them using the spread operator.

// function concatenates(arr1, arr2) {
//     console.log([...arr1, ...arr2]);
// }

// concatenates([1, 2, 3], [4, 5, 6])

// ! Q.6 Write a function that takes any number of arguments and returns their sum using the rest parameter.

// function test(...number) {
//     let sum = 0
//     number.forEach((value) => sum += value)
//     console.log(sum);
// }

// test(1, 2, 3, 4, 5)

// ! Q.7 Create a function that takes a string and uses the rest parameter to split it into individual characters.

// function fn(...str) {
//     str.forEach((value) => console.log(value.split(""))
//     )
// }
// fn("Arman", "Khan");

// ! Q.8 Write a function that checks if a variable is defined and has a value, otherwise assigns a default value using short-circuiting.

// function fn(value, defaultValue){
// return value !== undefined && value !== null ? value : defaultValue
// }

// let value = 20
// let defaultValue = "Default Value"

// console.log(fn(value, defaultValue));

// ! Q.9 Create a function that returns the first truthy value from a list of potential values using short-circuit evaluation.

// function fn() {
//     console.log(null || 10 || 0 || 20 || "" || false);
// }

// fn()

// ! Q.10 Write a function that returns either a provided value or a default value if the provided value is null or undefined using the nullish coalescing operator.

// function fn(value, defaultValue) {
//     return value ?? defaultValue
// }
// let value = null
// let defaultValue = "Default Value"
// const ans = fn(value, defaultValue)
// console.log(ans);

// ! Q.11 Create a function that accepts an object and a key, and returns the value of the key if it exists or a default value if it's null or undefined using the nullish coalescing operator.

// function fn(obj, defaultValue) {
//     return obj.Name ?? defaultValue
// }

// const obj = {
//     Age: 17
// }

// console.log(fn(obj, "Arman"));


// ! Q.12 Create a function that takes name and age as parameters and returns an object with these properties using enhanced object literals.

// function addInObj(name, age) {
//     const obj = {
//         name,
//         age
//     }
//     return obj
// }

// const ans = addInObj("Arman", 17);
// console.log(ans);

// ! Q.13 Given variables representing width and height, write a function that returns an object representing a rectangle with these properties using enhanced object literals.

// function createRectangle(height, width) {
//     return rectangle = {
//         width,
//         height,
//     }
// }

// const result = createRectangle(100, 200)
// console.log(result);


// ! Q.14 Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.

// function capitalizedValues(obj, newObj) {
//     for (let key of Object.keys(obj)) {
//         if (typeof obj[key] == 'string') {
//             newObj[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase();
//         } else {
//             newObj[key] = obj[key];
//         }
//     }

//     return newObj;
// }

// const obj = {
//     fullName: "arman ali",
//     age: 17,
//     skill: "javascript"
// };


// let result = capitalizedValues(obj, {});
// console.log(result);

// ! Q.15 Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.

// function getNewObject(firstObj, secondObj, newObj) {
//     for (let key of Object.keys(firstObj)) {
//         if (secondObj.hasOwnProperty(key)) {
//             newObj[key] = firstObj[key];
//         }
//     }
//     return newObj
// }


// const firstObj = {
//     fullName: "Arman Ali",
//     age: 17,
//     skill: "Javascript"
// };

// const secondObj = {
//     fullName: "Arman Ali Khan",
//     myAge: 19,
//     skill: "Java"
// };

// let result = getNewObject(firstObj, secondObj, {});
// console.log(result);

// ! Q.16 Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string. The original object should not be modified.

// function test(obj, newObj, str) {
//     for (let key of Object.keys(obj)) {
//         if (key.startsWith(str)) {
//             newObj[key] = obj[key]
//         }
//     }

//     return newObj
// }

// let obj = {
//     Name: "Arman",
//     Age: 17,
//     Arested: "Two Times"
// }

// let result = test(obj, {}, "A");
// console.log(result);

// ! Q.17 Write a function that takes an object as an input and returns an array of all the keys in the object, sorted alphabetically.

// function objKeyToArray(obj, arr) {
//     for (let key of Object.keys(obj)) {
//         arr.push(key)
//     }

//     arr.sort();
//     return arr;
// }

// const obj = {
//     Name: "Arman",
//     Age: 17,
//     Class: 12,
//     Skill: "Javascript"
// };

// const result = objKeyToArray(obj, []);
// console.log(result);