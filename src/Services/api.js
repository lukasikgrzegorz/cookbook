import axios from "axios";

const BASE_URL = `https://www.themealdb.com/api/json/v1/1/`;

export const fetchMeal = async (type, query) => {
	let fullQuery = "";

	if (type === "name") {
		fullQuery = `search.php?s=${query}`;
	}

	if (type === "random") {
		fullQuery = `random.php`;
	}

	const response = await axios.get(`${BASE_URL}${fullQuery}`);
	return response.data.meals;
};

const api = { fetchMeal };

export default api;
