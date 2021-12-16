const Appointment = require("../models/Appointment");
const appointmentCtrl = {};

appointmentCtrl.getAppointments = async (req, res) => {
	try {
		const response = await Appointment.find();
		res.status(200).json(response);
	} catch {
		res.status(404).json({
			message: "Error getting appointments",
		});
	}
};

appointmentCtrl.getAppointment = async (req, res) => {
	try {
		const { id } = req.params;

		const appointment = await Appointment.findById(id);

		res.status(200).json(appointment);
	} catch {
		res.status(404).json({
			message: "Error getting appointment",
		});
	}
};

appointmentCtrl.newAppointment = async (req, res) => {
	try {
		const { name, age, date, time, symptoms } = req.body;

		const newAppointment = new Appointment({
			name,
			age,
			date,
			time,
			symptoms,
		});

		await newAppointment.save();

		res.status(201).json({
			message: "Appointment created",
			data: newAppointment,
		});
	} catch {
		res.status(400).json({
			message: "Error creating appointment",
		});
	}
};

appointmentCtrl.updateAppointment = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, age, date, time, symptoms } = req.body;

		const updatedAppointment = await Appointment.findByIdAndUpdate(
			id,
			{
				name,
				age,
				date,
				time,
				symptoms,
			},
			{
				new: true,
			}
		);

		res.status(200).json({
			message: "Appointment updated",
			data: updatedAppointment,
		});
	} catch {
		res.status(400).json({
			message: "Error updating appointment",
		});
	}
};

appointmentCtrl.deleteAppointment = async (req, res) => {
	try {
		const { id } = req.params;

		await Appointment.findByIdAndDelete(id);

		res.status(200).json({
			message: "Appointment deleted",
		});
	} catch {
		res.status(400).json({
			message: "Error deleting appointment",
		});
	}
};

module.exports = appointmentCtrl;
