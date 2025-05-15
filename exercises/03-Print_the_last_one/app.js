function generateRandomArray()
{
	let auxArray = [];
		let randomLength = Math.floor(Math.random()*100);
			for(let i = 0; i < randomLength; i++)
				 auxArray.push(Math.floor(Math.random()*100));
				 	return auxArray;	
					}
					let myStupidArray = generateRandomArray();

					let totalItems = myStupidArray.length;
					let theLastOne = myStupidArray[totalItems-1];
					console.log(theLastOne);


					// Your code here
					