// We cannot instantiate an object of the abstarct class
// Abstract classes can only be inherited by other classes

abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}

	// Illegal, we have to provide definition also
	// getSepia(): void;

	// If you don't want to provide definition, then we can mark this method as abstract
	abstract getSepia(): void;
}

// Illegal, as the class `TakePhoto` is defined as abstract class
// const saleh = new TakePhoto("Test", "Test Filter");

// We can inherit an abstract class
// We must provide the definition of abstract methods if any in available inside the parent class which is abstract
class Instagram extends TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
	}

	getSepia(): void {
		console.log("Getting Sepia!");
	}
}

// The following is legal
const saleh = new Instagram("Test", "Test Filter", 10);
