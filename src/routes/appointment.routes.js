const { Router } = require("express");
const router = Router();

const {
	getAppointments,
	getAppointment,
	newAppointment,
	updateAppointment,
	deleteAppointment,
} = require("../controllers/appointment.controller");

router.get("/api/appointments", getAppointments);

router.post("/api/appointment", newAppointment);

router
	.route("/api/appointment/:id")
	.get(getAppointment)
	.put(updateAppointment)
	.delete(deleteAppointment);

module.exports = router;
