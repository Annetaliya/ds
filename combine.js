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
    const newArray = firstArray.concat(secondArray);
    let filtered =  [];
    for ( let i = 0; i < newArray.length; i++){
        for ( let j = i + 1; j < newArray.length; j++) {
            if (newArray[i] !== newArray[j]) {
                if (!filtered.includes(newArray[i])) {
                    filtered.push(newArray[i])
                }
            }
        }
    }


    return filtered;
    
    
}

console.log(combineArray([1, 2, 3, 4], [100, 2, 1, 7, 4]))