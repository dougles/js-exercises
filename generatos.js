function *numbers(){
	yield 1;
	yield 2;
	yield* moreNumbers();
	yield 6;
	yield 7;
	yield 8;
}

function *moreNumbers(){
	yield 3;
	yield 4;
	yield 5;
}


const generator = numbers();


const values = [];

for(let value of generator){
	values.push(value)
}

console.log(values);