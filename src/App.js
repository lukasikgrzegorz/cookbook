import "./App.css";
import { fetchMeal } from "./Services/api";
import _debounce from "lodash.debounce";
import Searchbar from "./Components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import MealsList from "./Components/MealsList/MealsList";

function App() {
	const [query, setQuery] = useState("");
	const [meals, setMeals] = useState([]);

	const fetchByQuery = async (query) => {
		try {
			const fetchedMeals = await fetchMeal("name", query);
			if (fetchedMeals) {
				console.log(fetchedMeals);
				setMeals([]);
				setMeals((meals) => [...meals, ...fetchedMeals]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchRandom = async () => {
		try {
			const randomMeal = await fetchMeal("random");
			console.log(randomMeal);
			setMeals([]);
			setMeals((meals) => [...meals, ...randomMeal]);
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
			<section>
				<div className="container">
					<MealsList data={meals}></MealsList>
				</div>
			</section>
		</main>
	);
}

export default App;
