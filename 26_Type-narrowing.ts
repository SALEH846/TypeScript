// What we mean by Type Narrowing is that if let's say we have an argument to the function
// which can be of multiple data types, then we should first make sure what its data type is
// and then process in accordingly

// Example
function detectType(val: number | string) {
	// return val.toLowercase() // Illegal, cannot do that --  as `val` can be a number
	if (typeof val === "string") {
		return val.toLowerCase();
	}
	return val + 3;
}

// Exmaple
function provideId(id: string | null) {
	if (!id) {
		console.log("Please provide the ID");
		return;
	}
	id.toLowerCase();
}

// In JavaScript, `typeof []` results in "object"
// In JavaScript, `typeof null` also results in "object"

// Example
function printAll(strs: string | string[] | null) {
	// check for null
	if (strs) {
		// Check if it is an Array
		if (typeof strs === "object") {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === "string") {
			console.log(strs);
		}
	}
}

// Example
// We can make use of `in` operator for type narrowing
interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	if ("isAdmin" in account) {
		return account.isAdmin;
	}
	return false;
}

// Example
// We can also make use of `instanceof` operator for type narrowing
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

// Example
// Type narrowing using type predicates
type Fish = {
	swim: () => void;
};
type Bird = {
	fly: () => void;
};

// This function will return boolean
// function isFish(pet: Fish | Bird) {
// 	return (pet as Fish).swim !== undefined;
// }
// if we don't want boolean but instead the type itself then syntax should look something like this
// If return value is true, we know it's a `Fish` so return that
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		return "Fish Food";
	}
	return "Bird Food";
}
