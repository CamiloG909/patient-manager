import React, { Fragment, useEffect, useState } from "react";
import cliAxios from "../config/axios";
import Form from "./Form";

const EditAppointment = ({ setPage }) => {
	let page = window.location.pathname;
	page = page.slice(1);

	const [appointment, setAppointment] = useState([]);

	const getData = async () => {
		const response = await cliAxios.get(`appointment/${page}`);

		setAppointment(response.data);
	};

	useEffect(() => {
		getData();
	}, []);

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
			<div className="edit-appointment">
				<section className="edit-appointment__info">
					<p className="edit-appointment__info-text --green">
						{appointment.name}
					</p>
					<p className="edit-appointment__info-text --green date">
						<i className="bi bi-calendar-check"></i> {appointment.date}{" "}
						<i className="bi bi-clock"></i> {appointment.time}
					</p>
					<p className="edit-appointment__info-text symptoms">
						Symptoms: {appointment.symptoms}
					</p>
					<p className="edit-appointment__info-text">Age: {appointment.age}</p>
				</section>
				<p className="form__title">Edit appointment</p>
				<Form />
				<button className="edit-appointment__btn-delete">
					Delete <i className="bi bi-trash"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default EditAppointment;
