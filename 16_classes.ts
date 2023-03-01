class User {
	email: string;
	name: string;
	city: string = "";
	// readonly city = "Islamabad"; // can be readonly -- user will not be able to change the value
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
}

const saleh = new User("s@s.dev", "Saleh");
// saleh.city = 4; // illegal, will throw an error
saleh.city = "Lahore";
