let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here
function promedio(arreglo){
    let promedio=0;
    let acumulador=0;
    let cantidad=0;
    for (let element of arreglo) {
        cantidad ++;
        acumulador = acumulador + element;
    }
    promedio = acumulador / cantidad;

    return promedio;
}

console.log(promedio(myArray));