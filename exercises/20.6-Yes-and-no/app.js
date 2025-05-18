let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];


let tipo = theBools.map(function (item){
    if (item == 1) {
        return "wiki";
    }else return "woko"
});

console.log(tipo);

// Your code here
