// Write a JavaScript function that takes an array of numbers and returns 
// the maximum number in the array.

//Example array input : [3, 1, 7, 5, 9, 2] , the expected output is = 9
//edge cases:1- check if the input is a valid array,
//2 - If there a Mixture of array elements string and numbers, ignore non-numeric values

//scenarion: [1, 5, "Hello", 6, , 9]
//1) Modify your function so that it returns all occurrences of the max value if it appears multiple times:

// Example:
// input array     [3, 9, 7, 9, 5, 9, 2]
// Expected output: { max: 9, indices: [1, 3, 5] }

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
    // let element = array.indexOf(max);
    // const occurrences = [];
    // while( element !== -1) { 
    //     occurrences.push(element)
    //     element = array.indexOf(max, element + 1)
        
    // }
    const occured = array.map((item, index) => {
        if (item === max) {
            return index
        }
    }).filter((item) => item !== undefined)


    return `Max: ${max} indices: ${occured}`;

}
console.log(findMax([3, 9, 7, 9, 5, 9, 2]))
