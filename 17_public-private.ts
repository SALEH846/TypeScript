// Private properties are only accessible only within the class
// Public properties are accessible both within the class as well as outside the class
// By default, all properties are public

// These public and private keywords are called "Access Modifiers"

// As we can have public and private properties, we can have public and private methods
// as well

// class User {
// 	email: string;
// 	name: string;
// 	private city: string = "";
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 		this.city = "Karachi"; // Legal, private properties are accessible within the class
// 	}
// }

// Another way of writing classes in TypeScript
class User {
	readonly city = "Karachi";
	constructor(
		public email: string,
		public name: string,
		private userId: string
	) {}
}

const saleh = new User("s@s.dev", "Saleh", "123asd");
// saleh.city = "Lahore"; // Illegal, will throw an error as `city` is marked as readonly
