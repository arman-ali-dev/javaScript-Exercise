// ! Q.1 Write a function that uses the call method to print the name of an object.
// function test(obj) {
//     console.log(this.Name);
// }
// const obj = {
//     Name: "Arman"
// }
// test.call(obj)

// ! Q.2 Write a function that uses the apply method to find the minimum value in an array of numbers.
//     function test(arr) {
//         const min = Math.min.apply(null, this)
//         console.log(min);
//     }

//     const arr = [5, 4, 1, 2, 3]
//    test.apply(arr);

// ! Q.3 Write a function that uses the call method to add two numbers together.

// function test(num1, num2) {
//     return num1 + num2
// }

// const ans = test.call(null, 5, 10)
// console.log(ans);

// ! Q.4 Write a function that uses the bind method to create a new function that always has a specific "this" value.

// function add(value) {
//     return this + value
// }

// const ans = add.bind(2)
// console.log(ans(10));

// ! Q.5 Write a function that uses the apply method to concatenate two arrays.

// function concatenateArray() {
//     const concatenate = arr1.concat(arr2)
//     return concatenate
// }
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const ans = concatenateArray.apply(arr1, arr2)
// console.log(ans);

// ! Q.6 Write a function that uses the bind method to create a new function that multiplies a number by a specified value.

// function fn(value, number) {
//     console.log(this * value * number);
// }

// const ans = fn.bind(10, 20)
// console.log(ans(1));

// ! Q.7 Write a function that uses the call method to find the length of a string.

// function test(str) {
//     console.log(str.length);
// }

// ! First Way
// test.call(null, "Arman")
// ! Second Way
// const str = "Arman"
// test(str)

// ! Q.8 Write a function that uses the apply method to find the sum of all numbers in an array.

//         function fn(){
//             let sum = this.reduce((prev, next) => prev + next)
// console.log(sum);
//         }
//         let arr = [1, 2, 3, 5]
//         fn.apply(arr)

/*
1. search
2. match
3. Closures
4. Currying
5. recursion
6. WeakSet
7. Internal Error
8. Range Error
9. URI Error
10.use strict
11.Symbol (ensuring privacy and uniqueness, and preventing name clashes)
*/