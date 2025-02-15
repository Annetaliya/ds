//JavaScript Program to Count the Number of Alphabets
// Test Data:
// Input:  "ghsak45"
// output:  5

function countCharacter(str) {
    if (str === '') {
        return null
    }
    if (typeof str !== 'string') {
        return 'Invalid Input'
    }
    // const newArray = str.split('')
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (typeof str.charAt[i] !== 'number') {
            count++;
            
            
        } else {
            continue
        }

    }
    // console.log(newArray)
    // console.log(typeof newArray[newArray.length - 1])
   
    return count;
    
}
console.log(countCharacter('ghsak45'))