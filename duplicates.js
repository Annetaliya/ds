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
    // let filtered = new Set(result)
    // return [...filtered]

   const removed = result.filter((item, index) => result.indexOf(item) === index)
    // for (let i = 0; i < result.length; i++) {
    //     if(result[i] === result[i + 1]) {
    //       removed.push(result[i])
    //     }
    // }
    return removed;

 }

 


console.log(removeDuplicates(['a', 'b','b', 'd', 'A', 'c', 'e']))