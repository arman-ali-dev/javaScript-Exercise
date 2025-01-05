// ! Q.1 Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the first Map.

// function diffrentMap() {
//     let map1 = new Map([["Name", "Arman"], ["Age", 17]])
//     let map2 = new Map([["Name", "Harsh"], ["LastName", "Sharma"]])
//     let newMap = new Map()
//     for (let [key, value] of map1.entries()) {
//         if (map2.has(key)) {
//             newMap.set(key, value)
//         }
//     }
//     return newMap
// }

// const result = diffrentMap()
// console.log(result);

// ! Q.2 Write a function that takes a Map of numbers as an input and returns a new Map where each key is the square root of the corresponding key in the input Map, and the value is the square of the corresponding value in the input Map.

// function modifyMap(map) {
//     let newMap = new Map()
//     for (let [key, value] of map.entries()) {
//         let squareRoot = Math.sqrt(key)
//         let square = value ** 2
//         newMap.set(squareRoot, square)
//     }
//     console.log(newMap);
// }

// let map = new Map([[16, 32], [49, 20]])
// const ans = modifyMap(map)

// ! Q.3 Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the second Map.

// function interactionMap(map1, map2) {
//     const newMap = new Map()
//     for (let [key, value] of map2) {
//         if (map1.has(key)) {
//             newMap.set(key, value)
//         }
//     }

//     return newMap
// }

// let map1 = new Map([["Name", "Arman"], ["Age", 17]])
// let map2 = new Map([["Name", "Harsh"], ["LastName", "Sharma"]])
// const result = interactionMap(map1, map2)
// console.log(result);

// ! Q.4 Write a function that takes a Map of numbers as an input and returns the sum of the values of all of the even keys in the Map.

// function SumOfAllValues(map) {
//     let sum = 0;
//     for (let [key, value] of map) {
//         if (key % 2 === 0) {
//             sum += value
//         }
//     }

//     return sum
// }




// let map = new Map([[10, 5], [22, 36], [13, 42]])
// const ans = SumOfAllValues(map)
// console.log("Sum Of All Value That Have Even Keys:", ans);

// ! Q.5 Write a function that takes a Map of strings as an input and returns a new Map where each key is a letter and the value is the number of times that letter appears in the values of the input Map.

// function diffrentMap(map) {
//     let newMap = new Map()
//     for (let [key, value] of map) {
//         for (let char of value) {
//             let letter = char.toLowerCase()
//             let letterCount = newMap.get(letter) || 0
//             newMap.set(letter, letterCount + 1)
//         }
//     }

//     return newMap
// }

// let map = new Map([["FirstName", "Arman"], ["LastName", "Khan"]])
// const result = diffrentMap(map)
// console.log(result);

{
    {
        // ! Q.6 Create a new Map and add key-value pairs to it.
        // function createMap() {
        //     let map = new Map()
        //     map.set("Name", "Arman").set("Age", 17).set("address", "jaipur")
        //     return map
        // }

        // const ans = createMap()
        // console.log(ans);

        // ! Q.7 Get the value of a specific key in a Map.

        // function getValue() {
        //     let map = new Map()
        //     map.set("Name", "Arman").set("Age", 17)
        //     return map.get("Age")
        // }

        // const ans = getValue()
        // console.log(ans);

        // ! Q.8 Check if a key exists in a Map.
        // function checkKey() {
        //     let map = new Map()
        //     map.set("Name", "Arman").set("Age", 17)
        //     return map.has("Age")
        // }
        // const ans = checkKey()
        // console.log(ans);

        // ! Q.9 Iterate over the keys of a Map using a for...of loop.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // for(let key of map.keys()){
        //     console.log(key);
        // }

        // ! Q.10 Iterate over the values of a Map using a for...of loop.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // for (let value of map.values()) {
        //     console.log(value);
        // }

        // ! Q.11 Iterate over the key-value pairs of a Map using a for...of loop.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // for (let val of map.entries()) {
        //     console.log(val);
        // }

        // ! Q.12 Convert a Map to an array of key-value pairs.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // ! First Way
        // let arr = [...map]
        // ! Second Way
        // let arr = Array.from(map)
        // console.log(arr);

        // ! Q.13 Convert an array of key-value pairs to a Map.

        // let arr = [["Name", "Arman"], ["Age", 17], ["Address", "Jhotwara, Jaipur"]]
        // let map = new Map(arr)
        // console.log(map);

        // ! Q.14 Use the forEach() method to iterate over the key-value pairs of a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // map.forEach((value, key) => {
        //     console.log([key, value]);
        // })

        // ! Q.15 Use the Map keys() method to get an iterator for the keys of a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // console.log(map.keys());

        // ! Q.16 Use the Map values() method to get an iterator for the values of a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // console.log(map.values());

        // ! Q.17 Use the Map entries() method to get an iterator for the key-value pairs of a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // console.log(map.entries());

        // ! Q.18 Use the Map has() method to check if a Map contains a key.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // console.log(map.has("Age"));

        // ! Q.19 Use the Map get() method to get the value associated with a key in a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // console.log(map.get("Address"));

        // ! Q.20 Use the Map set() method to add a new key-value pair to a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // console.log(map.set("Skill", "Javascipt"));

        // ! Q.21 Use the Map delete() method to remove a key-value pair from a Map.Use the Map delete() method to remove a key-value pair from a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // map.delete("Name");
        // console.log(map);

        // ! Q.22 Use the Map clear() method to remove all key-value pairs from a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // map.clear()
        // console.log(map);

        // ! Q.23 Use the Object.fromEntries() method to create a new object from a Map.

        // let map = new Map()
        // map.set("Name", "Arman").set("Age", 17).set("Address", "Jhotwara, Jaipur")
        // let obj = Object.fromEntries(map)
        // console.log(obj);

        // ! Q.24 Use the Map constructor to create a new Map from an array of key-value pairs.

        // let arr = [["Name", "Arman"], ["Skill", "Javascript"], ["Age", 17]]
        // let map = new Map(arr)
        // console.log(map);
    }

}

