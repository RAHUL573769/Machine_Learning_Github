function fruitProcessor(apple, oranges) {
	const juice = `Fruits with ${apple} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(4, 0);

const orangeJuice = fruitProcessor(0, 8);

console.log(appleJuice);

console.log(orangeJuice);
