class User {
	private _courseCount: number = 1;

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

const saleh = new User("s@s.dev", "Saleh");

console.log(saleh.getAppleEmail);
