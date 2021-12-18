import React, { Fragment } from "react";
import Form from "./Form";

const NewAppointment = ({ setPage }) => {
	const toPage = (page) => (e) => {
		e.preventDefault();

		window.history.pushState(null, null, `/${page}`);
		setPage(page);
	};
	return (
		<Fragment>
			<a href="/" className="page-btn" onClick={toPage("")}>
				<i className="bi bi-arrow-left"></i> Back
			</a>
			<div className="new-appointment">
				<p className="form__title">Add new appointment</p>
				<Form />
			</div>
		</Fragment>
	);
};

export default NewAppointment;
