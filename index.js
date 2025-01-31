const arr1=[8,6,4,9,22,1, 3,2];
// const item = arr1.slice()
// console.log(item)
// const arr2 = [];
//  for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i]
//  }

// arr2[0] = 67;
// console.log(arr2)
// console.log(arr1)

// const arr2 = [...arr1]

const array2 = [10, 11, 12];

function sortArray(a,b) {
    return a - b
}

const sorted = arr1.sort(sortArray)

// console.log(sorted)

sorted.splice(7, 0, array2)
console.log(sorted.flat())


// function evenNumber(n) {
//     return n % 2 === 0; 
// }
// const filtered = arr1.filter(evenNumber);
// console.log(filtered)

