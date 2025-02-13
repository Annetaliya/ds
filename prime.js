// 1) Write a JavaScript program that takes an array of integers and returns 
// false if every number is not prime. Otherwise, return true.
//       Test Data :
//      input: ([2,3,5,7]) 
//      output: true

//       input: ([2,3,5,7,8])
//       output:  false

function findPrime(array) {
    if (array.length === 0) {
        return null;
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input'
    }
    let isPrime = []
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % array[i] === 0) {
            isPrime.push(array[i])
        }
    }
    return isPrime
  
   
}
console.log(findPrime([2, 3, 6, 9, 7]))