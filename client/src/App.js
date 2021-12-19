import React, { useEffect, useState, Fragment } from "react";
import cliAxios from "./config/axios";
import { toast, Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Home from "./components/Home";
import New from "./components/NewAppointment";
import Edit from "./components/EditAppointment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [appointments, setAppointments] = useState([]);
	const [loaddata, setLoaddata] = useState("load");

	const getData = async () => {
		try {
			const response = await cliAxios.get("appointments");

			setAppointments(response.data);
		} catch {
			toast.error("An error has ocurred");
		}
	};

	useEffect(() => {
		getData();
	}, [loaddata]);

	return (
		<Fragment>
			<main>
				<Header />
				<section className="container">
					<Router>
						<Routes>
							<Route path="/">
								<Route path="" element={<Home appointments={appointments} />} />
								<Route path="add" element={<New setLoaddata={setLoaddata} />} />
								<Route
									path="appointment/:id"
									element={<Edit setLoaddata={setLoaddata} />}
								/>
							</Route>
						</Routes>
					</Router>
				</section>
			</main>
			<Toaster
				position="bottom-right"
				toastOptions={{
					duration: 1500,
					style: {
						background: "#363636",
						color: "#fff",
						fontSize: "1.5rem",
					},
				}}
			/>
		</Fragment>
	);
}

export default App;
