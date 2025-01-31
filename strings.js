// Create a function truncate(str, maxlength) that checks the length of 
// the str and, if it exceeds maxlength – replaces the end of str with the 
// ellipsis character "…", to make its length equal to maxlength.
//The result of the function should be the truncated (if needed) string.
//truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
  

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//        const newStr = str.slice(0, maxlength) + '...'
//        return newStr
//     } else {
//         return str
//     }
    
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20))

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such 
// string and return it.

// function extractCurrencyValue(str) {
//     return Number(str.slice(1))
// }

// console.log(extractCurrencyValue('$120'))

// Write the function camelize(str) that changes dash-separated words 
// like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.
//camelize("background-color") == 'backgroundColor';

// function camelize(str) {
//     return str.split('-')
//             .map((item, index) => index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1))
//             .join('')
// }           
// console.log(camelize("background-color"));

// Write a function filterRange(arr, a, b) that gets an array arr, looks
//  for elements with values higher or equal to a and lower or equal to b 
//  and return a result as an array.

// The function should not modify the array. It should return the new array.

// function filterRange(arr, a, b) {
//     const filtered = arr.filter((item) => item >= a && item <= b )
//     return filtered
// }
// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4))

// let arr1 = [5, 2, 1, -10, 8];

// function sorted (a,b) {
//     return b - a
// }
// console.log(arr1.sort(sorted))

// let arr2 = ["HTML", "JavaScript", "CSS"];

// let copArr = arr2.slice(0);
// console.log(copArr.sort());
// console.log(arr2);

// function extract(str) {
//     str.slice(0)
// }

function acronym(str) {
    return str[0]

}
const data = ['For', 'Your', 'Information']
console.log(data.map(acronym).join(""));


const myArray = ['Daughtry', 'Paramore', 'Summer'];
myArray[0] = 'Hoosbank';
myArray[1] = 'Pink';
myArray.unshift('Gote');
console.log(myArray);