// enums are useful when we have to restrict the users to a certain number options
// By default, all the options get integer value starting from zero and incremented by 1 as we go down
enum seatChoice {
	AISLE, // 0
	MIDDLE, // 1
	WINDOW, // 2
}

// here's how we can consume enums
const msSeat = seatChoice.AISLE;

console.log(msSeat); // 0

// we can change the values of options
enum seatChoice2 {
	AISLE = 11, // 11
	MIDDLE, // 12
	WINDOW = 33, // 33
}

// another example
// In case, we assign a string value to one option then we have to assign string values to all the options below it
enum seatChoice3 {
	AISLE = "aisle", // aisle
	MIDDLE = "middle", // middle
	WINDOW = "window", // window
}

// another example
enum seatChoice4 {
	AISLE = "aisle", // aisle
	MIDDLE = 22, // 22
	WINDOW, // 23
}

// another example
// this is also valid
// but this produces a much cleaner and easy to debug code in JavaScript as compared to the above approach
const enum seatChoice5 {
	AISLE = "aisle", // aisle
	MIDDLE = 22, // 22
	WINDOW, // 23
}
