import React from "react";
import Meal from "./Meal/Meal";
import css from "./MealsList.module.css";

const MealsList = ({ data, onClickHandler, likeHandler }) => {
	const KEY = "favourite";

	const checkFavourite = (id) => {
		if (localStorage.getItem(KEY)) {
			const savedFavourites = JSON.parse(localStorage.getItem(KEY));
			const isInBase = savedFavourites.some((item) => item.idMeal === id);
			if (isInBase) {
				return true;
			}
			return false;
		}
	};

	return (
		<ul className={css["mealslist"]}>
			{data.map((meal) => {
				return (
					<Meal
						key={meal.idMeal}
						id={meal.idMeal}
						title={meal.strMeal}
						imgSrc={meal.strMealThumb}
						category={meal.strCategory}
						country={meal.strArea}
						onClickHandler={onClickHandler}
						likeHandler={likeHandler}
						active={checkFavourite(meal.idMeal)}
					></Meal>
				);
			})}
		</ul>
	);
};

export default MealsList;
