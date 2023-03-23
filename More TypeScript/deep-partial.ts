// interface Post {
// 	id: string;
// 	comments: { value: string }[];
// 	meta: {
// 		name: string;
// 		description: string;
// 	};
// }

// ----------------------Example 1----------------------
// variable `post` has a type `Post`, so you have to provide all fields of the `Post` inside `post`
// otherwise, typescript will yell at you
// const post: Post = {}; // illegal

// ----------------------Example 2----------------------
// We can make use of Partial utitlity type
// But Partial utility type is only one level deep
// So, let's say we can to define only the `name` property of the `meta`, but we can't do that
// Either don't define the property `meta` at all or define it completely
// The solution is Deep Partial
// const post: Partial<Post> = {
// meta: {}, // illegal
// };

// Deep Partial
export type DeepPartial<Thing> = Thing extends Function
	? Thing
	: Thing extends Array<infer InferredArrayMember>
	? DeepPartialArray<InferredArrayMember>
	: Thing extends object
	? DeepPartialObject<Thing>
	: Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
	[Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

interface Post {
	id: string;
	comments: { value: string }[];
	meta: {
		name: string;
		description: string;
	};
}

// ----------------------Example 3----------------------
const post: DeepPartialObject<Post> = {
	meta: { name: "testMeta" },
};
