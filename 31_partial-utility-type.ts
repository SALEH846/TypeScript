interface Article {
	content: string;
	tags: string[];
	category: string;
}

// When we want to make all the fields of the type or interface optional
// Then we can Partial utility type which is provided to us by TypeScript
const updatedArticle: Partial<Article> = {
	category: "Updated Article",
};
