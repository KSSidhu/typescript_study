class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfItems<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

//new ArrayOfItems<string>(["a", "b", "c"]);
const arr = new ArrayOfItems(["a", "b", "c"]); // typescript generics can use type inference

// example of generics with functions

const printStrings = (arr: string[]): void => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

const printNumbers = (arr: number[]): void => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

const printItems = <T>(arr: T[]): void => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

//printItems<string>(["a", "b", "c"]);
printItems(["a", "b", "c"]); // typescript generic functions can use type inference

// Generic Constraints

class Car {
	print() {
		console.log("I am a car");
	}
}

class House {
	print() {
		console.log("I am a house");
	}
}

// We get a warning if we don't explicitly let typescript know we guarantee a .print() will exist on items
// in the array

interface Printable {
	print(): void;
}

// We can extends generics with constraints to limit the types we can pass in
const printHousesOrCars = <T extends Printable>(arr: T[]): void => {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
};

// This would fail
//printHousesOrCars([1, 2, 3]);

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars([new House(), new Car(), new House()]);
