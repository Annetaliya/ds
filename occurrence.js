// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a  -
// ( 5 times )

function frequent(array) {
    let accumulator = {}
    for (let i = 0; i < array.length; i++) {
        if (accumulator[array[i]]) {
            accumulator[array[i]] += 1
     } else {
        accumulator[array[i]] = 1
     }
    }
    const values = Object.values(accumulator);
    const result = Math.max(...values)
    console.log(Object.keys(accumulator))

    return result
}
console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))
