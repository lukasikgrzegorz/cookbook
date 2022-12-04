import React from "react";
import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={css["loader"]}>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#EC7B7B"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	);
};

export default Loader;
