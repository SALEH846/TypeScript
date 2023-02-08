function createUser({ name: string, isSubscriber: boolean }) {}
// this is illegal
// I cannot pass `email` property in the object which I am passing as an argument
// because it is not defined in the definition
// createUser({ name: "Saleh", isSubscriber: true, email: "saleh@gmail.com" });

// but wait, take a look at this
let newUser = { name: "Saleh", isSubscriber: true, email: "saleh@gmail.com" };
// Now, I can pass an additional property of `email`
// this is a weird behaviour of TypeScript
createUser(newUser);
