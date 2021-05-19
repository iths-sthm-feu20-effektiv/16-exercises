import { useState } from 'react';
import './App.css';
import RecipeView from './components/recipe/RecipeView'

import defaultData from './data/data.js'


function App() {
	const [data/*, setData*/] = useState(defaultData)
    return (
        <div className="App">
            <RecipeView recipe={data} />
        </div>
    );
}

export default App;
