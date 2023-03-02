function identityOne(val: boolean | number): boolean | number {
	// The problem here is that the `val` can be either be boolean or a number
	return val;
}

// One thing we can do to solve is to use `any` keyword
// It solves the problem but it shouldn't be used
function identityTwo(val: any): any {
	return val;
}

// The better and correct approach to solve this problem is to use Generics
function identityThree<Type>(val: Type): Type {
	return val;
}
// identityThree<string>(3); // Illegal, will throw an error
identityThree<number>(3); // Legal, now the type of argument `val` is number and the return type is also `number`

// Another more common way of defining generics
function identityFour<T>(val: T): T {
	return val;
}

// We can also pass custom types such as interfaces to the generics
interface Bottle {
	brand: string;
	type: number;
}
identityFour<Bottle>({ brand: "Reebok", type: 2 });
