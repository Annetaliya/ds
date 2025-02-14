// Write a JavaScript program that takes an array with 
// mixed data type and calculates the sum of all numbers.
// Test Data :


// input: ([2, "11", 3, "a2", false, 5, 7, 1])

// output:  18

function findSum(array) {
    if (array.length === 0) {
        return null;
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input'
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        } else {
            continue;
        }
        
    }
    return sum;
}
console.log(findSum([2, 3, 0, 5, 7, 8, true, false]))