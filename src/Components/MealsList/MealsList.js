import React from "react";
import Meal from "./Meal/Meal";
import css from "./MealsList.module.css";

const MealsList = ({ data, onClickHandler }) => {
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
					></Meal>
				);
			})}
		</ul>
	);
};

export default MealsList;
