// Write a JavaScript program to compute the union of two arrays.
// Sample input Data :
// Input:  ([1, 2, 3], [100, 2, 1, 10]));
// output:  [1, 2, 3, 10, 100] 

function combineArray (firstArray, secondArray) {
    if (firstArray.length === 0 && secondArray.length === 0) {
        return null
    }
    if (!Array.isArray(firstArray) && !Array.isArray(secondArray)){
        return 'Invalid Input'
    }
    const newArray = [...firstArray, ...secondArray];
    const uniqueArray = newArray.filter((item, index) =>  newArray.indexOf(item) === index);
    return uniqueArray;
}
console.log(combineArray([1, 2, 3], [100, 2, 1, 10]))