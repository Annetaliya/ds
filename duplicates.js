// Write a JavaScript program to remove duplicate items 
// from an array (ignore case sensitivity).

// Sample input:  [1, 2, 4, 2, 8, 5]
//Out put: [1, 2, 4, 8, 5]

function removeDuplicates (array) {
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
    let filtered = new Set(result)
    return [...filtered]

 }

 


console.log(removeDuplicates(['a', 'b', 'd', 'A', 'c', 'e']))