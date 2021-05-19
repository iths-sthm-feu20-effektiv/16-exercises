import { useState } from 'react'
import { Recipe } from '../../types/recipe'
import RecipeItem from './RecipeItem'

interface Props {
	recipe: Recipe,
	updateIngredient: (id: number, newValue: string) => void
}


const RecipeView = ({ recipe, updateIngredient }: Props) => {
	const [selectedId, setSelectedId] = useState(-1)
	return (
		<div>
			<h2> {recipe.title} </h2>
			<ul>
				{recipe.ingredients.map(ingredient => (
					<RecipeItem key={ingredient.id}
						ingredient={ingredient}
						selected={selectedId === ingredient.id}
						doSelect={setSelectedId}
						updateIngredient={updateIngredient}
						/>
				))}
			</ul>
			<p> {recipe.instructions} </p>
		</div>
	)
}
export default RecipeView
