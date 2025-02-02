// Write a JavaScript function that takes an array of numbers and returns 
// the maximum number in the array.

//Example array input : [3, 1, 7, 5, 9, 2] , the expected output is = 9
//edge cases:1- check if the input is a valid array,
//2 - If there a Mixture of array elements string and numbers, ignore non-numeric values

//scenarion: [1, 5, "Hello", 6, , 9]

function findMax(array) {
    if (array.length === 0) {
        return null
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input';
    }
    
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            continue;
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return `The Max value is ${max} Index: ${array.indexOf(max)}`;

}
console.log(findMax([1, 5, "Hello", 6,  9]))
