import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";

const Home = ({ setPage, appointments }) => {
	return (
		<Fragment>
			<Link to="/add" className="page-btn">
				New appointment <i className="bi bi-plus-circle-fill"></i>
			</Link>
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
