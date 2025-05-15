let arr = [4,5,734,43,45];

function InsertInArray(arr){
    let insertado1 = Math.floor(Math.random() *10);
    let insertado2 = Math.floor(Math.random() *10);
    
    arr.push(insertado1);
    arr.push(insertado2);
   

    return arr;
}
// Your code here, use the push() function and the 2 Math functions

console.log(InsertInArray(arr));
