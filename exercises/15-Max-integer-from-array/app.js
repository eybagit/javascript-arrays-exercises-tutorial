let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
function findMax(arreglo){
    let mayor = 0;
        arreglo.forEach(element => {
            if(element > mayor)
                mayor = element;
        });
        return mayor;
}



  console.log(findMax(myArray)); // --> 5435