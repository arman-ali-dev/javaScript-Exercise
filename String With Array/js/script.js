// ! Q.1 Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

// ! First Way
// function reversedWord(str) {
//     let spread = [...str.split(" ")].map((value) => value.split("").reverse().join("")).join(" ")
//     console.log(spread);
// ! Second Way
// let finalStr = ""
// for (let word of spread) {
//     let reversed = word.split("").reverse().join("")
//     finalStr += reversed + " "
// }
// console.log(finalStr.trimEnd(""));
// }

// let str = "Hello World"
// reversedWord(str)

// ! Q.2 Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

//     function removeElement(arr) {
//         let [, ...remove] = arr
//         console.log(remove);
//     }
//     let arr = [1, 2, 3, 4, 5]
//     removeElement(arr)

// ! Q.3 Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

// function flatten(...arr) {
//     const flatten = [].concat(...arr)
//     console.log(flatten);
// }

// flatten([1, 2], [3, 4], [5, 6])

// ! Q.4 Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)


// function x(obj) {
//     return obj?.x ?? null
// }
// console.log(x({ x: "Arman" }));
// console.log(x({ y: "Arman" }));

// ! Q.5 Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

// function test(arr1) {
// ! First Way
// let arr2 = []
// let arr3 = []

// for (let value of arr1) {
//     if (value % 2 !== 0) {
//         arr2.push(value)
//     } else {
//         arr3.push(value)
//     }
// }
// console.log([...arr2, ...arr3]);

// ! Second Way
//     let arr2 = arr1.filter((value) => value % 2 !== 0)
//     let arr3 = arr1.filter((value) => value % 2 === 0)
//     console.log([...arr2, ...arr3]);
// }

// test([1, 2, 3, 4, 5, 6, 7, 8])

// ! Q.6 Create an array of numbers. Now change the position of each element with their next element.
// * For example: [1, 2, 3, 4, 5, 6, 7]
// ! Output: [2, 1, 4, 3, 6, 5, 7]

{
    {

        // function changePosition() {
        //     let arr = [1, 2, 3, 4, 5, 6, 7]
        //     const newArr = []
        //     for (let i = 0; i < arr.length; i += 2) {
        //         if (i === arr.length - 1) {
        //             newArr.push(arr[i])
        //         } else {
        //             newArr.push(arr[i + 1])
        //             newArr.push(arr[i])
        //         }
        //     }
        //     console.log(newArr);
        // }

        // changePosition()

        // ! Q.7 Ask user below questions
        // * What is your age: 12
        // * What is your mobile: 9581894461
        // * What is your address: Jaipur
        // * Now create an object and use enhanced object literal property computation to create below object

        // !     {
        // !         age12: 12
        // !         9581894461 : 'Mobile',
        // !             Jaipur12Address : 'Jaipur'
        // !     }

        // const age = +prompt("What is Your Age?")
        // const mobile = +prompt("What is Your Mobile Number?")
        // const address = prompt("What is Your Address?")

        // const obj = {
        //     ["age" + age]: age,
        //     [mobile]: "Mobile",
        //     ["japur12Address"]: address
        // }
        // console.log(obj);

        // ! Q.8 Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.

        // const obj = {
        //     sumOfAllElement(arr) {
        //         let sum = 0
        //         for (let element of arr) {
        //             sum += element
        //         }
        //         return sum
        //     }
        // }

        // const arr = [1, 2, 3, 4, 5, 6, 7, 8]
        // console.log(obj.sumOfAllElement(arr));

        // ! Q.9 Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible.

        // let num = 99
        // let check = num > 100 && 100 || 200
        // console.log(check);

        // ! Q.10 Create an array of 9 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0

        // *  Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        // *  Output: [1, 0, 1, 0, 1, 0, 1, 0, 1]

        // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        // let map = arr.map((value) => {
        //     if (value % 2 !== 0) {
        //         return value = 1
        //     } else {
        //         return value = 0
        //     }
        // })
        // console.log(map);

        // ! Q.11 Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.

        // const arr = [100, 250, 460, 510, 600]

        // const ans = arr.map((priceValue) => {
        // ! First Way
        // let addTax = priceValue + priceValue / 10
        // return addTax

        // ! Second Way
        // let addTax = priceValue * 1.1  
        // return addTax
        // })

        // console.log(ans);

        // ! Q.12 Given an array of strings, use reduce to return the total number of characters in all the strings.

        // const stringArr = ["Arman", "Ali", "Khan"]
        // const numOfStr = stringArr.reduce((prev, next) => prev + next.length, 0)
        // console.log(`Total Number Of String In The Array ${numOfStr}`);

        // ! Q.13 Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.

        // const stringArr = ["Armaan", "Ali", "Khan"]
        // const newArr = []
        // stringArr.map((value) => {
        //     if (value.length < 5) {
        //         return newArr.push(value)
        //     }
        // })
        // const ans = newArr.reduce((prev, next) => prev + next.length, 0)
        // console.log(ans);

        // ! Q.14 Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

        // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        // const ans = arr.filter((odd) => odd % 2 !== 0)
        //     .map((value) => value * 3)
        //     .reduce((prev, next) => prev + next, 0)
        // console.log(ans);

        // ! Q.15 Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

        // const str = "the quick brown fox"
        // const reverse = str.split(" ").reverse().join(" ")
        // console.log(reverse);
    }
}