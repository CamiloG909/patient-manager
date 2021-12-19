import React, { Fragment, useState } from "react";
import Form from "./Form";
import cliAxios from "../config/axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const NewAppointment = ({ setPage, setLoaddata }) => {
	let navigate = useNavigate();

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

				toast.success(res.data.message);
				navigate("/");
			})
			.catch((err) => {
				toast.error("An ocurred has error");
			});
	};

	return (
		<Fragment>
			<Link to="/" className="page-btn">
				<i className="bi bi-arrow-left"></i> Back
			</Link>
			<div className="new-appointment">
				<p className="form__title">Add new appointment</p>
				<Form
					setAppointment={setAppointment}
					appointment={appointment}
					functionSubmit={addAppointment}
				/>
			</div>
		</Fragment>
	);
};

export default NewAppointment;
