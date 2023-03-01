// we can thinl of tuples as some kind of special arrays

// In case of arrays, order in which values are defined doesn't matter
// both are completely valid
// const user: (string | number)[] = ["Sal", 22];
const user: (string | number)[] = [22, "Sal"];

// we can impose order by using tuples
// const userTuple: [string, number, boolean] = ["Sal", 22, false];
// OR
let userTuple: [string, number, boolean];
userTuple = ["Sal", 22, false];
// userTuple = [false, "Sal", 22]; // invalid

// another example
let rgb: [number, number, number];
rgb = [255, 255, 255];
// rgb = [255, 255, 255, 0.5]; // invalid

// we can also achieve this using the `type` keyword
type User = [string, number];
let newUser: User;
// newUser = [22, "Saleh"]; // invalid
newUser = ["Saleh", 22];
// there are some to take note of when using this approach
// the value are mutable
newUser[1] = 23; // valid
