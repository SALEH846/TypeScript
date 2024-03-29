export const myObject = {
	a: 1,
	b: 2,
	c: 3,
};

const objectKeys = <Obj extends {}>(obj: Obj): (keyof Obj)[] => {
	return Object.keys(obj) as (keyof Obj)[];
};

objectKeys(myObject).forEach((key) => {
	console.log(myObject[key]);
});
