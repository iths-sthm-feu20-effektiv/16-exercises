import { useState } from 'react'
import { Ingredient } from '../../types/recipe'

interface Props {
	ingredient: Ingredient,
	selected: boolean,
	doSelect: (id: number) => void,
	updateIngredient: (id: number, newValue: string) => void
}

const RecipeItem = ({ ingredient, selected, doSelect, updateIngredient }: Props) => {
	const [value, setValue] = useState(ingredient.name)
	return (
		selected
			? <input key={ingredient.id} type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				onBlur={() => updateIngredient(ingredient.id, value)}
				/>
			: <li key={ingredient.id}
				onClick={() => doSelect(ingredient.id)}
			> {ingredient.name} </li>
	)
}

export default RecipeItem
