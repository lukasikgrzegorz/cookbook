import "./App.css";
import { fetchMeal } from "./Services/api";

function App() {
	const fetchByQuery = async () => {
		try {
			const meals = await fetchMeal();
			console.log(meals);
		} catch (error) {
			console.log(error);
		}
	};

	fetchByQuery();

	return <></>;
}

export default App;
