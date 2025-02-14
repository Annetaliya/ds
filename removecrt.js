function removeCharacter(array) {
    array.split(" ");
    let newArray = [];
    for ( let i = 0; i < array.length; i++){
        for ( let j = i + 1; j < array.length; j++) {
            if (array.charAt(i) !== array.charAt(j)) {
                if (!newArray.includes(array.charAt(i))) {
                    newArray.push(array.charAt(i))
                }
            }
        }
    }
   
    return newArray.join('')
  
}
  console.log(removeCharacter("Annet space"));