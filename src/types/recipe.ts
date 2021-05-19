interface Ingredient {
	id: number,
	name: string
}
interface Recipe {
	title: string,
	instructions: string,
	ingredients: Ingredient[]
}

export type { Ingredient, Recipe }
