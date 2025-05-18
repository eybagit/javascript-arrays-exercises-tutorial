let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

function calcularEdad(fechaDeNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaDeNacimiento);
  
 
  let añosDeEdad = hoy.getFullYear() - nacimiento.getFullYear();
  
  
  const mesActual = hoy.getMonth() + 1; 
  const diaActual = hoy.getDate();
  const mesNacimiento = nacimiento.getMonth() + 1;
  const diaNacimiento = nacimiento.getDate();
  
  if (mesActual < mesNacimiento || 
      (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    añosDeEdad--;
  }
  
  return añosDeEdad;
}

let simplifier = function(person) {
	// 'Hello, my name is Joe and I am 36 years old'
	//{ name: 'Joe', birthDate: new Date(1986,10,24) },
	return "Hello, my name is "+person.name+" and I am "+ calcularEdad(person.birthDate)+" years old";
};

console.log(people.map(simplifier));

/*let nuevoArreglo = people.map(simplifier);
console.log(nuevoArreglo);*/
