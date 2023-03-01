// we can assign more than one type to one variable
// this is called union
let age: number | string;
// Both of them valid
age = 22;
age = "Twenty Two";

// we can create union types with custom defined types as well
type User = {
	username: string;
	id: number;
};
type Admin = {
	name: string;
	id: number;
};
// this is valid
let newUser: User | Admin = { username: "Sal", id: 786 };
newUser = { name: "Saleh", id: 786 };

// unions in arrays
// This array can be either all strings or all numbers
const data: string[] | number[] = [1, 2, 3];

// This array can contain both numbers and strings at the same time
const data2: (string | number)[] = [1, 2, 3, "4"];
