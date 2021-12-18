import React, { Fragment, useState } from "react";
import Form from "./Form";
import cliAxios from "../config/axios";
import { toast } from "react-hot-toast";

const NewAppointment = ({ setPage, setLoaddata }) => {
	const toPage = (page) => (e) => {
		e.preventDefault();

		window.history.pushState(null, null, `/${page}`);
		setPage(page);
	};

	const [appointment, setAppointment] = useState({
		name: "",
		age: "",
		date: "",
		time: "",
		symptoms: "",
	});

	const addAppointment = (e) => {
		e.preventDefault();

		cliAxios
			.post("appointment", appointment)
			.then((res) => {
				setLoaddata(Date.now());
				window.history.pushState(null, null, `/`);
				setPage("");

				toast.success(res.data.message);
			})
			.catch((err) => {
				toast.error("An ocurred error");
			});
	};

	return (
		<Fragment>
			<a href="/" className="page-btn" onClick={toPage("")}>
				<i className="bi bi-arrow-left"></i> Back
			</a>
			<div className="new-appointment">
				<p className="form__title">Add new appointment</p>
				<Form
					setAppointment={setAppointment}
					appointment={appointment}
					f={addAppointment}
				/>
			</div>
		</Fragment>
	);
};

export default NewAppointment;
