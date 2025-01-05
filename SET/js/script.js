// ! Q.1 Write a function that takes an array of Sets as an input and returns a new Set that contains only the elements that are present in all of the Sets.

// function unique_array() {
//     let set1 = new Set([1, 2, 3])
//     let set2 = new Set([4, 3, 5])
//     let set3 = new Set([3, 6, 7])
//     let set4 = new Set([4, 3, 1])
//     const arr = [set1, set2, set3, set4]

//     const uniqueValue = new Set(arr[0])
//     for (let value of arr) {
//         const common = new Set()

//         for (let elements of value) {
//             if (uniqueValue.has(elements)) {
//                 common.add(elements)
//             }
//         }

//         uniqueValue.clear()
//         for (let elem of common) {
//             uniqueValue.add(elem)
//         }
//     }

//     return uniqueValue
// }

// const ans = unique_array()
// console.log(ans);


// ! Q.2 Write a function that takes an array of numbers as an input and returns a new Set that contains only the numbers that are odd.

// function oddNumber(arr) {
//     let oddNum = new Set()
//     for (let elem of arr) {
//         if (elem % 2 !== 0) {
//             oddNum.add(elem)
//         }
//     }
//     return oddNum;
// }
// let arr = [1, 2, 3, 4, 5, 6]
// const result = oddNumber(arr)
// console.log(result);

// ! Q.3 Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set but not the second.

// function diffrentSet(set1, set2) {
//     let newSet = new Set()
//     for (let value of set1) {
//         if (!set2.has(value)) {
//             newSet.add(value)
//         }
//     }
//     return newSet
// }

// let set1 = new Set([1, 2, 3])
// let set2 = new Set([5, 1, 4])
// const ans = diffrentSet(set1, set2)
// console.log(ans);

// ! Q.4 Write a function that takes an array of Sets as an input and returns a new Set that contains only the unique elements across all of the Sets.


// function uniqueElementSet() {
// ! First Way
// let newSet = new Set([...set1, ...set2, ...set3])
// for (let elem of set1) {
//     if (set1.has(elem) !== set2.has(elem)) {
//         newSet.add(elem)
//     }
// }

// return newSet;

// ! Second Way
// const newSet = new Set()
// const arr = [set1, set2, set3]

// const ans = arr.forEach((value) => {
//     value.forEach((element) => {
//         newSet.add(element)
//     })
// });

// return newSet;

// ! Third Way
// const arr = [set1, set2, set3]
// const newSet = new Set()
// for (let value of arr) {
//     for (let element of value) {
//         newSet.add(element)
//     }
// }
// return newSet
// }

// let set1 = new Set([1, 2, 3])
// let set2 = new Set([2, 3, 4])
// let set3 = new Set([3, 4, 5])

// const answer = uniqueElementSet(set1, set2, set3)
// console.log(answer);

// ! Q.5 Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set and the second Set, but not in both.

// let set1 = new Set([1, 2, 3])
// let set2 = new Set([3, 4, 5])
// let newSet = new Set()

// let arr = [set1, set2]

// for (let value of arr) {
//     for (let element of value) {
//         if (newSet[element]) {
//             newSet.add(delete element)
//         }else{
//             newSet.add(element)
//         }
//     }
// }

// console.log(newSet);

// ! Q.6 Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set and the second Set, but not in both.

// function diffSet(set1, set2) {
//     let newSet = new Set()

//     for (let element of set1) {
//         if (!set2.has(element)) {
//             newSet.add(element)
//         }
//     }

//     for (let element of set2) {
//         if (!set1.has(element)) {
//             newSet.add(element)
//         }
//     }

//     return newSet
// }

// let set1 = new Set([1, 2, 3])
// let set2 = new Set([3, 4, 5])
// const result = diffSet(set1, set2)
// console.log(result);