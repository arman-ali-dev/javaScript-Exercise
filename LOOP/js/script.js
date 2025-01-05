// ! Q.1 Print 1 to 100
// for (let i = 1; i <= 100; ++i) {
//   console.log(i);
// }

// ! Q.2 Print all Odd numbers from 1 to 100
// for (let i = 1; i <= 100; ++i) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// ! Q.3 Print all Even numbers from 1 to 100
// for (let i = 1; i <= 100; ++i) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// ! Q.4 Print all numbers which are divisible of 5 in 1 to 100
// for (let i = 1; i <= 100; ++i) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// ! Q.5 Print all numbers which are divisible of 5 and 15 in 1 to 100
// for (let i = 1; i <= 100; ++i) {
//   if (i % 5 == 0 && i % 15 == 0) {
//     console.log(i);
//   }
// }

// ! Q.6 Print 2's table
// for (let i = 1; i <= 10; ++i) {
//   console.log(i * 2);
// }

// ! Q.7 Ask user a question "How many times do you want to print Hello World?"
// ! and then print Hello World that number of times
// let print = prompt("How many times do you want to print Hello World?");
// for (let i = 1; i <= print; ++i) {
//   console.log(i, "Hello World");
// }

// ! Q.8 Calculate sum of all numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; ++i) {
//   sum += i;
// }
// console.log(sum, "sum of all numbers from 1 to 100");

// ! Q.9 Calculate sum of all odd numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; ++i) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum, "sum of all odd numbers from 1 to 100");

// ! Q.10 Calculate sum of all even numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; ++i) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }

// console.log(sum, "sum of all even numbers from 1 to 100");

// ! Q.11 Print 1,2,4,8,16,32,64.......upto 2048
// for (let i = 1; i <= 2048; i *= 2) {
//   console.log(i);
// }

// ! Q.12 Print

// * 1,2,3,4,5,6,7,8,9,10
// * 11,12,13,14,15,16,17,18,19,20
// * .
// * .
// * ......................99,100

// for (let i = 1; i <= 100; ++i) {
//   document.write(i + ",");
//   if (i % 10 == 0) {
//     document.write("</br>");
//   }
// }

// ! Q.13 Print 1 to 100, but with a specific condition.
// ! If a number is divisible by both 3 and 5, it logs "fizzbuzz"
// ! to the console instead of the number itself.

// for (let i = 1; i <= 100; ++i) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i, "fizzbuzz");
//   }
// }

// ! Q.14 print 2 table like this
// * 2*1=2
// * 2*2=4
// * 2*3=6
// * 2*4=8
// * 2*5=10
// * .
// * .
// * .
// * 2*10=20

// for (let i = 1; i <= 10; ++i) {
//   console.log(`2*${i} = ${i * 2}`);
// }

// ! Q.15 Run a loop from 1 to 50
// * From 1 to 10 print "A"
// * From 11 to 20 print "B"
// * From 21 to 30 print "C"
// * From 31 to 40 print "D"
// * From 41 to 50 print "E"

// for (let i = 1; i <= 50; ++i) {
//   if (i <= 10) {
//     console.log(i, "A");
//   } else if (i <= 20) {
//     console.log(i, "B");
//   } else if (i <= 30) {
//     console.log(i, "C");
//   } else if (i <= 40) {
//     console.log(i, "D");
//   } else {
//     console.log(i, "E");
//   }
// }

// ! Q.16 Run a loop from 50 to 1
// * From 50 to 41 print "A"
// * From 40 to 31 print "B"
// * From 30 to 21 print "C"
// * From 20 to 11 print "D"
// * From 10 to 1 print "E"

// for (let i = 50; i >= 1; --i) {
//   if (i <= 50 && i > 40) {
//     console.log(i, "A");
//   } else if (i <= 40 && i > 30) {
//     console.log(i, "B");
//   } else if (i <= 30 && i > 20) {
//     console.log(i, "C");
//   } else if (i <= 20 && i > 10) {
//     console.log(i, "D");
//   } else {
//     console.log(i, "E");
//   }
// }

// ! Q.17 Print below series 5 25 125.. till number is less than equal
// ! to 10000Print below series 5 25 125.. till number is less than equal to 10000

// for (let i = 5; i <= 10000; i *= 5) {
//   console.log(i);
// }

// ! Q.18 Print below series 3,6,9,12... till number is less than equal to 500

// for (let i = 3; i <= 500; i += 3) {
//   console.log(i);
// }

// ! Q.19 print below series
// * 120
// * 221
// * 322
// * 423
// * 524
// * 625
// * 726
// * 827
// * 928
// * 1029

// for (let i = 120; i <= 1092; i += 101) {
//   console.log(i);
// }

// ! Q.20 print below series 100 95 90 85 80 ... till 0

// for (let i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

// ! Q.21 Number 70 is divisible by which numbers till 70? Find out and print those numbers

// for (let i = 1; i <= 70; ++i) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
// }

// ! while loop Exercise ----------------------------------------------------------------------------------->

// ! Q.22 Write a while loop that logs the numbers 1 to 10 in the console.

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   ++i;
// }

// ! Q.23 Calculate sum of all numbers from 1 to 10

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum += i;
//   ++i;
// }
// console.log(sum, "sum of all numbers from 1 to 10");

// ! Q.24 Counting down from 10 to 1

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   --i;
// }

// ! Q.25 Print 2's table

// let i = 1;
// while (i <= 10) {
//   console.log(i * 2);
//   ++i;
// }

// ! Q.26 Calculate sum of all odd numbers from 1 to 100

// let i = 1;
// let sum = 0;
// while(i <= 100){
//     if(i % 2 !== 0){
//         sum += i
//     }
//     ++i
// }
// console.log(sum, "sum of all odd numbers from 1 to 100");

// ! Do-while loop Exercise -------------------------------------------------------------------------------->

// ! Q.27 Write a do...while loop that logs the numbers 1 to 5 in the console

// let i = 1;
// do {
//   console.log(i);
//   ++i;
// } while (i <= 5);

// ! Q.28 Counting down from 10 to 1

// let i = 10;
// do {
//   console.log(i);
//   --i;
// } while (i >= 1);

// ! Q.29 Calculate sum of all numbers from 1 to 10

// let i = 1;
// let sum = 0;
// do {
//   sum += i;
//   ++i;
// } while (i <= 10);

// console.log(sum, "sum of all numbers from 1 to 10");

// ! Q.30 Print 2's table

// let i = 1;
// do {
//   console.log(i * 2);
//   ++i;
// } while (i <= 10);

// ! Q.31 Ask user a question "How many times do you want to print Hello World?"
// ! and then print Hello World that number of times

// let count = +prompt("How many times do you want to print Hello World?");
// let i = 1;
// do{
//     console.log(i, "Hello World");
//     ++i
// }while(i <= count)

// ! Q.32 Calculate sum of all even numbers from 1 to 100

// let sum = 0;
// let i = 1;
// do {
//   if (i % 2 == 0) {
//     sum += i;
//   }
//   ++i;
// } while (i <= 100);
// console.log(sum, "sum of all even numbers from 1 to 100");

// ! Q.33 Print all numbers out of an array using a loop that are greater than 10.

// let arr = []
// for (let i = 1; i <= 20; ++i) {
//     if (i > 10) {
//         arr.push(i)
//     }
// }
// console.log(arr);

// ! Q.34 Print their factorial numbers for all numbers in an array using a loop.

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// let arr = [1, 2, 3, 4, 5]
// for (let element of arr) {
//     const ans = factorial(element)
//     console.log(`${element}: ${ans}`);
// }
