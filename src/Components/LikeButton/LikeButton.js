import React, { useState } from "react";
import css from "./LikeButton.module.css";

const LikeButton = ({ active, likeHandler }) => {
	const [isActive, setIsActive] = useState(active);

	const btnFunction = (e) => {
		likeHandler(e);
		setIsActive(!isActive);
	};

	return (
		<button type="button" className={css["like-button"]} onClick={btnFunction}>
			<div className={isActive ? css["like-button__icon--active"] : css["like-button__icon"]}></div>
		</button>
	);
};

export default LikeButton;
