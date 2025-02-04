

function occurence (array) {
  const stored  = array.map((item, index) => {
    if (item === 9 ) {
        return index
    }
  }).filter((item, index) => item !== undefined)
    return stored;

}

console.log(occurence([6, 8, 9, 4, 9, 6 , 9]))
