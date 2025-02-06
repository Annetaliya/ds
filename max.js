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
//Sample input:   [3, 9, 7, 9, 5, 9, 2]  

//Output:  { 3: 1, 9: 3, 7: 1, 5: 1, 2: 1 }

function findMax(array) {

    if (!Array.isArray(array)) {
        return 'Invalid Input';
    }
    if (array.length === 0) {
        return null
    }
    
    const countMap = {};
    let count = 0;
    

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            continue;
        }
        if (countMap[array[i]]) {
            countMap[array[i]] += 1;          
        } else {
            countMap[array[i]] = 1;
        }
        
    }
    
    
    return countMap;

}
console.log(findMax([3, 9, 7, 9, 5, 9, 2]))
// 3 : 1, 9: 3