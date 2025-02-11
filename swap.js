//Write a JavaScript program that accepts a string as input and swaps 
// the case of each character. 

// For example:
// input:   'The New Book'
// output:  'tHE nEW bOOK'.

function swapCharacter(str) {
    const result = []
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i].toLowerCase()
            result.push(str[i])
            

        } else {
            str[i].toUpperCase()
            result.push(str[i])
        }
    }
    return result.join('')
    
}
console.log(swapCharacter('The New Book'));

