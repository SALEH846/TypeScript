class User {
	protected _courseCount: number = 1;

	readonly city: string = "Karachi";
	constructor(public email: string, public name: string) {}

	// private method -- example -- does nothing
	private deleteToken(): void {
		console.log("Token deleted");
	}

	get getAppleEmail(): string {
		return `apple.${this.email}`;
	}

	// Getter for the private `_courseCount` property
	get courseCount(): number {
		return this._courseCount;
	}

	// In TypeScript, setters should not have any return type
	set courseCount(courseNum) {
		if (courseNum <= 1) {
			throw new Error("Course Count should be more than one!");
		}
		this._courseCount = courseNum;
	}
}

// Derived class will inherit all the public properties and methods of the parent class
// But not inherit the private properties and methods
// But they will inherit the protected properties and methods
// Privare properties and methods are only accessible in the class in which they are defined
// Protected properties and methods are accessible only within the class in which they are defined and also the classes which are derived form that class but not anywhere else
class SubUser extends User {
	isFamily: boolean = true;

	changeCourseCount() {
		this._courseCount = 4;
	}
}

const saleh = new User("s@s.dev", "Saleh");

console.log(saleh.getAppleEmail);
