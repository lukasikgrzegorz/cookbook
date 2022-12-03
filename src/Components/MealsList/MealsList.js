import React from "react";

const MealsList = ({ data }) => {
	return (
		<ul>
			{data.map((meal) => {
				return <li key={meal.idMeal}>{meal.strMeal}</li>;
			})}
		</ul>
	);
};

export default MealsList;
