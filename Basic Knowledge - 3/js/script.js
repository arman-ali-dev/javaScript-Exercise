// ! Q.1 Take two numbers and add a value that is the sum of the
// ! two numbers plus another number. Now, find the 3rd number.

// let a = 50;
// let b = 20;
// let sum = 90;
// console.log(sum - (a + b));

// ! Q.2 Ask the following questions:
// * What are your English marks in the 10th grade?
// * What are your Science marks in 10th grade?
// * What are your Math marks in 10th grade?
// * What are your Hindi marks in 10th grade?
// * What are your SST marks in 10th grade?
// ! Now calculate percentage by taking all the 5 subjects numbers.

// let English = +prompt("What Are Your English Marks In The 10th Grede?");
// let Science = +prompt("What Are Your Science Marks In The 10th Grede?");
// let Math = +prompt("What Are Your Math Marks In The 10th Grede?");
// let Hindi = +prompt("What Are Your Hindi Marks In The 10th Grede?");
// let SST = +prompt("What Are Your SST Marks In The 10th Grede?");

// let totalMarks = 500;
// let obatainedMarks = English + Science + Math + Hindi + SST;
// let percentage = (obatainedMarks / totalMarks) * 100;
// console.log(percentage + "%");

// ! Q.3 In which century were you born? Find out by asking for your birth year.
// ! Use the Math.floor function to remove the decimal portion of the century.

// ! Q.4 Add 20 to your name and check the value in the console.
// ! Add true to your name and check the output.
// ! Add 30 + "learnjavascript" and check the type of the final value.

// console.log(20 + "Arman");
// console.log(true + "Arman");
// console.log(20 + "Learnjavascript");

// ! Q.5 Create a Reverse Game. Ask any question with 2 possible answers.
// ! If the user selects the first option, then show the second option in an alert, and vice versa.
// ! For example: "Do you drink coffee or tea?" If the user says "coffee," then show "Tea" in an alert,
// ! and if the user says "tea," then show "coffee."

// let game = prompt(`Do You Drink Coffee Tea?
// 1.Tea
// 2.Coffee`);
// if (game == "Tea") {
//   alert("Coffee");
// } else if (game == "Coffee") {
//   alert("Tea");
// }

// ! Q.6 Test the following conditions using &&, ||, and not logical operators.
// ! Take any number and check if the number is even and also check if the
// ! number is a multiple of 4 or not. If both conditions are true, then
// ! check if the number is less than 100 or equal to 84 or not.

// let num = 40;
// if (num % 2 == 0 && num % 4 == 0 && (num < 100 || num === 84)) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// ! Q.7 Take city temprature. If temp is less than 10 degree then print very cold.
// ! If city temp is less than 30 and greater than equal to 10 then print cold. If
// ! temp is between 30 to 40 then print Hot. Else print Very hot.

// let cityTemp = 50;
// if (cityTemp < 10) {
//     console.log("Very Cold")
// } else if (cityTemp < 30 && cityTemp >= 10) {
//     console.log("Cold")
// } else if (cityTemp >= 30 && cityTemp <= 40) {
//     console.log("Hot")
// } else {
//     console.log("Very Hot")
// }

// ! Q.8 Using prompt ask user about his/her age. If user
// ! is greater than 18 then show user message "Do you want to open account?"
// ! If yes click on Okay button then ask your 4 below questions
// * What is your name ?
// * What is your aaadhar number ?
// * What is your address ?
// * What is your mobile number ?
// ! and print all these details in console.If click on cancel then show message "Sorry, please visit again."

// let Age = prompt("What Is Your Age?")
// if (Age > 18) {
//     let confirmation = confirm("Do You Want To Open Account?")
//     if (confirmation) {
//         let Name = prompt("What Is Your Name?")
//         let aadharNum = prompt("What Is Your Aadhar Number?")
//         let address = prompt("What Is Your Address?")
//         let MobileNum = prompt("What Is Your Mobile Number?")
//         console.log(`Name - ${Name}
// Aadhar Number - ${aadharNum}
// Adress - ${address}
// Mobile Number - ${MobileNum}`)
//     } else {
//         alert("Sorry, please visit again.")
//     }
// }

// ! Q.9 Create a simple calcultor. Firslty ask your about the operation.
// ! Like "What do you want to do?" User can type choice in any way like
// ! +,- or plus, minus or add, sub etc. After that ask user about first
// ! number and then second number and finally show the desired output.

// let sym = prompt("What kind of operation do you want to do like +, -, * ETC...")
// let firstNum = +prompt("Enter The First Number")
// let secondNum = +prompt("Enter The Second Number")

// switch (sym) {
//     case "+": console.log(firstNum + secondNum)
//         break
//     case "-": console.log(firstNum - secondNum)
//         break
//     case "*": console.log(firstNum * secondNum)
//         break
//     case "/": console.log(firstNum / secondNum)
//         break
//     default: console.log("Enter The valid Symbol")
// }

// ! Q.10 Who is most intelligent in your family? Ask 10th percentage
// ! of each family member and check who got the highest marks. If total
// ! family members are more than 4 then you can use Math.max() function

// let firstPerson = prompt("What Is Your 10th Grade Percentage?")
// let SecondPerson = prompt("What Is Your 10th Grade Percentage?")
// let ThirdPerson = prompt("What Is Your 10th Grade Percentage?")
// let ForthPerson = prompt("What Is Your 10th Grade Percentage?")

// const ans = Math.max(firstPerson, SecondPerson, ThirdPerson, ForthPerson)
// console.log(ans, "Is Intelligent In Your Family")
