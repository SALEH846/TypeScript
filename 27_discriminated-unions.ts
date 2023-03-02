// Use 'kind' property in interfaces to identify the type
// This is also a Type Narrowing technique

interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	side: number;
}

interface Rectangle {
	kind: "rectangle";
	length: number;
	width: number;
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius ** 2;
	}
	return shape.side * shape.side;
}
