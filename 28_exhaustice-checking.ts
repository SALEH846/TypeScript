// Use switch case statements to exhaustively check the type
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

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.side * shape.side;
		default:
			const _defaultforShape: never = shape;
			return _defaultforShape;
	}
}
