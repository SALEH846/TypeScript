// Array of the elements with type `T`
function getSearchProducts<T>(products: T[]): T {
	// return the element at index 3
	return products[3];
}

// Another way of doing the same thing as above
// A lot of times you will see developers mention generic in function definition as: <T,> -- So, this not produce any error and what this show is that it is not an ordinary HTML or XML tag, rather it is a Generic
function getSearchProducts2<T>(products: Array<T>): T {
	return products[0];
}

// Convert the above function into an Arrow function
const getMoreSearchProducts = <T>(products: Array<T>): T => {
	return products[1];
};
