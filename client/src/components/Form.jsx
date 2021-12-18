import React from "react";

const Form = () => {
	return (
		<form>
			<input
				className="form__input"
				placeholder="Name"
				name="name"
				type="text"
			></input>
			<input
				className="form__input"
				placeholder="Age"
				name="age"
				type="number"
			></input>
			<input className="form__input" type="date"></input>
			<input className="form__input" type="time"></input>
			<textarea className="form__textarea" placeholder="Symptoms"></textarea>
			<button className="form__btn">
				Save <i className="bi bi-bookmark-plus"></i>
			</button>
		</form>
	);
};
export default Form;
