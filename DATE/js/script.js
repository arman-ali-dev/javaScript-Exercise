// ! Q.1 How can you convert a string to a number in JavaScript? write all the ways.

// const str = "10"
// * First Way
// console.log(Number(str))
// * Second Way
// console.log(+str);
// * Third Way
// console.log(parseInt(str));
// * Forth Way
// console.log(parseFloat(str));
{
    {

        // ! Q.2 How do you round a number to a certain number of decimal places in JavaScript?

        // const number = 10.5374832736
        // console.log(number.toFixed(2));

        // ! Q.3 How can you generate a random number between two values in JavaScript?

        // function randomNum(num1, num2){
        //     console.log(Math.random() * (num1 - num2) + num2);
        // }
        // randomNum(15, 5)

        // ! Q.4 How do you convert a number to a binary, octal, or hexadecimal format in JavaScript?

        // ! Q.5 How do you add or subtract a certain number of days from a date in JavaScript?

        // const date = new Date()
        // ! Addition
        // date.setDate(date.getDate() + 10)
        // console.log(date);

        // ! Substraction
        // date.setDate(date.getDate() - 10)
        // console.log(date);

        // ! Q.6 How do you compare two dates in JavaScript? Check if a date is small or large or equal to other date?

        // const yesterday = new Date("2024-03-07")
        // const today = new Date("2024-03-07")
        // if (yesterday.getTime() > today.getTime()) {
        //     console.log("Yesterday are greater than Today");
        // } else if (today.getTime() > yesterday.getTime()) {
        //     console.log("Today are greater than Yesterday");
        // } else {
        //     console.log("Today and yesterday Both Are Equal");
        // }

        // ! Q.7 How can you format a date in JavaScript according to the user's locale?

        // var date = new Date();
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // var formattedDate = date.toLocaleDateString(undefined, options);
        // console.log(formattedDate);

        // ! Q.8 How do you calculate the difference between two dates in JavaScript?
        // const date1 = new Date("2024-03-10")
        // const date2 = new Date("2024-03-04")
        // const diffInMs = date1 - date2
        // const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        // console.log(diffInDays);

        // ! Q.9 How do you check if a year is a leap year in JavaScript?

        // let year = 100
        // year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0 ) ? console.log(`This ${year} Year Is Leap Year...`) : console.log(`This ${year} Year Is Not a Leap Year`);

        // ! Q.10 How do you convert a string to a date in JavaScript? Write all ways?

        // let str = "2024-01-01"
        // let date = new Date(str)
        // console.log(date);

        // ! Q.11 How can you parse a date from a string in a specific format in JavaScript?

        // const dateString = "2024-05-14"
        // const splitDateStr = dateString.split("-")
        // const date = new Date(splitDateStr[0], splitDateStr[1] - 1, splitDateStr[2])
        // console.log(date);
        // const a = new Date()

        // ! Q.12 How can you get the time in a specific timezone in JavaScript?

        // const date = new Date()
        // const options = { timeZone: "America/New_York", hour12: false }
        // const dateString = date.toLocaleString("en-US", options)

        // console.log(dateString);

        // ! Q.13 Print date and time after every 1 second in the format 'MM/DD/YYYY HH:MM:SS'

        // function PrintEvery1second() {
        //     const date = new Date()
        //     const newFormat = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        //     console.log(newFormat);
        // }
        // setInterval(PrintEvery1second, 1000)

        // ! Q.14 Write a JavaScript function to get the number of days in a month. Pass month and year as an arugment to the function. for example : getDays(2, 2023).

        // function getMonthDays(year, month) {
        //     const date = new Date(year, month, 0)
        //     return date.getDate()
        // }

        // const result = getMonthDays(2023, 2)
        // console.log(result);

        // ! Q.15 Write a JavaScript function to get the week day name for the given date.

        // function getWeekDayName(date) {
        //     const weekdayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        //     const weekIndex = date.getDay()
        //     return weekdayName[weekIndex]
        // }

        // const date = new Date("2024-05-14")
        // const ans = getWeekDayName(date)
        // console.log(ans);

        // ! Q.16 Write a JavaScript function to get the month name from the given date

        // function getMonthName(date) {
        //     const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        //     const monthIndex = date.getMonth()
        //     return monthNames[monthIndex]
        // }

        // const date = new Date("2024-5-14")
        // const ans = getMonthName(date)
        // console.log(ans);

        // ! Q.17 Write a JavaScript function to check if given date is on weekend or not (Saturday/Sunday).

        // function checkWeekend() {
        //     if (date.getDay() === 0) {
        //         console.log(`${date.getDate()} Day Is a Sunday...`);
        //     } else if (date.getDay() === 6) {
        //         console.log(`${date.getDate()} Day Is a Saturday...`);
        //     }
        // }

        // const date = new Date("2024-03-17")
        // checkWeekend(date)

        // ! Q.18 Ask your about his date of birth. Now write a JavaScript function to calculate age based on the given date of birth.

        // function calculateAge() {
        //     const currDate = new Date()
        //     const dateOfBirth = new Date("2007-05-14")
        //     let age = currDate.getFullYear() - dateOfBirth.getFullYear()
        //     const monthDiff = currDate.getMonth() - dateOfBirth.getMonth()
        //     if (monthDiff < 0 || (monthDiff === 0 && currDate.getDate() - dateOfBirth.getDate())) {
        //         age--
        //     }
        //     return age
        // }
        // const result = calculateAge()
        // console.log(`Your Age Is ${result}.`);

        // ! Q.19 Write a Javascript function to using setInterval to show alert box when date is your birth date.

        // function myDateBirth() {
        //     setInterval(function () {
        //         let myDate = new Date("2024-05-14")
        //         let date = new Date()
        //         if (myDate.getDate() === date.getDate() && myDate.getMonth() === date.getMonth()) {
        //             alert("Happy Birthday...")
        //         }
        //     }, 1000)
        // }

        // myDateBirth()

        // ! Q.20 Show your birth date in Arabic.

        // const date = new Date("2024-05-14")
        // const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", calender: "gregory", locale: "er-US" }
        // const formatter = new Intl.DateTimeFormat('ar', options)
        // const dateToArabic = formatter.format(date)
        // console.log(dateToArabic);

        // ! Q.21 Show your birth date in Chinese.

        // const myBirthDate = new Date("2024-05-14")
        // const option = { weekday: "long", year: "numeric", month: "long", day: "numeric", calender: "gregory", locale: "zh-CN" }
        // const formatterr = new Intl.DateTimeFormat('zh', option)
        // const chinesToToday = formatterr.format(myBirthDate)
        // console.log(chinesToToday);

        // ! Q.22 Write a JavaScript function to convert a binary number to a decimal number.

        // function binaryToDecimal(binary) {
        //     return parseInt(binary, 2)
        // }

        // const ans = binaryToDecimal(101010)
        // console.log(ans);

        // ! Q.23 Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

        // function convertedNumebr(decimalNumber, format) {
        //     let num = ""
        //     if (format === "binary") {
        //         num = decimalNumber.toString(2)
        //     } else if (format === "hexadecimal") {
        //         num = decimalNumber.toString(16)
        //     } else if (format === "octal") {
        //         num = decimalNumber.toString(8)
        //     } else {
        //         console.log("Unvalid Format");
        //     }
        //     return num
        // }
        // console.log(convertedNumebr(42, "binary"));
        // console.log(convertedNumebr(42, "hexadecimal"));
        // console.log(convertedNumebr(42, "octal"));

        // ! Q.24 Write a JavaScript function to find the highest value in an array using Math.max

        // function highestValue(arr) {
        //   return Math.max(...arr)
        // }

        // let arr = [4, 6, 26, 45, 2, 49, 3]
        // console.log(highestValue(arr));

        // ! Q.25 Write a JavaScript function to find the Minimum value in an array using Math.min

        // function minimumValue(arr) {
        //     return Math.min(...arr)
        // }

        // let arr = [4, 6, 26, 45, 2, 49, 3]
        // const ans = minimumValue(arr)
        // console.log(ans);

        // ! Q.26 Write a JavaScript function to check whether a value is an integer or not.

        // function checkInt(int) {
        //     console.log(Number.isInteger(int));
        // }

        // checkInt(12)
        // checkInt(12.5)
        // checkInt(-12)
        // checkInt(0)
        // checkInt("Hello")

        // ! Q.27  Write a JavaScript function to convert a positive number to negative number or to negativie number to positive number.

        // function convertedNumber(num) {

        // ! First Way
        // * Only Negative To Positive Convert 
        // const negativeToPositive = Math.abs(num)
        // console.log(negativeToPositive);

        // ! Second Way
        // console.log(- num)
        // }

        // convertedNumber(-20)
        // convertedNumber(20)

        // ! Q.28 Convert 50 litre to Hindi locale and chinese locale.
        // ! Q.29 Create a function to convert any number to given currency.
        // ! Q.30 Write a JavaScript program to find the missing number from a given array. There are no duplicates in the list. Start from 1.

        // ! Q.31 Convert 12-hour time to 24-hour time Given a time in 12 - hour AM / PM format, write a function convertTo24HourFormat(time) that converts it to 24 - hour format.For example, 02:00 PM should be converted to 14:00.

        // function convertTo24HourFormat(time) {
        //     let [timePart, amPm] = time.split(" ")
        //     let [hoursPart, minutesPart] = timePart.split(":")

        //     let hours = parseInt(hoursPart)
        //     let minutes = parseInt(minutesPart)

        //     if (amPm === "PM" && hours !== 12) {
        //         hours += 12
        //     } else if (amPm === "AM" && hours === 12) {
        //         hours += 0
        //     }

        //     let formatHours = String(hours).padStart(2, "0")
        //     let formatMinuits = String(minutes).padStart(2, "0")

        //     return `${formatHours}:${formatMinuits}`
        // }

        // const ans = convertTo24HourFormat("11:00 PM")
        // console.log(ans);

        // ! Q.32 Write a function daysBetweenDates(date1, date2) that calculates the difference in days between two dates given in the format YYYY-MM-DD.

        // function daysBetweenDates(currDate, myBirthDate) {
        //     const diffInDays = Math.abs(currDate - myBirthDate)
        //     const oneDay = 24 * 60 * 60 * 1000
        //     const result = Math.trunc(diffInDays / oneDay)
        //     return result
        // }

        // const currDate = new Date()
        // const myDateOfBirth = new Date("2024-05-14")
        // const ans = daysBetweenDates(currDate, myDateOfBirth)
        // console.log(ans);

        // ! Q.33 Given a birthdate in the format YYYY-MM-DD, write a function daysUntilNextBirthday(birthdate) that returns the number of days until the next birthday.

    }
}