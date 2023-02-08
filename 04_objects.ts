// TypeScript will automatic type inference in this case
const User = {
	name: "Saleh",
	age: 22,
	email: "sal@lca.dev",
	isActive: true,
};
// User.name = 22; // Invalid, as `User.name` is a `string`
// User.isSubscribed = false; // Invalid, as `User.isSubscribed` does not exist in definition
User.name = "Hamza"; // valid

// we can also pass objects to functions as arguments
// each entry of the object can be specified as a sepcific data type
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "Saleh", isPaid: false });

// we can also return an object from the function
function createEmptyObject(): {} {
	return {};
}
createEmptyObject();

// another example
function createCourse(): { courseName: string; price: number } {
	return {
		courseName: "Intro to TypeScript",
		price: 49.9,
	};
}
console.log(createCourse());
