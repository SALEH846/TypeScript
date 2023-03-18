// -------------------1---------------------
// You can pass types to other types
type MyGenericType<TData> = {
	data: TData;
};

type Example1 = MyGenericType<{
	firstName: string;
}>;

const dataExample1: Example1 = {
	data: {
		firstName: "Saleh",
	},
};

type Example2 = MyGenericType<number>;

// -------------------2---------------------
// You can create functions with a type helper
// mapped over the top, and pass the type to them
// manually...

// This is now a generic function with a type helper mapped on top of it
const makeFetch = <TData>(url: string): Promise<TData> => {
	return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: "Muhammad"; lastName: "Saleh" }>("/api/endpoint").then(
	(res) => {
		console.log(res);
	}
);

// -------------------3---------------------
// You can pass these type parameters to
// other parts of JS, like Set and Map

// Now, we can only add number to this set
const set = new Set<number>();

set.add(1);

// set.add("qwerty"); // illegal

// -------------------4---------------------
// You don't always have to pass the types to a generic
// function!
const addToObject = <TObj>(obj: TObj): TObj & { id: string } => {
	return {
		...obj,
		id: "123",
	};
};

const result = addToObject<{
	firstName: string;
	lastName: string;
}>({
	firstName: "Muhammad",
	lastName: "Saleh",
});

console.log(result);

// -------------------5---------------------
// ReturnType will take a function and then give back return value of that function

// type Example1ForStep5 = ReturnType<() => string>; // valid, because function can be called and has a return type, otherwise the return type will be `any`
// Here `Example1ForStep5` will be `string` because the return type of the function
// passed `() => string` is `string`

// type Example2ForStep5 = ReturnType<string>; // invalid
// because `string` is not callable and hence doesn't have any return type as well

// Awaited takes in a promise and gives back what that promise resolves to
// type Example3ForStep5 = Awaited<Promise<number>>; // valid
// Here, `Example3ForStep5` will represent `number` because that is type of
// what our passed promise gives back

// `T extends (...args: any) => any` this expression
// represents that `T` extends a function which accepts any number of arguments
// of any type and return the value with type any
// We have to do this because `ReturnType` expects a callable object inside it
// otherwise, it will throw an error

type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
	ReturnType<T>
>;

type Result = GetPromiseReturnType<
	() => Promise<{
		firstName: string;
		lastName: string;
		id: string;
	}>
>;

// type Errorline = GetPromiseReturnType<string>; // invalid

// -------------------6---------------------
// Sometimes you need to constrain the generic
// that gets passed in

// You can put a constraint on what type users can pass to the function
// `Record<string, number>` --> Object with string keys and number values
const getKeyWithHighestValue = <TObj extends Record<string, number>>(
	obj: TObj
): { key: keyof TObj; value: number } => {
	const keys = Object.keys(obj) as Array<keyof TObj>;

	let highestKey: keyof TObj = keys[0];
	let highestValue = obj[highestKey];

	for (const key of keys) {
		if (obj[key] > highestValue) {
			highestKey = key;
			highestValue = obj[key];
		}
	}

	return {
		key: highestKey,
		value: highestValue,
	};
};

const resultStep6 = getKeyWithHighestValue({
	a: 1,
	b: 2,
	c: 3,
});

const key = resultStep6.key;
const value = resultStep6.value;

// -------------------7---------------------
// Sometimes, you'll need to override the types inside
// the generic function with an assertion. That's OK!
const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
	return Object.keys(obj) as Array<keyof TObj>;
};

const resultStep7 = typedObjectKeys({
	name: "John",
	age: 30,
});

// -------------------8---------------------
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
	if (key === "bad") {
		throw Error("Don't access the bad key");
	}
	return obj[key];
};

const resultStep8 = getValue(
	{
		a: 1,
		b: "some-string",
		c: true,
	},
	"b"
);

console.log(resultStep8);

// -------------------9---------------------
// You can also provide default parameter
export const createSet = <T = string>() => {
	return new Set<T>();
};

// can override
const numberSet = createSet<number>();
const stringSet = createSet<boolean>();

// If not provided, it will take default value
const otherStringSet = createSet();
