

function occurence (array) {
  const stored  = array.map((item, index) => {
    if (item === 9 ) {
        return index
    }
  }).filter((item, index) => item !== undefined)
    return stored;

}

// console.log(occurence([6, 8, 9, 4, 9, 6 , 9]))

//Sample input:   [3, 9, 7, 9, 5, 9, 2]  

//Output:  { 3: 1, 9: 3, 7: 1, 5: 1, 2: 1 }
//const items  = [3, 9, 7, 9, 5, 9, 2];
function outcome(items) {
  const countMap = {}
  let count = 0;

}

console.log(outcome([3, 9, 7, 9, 5, 9, 2]))

