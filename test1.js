// Modify the function to return the number(s) that appear the most 
// times along with their count

//Example:
//[3, 9, 7, 9, 5, 9, 2, 7, 7]; 
// Expected output: {  [9, 7], count: 3 }  

function highCount(array) {
    const obj = {};
    const items = [];
    const newArray = [];

    for(let i = 0; i <array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]] += 1

        } else {
            obj[array[i]] = 1
        }
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            items.push(obj[key])

        }
    }
    const max = Math.max(...items)
    for (let key in obj) {
        if (obj[key] === max) {
            newArray.push(key)
            
        }
    }
    console.log(newArray)
    return obj


}

console.log(highCount([3, 9, 7, 9, 5, 9, 2, 7, 7]))
