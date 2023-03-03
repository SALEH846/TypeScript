type User = {
	firstName: string;
	lastName: string;
	age: number;
};

// Will remove the `age` property from User type and create a new type `UserName`
type UserName = Omit<User, "age">;
// To omit more than property, the syntax will be
// type UserName = Omit<User, "age" | "firstName">;

const fullName: UserName = {
	firstName: "Muhammad",
	lastName: "Saleh",
};
