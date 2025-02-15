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
    function primeNumber(num) {
        for (let i = 2; num > i; i++) {
            if (num % i === 0) {
                return false

             }
        

        }
        return num;
    }
    const result = array.every(primeNumber)
    return result;
    
  
   
}
console.log(findPrime([2,3,5,7]))