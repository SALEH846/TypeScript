// The `num` argument can only be `number` data type
// We can also specify the return type of function but here doing that will come under the overuse of TypeScript
// Because here the return type of the function is obvious i.e. number
// As the passed argument is number and we are adding a constant to it so the result will always be a number
function addTwo(num: number) {
	return num + 2;
}

addTwo(5);

// another example
function getUpper(val: string) {
	return val.toUpperCase();
}

getUpper("saleh");

// another example
function signUpUser(name: string, email: string, isPaid: boolean) {
	// some logic
}

signUpUser("Saleh", "saleh@dev.com", false);

// another example
// we can also provide default values to some parameters which makes them optional
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
	// some logic
};

loginUser("sal", "sal@dev.com");

// another example
// we can also specify the return for the function
function addThree(num: number): number {
	// return "hello" // invalid
	return num + 3;
}

addThree(7);

// another example
// how to do this stuff with arrow functions
const getHi = (name: string): string => {
	return `Hi, ${name}`;
};

console.log(getHi("Saleh"));

// another example
const heros = ["thor", "siderman", "batman"];
// we can specify the return type of the function
// but in the case of loop, TypeScript is samrt enough to automatically infer the type of the argument of the
// callback function
// As array over which the program is looping, has strings so TypeScript infers that each value will be of type `string`
heros.map((hero): string => {
	return `Hero is ${hero}`;
});
