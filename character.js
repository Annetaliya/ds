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
    const pattern = /^[A-Za-z]+$/;
    let newArray = [];
    for (let i = 0; i < str.length; i++){
        if (str[i].match(pattern)) {
            newArray.push(str[i])
        } 
        }
        return newArray.length;

    }
    
    
console.log(countCharacter('ghsak45'))