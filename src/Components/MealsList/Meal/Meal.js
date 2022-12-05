import React from "react";
import css from "./Meal.module.css";
import LikeButton from "../../LikeButton/LikeButton";

const Meal = ({ imgSrc, title, category, country, id, onClickHandler, likeHandler, active }) => {
	return (
		<li className={css["meal"]} id={id} onClick={onClickHandler}>
			<div className={css["meal__image-wrapper"]}>
				<img className={css["meal__image-wrapper"]} src={imgSrc} alt={title}></img>
			</div>
			<div className={css["meal__text-wrapper"]}>
				<p className={css["meal__title"]}>{title}</p>
				<p className={css["meal__category"]}>{category}</p>
				<p className={css["meal__country"]}>{country}</p>
				<LikeButton active={active} likeHandler={likeHandler}></LikeButton>
			</div>
		</li>
	);
};

export default Meal;
