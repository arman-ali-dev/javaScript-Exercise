//! 1. How do you create a new < div > element using JavaScript and append it to the body of the document ?

// let div = document.createElement("div")
// document.body.appendChild(div)

// ! 2. How can you set the inner HTML of an existing < p > element with the ID "myParagraph" to "Hello, World!" ?

// let myParagraph = document.getElementById("myParagraph");
// myParagraph.innerHTML = "Hello, World!"

// ! 3. How do you change the text content of an element with the class name "title" to "Welcome to my site" ?

// let heading = document.getElementsByClassName("title");
// heading[0].textContent = "Welcome to my site";

// ! 4. How can you create a new < img > element, set its src attribute to "image.jpg", and append it to an element with the ID "imageContainer" ?

// let img = document.createElement("img");
// img.src = "images/blog1.webp"
// document.getElementById("imageContainer").appendChild(img)

// ! 5. How do you add a new class "active" to an element with the ID "menu" using JavaScript?

// document.getElementById("menu").classList.add("active");

// ! 6. How can you remove the class "hidden" from an element with the class name "sidebar" ?

// document.querySelector(".hidden").classList.remove("hidden")

// ! 7. How do you change the background color of an element with the ID "header" to "blue" using JavaScript?

// document.getElementById("header").style.backgroundColor = "blue"

//! 8. How can you set the href attribute of an anchor(<a>) element with the ID "link" to "https://www.example.com"?

// document.getElementById("link").href = "https://www.example.com"

// ! 9. How do you create a new <ul> element, add three <li> elements with text "Item 1", "Item 2", and "Item 3", and append it to the body of the document?

// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// li1.textContent = "Item1";
// li2.textContent = "Item2";
// li3.textContent = "Item3";
// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)
// document.body.appendChild(ul)

// ! 10. How can you set the CSS font-size property of an element with the class name "text" to "20px" using JavaScript?

// document.getElementsByClassName("text")[0].style.fontSize = "20px"