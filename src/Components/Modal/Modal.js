import React from "react";
import css from "./Modal.module.css";

const Modal = ({ onClickHandler, data }) => {
	const createIngridientList = (data) => {
		let ingridientsArray = [];
		for (let i = 1; i <= 20; i++) {
			ingridientsArray.push([data[`strIngredient${i}`], data[`strMeasure${i}`]]);
		}
		return ingridientsArray;
	};

	const ingridientsList = createIngridientList(data);
	console.log(ingridientsList);

	return (
		<div className={css["backdrop"]} onClick={onClickHandler}>
			<div className={css["modal"]}>
				<div className={css["modal__image-wrapper"]}>
					<img className={css["modal__image"]} src={data.strMealThumb}></img>
				</div>
				<div className={css["modal__title-wrapper"]}>
					<h2 className={css["modal__title"]}>{data.strMeal}</h2>
					<p className={css["modal__subtitle"]}>
						{data.strCategory}, {data.strArea}
					</p>
				</div>
				<div className={css["modal__how-to-prepare"]}>
					<h3 className={css["modal__semi-title"]}>How to prepare?</h3>
					<p>{data.strInstructions}</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
