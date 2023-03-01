// interface is similar to type which we saw earlier
interface User {
	readonly _id: string;
	email: string;
	userId: number;
	googleId?: string; // optional
}

// using the above defined interface
const saleh: User = {
	_id: "86hfa2",
	email: "s@s.dev",
	userId: 786,
};
saleh.email = "s@ms.dev"; // valid
// saleh._id = "765hsad"; // invalid, as `_id` is read only

// the real power of interface is that we can declare functions inside them also as well as their arguments and return types
interface PowerUser {
	readonly _id: number;
	email: string;
	userId: number;
	googleId?: string;
	// startTrial: () => string; // return type of this function is `string`
	startTrial(): string; // same as above
	getCoupon(couponName: string): boolean;
}

// we can also extend the interfaces
// it looks something like this
// This is also called "Re-opening of interface"
interface PowerUser {
	githubToken: string;
}

const haseeb: PowerUser = {
	_id: 876,
	email: "has@smhas.bukhari",
	userId: 1234,
	githubToken: "github",
	startTrial: () => "Trial started",
	getCoupon: (name) => false,
};

// Another advantage we get with interface is inheritance
// can also inherit multiple interfaces, we can provide them by separating them with commas
interface Admin extends PowerUser {
	role: "admin" | "ta" | "teacher";
}
