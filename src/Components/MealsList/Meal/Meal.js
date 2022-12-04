import React from "react";
import css from "./Meal.module.css";

const Meal = ({ imgSrc, title, category, country, id, onClickHandler }) => {
	return (
		<li className={css["meal"]} id={id} onClick={onClickHandler}>
			<div className={css["meal__image-wrapper"]}>
				<img className={css["meal__image-wrapper"]} src={imgSrc}></img>
			</div>
			<div className={css["meal__text-wrapper"]}>
				<p className={css["meal__title"]}>{title}</p>
				<p className={css["meal__category"]}>{category}</p>
				<p className={css["meal__country"]}>{country}</p>
			</div>
		</li>
	);
};

export default Meal;
