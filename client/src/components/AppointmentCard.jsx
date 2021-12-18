import React from "react";

const AppointmentCard = ({ id, name, age, date, time, symptoms, setPage }) => {
	const toPage = (page) => (e) => {
		e.preventDefault();

		window.history.pushState(null, null, `/${page}`);
		setPage(page);
	};

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
			<a className="appointment-card__btn" href={id} onClick={toPage(id)}>
				Edit <i className="bi bi-pencil-fill"></i>
			</a>
		</article>
	);
};

export default AppointmentCard;
