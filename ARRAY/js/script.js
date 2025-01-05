// ! Q.1 Create an array with three elements and print out the second element.

// const arr = [10, 20, 30]
// console.log(arr[1])

// ! Q.2 Create an array with five elements and print out the length of the array.

// const arr = [10, 20, 30, 40, 50]
// console.log(arr.length)

// ! Q.3 Create an array with four elements and print out each element using a for loop.

// const arr = [10, 20, 30, 40]
// for (let i = 0; i < arr.length; ++i) {
//     console.log(arr[i])
// }

// ! Q.4 Create an array with six elements and print out each element using a forEach loop.

// const arr = [10, 20, 30, 40, 50, 60]
// arr.forEach((value) => {
//     console.log(value)
// })

// ! Q.5 Create an array with three elements and add a fourth element to the end of the array.

// const arr = [10, 20, 30,]
// arr.push(40)
// console.log(arr);

// ! Q.6 Create an array with four elements and remove the second element.

// const arr = [10, 20, 30, 40]
// arr.splice(1, 1)
// console.log(arr)

// ! Q.7 Create an array with five elements and remove the last element.

// const arr = [10, 20, 30, 40, 50]
// arr.pop()
// console.log(arr)

// ! Q.8 Create an array with three elements and check if the array includes a specific value.

// const arr = [10, 20, 30]

// if (arr.includes(30)) {
//     console.log("Yes")
// } else {
//     console.log("No");
// }

// ! Q.9 Create an array with five elements and sort the array in ascending order.

// const arr = [10, 2, 1, 44, 21]
// const ans = arr.sort(function (x, y) {
//     return x - y
// })
// console.log(ans)

// ! Q.10 Create an array with five elements and sort the array in descending order.

// const arr = [10, 2, 1, 44, 21]
// function sortFn(x, y) {
//     return y - x
// }
// console.log(arr.sort(sortFn))

// ! Q.11 Create two arrays, concatenate them and print out the resulting array.

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// console.log(arr1.concat(arr2));

// ! Q.12 Create an array with three elements and convert it to a string.

// let arr = [1, 2, 3]
// console.log(arr.toString())

// ! Q.13 Create an array with four elements and reverse the order of the elements.

// let arr = [1, 2, 3, 4]
// console.log(arr.reverse());

// ! Q.14 Create an array with five elements and find the index of a specific value.

// let arr = [10, 20, 30, 40, 50]

// console.log(arr.findIndex((value) => {
//     return value > 10
// }))

// ! Second Way
// const arr = [10, 23, 5, 67, 8]
// let num = 23;
// for (let i = 0; i < arr.length; ++i) {
//     if (num === arr[i]) {
//         console.log(i)
//     }
// }

// ! Q.15 Create an array with six elements and slice the array
// ! to create a new array with the first three elements.

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice(0, 3));

// ! Q.16 Create an array with six elements and use the map method to double each element.

// let arr = [1, 2, 3, 4, 5, 6]
// let mapFn = ((value) => {
//     return value * 2
// })
// console.log(arr.map(mapFn))

// ! Q.17 Create an array with four elements and use the while loop to calculate the sum of all elements.

// let arr = [1, 2, 3, 4];
// let i = 0;
// let sum = 0;
// while (i < arr.length) {
//     sum += arr[i]
//     ++i
// }

// console.log(sum)

// ! Q.18 Create an array with five elements and use the filter method to return only the even numbers.

// let arr = [10, 21, 33, 47, 50]

// let filterEven = (value) => {
//     if (value % 2 === 0) {
//         return value
//     }
// };

// console.log(arr.filter(filterEven));

// ! Q.19 Create an array with three elements and use the join
// ! method to concatenate the elements with a dash (-) separator.

// let arr = [10, 9, 57]
// console.log(arr.join("-"));

// ! Q.20 Create two arrays with three elements each and use
// ! the concat method to combine them into a new array.

// let arr1 = [20, 79, 57]
// let arr2 = [40, 67, 59]

// console.log(arr1.concat(arr2))

// ! Q.21 Create an array called fruits that contains the following elements:
// ! "apple", "banana", "orange". Now check if "orange" is in the fruits array.

// let arr = ["apple", "banana", "orange"]
// console.log(arr.includes("orange"))

// ! Q.22 Given an array of numbers, write a function that
// ! returns the sum of all the even numbers in the array.

// function evenNum() {
//     let arr = [1, 2, 3, 4, 5]
//     let sum = 0;
//     for (let value of arr) {
//         if (value % 2 === 0) {
//             sum += value
//         }
//     }
//     return sum;
// }

// console.log(evenNum())

// ! Q.23 Given two arrays of numbers, write a function that returns a
// ! new array that contains only the unique elements from both arrays.

// function uniqueNum() {
//     let arr1 = [1, 2, 3, 4]
//     let arr2 = [3, 4, 5, 6]
//     let merge = new Set([...arr1, ...arr2])
//     return [...merge]
// }
// console.log(uniqueNum())

// ! Q.24 Given an array of strings, write a function that returns the longest string in the array.

// function longestStr() {
//     let arr = ["Arman", "Ali", "Khan"]
//     let longestWord = ""
//     for (let word of arr) {
//         if (longestWord.length < word.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }

// console.log(longestStr())

// ! Q.25 Write a function that takes an array of numbers and returns the largest number in the array.

// function largestNum() {
//     let arr = [1, 2, 30, 40, 5];
//     let longestNum = arr[0];
//     for (let value of arr) {
//         if (value > longestNum) {
//             longestNum = value
//         }
//     }
//     return longestNum
// }

// const ans = largestNum()
// console.log(ans);

// ! Q.26 Write a function that takes an array of numbers and returns a
// ! new array that only contains the even numbers from the original array.

// function evenNum() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//     let even = (value) => {
//         return value % 2 === 0
//     }
//     return arr.filter(even)
// }
// console.log(evenNum())

// ! Q.27 Write a function that takes an array of strings and returns
// ! a new array that only contains strings with more than 5 characters.

// function reString() {
//     let arr = ["apple", "banana", "orange", "kiwi", "strawberry"]
//     console.log(arr.filter((value) => {
//         if (value.length > 5) {
//             return value
//         }
//     }))
// }
// reString()

// ! Q.28 Write a function that takes two arrays of numbers and returns
// ! a new array that contains the intersection of the two arrays (i.e.
// ! only the numbers that appear in both arrays).

// function intersectionELement() {
//     let arr1 = [1, 2, 3, 4, 5];
//     let arr2 = [5, 6, 3, 8, 9]
//     let intersection = [];
//     for (let i = 0; i < arr1.length; ++i) {
//         if (arr2.includes(arr1[i])) {
//             intersection.push(arr1[i])
//         }
//     }
//     return intersection
// }

// console.log(intersectionELement());

// ! Q.29 Write a function that takes an array of numbers and returns a
// ! new array where each element is the square of the original element

// function squareArr() {
// let arr = [1, 2, 3, 4, 5];
// ! First Way
// console.log(arr.map(function (value) {
//     return value * value
// }))
// ! Second Way
//     let square = []
//     for (let i = 0; i < arr.length; ++i) {
//         square.push(arr[i] * arr[i])
//     }
//     console.log(square)
// }

// squareArr()

// ! Q.30 Write a function that takes an array of numbers
// ! and returns the average of all the numbers in the array.

// function everage(arr) {
//     const ans = ((prev, curr) => {
//         return prev + curr
//     })
//     console.log(arr.reduce(ans) / arr.length)
// ! Second Way
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) {
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

// const arr = [1, 2, 3, 4, 5]
// console.log(everage(arr))

// ! Q.31 Write a function that takes an array of numbers and returns a new
// ! array that only contains numbers that are greater than 5. Use filter function

// function filetrFn(arr) {
//     const ans = ((value) => {
//         return value > 5
//     })
//     console.log(arr.filter(ans))
// }

// let arr = [3, 4, 5, 6, 7, 8]
// filetrFn(arr)

// ! Q.32 Write a function that takes an array of numbers and returns a new
// ! array where each element is the original element plus 1. use map function

// function plus(arr) {
//     const ans = ((value) => {
//         return value + 1
//     })
//     console.log(arr.map(ans))
// }

// let arr = [1, 2, 3, 4, 5]
// plus(arr)

// ! Q.33 Write a function that takes an array of numbers and returns
// ! a new array that contains only the unique numbers using reduce.

// function getUniqueElement(arr) {
//     return arr.reduce((result, curr) => {
//         if (result.indexOf(curr) === -1) {
//             result.push(curr)
//         }
//         return result
//     }, [])
// }

// let arr = [1, 2, 3, 4, 1, 2, 5]
// console.log(getUniqueElement(arr))

// ! Q.34 Write a function that takes an array of strings and returns
// !  the total number of characters in all the strings using reduce.

// function countChar(arr) {
//     return arr.reduce((str, curr) => str + curr.length, 0)
// }
// let arr = ["Arman", "Ali", "Khan"]
// console.log(countChar(arr))

// ! Q.35 Write a function that takes an array of strings and sorts them by their length in ascending order.

// ! Example usage
// * let strings = ["apple", "banana", "cherry", "date"];
// * console.log(sortStringsByLength(strings)); // Output: ["date", "apple", "cherry", "banana"]

// function ascendingStr(arr) {
//     return arr.sort((x, y) => {
//         return x.length - y.length
//     })
// }

// let arr = ["apple", "banana", "cherry", "date"];
// console.log(ascendingStr(arr));

// ! Q.36 Write a function that takes an array of numbers and returns the second highest number.

// function highestNum(arr) {
//     arr.sort((a, b) => b - a)
//     return arr[1]
// }

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(highestNum(arr))

// ! Q.37 Write a function that takes an array of numbers and returns a new array with all the unique numbers.

// function uniqueNum() {
//     let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3]
//     return arr.reduce((prev, curr) => {
//         if (prev.indexOf(curr) === -1) {
//             prev.push(curr)
//         }
//         return prev
//     }, [])
// }

// console.log(uniqueNum())

// ! Q.38 Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

// ! First Way
// function string(arr) {
//     let finalsArr = []
//     for (let char of arr) {
//         if (char.includes("a")) {
//             finalsArr.push(char)
//         }
//     }
//     return finalsArr

// }
// let arr = ["Hello", "Javascipt"]
// console.log(string(arr));

// ! Second Way
// function string(arr) {
//     return arr.filter((value) => value.includes("a"))
// }
// let arr = ["Hello", "Javascipt"]
// console.log(string(arr));

// ! Q.39 Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

// function ascendingArr(arr) {
//     return arr.sort((x, y) => x - y)
// }
// let arr = [3, 54, 2, 34, 5, 3, 45, 6, 7, 8]
// console.log(ascendingArr(arr));

// ! Q.40 Write a function that takes an array of strings and flattens each string
// ! into an array of characters, then flattens the result into a single array.

// ! Example usage
// * let arr = ['hello', 'world'];
// * console.log(flattenStrings(arr)); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// function flattenString() {
// return arr.reduce((prev, curr) => {
//     prev.split("")
//     curr.split("")
//     return [...prev, ...prev]
// })
// ! Second Way
//     return arr.map((value) => value.split('')).reduce((prev, curr) => prev.concat(curr))
// }

// let arr = ['hello', 'world'];
// console.log(flattenString(arr));

// ! Q.41 Imagine you have an array of numbers representing daily temperatures for a week.
// ! How would you find the highest temperature recorded during the week using JavaScript?

// const temp = [10, 5, 20, 60, 67, 40, 50]
// const ans = temp.reduce((prev, curr) => {
//     if (prev < curr) {
//         return curr
//     } else {
//         return prev
//     }
// }, 0)

// console.log(ans);

// ! Q.42 You have an array of strings containing the names of students in a class.
// ! How would you add a new student's name to the end of the array using JavaScript?

// const studentNames = ["arman", "Harsh", "Vaibhav"]
// studentNames.push("Ayan", "Shaban")
// console.log(studentNames)

// ! Q.43 You have an array of objects, where each object represents a product with properties like name, price, and quantity. How would you calculate the total cost of all the products in the array using JavaScript?

// const arr = [{
//     product: "Leptop",
//     price: 40000,
//     quantity: 8,
// },
// {
//     product: "phone",
//     price: 15000,
//     quantity: 6,
// }, {
//     product: "t.v",
//     price: 30000,
//     quantity: 3,
// },]

// const ans = arr.map((value) => {
//     return value.price * value.quantity
// }).reduce((prevTotal, currTotal) => {
//     return prevTotal + currTotal
// })

// console.log(ans);

// ! Q.44 print each element of the array, but only if it's numbered.

// let arr = [1, "Two", 3, "Four", 5]
// let numArr = []
// for (let element of arr) {
//     if (typeof element === 'number') {
//         numArr.push(element)
//     }
// }
// console.log(numArr);

// ! Q.45 Count the different types of elements included in an array.

// let arr = [1, "Arman", 2, "Ali", "Khan", false, true, { Name: "Arman", Age: 17 }, [1, 3, 4], null]

// let count = {
//     number: 0,
//     string: 0,
//     boolean: 0,
//     object: 0,
//     array: 0,
//     undefined: 0,
//     null: 0
// }

// for (let word of arr) {
//     let type = typeof word;
//     if (Array.isArray(word)) {
//         type = 'array'
//     } else if (word === null) {
//         type = 'null'
//     }
//     count[type]++
// }

// for (let value in count) {
//     console.log(`${value}: ${count[value]}`);
// }

// ! Q.46 Write a function that takes an array of strings as an input and returns a new array where each string has been capitalized (i.e. the first letter of  each word is capitalized).

// function capitalizedStr(arr) {
// ! First Way
// const newArr = []
// for (let word of arr) {
//     if (typeof word === 'string') {
//         let ans = word.charAt(0).toUpperCase() + word.slice(1)
//         newArr.push(ans)
//     }
// }
// return newArr

// ! Second way
// return arr.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
// }

// const arr = ["arman", "ali", "Khan"]
// const result = capitalizedStr(arr)
// console.log(result);

// ! Q.47 Write a function that takes an array of numbers as an input and returns the highest product of any three numbers in the array.

// ! Q.48 Write a function that takes two arrays as inputs and returns a new array that contains only the elements that are present in both arrays, with no duplicates.

// function removeDuplicate(arr1, arr2) {
//     let seen = [];

//     for (let value of arr1) {
//         seen[value] = true
//     }

//     let result = []
//     for (let element of arr2) {
//         if (seen[element]) {
//             result.push(element)
//         }
//     }
//     return result
// }

// let arr1 = [1, 2, 3, 4, 5, 8]
// let arr2 = [4, 5, 6, 7, 8]
// const answer = removeDuplicate(arr1, arr2)
// console.log(answer);

// ! Q.49 Write a function that takes an array of strings as an input and returns a new array that contains only the strings that are palindromes (i.e. they are the same forwards and backwards).

// function palindromicArray(arr) {
//     return arr.filter((value) => {
//         return value === value.split("").reverse().join("")
//     })
// }

// let arr = ["arman", "hannah", "khan", "level"]
// const result = palindromicArray(arr)
// console.log(result);

// ! Q.50 Write a function that takes an array of numbers as an input and returns a new array where each number has been multiplied by 2 if it is even, or by 3 if it is odd.

// function transform_array() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     return arr.map((value) => {
//         if (value % 2 === 0) {
//             return value * 2
//         } else {
//             return value * 3
//         }
//     })
// }

// const result = transform_array()
// console.log(result);

// ! Q.51 Given an array numbers, how do you add a new element 5 to the end of the array?

// const arr = [1, 2, 3, 4]
// arr.push(5)
// console.log(arr);

// ! Q.52 How can you check if an array fruits contains the value "apple"?

// const arr = ["banana", "apple", "kivi", "orange"]
// console.log(arr.includes("apple"));

// ! Q.53 What method can you use to remove the last element from an array colors?

// const arr = ['black', "white", 'pink', 'blue', 'red']
// arr.pop()
// console.log(arr);

// ! Q.54 How do you find the number of elements in an array grades?

// const arr = [1, "Aramn", true]
// console.log(arr.length);

// ! Q.55 Given an array words, how can you join all its elements into a single string separated by commas?

// const arr = ["Arman", "Ali", "Khan"]
// console.log(arr.join(","));

// ! Q.56 Given an array fruits, how do you add a new element "banana" to the beginning of the array?

// const arr = ["apple", "orange", "mango", "grapes"]
// arr.unshift("banana")
// console.log(arr);

// ! Q.57 How can you check if an array numbers is empty (contains no elements)?

// const arr = []
// if (arr.length === 0) {
//     console.log("yes, Array Is Empty");
// } else {
//     console.log("No, Array Is NOT Empty");
// }

// ! Q.58 What method can you use to remove the first element from an array animals?

// const arr = ["Monkey", "Cat", "Lion"]
// arr.shift()
// console.log(arr);

// ! Q.59 How do you find the largest number in an array scores?

// const arr = [1, 2, 10, 4, 3, 5, 50]

// ! First Way
// let largestNum = 0
// for (let element of arr) {
//     if (element > largestNum) {
//         largestNum = element
//     }
// }

// console.log(largestNum, "Number Is Largest In This Array...");

// ! Second Way
// console.log(Math.max(...arr));

// ! Q.60 Given an array names, how can you add multiple names, "Alice" and "Bob", to the end of the array in one step?

// const arr = ["Arman Khan", "Jhon Doe", "Jack"]
// arr.push("Alice", "Bob")
// console.log(arr);

// ! Q.61 Write a function that takes an array of numbers and returns the sum of all the positive numbers in the array.

// function positiveNumArray(arr) {
//     const positiveArr = []
//     for (let elem of arr) {
//         if (elem > 0) {
//             positiveArr.push(elem);
//         }
//     }

//     return positiveArr
// }

// const arr = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5]
// const ans = positiveNumArray(arr)
// console.log(ans);

// ! Q.62 Given an array names, how can you create a new array containing only the names that start with the letter "A"?

// const arr = ["Arman", "Ali", "Khan"]
// let newArr = []
// for (let elem of arr) {
//     if (elem.charAt(0) === "A") {
//         newArr.push(elem)
//     }
// }

// console.log(newArr);

// ! Q.63 How do you reverse the order of elements in an array characters?

// const arr = ["Arman", "Khan"]
// let newArr = []
// for (let elem of arr) {
//     const reverse = elem.split("").reverse().join("")
//     newArr.push(reverse)
// }

// console.log(newArr);

// ! Q.64 Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.

// function alphabeticalOrderArray(arr) {
//     return arr.sort()
// }

// const arr = ["Khan", "Jagir", "Abdul", "ALi", "Arman"]
// const ans = alphabeticalOrderArray(arr)
// console.log(ans);

// ! Q.65 Given an array numbers, how can you find the index of the first occurrence of the number 7?

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr.indexOf(7));

// ! Q.66 Write a function that takes an array of strings and returns the longest string in the array.

// function findLongestStrInArray(arr) {
//     let longestStr = ""
//     for (let elem of arr) {
//         if (elem.length > longestStr.length) {
//             longestStr = elem
//         }
//     }

//     return longestStr
// }

// const arr = ["Apple", "Banana", "Orange", "Pomigranet", "Grapes"]
// const result = findLongestStrInArray(arr)
// console.log(result);

// ! Q.67 Given two arrays, arr1 and arr2, how can you combine them into a single array combinedArray?

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const combineArray = [...arr1, ...arr2]
// console.log(combineArray);

// ! Q.68 How do you remove all duplicate values from an array values?

// const arr = [1, 2, 3, 4, 2, 3, 1]
// ! First Way
// const set = new Set(arr)
// console.log([...set]);

// ! Second Way
// const ans = arr.filter((element, index, arr) => {
//     return arr.indexOf(element) === index
// })

// console.log(ans);

// ! Q.69 Write a function that takes an array of objects representing people with name, age, and city properties and returns an array of just the names.

// function differentArray(arr) {
//     return arr.map((arr) => {
//         return arr.Name
//     })
// }

// const arr = [{
//     Name: "Arman Khan",
//     Age: 17,
//     City: "Jaipur"
// },
// {
//     Name: "Ayan",
//     Age: 20,
//     City: "Tonk"
// },
// {
//     Name: "Shaban",
//     Age: 15,
//     City: "Kota"
// }
// ]

// const result = differentArray(arr)
// console.log(result);

// ! Q.70 Given an array numbers, how do you find the sum of all even numbers in the array?

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const result = arr.filter(element => element % 2 === 0).reduce((prev, next) => prev + next, 0)
// console.log(result);

// ! Q.71 Write a function that takes an array of numbers and returns a new array with only the unique values (no duplicates).

// function getUniqueElement(arr) {
// ! First Way
// const uniqueElement = new Set(arr)
// return [...uniqueElement]

// ! Second Way
//     return arr.filter((element, index, arr) => arr.indexOf(element) === index)
// }

// const arr = [1, 2, 3, 1, 5, 4, 2, 6]
// const result = getUniqueElement(arr)
// console.log(result);

// ! Q.72 How can you implement a custom map function that works like the built-in Array.prototype.map?

// function customMap(arr) {
//     let newArr = []
//     for (let element of arr) {
//         newArr.push(element * 2)
//     }

//     return newArr
// }

// const arr = [1, 2, 3, 4, 5]
// const result = customMap(arr)
// console.log(result);

// ! Q.73 Write a function that takes two arrays, arr1 and arr2, and returns a new array containing the elements that appear in both arrays (intersection).

// function uniqueElement(arr1, arr2) {
// ! First Way
// let newArr = []
// const set1 = new Set(arr1)
// const set2 = new Set(arr2)
// for (let elem of set1) {
//     if (set2.has(elem)) {
//         newArr.push(elem)
//     }
// }

// return newArr

// ! Second Way
//     for(let elem of arr1){
//         if(arr2.includes(elem)){
//              newArr.push(elem)
//         }
//     }

//     return newArr
// }

// const arr1 = [1, 2, 3, 4]
// const arr2 = [3, 4, 5, 6]
// const result = uniqueElement(arr1, arr2)
// console.log(result);

// ! Q.74 Given an array of objects people, how can you find the person with the highest age?

// const people = [{
//     Name: "Arman",
//     Age: 17,
// },
// {
//     Name: "Ayan",
//     Age: 15,
// },
// {
//     Name: "Shaban",
//     Age: 18,
// }]

// let maxAgePerson = people[0]

// for (let i = 0; i < people.length; i++) {
//     if (people[i].Age > maxAgePerson.Age) {
//         maxAgePerson = people[i]
//     }
// }

// console.log(maxAgePerson);

// ! Q.75 Write a function that takes an array of numbers and returns the median (middle value) of the numbers.

// function medianValue() {
//     arr.sort((a, b) => a - b)
//     const length = arr.length
//     const middleIndex = Math.trunc(length / 2)
//     if (length % 2 === 0) {
//         return (arr[middleIndex - 1] + arr[middleIndex]) / 2
//     } else {
//         return arr[middleIndex]
//     }
// }

// let arr = [1, 10, 5, 6, 3, 8, 4, 9, 2]
// console.log(medianValue());

// ! Q.76 Write a function that takes an array of objects representing books with title, author, and publicationYear properties and returns an array of books published before the year 2000.

// function getPublicationYear(books) {
//     return books.filter((books) => {
//         return books.publicationYear > 2000
//     })
// }

// const books = [
//     { title: "First Flying", author: "Harivansh Rai Bachhan", publicationYear: 1980 },
//     { title: "#AWD", author: "Arman Khan", publicationYear: 2024 },
//     { title: "htm5", author: "Team Berers lee", publicationYear: 2005 }
// ]

// const ans = getPublicationYear(books)
// console.log(ans);

// ! Q.77 How can you implement a custom filter function that works like the built-in Array.prototype.filter?

// function customFilter(arr) {
//     let newArr = []
//     for (let elem of arr) {
//         if (elem > 2) {
//             newArr.push(elem)
//         }
//     }

//     return newArr
// }

// let arr = [1, 2, 3, 4, 5]
// const answer = customFilter(arr)
// console.log(answer);

// ! Q.78 Write a function that takes an array of numbers and returns a new array with the numbers squared.

// function squareArr(arr) {
//     return arr.map((value) => value ** 2)
// }

// const arr = [1, 2, 3, 4, 5]
// const result = squareArr(arr)
// console.log(result);

// ! Q.79 Given two sorted arrays, arr1 and arr2, write a function to merge them into a single sorted array.

// const arr1 = [10, 20, 30, 40, 50]
// const arr2 = [11, 22, 33, 44, 55]
// const merge = [...arr1, ...arr2]
// const result = merge.sort((a, b) => a - b)
// console.log(result);

// ! Q.80 Write a function that takes an array of words and returns an object that counts how many times each word appears in the array.

// const arr = ["Arman", "Ali", "Khan", "Ayan", "Ali", "Khan"]

// ! First Way
// let obj = {}

// for (let word of arr) {
//     obj[word] = obj[word] ? obj[word] + 1 : 1
// }

// console.log(obj);

// ! Second Way

// for (let word of arr) {
//     if (obj[word]) {
//         obj[word]++
//     } else {
//         obj[word] = 1
//     }
// }

// console.log(obj);

// ! Q.81 how to find missing elements in array?

// let arr = [1, 2, 3, 4, 5, 6, 9, 10];

// let maxNum = Math.max(...arr);
// let minNum = Math.min(...arr)
// let missingElement = [];

// for (let i = minNum; i < maxNum; i++) {
//     if (arr.indexOf(i) < 0) {
//         missingElement.push(i)
//     };
// }

// console.log(missingElement);

// ! Q.82 How To Find Factorial Number?

// let num = +prompt("Enter a number...");
// let factorialNumber = 1;

// for (let i = 1; i <= num; i++) {
//     let num = i;
//     factorialNumber = factorialNumber * num
// }

// if (factorialNumber <= 1) {
//     console.log(`${num} is NOT a factorial number!`);
// } else {
//     console.log(`${num} is a factorial number...`);
// }

// ! Q.83 How to find prime number?

// let num = 8;

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         var result = `${num} is NOT a PRIME number...`
//     } else {
//         var result = `${num} is a PRIME prime number`
//     }
// }

// console.log(result)

// ! Q.84 how to find vowels in giving string.

// let str = "my name is arman khan."
// let vowels = "";

// for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (char === "a" || char === "e" ||
//         char === "i" || char === "o" ||
//         char === "u") {
//         vowels += char
//     }
// }

// console.log(vowels);

// ! Q.85 Move Zeros: Write a function to move all 0's to the end of an array while maintaining the relative order of the non-zero elements. For example, if the input array is [0, 1, 0, 3, 12], the output should be [1, 3, 12, 0, 0].

// let arr = [0, 1, 0, 3, 12];
// let leftArr = [];
// let rightArr = [];

// for (let element of arr) {
//     if (element === 0) {
//         rightArr.push(element)
//     } else {
//         leftArr.push(element)
//     }
// }

// let newArr = leftArr.concat(rightArr);
// console.log(newArr);

// ! Q.86 Kth Largest Element: Write a function to find the kth largest element in an unsorted array. For example, if the input array is [3, 2, 1, 5, 6, 4] and k is 2, the output should be 5 (as the second largest element).

// let arr = [3, 2, 1, 5, 6, 4]

// let sortedArray = arr.sort((a, b) => b - a);
// let secondLargestNumber = sortedArray[1];
// console.log(secondLargestNumber);

// ! Q.87 Find all the duplicates in an array of integers where each integer is in the range 1 to n, where n is the length of the array, with multiple duplicates possible.

// let arr = [3, 5, 1, 2, 3, 6, 1];
// let sortedArray = arr.sort((a, b) => a - b)
// let duplicateElements = [];

// for (let i = 0; i < sortedArray.length - 1; i++) {
//     if (sortedArray[i] === sortedArray[i + 1]) {
//         duplicateElements.push(sortedArray[i])
//     }
// }

// console.log(duplicateElements);

// ! Q.88 Create a function to filter out strings longer than a specified length from an array of strings.

// let arr = ["Arman", "Vaibhav", "Harsh", "Arshad", "Sohail"];
// let length = 5;

// console.log(arr.filter((element) => element.length === length));

// ! Q.89 Implement a function to filter out prime numbers from an array of integers.

// let arr = [2, 3, 5, 6, 7, 8];

// let primeNumbers = arr.filter((n, index) => {
//     console.log(n, index);
// })
// console.log(primeNumbers);

// ! Q.90 Given an array of integers, write a function to remove all elements that appear more than once, leaving only the unique elements.

// ! For Example :-
// * let array = [1, 2, 3, 2, 4, 5, 1, 6, 7];
// * Output should be [3, 4, 5, 6, 7]

// function uniqueValue() {
//     let array = [1, 2, 3, 2, 4, 5, 1, 6, 7];

//     return array.filter((element) => array.indexOf(element) == array.lastIndexOf(element))

// }

// const result = uniqueValue();
// console.log(result);

// ! Q.91 Given an array of numbers, find the second largest number in the array.

// let arr = [5, 1, 4, 8, 3, 7, 7, 8, 6, 3];
// let newArr = [...new Set(arr)];

// ! First Way
// let sortedArray = newArr.sort((a, b) => b - a)
// let secondLargestNumber = sortedArray[1];
// console.log(secondLargestNumber);

// ! Second Way
// let largestNumber = 0;
// let secondLargestNumber = 0;
// for (let elem of newArr) {
//     if (largestNumber < elem) {
//         largestNumber = elem;
//     }
// }

// for (let elem2 of newArr) {
//     if (elem2 != largestNumber) {
//         if (elem2 > secondLargestNumber) {
//             secondLargestNumber = elem2;
//         }
//     }
// }

// console.log(`Largest number in the array: ${largestNumber}`);
// console.log(`Second largest number in the array: ${secondLargestNumber}`);

// ! Q.92 Write a function to rotate an array to the right by a given number of steps.

// * Example: [1, 2, 3, 4, 5], steps = 2
// * Output: [4, 5, 1, 2, 3]

// const rotateInSteps = (arr, steps) => {
//     let indexDiffrence = arr.length - steps;
//     let firstHalf = arr.slice(indexDiffrence)
//     let secondHalf = arr.slice(0, indexDiffrence)
//     return [...firstHalf, ...secondHalf]
// };

// const result = rotateInSteps([1, 2, 3, 4, 5], 2);
// console.log(result);

// ! Q.93 Given two arrays [1, 2, 3, 4] and [3, 4, 5, 6], find the common elements between them to get [3, 4].

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let duplicateElements = [];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//         duplicateElements.push(arr1[i])
//     }
// }

// console.log(duplicateElements);

// ! Q.94 Given a nested array [1, [2, 3], [4, [5, 6]]], flatten it to get [1, 2, 3, 4, 5, 6].

let arr = [1, [2, 3], [4, [5, 6]]];

// ! First Way
// let flattenArray = arr.flat(2);
// console.log(flattenArray);

// ! Second Way
// let flattenArray = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (Array.isArray(arr[i])) {
//       flattenArray.push(...arr[i]);
//     } else {
//       flattenArray.push(arr[i]);
//     }
//   }
// }

// console.log(flattenArray);
