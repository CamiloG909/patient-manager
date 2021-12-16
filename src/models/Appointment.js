const { Schema, model } = require("mongoose");

const Appointment = new Schema(
	{
		name: {
			type: String,
		},
		age: {
			type: Number,
			trim: true,
		},
		date: {
			type: String,
			trim: true,
		},
		time: {
			type: String,
			trim: true,
		},
		symptoms: {
			type: String,
			trim: true,
		},
	},
	{
		versionKey: false,
	}
);

module.exports = model("Appointment", Appointment);
