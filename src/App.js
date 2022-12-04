import "./App.css";
import { useEffect, useState } from "react";
import { fetchMeal } from "./Services/api";
import _debounce from "lodash.debounce";
import Searchbar from "./Components/Searchbar/Searchbar";
import MealsList from "./Components/MealsList/MealsList";
import Modal from "./Components/Modal/Modal";

function App() {
	const [query, setQuery] = useState("");
	const [meals, setMeals] = useState([]);
	const [modal, openModal] = useState(false);
	const [modalData, setModalData] = useState([]);

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

	const openModalwithClick = (e) => {
		const modalDataFromItem = meals.filter((meal) => meal.idMeal === e.currentTarget.id);
		setModalData([]);
		setModalData((data) => [...data, ...modalDataFromItem]);
		openModal(true);
		document.body.style.overflow = "hidden";
	};

	const closeModalwithClick = (e) => {
		if (e.target.id === "backdrop" || e.currentTarget.id === "closeBtn") {
			openModal(false);
			document.body.style.overflow = "";
		}
	};

	return (
		<main>
			{modal && <Modal data={modalData[0]} onClickHandler={closeModalwithClick}></Modal>}
			<section>
				<div className="container">
					<Searchbar onChangeHandler={_debounce(setQueryFromSerchbar, 600)}></Searchbar>
				</div>
			</section>
			<section>
				<div className="container">
					<MealsList data={meals} onClickHandler={openModalwithClick}></MealsList>
				</div>
			</section>
		</main>
	);
}

export default App;
