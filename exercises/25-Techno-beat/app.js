function lyricsGenerator(ritmo) {
  let letra = '';           
  let contadorUnos = 0;     

  for (let i = 0; i < ritmo.length; i++) {
    if (ritmo[i] === 0) {
  
      letra += ' Boom';
      contadorUnos = 0;
    } else {
      
      contadorUnos++;
      
      if (contadorUnos === 3) {
         
        letra += ' Drop the bass !!!Break the bass!!!';
        contadorUnos = 0;   
      } else {
       
        letra += ' Drop the bass';
      }
    }
  }

  return letra.trim();  // trim para sobrante
}
// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
