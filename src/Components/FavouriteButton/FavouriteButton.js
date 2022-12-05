import React from "react";
import css from "./FavouriteButton.module.css";

const FavouriteButton = ({ onClickHandler }) => {
	return (
		<button type="button" className={css["favaourite-button"]} onClick={onClickHandler}>
			<span>Favourites</span>
			<div className={css["favaourite-button__icon"]}></div>
		</button>
	);
};

export default FavouriteButton;
