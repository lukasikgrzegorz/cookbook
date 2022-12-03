import axios from "axios";

const BASE_URL = `https://www.themealdb.com/api/json/v1/1/`;

export const fetchMeal = async (params) => {
	const response = await axios.get(`${BASE_URL}search.php?s=Panc`);
	return response.data.meals;
};

const api = { fetchMeal };

export default api;
