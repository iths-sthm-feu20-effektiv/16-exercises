import { useState } from 'react';
import './App.css';
import RecipeView from './components/recipe/RecipeView'

import defaultData from './data/data.js'


function App() {
	const [data, setData] = useState(defaultData)

	const updateIngredient = (id: number, newValue: string): void => {
		// Alternativt sätt att uppdatera listan
		// let ingredientsCopy = [ ...data.ingredients ]
		// let index = ingredientsCopy.findIndex(ingredient => ingredient.id === id)
		// let newIngredient = {
		// 	...ingredientsCopy[index],
		// 	name: newValue
		// }
		// ingredientsCopy[index] = newIngredient

		setData({
			...data,
			ingredients: data.ingredients.map(ingredient => {
				if( ingredient.id === id ) {
					return { id: id, name: newValue }
				} else {
					return ingredient;
				}
			})
		})
	}

    return (
        <div className="App">
            <RecipeView recipe={data} updateIngredient={updateIngredient} />
        </div>
    );
}

export default App;
