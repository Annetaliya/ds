//Write a JavaScript program that accepts a string as input and swaps 
// the case of each character. 

// For example:
// input:   'The New Book'
// output:  'tHE nEW bOOK'.

function swapCharacter(str) {
    let result = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
        }
      
    return result
    
}
console.log(swapCharacter('The New Book'));

