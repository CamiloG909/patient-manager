import React, { Fragment } from "react";
import Form from "./Form";
import { Link, useParams } from "react-router-dom";

const EditAppointment = ({ appointments }) => {
	// Get id from params
	let id = useParams();
	id = id.id;

	let appointment = appointments.filter(
		(appointment) => appointment._id === id
	);
	appointment = appointment[0];

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
				<Form />
				<button className="edit-appointment__btn-delete">
					Delete <i className="bi bi-trash"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default EditAppointment;
