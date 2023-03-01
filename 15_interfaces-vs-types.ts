// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an `interface` are available in `type`, the key distinction is that a type cannot
// be re-opened to add new properties vs an interface which is always extendable.

// extending an interface
interface AnimalInterface {
	name: string;
}

interface BearInterface extends AnimalInterface {
	honey: boolean;
}

// we can also types via intersections
type AnimalType = {
	name: string;
};

type BearType = AnimalType & {
	honey: boolean;
};

// we can add new fields to an existing interface
// this is called re-opening of the interface
interface Story {
	title: string;
}

interface Story {
	author: string;
}

// A type cannot be changed after it is created
type Photo = {
	name: string;
};

// will throw an error
// we can say we cannot re-open the type
// type Photo = {
// 	date: string;
// };
