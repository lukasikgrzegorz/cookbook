import React from "react";
import css from "./Ingridient.module.css";

const Ingridient = ({ name, mesaure }) => {
	return (
		<li className={css["ingridient"]}>
			<span className={css["ingridient__name"]}>{name}</span>
			<span className={css["ingridient__mesaure"]}>{mesaure}</span>
		</li>
	);
};

export default Ingridient;
