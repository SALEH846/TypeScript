class User {
	private _courseCount: number = 1;

	readonly city: string = "Karachi";
	constructor(public email: string, public name: string) {}

	get getAppleEmail(): string {
		return `apple.${this.email}`;
	}
}

const saleh = new User("s@s.dev", "Saleh");

console.log(saleh.getAppleEmail);
