// Write a JavaScript function that takes an array of numbers and returns 
// the maximum number in the array.

//Example array input : [3, 1, 7, 5, 9, 2] , the expected output is = 9

function findMax(array) {
    if (array.length === 0) {
        return null
    }
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;

}
console.log(findMax([]))

