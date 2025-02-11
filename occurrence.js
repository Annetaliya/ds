// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a  -( 5 times )

function frequent(array) {
    if (array.length === 0) {
        return null;
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input'
    }

    let occurence = {};
    let counter = 0
    const values = []

    for (let i = 0; i < array.length; i++) {
        if (occurence[array[i]]) {
            occurence[array[i]] += 1;
        } else {
            occurence[array[i]] = 1;
        }
    }
    for (let key in occurence) {
        if (occurence.hasOwnProperty(key)) {
            values.push(occurence[key])
        }   
    }
    let maxVal = values[0]

    for (let i= 1; i < values.length; i++) {
        if (values[i] > maxVal) {
            maxVal = values[i]
        }
    }

    for (let key in occurence) {
        if (occurence[key] === maxVal) {
            return `${key} ${maxVal} times`
        }   
    }
    return occurence;
}
console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))
