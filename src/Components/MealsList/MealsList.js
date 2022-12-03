import React from "react";
import Meal from "./Meal/Meal";
import css from "./MealsList.module.css";

const MealsList = ({ data }) => {
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
					></Meal>
				);
			})}
		</ul>
	);
};

export default MealsList;
