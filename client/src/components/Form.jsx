import React from "react";

const Form = ({ appointment, setAppointment, f }) => {
	const saveAppointment = (e) => {
		setAppointment({
			...appointment,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={f}>
			<input
				className="form__input"
				placeholder="Name"
				name="name"
				type="text"
				onChange={saveAppointment}
			></input>
			<input
				className="form__input"
				placeholder="Age"
				name="age"
				type="number"
				onChange={saveAppointment}
			></input>
			<input
				className="form__input"
				type="date"
				name="date"
				onChange={saveAppointment}
			></input>
			<input
				className="form__input"
				type="time"
				name="time"
				onChange={saveAppointment}
			></input>
			<textarea
				className="form__textarea"
				placeholder="Symptoms"
				name="symptoms"
				onChange={saveAppointment}
			></textarea>
			<button className="form__btn">
				Save <i className="bi bi-bookmark-plus"></i>
			</button>
		</form>
	);
};
export default Form;
