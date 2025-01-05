// ! Q.1 Print Pattern

// *****
// ****
// ***
// **
// *

// for (let i = 1; i <= 5; ++i) {
//     let str = ''
//     for (let j = 1; j <= i; ++j) {
//         str += '*'
//     }
//     console.log(str)
// }

// ! Q.2 Print Pattern

//     *
//    **
//   ***
//  ****
// *****


// for (let i = 1; i <= 5; ++i) {
//     let str = '';
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }

// ! Q.3 Print Pattern

// * 1
// * 11
// * 111
// * 1111
// * 11111

// for (let i = 1; i <= 5; ++i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str = str.concat("1")
//     }
//     console.log(str)
// }

// ! Q.4 Print Pattern

// * ---

// * ---

// * ---

// for (let i = 1; i <= 3; ++i) {
//     console.log("-".repeat(3));
// }

// ! Q.5 Print Pattern

// ***
// ***
// ***
// ***

// for (let i = 1; i <= 4; ++i) {
//     console.log("*".repeat(4));
// }

// ! Q.6 Print Pattern

// * 12345
// * 1234
// * 123
// * 12
// * 1

// for (let i = 5; i >= 1; --i) {
//     let str = '';
//     for (let j = 1; j <= i; ++j) {
//         str += j
//     }
//     console.log(str);
// }


// ! Q.7 Print Pattern

// * 54321
// * 5432
// * 543
// * 54
// * 5

// for (let i = 1; i <= 5; ++i) {
//     let str = '';
//     for (let j = 5; j >= i; --j) {
//         str += j
//     }

//     console.log(str);
// }

// ! Q.8 Print Pattern

//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 1; i <= 5; ++i) {
//     let str = ""
//     for (let l = 4; l >= i; --l) {
//         str += " "
//     }
//     for (let k = 1; k <= i; ++k) {
//         str += "*"
//     }
//     for (let j = 1; j <= i - 1; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }

// ! Q.9 print Pattern

// *********
//  *******
//   *****
//    ***
//     *

// for (let i = 5; i >= 1; --i) {
//     let str = ""
//     for (let k = 4; k >= i; --k) {
//         str += ' '
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     for (let j = 1; j <= i - 1; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }


// ! Q.10 print Pattern

//      *
//     ***
//    *****
//   *******
//  *********
//  *********
//   *******
//    *****
//     ***
//      *

// for (let i = 1; i <= 5; ++i) {
//     let str = "";
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     for (let j = 1; j <= i - 1; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }
// for (let i = 5; i >= 1; --i) {
//     let str = "";
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     for (let j = 1; j <= i - 1; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }

// ! Q.11 Print Pattern

//  *********
//  **** ****
//  ***   ***
//  **     **
//  *       *
//  **     **
//  ***   ***
//  **** ****
//  *********

// for (let i = 5; i >= 1; --i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     if (i === 5) {
//         n = i - 1
//     } else {
//         n = i
//     }
//     for (let k = 3; k >= i; --k) {
//         str += " "
//     }
//     for (let m = 1; m <= n; ++m) {
//         str += "*"
//     }

//     console.log(str);
// }



// for (let i = 2; i <= 5; ++i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let k = 3; k >= i; --k) {
//         str += " "
//     }
//     if (i === 5) {
//         n = i - 1
//     } else {
//         n = i
//     }
//     for (let m = 1; m <= n; ++m) {
//         str += "*"
//     }

//     console.log(str);
// }

// ! Q.12 Print Pattern

// * 1 2 3 4 5
// *  2 3 4 5
// *   3 4 5
// *    4 5
// *     5

// for (let i = 5; i >= 1; --i) {
//     let str = "";
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += j + " "
//     }

//     console.log(str);
// }

// ! Q.13 Print pattern

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// for (let i = 1; i <= 5; ++i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }
// for (let i = 4; i >= 1; --i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }

// ! Q.14 10987654321

// * 987654321
// * 87654321
// * 7654321
// * 654321
// * 54321
// * 4321
// * 321
// * 21
// * 1

// for (let i = 9; i >= 1; --i) {
//     let str = "";
//     for (let j = i; j >= 1; --j) {
//         str += j
//     }
//     console.log(str);
// }

// ! Q.15 Print Pattern

// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****

// for (let i = 5; i >= 1; --i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 5; ++i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         str = str.concat("*")
//     }
//     console.log(str);
// }

// ! Q.16 Print Pattern

// * 54321
// * 4321
// * 321
// * 21
// * 1

// for (let i = 1; i <= 5; ++i) {
//     let str = "";
//     for (let j = 6 - i; j >= 1; --j) {
//         str += j
//     }
//     console.log(str);
// }

// ! Q.17 Print Pattern

// * 01
// * 0102
// * 010203
// * 01020304
// * 0102030405

// for (let i = 1; i <= 5; ++i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         str += "0" + j
//     }
//     console.log(str);
// }

// ! Q.18 Print Pattern

//  *       *
//  **     **
//  ***   ***
//  *********
//  ***   ***
//  **     **
//  *       *

// for (let i = 1; i <= 4; ++i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     if (i === 4) {
//         m = i + 1
//     } else {
//         m = i
//     }
//     for (let k = 4; k >= m; --k) {
//         str += " "
//     }

//     for (let k = 3; k >= i; --k) {
//         str += " "
//     }
//     if (i === 4) {
//         n = i + 1
//     } else {
//         n = i
//     }
//     for (let j = 1; j <= n; ++j) {
//         str += "*"
//     }

//     console.log(str);
// }
// for (let i = 3; i >= 1; --i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     for (let k = 2; k >= i; --k) {
//         str += " "
//     }
//     for (let k = 5; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += "*"
//     }
//     console.log(str);
// }

// ! Q.19 // ! Print Pattern

// * $$#$$#$$
// * $$#$$#
// * $$#$$
// * $$#
// * $$

// for (let i = 5; i >= 1; i--) {
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         if (j % 2 === 0) {
//             str += "#"
//         } else {
//             str += "$$"
//         }
//     }
//     console.log(str);
// }

// ! Q.20 Print Pattern

// * A
// * BB
// * CCC
// * DDDD
// * EEEEE

// for (let i = 1; i <= 5; i++) {
// * First Way
// if(i === 1){
//     console.log("A".repeat(i));
// }else if(i === 2){
//     console.log("B".repeat(i));
// } else if (i === 3) {
//     console.log("C".repeat(i));
// } else if (i === 4) {
//     console.log("D".repeat(i));
// } else if (i === 5) {
//     console.log("E".repeat(i));
// }

// * Second Way
// let str = '';
// for (let j = 1; j <= i; j++) {
//     if (i === 1) {
//         str += "A"
//     } else if (i === 2) {
//         str += "B"
//     } else if (i === 3) {
//         str += "C"
//     } else if (i === 4) {
//         str += "D"
//     } else if (i === 5) {
//         str += "E"
//     }
// }
// console.log(str);
// }

// ! Q.21 Print Pattern

//      *
//     * *
//    *   *
//   *     *
//  *       *
// ***********

// for (let i = 5; i >= 1; i--) {
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         str += " "
//     }
//     for (let m = 1; m <= 1; m++) {
//         str += "*"
//     }
//     for (k = 4; k >= i; k--) {
//         str += " "
//     }
//     for (k = 3; k >= i; k--) {
//         str += " "
//     }
//     for (let m = 1; m <= 1; m++) {
//         if (i !== 5) {
//             str += "*"
//         }
//     }

//     console.log(str);
// }
// for (let l = 1; l <= 1; ++l) {
//     console.log("*".repeat(11));
// }

// ! Q.22 Print Pattern

// *********
// **     **
// * *   * *
// *  * *  *
// *   *   *
// *  * *  *
// * *   * *
// **     **
// *********

// ! Practicle Way
// for (let i = 1; i <= 9; i++) {
//     let str = ""
//     for (let j = 1; j <= 9; j++) {
//         if (i === 1 || i === 9 || j === 1 || j === 9 || i === j || j == 9 - i + 1) {
//             str += "*"
//         } else {
//             str += " "
//         }
//     }
//     console.log(str);
// }

// ! Understand Way
// for (let i = 1; i <= 9; ++i) {
//     let str = ""
//     for (let j = 1; j <= 9; ++j) {
//         if (i === 1 || i === 9 || j === 1 || j === 9 || i === j || j === 9 - i + 1) {
//             str += (`<span class = "space2"> (${i}  ,${j})</span>`)
//         } else {
//             str += (`<span class = "space"> (${i}  ,${j})</span>`)
//         }
//     }
//     document.write(str + "<br>");
// }

// ! Q.23 Print Pattern

// *    1
// *   1 2
// *  1 2 3
// * 1 2 3 4

// for (let i = 1; i <= 4; i++) {
//     let str = "";
//     for (let k = 4; k >= i; k--) {
//         str += " "
//     }
//     for (let j = 1; j <= i; j++) {
//         str += j + " "
//     }
//     console.log(str);
// }

// ! Q.24 Print Pattern

// * 1
// * 2 3
// * 4 5 6
// * 7 8 9 10

// let count = 1;
// for (let i = 1; i <= 4; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += count + " "
//         count++
//     }
//     console.log(str);
// }

// ! Q.25 Print Pattern

// *    1
// *   2 2
// *  3 3 3
// * 4 4 4 4

// for (let i = 1; i <= 4; ++i) {
//     let str = ""
//     for (let k = 3; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= i; ++j) {
//         str += i + " "
//     }
//     console.log(str);
// }

// ! Q.26 Print Pattern

// * $##$##$
// * $##$##
// * $##$
// * $##
// * $

// for (let i = 5; i >= 1; --i) {
//     let str = "";
//     for (let j = 1; j <= i; ++j) {
//         if (j % 2 !== 0) {
//             str += "$"
//         } else {
//             str += "##"
//         }
//     }

//     console.log(str);
// }

// ! Q.27 Print Pattern

// *     1
// *    1 2
// *   1   3
// *  1     4
// * 1 2 3 4 5

// for (i = 1; i <= 4; ++i) {
//     let str = ""
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let j = 1; j <= 1; ++j) {
//         str += "1"
//     }
//     for (let k = 1; k < i; ++k) {
//         str += " "
//     }
//     for (let k = 2; k < i; ++k) {
//         str += " "
//     }

//     for (let j = 1; j <= 1; ++j) {
//         if (i !== 1) {
//             str += i
//         }
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 1; ++i) {
//     let str = ""
//     for (let j = 1; j <= 5; ++j) {
//         str += j + " "
//     }
//     console.log(str);
// }

// ! Q.28 Print Pattern

// * 1 2 3 4 5
// * 2      5
// * 3    5
// * 4  5
// * 5

// for (let i = 1; i <= 1; ++i) {
//     let str = ""
//     for (let j = 1; j <= 5; ++j) {
//         str += j + " "
//     }
//     console.log(str);
// }

// for (let i = 2; i <= 5; ++i) {
//     let str = ""
//     for (let j = 1; j <= 1; ++j) {
//         str += i + " "
//     }
//     for (let k = 4; k >= i; --k) {
//         str += " "
//     }
//     for (let k = 2; k >= i; --k) {
//         str += " "
//     }
//     for (let n = 1; n <= 1; ++n) {
//         if (i !== 5) {
//             str += "5"
//         }
//     }

//     console.log(str);
// }

// ! Q.29 Print Pattern

// * A
// * A B A
// * A B C B A
// * A B C D C B A
// * A B C D E D C B A

// for (let i = 1; i <= 5; ++i) {
//     let str = ""
//     for (let j = 1; j <= i; ++j) {
//         if (j === 1) {
//             str += "A" + " "
//         }
//         else if (j === 2) {
//             str += "B" + " "
//         }
//         else if (j === 3) {
//             str += "C" + " "
//         }
//         else if (j === 4) {
//             str += "D" + " "
//         }
//         else if (j === 5) {
//             str += "E" + " "
//         }
//     }

//     for (let m = 2; m <= i; ++m) {
//         if (i === 2) {
//             str += "A" + " "
//         }
//         else if (i === 3 && m === 2) {
//             str += "B A"
//         } else if (i === 4 && m === 3) {
//             str += "C B A"
//         } else if (i === 5 && m === 4) {
//             str += "D C B A"
//         }
//     }
//     console.log(str);
// }