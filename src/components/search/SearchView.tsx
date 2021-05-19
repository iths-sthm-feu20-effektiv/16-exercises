import './Search.css'
import { useState } from 'react'

interface ResponseData {
	results: RecipeResponse[],
	offset: number,
	number: number,
	totalResults: number
}
interface RecipeResponse {
	id: number,
	title: string,
	image: string,
	imageType: string
}

const SearchView = () => {
	const [query, setQuery] = useState('')
	const [data, setData] = useState<RecipeResponse[] | null>(null)

	const handleKeyDown = async (event: any): Promise<void> => {
		// console.log('SearchView: handle key down, event=', event);
		if( event.key === 'Enter' ) {
			console.log('Searching...');
			const url = 'https://api.spoonacular.com/recipes/complexSearch'
			const apiKey = '5d9811e601694502b9a25a005e4525ce'  // get your own key!
			const queryString = `?apiKey=${apiKey}&query=${query}&number=5`

			const response = await fetch(url + queryString, { method: 'GET' })
			const json: ResponseData = await response.json()

			// Obs! Kontrollera att komponenten är MOUNTED innan du sparar
			setData(json.results)
		}
	}

	return (
		<div className="search">
			<input type="text" placeholder="Sök efter recept med Spoonacular"
				onChange={e => setQuery(e.target.value)}
				value={query}
				onKeyDown={handleKeyDown}
			/>
			<div>
				{data
					? (<ul>
						{data.map(recipe => (
							<li key={recipe.id}> {recipe.title}
								<img src={recipe.image} alt={recipe.title} />
							</li>
						))}
					</ul>)
					: 'Inga resultat'}

			</div>
		</div>
	)
}

export default SearchView
