import "./App.css";
import { useEffect, useState } from "react";
import { fetchMeal } from "./Services/api";
import _debounce from "lodash.debounce";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import Searchbar from "./Components/Searchbar/Searchbar";
import FavouriteButton from "./Components/FavouriteButton/FavouriteButton";
import Title from "./Components/Title/Title";
import MealsList from "./Components/MealsList/MealsList";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";

function App() {
	const [query, setQuery] = useState("");
	const [meals, setMeals] = useState([]);
	const [modal, openModal] = useState(false);
	const [modalData, setModalData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [firstTime, setFirstTime] = useState(true);
	const KEY = "favourite";

	const fetchByQuery = async (query) => {
		setIsLoading(true);
		try {
			const fetchedMeals = await fetchMeal("name", query);
			if (fetchedMeals) {
				setMeals([]);
				setMeals((meals) => [...meals, ...fetchedMeals]);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchRandom = async () => {
		setIsLoading(true);
		try {
			const randomMeal = await fetchMeal("random");
			console.log(randomMeal);
			setMeals([]);
			setMeals((meals) => [...meals, ...randomMeal]);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const setQueryFromSerchbar = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		if (query) {
			fetchByQuery(query);
			setFirstTime(false);
		}
	}, [query]);

	useEffect(() => {
		fetchRandom();
	}, []);

	const openModalwithClick = (e) => {
		if (e.target.nodeName !== "BUTTON") {
			const modalDataFromItem = meals.filter((meal) => meal.idMeal === e.currentTarget.id);
			setModalData([]);
			setModalData((data) => [...data, ...modalDataFromItem]);
			openModal(true);
			document.body.style.overflow = "hidden";
		}
	};

	const closeModalwithClick = (e) => {
		if (e.target.id === "backdrop" || e.currentTarget.id === "closeBtn") {
			openModal(false);
			document.body.style.overflow = "";
		}
	};

	const addToFavourite = (e) => {
		const ID = e.target.parentNode.parentNode.id;
		const dataFromItem = meals.filter((meal) => meal.idMeal === ID);
		if (localStorage.getItem(KEY)) {
			const savedFavourites = JSON.parse(localStorage.getItem(KEY));
			const isInBase = savedFavourites.some((item) => item.idMeal === ID);
			let updatedFavourites = [];
			if (!isInBase) {
				updatedFavourites = savedFavourites.concat(dataFromItem);
			} else {
				updatedFavourites = savedFavourites.filter((item) => item.idMeal !== ID);
			}
			console.log(updatedFavourites);
			localStorage.setItem(KEY, JSON.stringify(updatedFavourites));
			if (updatedFavourites.length === 0) {
				localStorage.clear();
			}
		} else {
			localStorage.setItem(KEY, JSON.stringify(dataFromItem));
		}
	};

	const showFavourite = () => {
		if (localStorage.getItem(KEY)) {
			const savedFavourites = JSON.parse(localStorage.getItem(KEY));
			setMeals([]);
			setMeals((meals) => [...meals, ...savedFavourites]);
			setFirstTime(false);
		}
	};

	return (
		<>
			{isLoading && <Loader></Loader>}
			{modal && <Modal data={modalData[0]} onClickHandler={closeModalwithClick}></Modal>}
			<Header>
				<Searchbar onChangeHandler={_debounce(setQueryFromSerchbar, 600)}></Searchbar>
				<FavouriteButton onClickHandler={showFavourite}></FavouriteButton>
			</Header>
			<main>
				{firstTime && <Title>Get amazing recipes for cooking...</Title>}
				<section>
					<div className="container">
						<MealsList
							data={meals}
							onClickHandler={openModalwithClick}
							likeHandler={addToFavourite}
						></MealsList>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}

export default App;
