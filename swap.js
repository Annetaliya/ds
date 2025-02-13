//Write a JavaScript program that accepts a string as input and swaps 
// the case of each character. 

// For example:
// input:   'The New Book'
// output:  'tHE nEW bOOK'.

function swapCharacter(str) {
    if (str === null) {
        return null;
    }
    if (typeof str !== 'string') {
        return 'Invalid Input'
    }
    let result = []
    str.split(' ')
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()){
            result.push(str.charAt(i).toUpperCase())
        } else {
            result.push(str.charAt(i).toLowerCase())
        }
        }
      
    return result.join('')
    
}
console.log(swapCharacter('The New Book'));

