// ! Q.1 StringUtility Class bnani hai jisme ek private variable str bnana hai. then hume 5 functions bnane hai us class me like toLowercase toUpperCase etc. Ye sare methods call krne pr ye hume vo str return hoga. For example toLowerCase method call ho to str private variable ki value lowerCase me return honi chahiye

// class StringUtility {
//     #str
//     constructor(str) {
//         this.#str = str
//         this.#str.toLowerCase()
//     }

//     toLowerCase() {
//         this.#str = this.#str.toLowerCase()
//         return this.#str
//     }

//     toUpperCase() {
//         this.#str = this.#str.toUpperCase()
//         return this.#str
//     }

//     capitalize() {
//         this.#str = this.#str.charAt(0).toUpperCase() + this.#str.slice(1).toLowerCase()
//         return this.#str
//     }
//     reverse() {
//         this.#str = this.#str.split("").reverse().join("")
//         return this.#str
//     }

//     slice() {
//         this.#str = this.#str.slice(0, 6)
//         return this.#str
//     }
// }

// const result = new StringUtility("Hello World")
// console.log(result.toLowerCase());
// console.log(result.toUpperCase());
// console.log(result.capitalize());
// console.log(result.reverse());
// console.log(result.slice());
// console.log(result);

// ! Q.2 Same StringUtility class firse bnani hai but is bar sare methods static hone chahiye and koi str variable ni bnana hai. hm string in static methods ko direct pass krenge aur get krenge

// class StringUtility {
//     static toLowerCase(str) {
//         return str.toLowerCase()
//     }

//     static toUpperCase(str) {
//         return str.toUpperCase()
//     }

//     static capitalize(str){
//         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
//     }

//     static reverse(str){
//         return str.split("").reverse().join("")
//     }

//     static slice(str){
//         return str.slice(0, 6)
//     }
// }

// const result = new StringUtility()
// console.log(StringUtility.toLowerCase("HELLO WORLD"));
// console.log(StringUtility.toUpperCase("hello world"));
// console.log(StringUtility.capitalize("hello world"));
// console.log(StringUtility.reverse("hello world"));
// console.log(StringUtility.slice("hello javscript"));

// ! Q.3  Ek Account class bnani hai. Jisme kuch properties like name, accountNo, balance etc bnane hai. then 4 methods implement krne hain. Withdraw, Deposit, Transfer, BalanceCheck

// * Agar balance ni hai proper to hm deposite and transfer ni kr skte.Ye checks b lgane hain

// class BankAccount {
//     #balance
//     constructor(name, accountNo, pin, balance) {
//         this.bankName = "Arman's Bank";
//         this.name = name;
//         this.accountNo = accountNo;
//         this.pin = pin;
//         this.#balance = balance;
//     }

//     withdraw(amount) {
//         if (amount == undefined) {
//             console.log("Please enter a amount");
//         } else if (amount <= 0) {
//             console.log('Invalid amount!');
//         } else if (amount > this.#balance) {
//             console.log("Please check your current balance");
//         } else {
//             this.#balance = this.#balance - amount;
//         }
//     }

//     deposit(amount) {
//         if (amount == undefined) {
//             console.log("Please enter a amount.");
//         } else if (amount <= 0) {
//             console.log("Invalid amount!");
//         } else {
//             this.#balance = this.#balance + amount;
//         }
//     }

//     transfer(amount) {
//         if (amount == undefined) {
//             console.log("Please enter a amount.");
//         } else if (amount <= 0) {
//             console.log("Invalid amount!");
//         } else if (amount > this.#balance) {
//             console.log("Please check your current balance.");
//         } else {
//             this.#balance = this.#balance - amount
//         }
//     }

//     changePin(oldPin, newPin) {
//         if (!newPin || !newPin) {
//             console.log("Please enter a pin digit.");
//         } else if (oldPin != this.pin) {
//             console.log("Invalid Pin!");
//         } else {
//             this.pin = newPin
//         }
//     }

//     checkBalance() {
//         console.log(this.#balance);
//     };
// }

// const armanAccount = new BankAccount("Arman Ali", 45777526347756, 5911, 5000);

// ! Withdraw
// armanAccount.withdraw();
// armanAccount.withdraw(0)
// armanAccount.withdraw(-1000)
// armanAccount.withdraw(1000)

// ! Deposit
// armanAccount.deposit();
// armanAccount.deposit(0);
// armanAccount.deposit(1000);

// ! Transfer
// armanAccount.transfer();
// armanAccount.transfer(0);
// armanAccount.transfer(1000000);
// armanAccount.transfer(2000)

// ! Change Pin
// armanAccount.changePin();
// armanAccount.changePin(885475983);
// armanAccount.changePin(5911, 786);

// ! Q.4 Create a class called Vehicle with properties like make, model, and year. Then, create a subclass Car that inherits from Vehicle and adds additional properties like numberOfDoors. How would you implement this inheritance?

// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, numberOfDoors) {
//         super(make, model, year)
//         this.numberOfDoors = numberOfDoors;
//     }
// }


// const thar = new Car("Mahindra", "4*4", 2022, 2);
// console.log(thar);


// ! Q.5 Design a class Employee that has private properties for salary and bonus. Create public methods to get the salary after adding the bonus, and to set the bonus amount. How would you protect the salary from being accessed directly?

// class Employee {
//     #salary
//     #bonus
//     constructor(salary, bonus) {
//         this.#salary = salary;
//         this.#bonus = bonus;
//     }

//     getSalary() {
//         this.#salary += this.#bonus;
//         return this.#salary
//     }
// }

// const arman = new Employee(10000, 2000);
// arman.getSalary();

// ! Q.6 Implement two classes, Dog and Cat, both inheriting from a parent class Animal. Each class should have a method speak() that returns a different sound for the dog and the cat. How would you demonstrate polymorphism in this scenario?

// class Animal { }
// class Cat extends Animal {
//     speak() {
//         console.log("Meow...");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Barking...");
//     }
// }

// const cat = new Cat();
// cat.speak();

// const dog = new Dog();
// dog.speak();


// ! Q.7 Create an abstract class Shape with a method calculateArea(). Then, implement subclasses Rectangle and Circle that extend Shape and provide their own implementation of calculateArea(). How would you enforce the implementation of calculateArea() in the subclasses?

// class Shape {
//     constructor() {
//         if (this.constructor === Shape) {
//             throw new Error("Cannot create the Shape object!")
//         }
//     }

//     calculateArea() {
//         throw new Error("Please create your shape first!")
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }


//     calculateArea() {
//         return 3.14 * this.radius ** 2;
//     }
// }


// class Rectangle extends Shape {
//     constructor(length, width) {
//         super();
//         this.length = length;
//         this.width = width;
//     }

//     calculateArea() {
//         return this.length * this.width;
//     }
// }

// const circle = new Circle(5);
// circle.calculateArea();
// console.log(circle.calculateArea());

// const rectangle = new Rectangle(10, 5)
// console.log(rectangle.calculateArea());

// ! Q.8 Instead of using inheritance, demonstrate how you can use object composition to create a class Smartphone that has features like Camera, Battery, and Processor as separate classes. How would you manage the relationships between these classes within Smartphone?

// class Smartphone {
//     constructor(camera, battery, processor) {
//         this.camera = camera;
//         this.battery = battery;
//         this.processor = processor;
//     }
// }

// class Camera {
//     constructor(mp) {
//         this.mp = mp;
//     }

//     clickPhoto() {
//         console.log("Photo has clicked!");
//     }

//     recordVideo() {
//         console.log("Video Recoeded!");
//     }
// }


// class Battery {
//     constructor(mah) {
//         this.mah = mah
//     }

//     battrySavingModeOnOff() {
//         console.log("Battry saving mode applied!");
//     }
// }

// class Processor {
//     constructor(speed) {
//         this.speed = speed;
//     }


//     gaminModeOnOff() {
//         console.log("Gaming mode applied!");
//     }
// }



// const camera = new Camera(108);
// const battery = new Battery(5000);
// const processor = new Processor("22.8 GHz");

// const redmi = new Smartphone(camera, battery, processor);
// console.log(redmi);


// ! Q.9 Create a parent class Employee with a method getDetails(), and then create a subclass Manager that overrides getDetails() to include additional information specific to managers. How would you implement this method overriding?

// class Employee {
//     getDetails() {
//         console.log("There are Employee's parent class details.");
//     }
// }

// class Manager extends Employee {
//     getDetails() {
//         console.log("There're Manager's class details.");
//         super.getDetails();
//     }
// }


// const manager = new Manager()
// manager.getDetails();

// ! Q.10 Write a class Vehicle with a method startEngine(). Create subclasses Car and Bike that override startEngine() to display different messages. Demonstrate polymorphism by calling startEngine() on objects of Car and Bike using a Vehicle reference.

// class Vehicle {
//     startEngine() {
//         console.log("Start Engine...");
//     }
// }

// class Bike extends Vehicle {
//     startEngine() {
//         console.log("Bike's engine start...");
//     }
// }

// class Car extends Vehicle {
//     startEngine() {
//         console.log("Car's engine start...");
//     }
// }


// let vehicle;

// vehicle = new Car();
// vehicle.startEngine();

// vehicle = new Bike();
// vehicle.startEngine();

// ! Q.11 Define a class Rectangle with a width and height property. Implement a getter to calculate and return the area of the rectangle, and a setter to update both width and height properties.

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     get calculate() {
//         let area = this.height * this.width;
//         return area;
//     }


//     set update({ newWidth, newHeight }) {
//         this.width = newWidth;
//         this.height = newHeight;
//     }
// }

// const rectangle = new Rectangle(100, 200);
// console.log(rectangle.calculate);
// rectangle.update = { newWidth: 30, newHeight: 40 };

// ! Q.12 Create a class BankAccount with a private property _balance. Implement a getter to return the balance and a setter to deposit a certain amount, ensuring the amount is positive.

// class BankAccount {
//     #_balance
//     constructor(balance) {
//         this.#_balance = balance;
//     }

//     get balance() {
//         return this.#_balance;
//     }


//     set deposit(amount) {
//         if (amount > 0) {
//             this.#_balance += amount;
//         } else {
//             throw new Error("Amount must be greater than 0");
//         }
//     }
// }

// const armanAccount = new BankAccount(20000);
// console.log(armanAccount.balance);
// armanAccount.deposit = 1000;


// ! Q.13 Write a class Person with a private property _age. Implement a setter to ensure that the age is between 0 and 120, and a getter to return the age.

// class Person {
//     #_age;
//     constructor(age) {
//         this.#_age = age;
//     }

//     set age(newAge) {
//         if (newAge <= 0 || newAge > 120) {
//             throw new Error("Please check your age!");
//         } else {
//             this.#_age = newAge;
//         }
//     }

//     get age() {
//         return this.#_age;
//     }
// }

// const arman = new Person(50);
// arman.age = 17
// console.log(arman.age);

// ! Q.15 Create a class Book with a private property _title. Implement a getter to retrieve the title in uppercase and a setter to change the title. Ensure that the title is trimmed of extra spaces before updating.

// class Book {
//     #_title;
//     constructor(title) {
//         this.#_title = title;
//     }

//     get title() {
//         return this.#_title.toUpperCase();
//     }

//     set title(newTitle) {
//         this.#_title = newTitle.trim();
//     }
// }

// const firstFlight = new Book("First Flight");
// console.log(firstFlight.title);
// firstFlight.title = "Java Introduction   ";
// console.log(firstFlight);

// ! Q.16 Write a class User with a private property _password. Implement a getter that returns a masked version of the password(e.g., *****) and a setter that updates the password only if it meets certain criteria(e.g., at least 8 characters long).

// class User {
//     #_password;
//     constructor(password) {
//         this.#_password = password;
//     }

//     get password() {
//         return "*".repeat(8);
//     }


//     set password(newPass) {
//         if (String(newPass).length > 8) {
//             throw new Error("Password will must be 8 digit!")
//         } else {
//             this.#_password = newPass
//         }
//     }
// }

// const arman = new User(59115911);
// arman.password = 12345678
// console.log(arman.password);

// ! Q.18 Create a class Product with a private property _price. Implement a getter that returns the price with tax included(e.g., price + 20 %) and a setter to update the base price.

// class Product {
//     #_price;
//     constructor(price) {
//         this.#_price = price;
//     };

//     get price() {
//         let totalCost = (20 / 100 * this.#_price) + this.#_price
//         return totalCost;
//     }

//     set price(newPrice) {
//         this.#_price = newPrice;
//     };
// }

// const item = new Product(999);
// item.price = 200;
// console.log(item.price);


// ! Q.19 Write a class Person with private properties _firstName and _lastName.Implement a getter to return the full name(concatenation of first and last names) and a setter that allows updating both names by providing a single string(e.g., "John Doe").

// class Person {
//     #_firstName;
//     #_lastName;
//     constructor(firstName, lastName) {
//         this.#_firstName = firstName;
//         this.#_lastName = lastName;
//     }

//     get fullName() {
//         let fullName = this.#_firstName + " " + this.#_lastName;
//         return fullName;
//     };

//     set fullName(newFullName) {
//         if (newFullName.split(" ").length == 2) {
//             let [firstName, lastName] = newFullName.split(" ");
//             this.#_firstName = firstName;
//             this.#_lastName = lastName;
//         } else {
//             throw new Error("Please enter full name!")
//         }
//     }
// }

// const arman = new Person("Arman", "Ali");
// arman.fullName = "Farman Ali"
// console.log(arman);


// ! Q.20 Create a class Counter with a private property _count .Implement a getter to return the current count value and a setter that increments the count by a specified value, but only if the value is positive.

// class Counter {
//     #_count;
//     constructor(count) {
//         if (count > 0) {
//             this.#_count = count;
//         } else {
//             throw new Error("Number must be positive!")
//         }
//     }

//     get count() {
//         return this.#_count;
//     }

//     set count(newCount) {
//         if (newCount > 0) {
//             this.#_count += newCount
//         } else {
//             throw new Error("Number must be positive!")
//         }
//     }
// }

// const count = new Counter(1);
// count.count = 2
// console.log(count);


// ! Q.21 Write a class BankAccount with a private property _balance and a private array _transactions.Implement a getter to return the balance and a setter that allows depositing an amount, while also recording the transaction in the _transactions array.

// class BankAccount {
//     #_balance;
//     #_transactions;

//     constructor(balance, transactions) {
//         if (balance > 0) {
//             this.#_transactions = [];
//             this.#_balance = balance;
//         } else {
//             throw new Error("Invalid Amount!")
//         }

//     }

//     get balance() {
//         return this.#_balance;
//     }

//     set deposit(amount) {
//         if (amount > 0) {
//             this.#_balance += amount;
//             this.#_transactions.push(`${amount} Has been deposited.`);
//         } else {
//             throw new Error("Invalid Amount!")
//         }
//     }
// }


// const armanAccount = new BankAccount(1000);
// armanAccount.deposit = 200
// console.log(armanAccount);


// ! Q.22 Create a class Inventory with a private property _items(an array).Implement a getter to return the total number of items and a setter to add new items to the inventory.

// class Inventory {
//     #_items;

//     constructor(items) {
//         this.#_items = items;
//     }

//     get items() {
//         return this.#_items.length;
//     };

//     set addItem(newItem) {
//         this.#_items.push(newItem);
//     }
// }

// const inventory = new Inventory(["Soap", "Rise", "Salt", "Sugar", "Tealeave"]);
// inventory.addItem = "Face Wash";
// console.log(inventory.items);


// ! Q.23 Implement a class Distance with a private property _kilometers.Write a getter to return the distance in miles and a setter that allows setting the distance in miles(converting it back to kilometers internally).

// class Distance {
//     #_kilometers;

//     constructor(kilometers) {
//         this.#_kilometers = kilometers;
//     };

//     get distance() {
//         let miles = this.#_kilometers * 0.621;
//         return miles;
//     };

//     set distance(miles) {
//         let kilometer = miles / 0.621;
//         this.#_kilometers = kilometer;
//     }
// }


// const jaipurToBissau = new Distance(10);
// jaipurToBissau.distance = 6.4;
// console.log(jaipurToBissau);
// console.log(jaipurToBissau.distance);

// ! Q.24 Create a class ShoppingCart with a private property _items(an array of objects with properties name and price). Implement a getter to return the total cost of all items and a setter to add an item to the cart. Ensure the item has both a name and a price before adding it.

// class ShoppingCart {
//     #_items;

//     constructor(items) {
//         this.#_items = items;
//     };

//     get totalCost() {
//         let total = 0;
//         for (let item of this.#_items) {
//             total += item.price;
//         }

//         return `Total cost of all items ${total}`
//     }

//     set items({ name, price }) {
//         if (name == undefined || price == undefined) {
//             throw new Error("Please enter the both name and price!");
//         } else {
//             this.#_items.push({ name, price });
//         }
//     }
// }

// const cart = new ShoppingCart([{ name: "Rise", price: 1000 }, { name: "Oil", price: 200 }])

// cart.items = { name: "Salt", price: 100 }
// console.log(cart);


// ! Class Inheritance
// ! Q.25: Create a base class called Animal with properties name and age, and a method speak() that prints a generic message.Then, create two subclasses Dog and Cat that inherit from Animal.Override the speak() method in each subclass to print a message specific to the animal(e.g., "Woof!" for Dog and "Meow!" for Cat).

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log("Hii");
//     }
// }

// class Cat extends Animal {

//     speak() {
//         super.speak();
//         console.log("Meow!");
//     }
// }


// class Dog extends Animal {

//     speak() {
//         super.speak();
//         console.log("Woof!");
//     }
// }

// const cat = new Cat("Chikki", 3);
// console.log(cat);
// cat.speak()
// const dog = new Dog("Lio", 5);
// console.log(dog);
// dog.speak();

// ! Encapsulation
// ! Q.26 Implement a class called BankAccount with private properties balance and accountNumber.Provide public methods deposit(), withdraw(), and getBalance() to interact with the private properties.Ensure that the withdraw() method checks if the balance is sufficient before allowing a withdrawal.

// class BankAccount {
//     #_balance;
//     #_accountNumber;
//     constructor(balance, accountNumber) {
//         this.#_balance = balance;
//         this.#_accountNumber = accountNumber;
//     }

//     deposit(amount) {
//         if (amount == null) {
//             console.log("Please enter the amount!");
//         } else if (amount <= 0) {
//             console.log("Invalid amount!");
//         } else {
//             console.log("Your money is succesfully deposited!");
//             this.#_balance += amount;
//         }
//     }

//     withdraw(amount) {
//         if (amount == null) {
//             console.log("Please enter the amount!");
//         } else if (amount <= 0) {
//             console.log("Invalid amount!");
//         } else if (amount > this.#_balance) {
//             console.log("Check your balance!");
//         } else {
//             console.log("Your money is successfully withdrawal!");
//             this.#_balance -= amount;
//         }
//     }

//     getBalance() {
//         console.log(`Your current balance: ${this.#_balance}`);
//     }
// }

// const armanAccount = new BankAccount(2000, 98467387666);
// armanAccount.deposit()
// armanAccount.withdraw(700);
// armanAccount.getBalance()

// ! Polymorphism
// ! Q.27 Create a class Shape with a method area() that returns 0. Then, create subclasses Circle, Rectangle, and Triangle, each with their own implementation of the area() method.Test the polymorphic behavior by creating an array of different shapes and calculating the total area.

// ! Abstraction
// ! Q.28 Define an abstract class Vehicle with an abstract method startEngine().Create two concrete subclasses Car and Motorcycle that implement the startEngine() method with specific behavior.Ensure that you cannot create an instance of the Vehicle class directly.


// class Vehicle {
//     constructor(model, color) {
//         if (new.target.name == "Vehicle") {
//             throw new Error("You cannot create directly vehicle object");
//         }
//         this.model = model;
//         this.color = color;

//     }

//     startEngine() {
//         console.log("Engine is start by vehicle...");
//     }
// }

// class Car extends Vehicle {
//     startEngine() {
//         console.log("Engine is start by car...");
//     }
// }


// class Motorcycle extends Vehicle {
//     startEngine() {
//         console.log("Engine is start by motor cycle...");
//     }
// }

// const scorpio = new Car("S11", "black");
// scorpio.startEngine();

// ! Composition vs Inheritance
// ! Q.29 Create a Person class with properties like name and age.Now create a Job class with properties like role and salary.Instead of inheriting, use composition to associate a Job object with a Person object.Create methods to update and retrieve job information through the Person class.

// ! Constructor and Static Methods
// ! Q.30 Create a class Counter with a static method increment() that increments a static counter every time an instance of the class is created.The class should also have a method to get the current value of the counter.

// class Counter {

//     static count = 0;

//     constructor() {
//         this.count = Counter.count;
//         Counter.increment();
//     }

//     static increment() {
//         Counter.count++
//     };

//     getCurrentValue() {
//         return Counter.count;
//     }
// }

// const counter1 = new Counter();
// const counter2 = new Counter();
// const counter3 = new Counter();
// const counter4 = new Counter();
// console.log(counter4.getCurrentValue());

// ! Method Chaining
// ! Q.31 Implement a class Calculator with methods add(), subtract(), multiply(), and divide().Each method should return the instance of the class to allow method chaining.Include a method getResult() to return the final result after chaining multiple operations.

// class Calculator {
//     constructor() {
//         this.value = 0;
//     }

//     add(num) {
//         this.value += num;
//         return this;
//     }

//     subtract(num) {
//         this.value -= num;
//         return this;
//     }

//     multiply(num) {
//         this.value *= num;
//         return this;
//     }

//     divide(num) {
//         this.value /= num;
//         return this;
//     }

//     getResult() {
//         console.log(this.value);
//     }
// }

// const result = new Calculator().add(10).subtract(10).getResult();



// ! Prototype Chain
// ! Q.32: Create a class Person with a method greet().Then create another class Student that inherits from Person but does not have its own greet() method.Create an instance of Student and call greet().Explain how JavaScript's prototype chain handles this call.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Greeting...");
//     }
// }

// class Student extends Person {

// }
// const arman = new Student("Arman", 17);
// console.log(arman);

// ! Getter and Setter Methods
// ! Q.33 Create a class Product with private properties _price and _discount.Implement getter and setter methods for both properties, where the setter for _discount automatically adjusts the _price.Create instances and test the behavior.

// class Product {
//     #_price;
//     #_discount;

//     constructor(price, discount) {
//         this.#_price = price;
//         this.#_discount = discount;
//     }

//     set price(amount) {
//         this.#_price = amount;
//     }

//     get price() {
//         return this.#_price;
//     }

//     set discount(amount) {
//         this.#_price = this.#_price - amount;
//         this.#_discount = amount;
//     }

//     get discount() {
//         return this.#_discount
//     }
// }

// const item = new Product(1000, 100);
// item.price = 2000
// item.discount = 300;
// console.log(item);



// ! Custom Error Handling
// ! Q.34 Implement a class CustomError that extends the built -in Error class. This class should accept an error message and an additional statusCode property.Throw and catch this custom error in a sample application.