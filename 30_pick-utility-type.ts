interface UserInfo {
	userName: string;
	password: string;
	role: string;
	age: number;
}

// Pick utility type in TypeScript allows us to pick a few properties from existing type
// or interface and create a new type or interface
type UserCredentials = Pick<UserInfo, "userName" | "password">;

const person: UserCredentials = {
	userName: "iamsaleh",
	password: "123asd",
};
