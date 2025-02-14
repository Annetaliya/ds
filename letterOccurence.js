// Remove all Occurrences of a Character in a JS String
//       Test Data:
//        input: "Annet space"
//        output: "Annt spac"
//    letter 'e' removed.

function removeCharacter(str) {
  const array = str.split(" ");
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; i++) {
        if (array[i] !== array[j]) {
            if (!newArray.includes(array[i])) {
                newArray.push(array[i])
            }
        }
    }
}
  return newArray.join('')

}
console.log(removeCharacter("Annet space"));
