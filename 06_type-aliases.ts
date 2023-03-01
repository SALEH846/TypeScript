// we can kind of define objects with custom schema using the `type` keyword
type User = {
	name: string;
	email: string;
	isActive: boolean;
};

// Then we can use that custom defined schema
// In this case, both the type of argument passed to the function and the return type of the function is of type `User`
function createUser(user: User): User {
	return {
		name: "",
		email: "",
		isActive: true,
	};
}

createUser({ name: "Saleh", email: "saleh@gmail.com", isActive: false });
