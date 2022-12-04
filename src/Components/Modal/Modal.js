import React from "react";
import css from "./Modal.module.css";
import IngridientsList from "./IngridientsList/IngridientsList";

const Modal = ({ onClickHandler, data }) => {
	const createIngridientList = (data) => {
		let ingridientsArray = [];
		for (let i = 1; i <= 20; i++) {
			if (data[`strIngredient${i}`]) {
				ingridientsArray.push({
					name: `${data[`strIngredient${i}`]}`,
					mesaure: `${data[`strMeasure${i}`]}`,
				});
			}
		}
		return ingridientsArray;
	};

	const ingridientsList = createIngridientList(data);
	console.log(ingridientsList);

	return (
		<div className={css["backdrop"]} onClick={onClickHandler} id="backdrop">
			<div className={css["modal"]}>
				<button className={css["close-btn"]} type="button" onClick={onClickHandler} id="closeBtn">
					<svg className={css["close-icon"]}>
						<path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
					</svg>
				</button>
				<div className={css["modal__image-wrapper"]}>
					<img className={css["modal__image"]} src={data.strMealThumb}></img>
				</div>
				<div className={css["modal__title-wrapper"]}>
					<h2 className={css["modal__title"]}>{data.strMeal}</h2>
					<p className={css["modal__subtitle"]}>
						{data.strCategory}, {data.strArea}
					</p>
				</div>
				<IngridientsList data={ingridientsList}></IngridientsList>
				<div className={css["modal__how-to-prepare"]}>
					<p>{data.strInstructions}</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
