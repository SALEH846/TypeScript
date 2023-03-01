// we can also assign a constant or a literal to a variable as a type
let PI: 3.14 = 3.14;
// PI = 3.142; // Invalid

// Useful scenario in which case this above thing is useful
let seatAlloted: "aisle" | "middle" | "window";
seatAlloted = "aisle"; // valid
// seatAlloted = "jump"; // invalid
