//JavaScript Program to Count the Number of Alphabets
// Test Data:
// Input:  "ghsak45"
// output:  5

function countCharacter(str) {
    const array = str.split('');
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (typeof str[i] === 'string') {
            newStr += str[i]
        }

    }
    return newStr.length
    
}
console.log(countCharacter('ghsak45'))