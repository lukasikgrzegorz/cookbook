import "./App.css";
import { fetchMeal } from "./Services/api";
import _debounce from "lodash.debounce";
import Searchbar from "./Components/Searchbar/Searchbar";
import { useEffect, useState } from "react";

function App() {
	const [query, setQuery] = useState();

	const fetchByQuery = async (query) => {
		try {
			const meals = await fetchMeal("name", query);
			console.log(meals);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchRandom = async () => {
		try {
			const meal = await fetchMeal("random");
			console.log(meal);
		} catch (error) {
			console.log(error);
		}
	};

	const setQueryFromSerchbar = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		if (query) {
			fetchByQuery(query);
		}
	}, [query]);

	useEffect(() => {
		fetchRandom();
	}, []);

	return (
		<main>
			<section>
				<div className="container">
					<Searchbar onChangeHandler={_debounce(setQueryFromSerchbar, 600)}></Searchbar>
				</div>
			</section>
		</main>
	);
}

export default App;
