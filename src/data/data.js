import { Recipe } from '../types/recipe'

const defaultData: Recipe = {
	title: 'Pannkakor',
	instructions: `Gör så här:
	Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen.

	Stek tunna pannkakor i lite smör, för varje pannkaka, i en stek- eller pannkakspanna.

	Servera med sylt, bär eller frukt eller med salta tillbehör som Räksalsa med gurka och lime, Rökt lax med dillkräm eller Avokadoröra med bacon och tomat.`,
	ingredients: [
		{ id: 1, name: '2 1/2 dl vetemjöl' },
		{ id: 2, name: '1/2 tsk salt' },
		{ id: 3, name: '6 dl mjölk' },
		{ id: 4, name: '3 ägg' }
	]
}

export default defaultData
