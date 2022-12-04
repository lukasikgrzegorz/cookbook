import React from "react";
import css from "./IngridientsList.module.css";
import Ingridient from "./Indgridient/Ingridient";

const IngridientsList = ({ data }) => {
	return (
		<ul className={css["ingridients-list"]}>
			{data.map((ingridient, index) => {
				return (
					<Ingridient key={index} name={ingridient.name} mesaure={ingridient.mesaure}></Ingridient>
				);
			})}
		</ul>
	);
};

export default IngridientsList;
