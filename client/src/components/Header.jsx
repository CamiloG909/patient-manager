import React from "react";
import logo from "../img/logo.png";

const Header = () => (
	<section className="header" onClick={() => window.location.reload()}>
		<img className="header__img" src={logo} alt="Logo header" />
		<h1 className="header__title">Appointments</h1>
	</section>
);

export default Header;
