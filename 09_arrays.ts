// `superHeros` will be an Array of strings
const superHeros: string[] = [];
// Now, we can do that
superHeros.push("Spiderman");

// another way of defining arrays
const superHeroPower: Array<number> = [];
superHeroPower.push(10);

// another example
type User = {
	name: string;
	isActive: boolean;
};
const users: User[] = [];
users.push({ name: "Sal", isActive: false });

// specifying 2d array
// this is valid
const picture: number[][] = [
	[255, 255, 255],
	[128, 128, 128],
];

// defining a read only Array
const immutableArr: ReadonlyArray<string> = ["Saleh", "Haseeb"];
// immutableArr.push("Hamza"); // invalid as `immutableArr` is read only and cannot be changed
