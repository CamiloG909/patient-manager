import React, { Fragment, useState, useEffect } from "react";
import Form from "./Form";
import cliAxios from "../config/axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditAppointment = ({ setLoaddata }) => {
	let navigate = useNavigate();
	// Get id from params
	let id = useParams();
	id = id.id;

	const [appointment, setAppointment] = useState({});

	const getData = async () => {
		try {
			const response = await cliAxios.get(`appointment/${id}`);

			setAppointment(response.data);
		} catch {
			toast.error("An error has ocurred");
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const updateAppointment = async (e) => {
		e.preventDefault();

		try {
			const response = await cliAxios.put(`appointment/${id}`, appointment);

			setAppointment(response.data);
			setLoaddata(Date.now());
			toast.success(response.data.message);
			navigate("/");
		} catch {
			toast.error("An error has ocurred");
		}
	};

	const deleteAppointment = async () => {
		try {
			const response = await cliAxios.delete(`appointment/${id}`);

			setLoaddata(Date.now());
			toast.error(response.data.message);
			navigate("/");
		} catch {
			toast.error("An error has ocurred");
		}
	};

	return (
		<Fragment>
			<Link to="/" className="page-btn">
				<i className="bi bi-arrow-left"></i> Back
			</Link>
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
				<Form
					appointment={appointment}
					setAppointment={setAppointment}
					functionSubmit={updateAppointment}
				/>
				<button
					className="edit-appointment__btn-delete"
					onClick={deleteAppointment}
				>
					Delete <i className="bi bi-trash"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default EditAppointment;
