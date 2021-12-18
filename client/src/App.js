import React, { useEffect, useState, Fragment } from "react";
import cliAxios from "./config/axios";

import Header from "./components/Header";
import Home from "./components/Home";
import New from "./components/NewAppointment";
import Edit from "./components/EditAppointment";

function App() {
	const [appointments, setAppointments] = useState([]);

	const getData = async () => {
		const response = await cliAxios.get("appointments");

		setAppointments(response.data);
	};

	useEffect(() => {
		getData();
	}, []);

	// Router
	const [page, setPage] = useState(() => {
		const { pathname } = window.location;
		const page = pathname.slice(1);

		return page;
	});

	const getContent = () => {
		if (page === "") {
			return <Home setPage={setPage} appointments={appointments} />;
		} else if (page === "add") {
			return <New setPage={setPage} />;
		} else {
			return <Edit setPage={setPage} />;
		}
	};
	// End router

	return (
		<Fragment>
			<main>
				<Header />
				<section className="container">{getContent()}</section>
			</main>
		</Fragment>
	);
}

export default App;
