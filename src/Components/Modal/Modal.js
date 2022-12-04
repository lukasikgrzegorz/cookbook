import React, { useRef, useState } from "react";
import css from "./Modal.module.css";
import IngridientsList from "./IngridientsList/IngridientsList";

const Modal = ({ onClickHandler, data }) => {
	const [instruction, cutInstruction] = useState(false);

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

	const cutToogle = () => {
		cutInstruction(!instruction);
	};

	useState(() => {
		if (data.strInstructions.length > 600) {
			cutInstruction(true);
		}
	}, []);

	return (
		<div className={css["backdrop"]} onClick={onClickHandler} id="backdrop">
			<div className={css["modal"]}>
				<button className={css["close-btn"]} type="button" onClick={onClickHandler} id="closeBtn">
					<svg className={css["close-icon"]}>
						<path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
					</svg>
				</button>
				{data.strYoutube && (
					<a href={data.strYoutube} target="_blank" rel="noreferrer">
						<button className={css["video-btn"]} type="button">
							<svg className={css["close-icon"]}>
								<path d="M30.662 5.003c-4.488-0.645-9.448-1.003-14.662-1.003s-10.174 0.358-14.662 1.003c-0.86 3.366-1.338 7.086-1.338 10.997s0.477 7.63 1.338 10.997c4.489 0.645 9.448 1.003 14.662 1.003s10.174-0.358 14.662-1.003c0.86-3.366 1.338-7.086 1.338-10.997s-0.477-7.63-1.338-10.997zM12 22v-12l10 6-10 6z"></path>
							</svg>
						</button>
					</a>
				)}
				<div className={css["modal__image-wrapper"]}>
					<img className={css["modal__image"]} src={data.strMealThumb} alt={data.strMeal}></img>
				</div>
				<div className={css["modal__title-wrapper"]}>
					<h2 className={css["modal__title"]}>{data.strMeal}</h2>
					<p className={css["modal__subtitle"]}>
						{data.strCategory}, {data.strArea}
					</p>
				</div>
				<IngridientsList data={ingridientsList}></IngridientsList>
				<div className={css["modal__how-to-prepare"]}>
					<p>{instruction ? data.strInstructions.slice(0, 700) + "..." : data.strInstructions}</p>
					{data.strInstructions.length > 600 && (
						<button className={css["more-btn"]} type="button" onClick={cutToogle}>
							{instruction ? "show more" : "hide"}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
