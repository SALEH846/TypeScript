// We can also create read only properties in objects so that they cannot be changed later
// in this case, the `_id` property is read only and cannot be changed to any other value later
// we can also make some properties optional so the users can skip those of they want to
// In this case, the property named `creditCardNumber` is optional
type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	creditCardNumber?: number;
};

// As the property `creditCardNumber` is optional, we can skip that
let newUser: User = {
	_id: "786",
	name: "S",
	email: "s@s.dev",
	isActive: false,
};

// Valid
newUser.name = "Sal";
// Invalid -- `_id` is read only and cannot be changed
// newUser._id = "123";
