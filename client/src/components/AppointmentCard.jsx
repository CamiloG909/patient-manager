import React from "react";
import { Link } from "react-router-dom";

const AppointmentCard = ({ id, name, age, date, time, symptoms, setPage }) => {
	return (
		<article className="appointment-card">
			<section className="appointment-card__info">
				<p className="appointment-card__text --green">{name}</p>
				<p className="appointment-card__text --green date">
					<i className="bi bi-calendar-check"></i> {date}{" "}
					<i className="bi bi-clock"></i> {time}
				</p>
				<p className="appointment-card__text symptoms">Symptoms: {symptoms}</p>
				<p className="appointment-card__text">Age: {age}</p>
			</section>
			<Link className="appointment-card__btn" to={`appointment/${id}`}>
				Edit <i className="bi bi-pencil-fill"></i>
			</Link>
		</article>
	);
};

export default AppointmentCard;
