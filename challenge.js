// 1. Store a set of words in an array and display 
// the contents both forward and backward

const array = ['hello', 'world'];
const secondArray = array.slice(0);
secondArray.reverse();
const display = [...array, ...secondArray]
console.log(display)

// 2. Create an object that stores individual letters in an array and has a 
// function for displaying the letters as a single word.
 const myObj = {
    array: ['h', 'e', 'l', 'l', 'o'],
    singleWord() {
        const str = [];
        for (i = 0; i < this.array.length; i++) {
            str.push(this.array[i])
        }
        return str.join('');
    }
 }
 console.log(myObj.singleWord());