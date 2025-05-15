let arr = [4,5,734,43,45];

function itemsArrayAgg(arreglo){
    for (let i = 0; i < 10; i++) {
       let insertado = Math.floor((Math.random()*10)+1);
        arr.push(insertado);
    }

    return arreglo;
}

console.log(itemsArrayAgg(arr));

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
