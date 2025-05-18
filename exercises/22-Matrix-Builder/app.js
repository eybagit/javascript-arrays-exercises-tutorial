// Your code here

const matrixBuilder = (size) => {
    return Array.from({ length: size }, () => 
        Array.from({ length: size }, () => Math.round(Math.random()))
    );
};
// Do not change anything from this line down
console.log(matrixBuilder(5))
