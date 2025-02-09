//Write a function that creates a new array with given values.
//Expected Result: (3, 'a') => ['a', 'a', 'a'] 

function create(number, item) {
    const array = [];
    for (i = 0; i < number; i++) {
        array.push(item)
    }
    return array
}
console.log(create(3, 'a'))
//Uppercase Words: Create a new array whose elements are in 
//  of words present in the original array.
//Example: For strings = ["avengers", "captain america", "ironman", "black panther"]

function transform(array) {
    const result= array.map((item) => {
        return item.toUpperCase()
    })
    return result;
}
console.log(transform(["avengers", "captain america", "ironman", "black panther"]))

//Use the .map() method on an array of objects to rename the 'name' key to 'hero', 
// add a new key called 'id' based on the index, and remove the 'name' key.
// Example: For heros = [{ name: 'Spider-Man' }, { name: 'Thor' }, 
//     { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' }], 
//     transform the array as specified

function rename() {
    const array = [{ name: 'Spider-Man' }, { name: 'Thor' }, 
        { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' }]
    const superhero = array.map((element, index) => {
        element.hero = element.name
        delete element.name
        return {id: index, ...element}
    })
    return superhero
}
console.log(rename())