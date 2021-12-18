import React, { Fragment } from "react";
import AppointmentCard from "./AppointmentCard";

const Home = ({ setPage, appointments }) => {
	const toPage = (page) => (e) => {
		e.preventDefault();

		window.history.pushState(null, null, `/${page}`);
		setPage(page);
	};

	return (
		<Fragment>
			<a className="page-btn" href="/" onClick={toPage("add")}>
				New appointment <i className="bi bi-plus-circle-fill"></i>
			</a>
			{appointments.map(({ _id, name, age, date, time, symptoms }) => (
				<AppointmentCard
					key={_id}
					id={_id}
					name={name}
					age={age}
					date={date}
					time={time}
					symptoms={symptoms}
					setPage={setPage}
				/>
			))}
		</Fragment>
	);
};

export default Home;
