import React from "react";
import css from "./IngridientsList.module.css";

const IngridientsList = ({ data }) => {
	return (
		<ul className={css["list"]}>
			{data.map((ingridient, index) => {
				return (
					<li key={index} className={css["item"]}>
						<span className={css["item__name"]}>{ingridient.name}</span>
						<span className={css["item__mesaure"]}>{ingridient.mesaure}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default IngridientsList;
