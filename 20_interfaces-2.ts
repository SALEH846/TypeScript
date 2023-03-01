// Interface only deal with declaration, not definition
// It tells which things must be there and what should be thier types
// But it has nothing to do with the definition

// Example interface
interface TakePhoto {
	cameraMode: string;
	filter: string;
	burst: number;
}

// another example interface
interface Story {
	createStory(): boolean;
}

// Class implementing an interface
class Instagram implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {}
}

// You can define any additional properties and methods, other than declared inside the interface
// But you cannot omit any property or method which is declared in the interface
class Youtube implements TakePhoto, Story {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number,
		public isShort: boolean
	) {}

	createStory(): boolean {
		return true;
	}
}
