// Remove all Occurrences of a Character in a JS String
//       Test Data:
//        input: "Annet space"
//        output: "Annt spac"
//    letter 'e' removed.

function removeCharacter(str, item) {
    if (str === '') {
        return null
    }
    if (typeof str !== 'string') {
        return 'Invalid Input'
    }
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === item) {
            continue;
        } else {
            newStr += str.charAt(i)

        } 
    }
   
    return newStr;
  
}

function removeChrt(str, element) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === element) {
            continue;
        } else {
            newStr += str[i]
        }
    }
    return newStr;
}
  console.log(removeChrt("Annet space", 'e'));