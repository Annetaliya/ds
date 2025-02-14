function filterValues(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                if (!newArr.includes(arr[i])) {
                    newArr.push(arr[i])
                }
            }
        }
    }
    return newArr;
}
console.log(filterValues([1,2,4,2,1,2]))