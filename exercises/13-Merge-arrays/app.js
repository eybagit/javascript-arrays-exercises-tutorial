let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
        firstArray.forEach(element => {
            newArray.push(element);
        });
        secondArray.forEach(element => {
            newArray.push(element);
        });
    // Your code here
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
