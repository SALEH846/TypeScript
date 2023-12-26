# TypeScript

### Structural Type System
- Also called “duck typing” or “structural typing”.
- In a structural type system, if two objects have the same shape, they are considered to be of the same type.
```ts
	interface Point {
	  x: number;
	  y: number;
	}
	 
	function logPoint(p: Point) {
	  console.log(`${p.x}, ${p.y}`);
	}
	 
	const point = { x: 12, y: 26 };
	logPoint(point); // logs "12, 26"
	
	const point3 = { x: 12, y: 26, z: 89 };
	logPoint(point3); // logs "12, 26"
	
	const rect = { x: 11, width: 30, y: 1, height: 80 };
	logPoint(rect); // logs "11, 1"
```
- The shape-matching only requires a subset of the object’s fields to match.
- There is no difference between how classes and objects conform to shapes
```
	class VirtualPoint {
	  x: number;
	  y: number;
	 
	  constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	  }
	}
	 
	const newVPoint = new VirtualPoint(13, 56);
	logPoint(newVPoint); // logs "13, 56"
```
- It still works
```
class VirtualPoint {
  x: number;
  y: number;
  z: string;
 
  constructor(x: number, y: number, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
interface Point {
	  x: number;
	  y: number;
	}

function logPoint(p: Point) {
	  console.log(`${p.x}, ${p.y}`);
	}
 
const newVPoint = new VirtualPoint(13, 56, "HAHA");
logPoint(newVPoint); // logs "13, 56"
```
- If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

### Goal of TypeScript
- The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked).
- Static types systems describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

- TypeScript can catch basic logic errors
```
	const value = Math.random() < 0.5 ? "a" : "b";
	if (value !== "a") {
	  // ...
	} else if (value === "b") {
		// Error Message: This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
		// Oops, unreachable
	}
```

### `noImplicitAny`
- Recall that in some places, TypeScript doesn’t try to infer types for us and instead falls back to the most lenient type: any. This isn’t the worst thing that can happen - after all, falling back to any is just the plain JavaScript experience anyway.
- However, using any often defeats the purpose of using TypeScript in the first place. Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.

### `strictNullChecks`
- By default, values like null and undefined are assignable to any other type. This can make writing some code easier, but forgetting to handle null and undefined is the cause of countless bugs in the world. The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.

### `any`
- You can use it whenever you don’t want a particular value to cause typechecking errors.
```
	let obj: any = { x: 0 };
	// None of the following lines of code will throw compiler errors.
	// Using `any` disables all further type checking, and it is assumed 
	// you know the environment better than TypeScript.
	obj.foo();
	obj();
	obj.bar = 100;
	obj = "hello";
	const n: number = obj; // Look at this one
```
- When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

### Functions
- Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.
- When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types. This process is called contextual typing because the context that the function occurred within informs what type it should have.
```
	const names = ["Alice", "Bob", "Eve"];
	 
	// Contextual typing for function - parameter s inferred to have type string
	names.forEach(function (s) {
	  console.log(s.toUpperCase());
	});
	 
	// Contextual typing also applies to arrow functions
	names.forEach((s) => {
	  console.log(s.toUpperCase());
	});
```

### Type narrowing -- Narrowing the unions
- Narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
```
	function printId(id: number | string) {
	  if (typeof id === "string") {
		// In this branch, id is of type 'string'
		console.log(id.toUpperCase());
	  } else {
		// Here, id is of type 'number'
		console.log(id);
	  }
	}
```
- Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing.
- Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing
```
	// Return type is inferred as number[] | string
	function getFirstThree(x: number[] | string) {
	  return x.slice(0, 3);
	}
```
- It might be confusing that a union of types appears to have the intersection of those types’ properties. This is not an accident - the name union comes from type theory. The union number | string is composed by taking the union of the values from each type. Notice that given two sets with corresponding facts about each set, only the intersection of those facts applies to the union of the sets themselves. For example, if we had a room of tall people wearing hats, and another room of Spanish speakers wearing hats, after combining those rooms, the only thing we know about every person is that they must be wearing a hat.

### Type Assertions
- Sometimes you will have information about the type of a value that TypeScript can’t know about. For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
```
	const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```
- Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code. You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent
```
	const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```
- TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
```
	const x = "hello" as number;
```
- Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any or unknown, then to the desired type:
```
	const a = (expr as any) as T;
```

**NOTE**
- The type boolean itself is actually just an alias for the union true | false.

### Non-null Assertion Operator (Postfix!)
- TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
```
	function liveDangerously(x?: number | null) {
	  // No error
	  console.log(x!.toFixed());
	}
```

### Assignments
```
	let x = Math.random() < 0.5 ? 10 : "hello world!"; // x: string | number
    
	x = 1; // x: number
	
	console.log(x);
	
	x = "goodbye!"; // x: string
	
	console.log(x);
```
- Notice that each of these assignments is valid. Even though the observed type of x changed to number after our first assignment, we were still able to assign a string to x. This is because the declared type of x - the type that x started with - is string | number, and assignability is always checked against the declared type.
- If we’d assigned a boolean to x, we’d have seen an error since that wasn’t part of the declared type.

### Property Modifiers
```
	interface PaintOptions {
	  shape: Shape;
	  xPos?: number;
	  yPos?: number;
	}
	function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
	  console.log("x coordinate at", xPos);
									  
	  console.log("y coordinate at", yPos);
									  
	  // ...
	}
```
- Here we used a destructuring pattern for paintShape’s parameter, and provided default values for xPos and yPos. Now xPos and yPos are both definitely present within the body of paintShape, but optional for any callers to paintShape.
