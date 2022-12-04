import React, { Children } from "react";
import css from "./Header.module.css";

const Header = ({children}) => {
	return (
		<header className={css["header"]}>
			<a href="index.html">
				<div className={css["logo"]}>
					<span className={css["logo--accent"]}>Simple</span>
					<span>Cookbook</span>
				</div>
      </a>
      {children}
		</header>
	);
};

export default Header;
