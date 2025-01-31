const array1 = [78, 42, 67, 50, 89];
// console.log(array1)

//const result = array1.reduce((element, accumulator) => accumulator + element )
//console.log(result)

function isEven (number)  {
    return number % 2 === 0;
}

// if (isEven) {
//     console.log('Even number found')
// } else {
//     console.log('Not found')
// }
isEven ? console.log('hello') : console.log('not found')

console.log(array1.some(isEven))
