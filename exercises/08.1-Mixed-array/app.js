let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

function tipoDeDato(mix){
    let tipo = [];
    for (let i = 0; i < mix.length; i++) {
        tipo.push(typeof(mix[i]));
    }
    return tipo;
}

console.log(tipoDeDato(mix));

// Your code here
