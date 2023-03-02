interface Database {
	connection: string;
	username: string;
	password: string;
}
function someFunction<T, U extends Database>(valOne: T, valTwo: U): object {
	return {
		valOne,
		valTwo,
	};
}
someFunction(3, { connection: "1234", username: "root", password: "asdf" }); // Legal

// Another example
interface Quiz {
	name: string;
	type: string;
}
interface Course {
	name: string;
	author: string;
	subject: string;
}
class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
	}
}
