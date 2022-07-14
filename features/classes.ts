class Vehicle {
	// setting a default value
	// color: string = "red";

	// color: string;
	// constructor(color: string) {
	//	this.color = color
	// }

	constructor(public color: string) {}

	protected honk(): void {
		console.log("beep");
	}
}

class Car extends Vehicle {
	constructor(public color: string, public wheels: number) {
		super(color);
	}

	drive(): void {
		console.log("vroom vroom");
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car("red", 4);
car.startDrivingProcess();
