// Don't use `any` type, unless you are dead sure about what you are doing
// Using it is generally considered not to be a good practice

// TypeScript will infer the value of this variable as `any` -- which means that it can store value of any type
// When only declaring variables and not initializing them then good practice is to explicitly declare the data type
let hero;

function getHero() {
	return "Batman";
	// return true; // also valid
}

// Because of `any`, `getHero` can return any data type which is not good
hero = getHero();

console.log(hero);
