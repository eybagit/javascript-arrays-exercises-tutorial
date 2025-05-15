let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"


// Your code here



function contarLetras(texto) {
  let textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, '');
  let contador = {};

  for (let i = 0; i < textoLimpio.length; i++) {
    let letra = textoLimpio[i];
    
    if (contador[letra] !== undefined) {
      contador[letra] += 1;
    } else {
      contador[letra] = 1;
    }
  }

  return contador;
}


let counts = contarLetras(par);
console.log(counts);