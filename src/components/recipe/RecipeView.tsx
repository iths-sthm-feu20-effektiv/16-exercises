import { useState } from 'react'
import { Recipe } from '../../types/recipe'

interface Props {
	recipe: Recipe
}


const RecipeView = ({ recipe }: Props) => {
	const [selectedId, setSelectedId] = useState(-1)
	return (
		<div>
			<h2> {recipe.title} </h2>
			<ul>
				{recipe.ingredients.map(ingredient => (
					selectedId === ingredient.id
						? <input key={ingredient.id} type="text"
							value={ingredient.name} />
						: <li key={ingredient.id}
							onClick={() => setSelectedId(ingredient.id)}
						> {ingredient.name} </li>
				))}
			</ul>
			<p> {recipe.instructions} </p>
		</div>
	)
}
export default RecipeView
