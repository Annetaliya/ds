// Write a JavaScript program to remove duplicate items 
// from an array (ignore case sensitivity).

// Sample input:  [1, 2, 4, 2, 8, 5]
//Out put: [1, 2, 4, 8, 5]

function removeDuplicates (array) {
    const removed = [];
    if (array.length === 0) {
        return null;
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input'
    }
    const result = array.map((item) => {
        if (typeof item === 'string') {
            return item.toLowerCase();
        } else {
            return item;
        }
    })
    // let filtered = new Set(result)
    // return [...filtered]
    for (let i = 0; i < result.length; i++) {
        if(result[i] === result[i + 1]) {
            removed.push(result[i])
        }
    }
    return removed;

 }

 


console.log(removeDuplicates(['a', 'b', 'd', 'A', 'c', 'e']))